import { createHmac, timingSafeEqual } from 'node:crypto'
import { mkdir, open, readFile, rename, stat, unlink } from 'node:fs/promises'
import path from 'node:path'
import type { PassAcadMember } from './passacad-types'

type PassAcadStore = {
  version: 2
  members: Record<string, PassAcadMember>
}

const lockTimeoutMs = 20_000
const staleLockMs = 120_000

function getSecret() {
  const secret = process.env.PASSACAD_HASH_SECRET
  if (!secret || secret.length < 32) {
    throw new Error('PASSACAD_HASH_SECRET must contain at least 32 characters')
  }
  return secret
}

function getStorePath() {
  const configuredPath = process.env.PASSACAD_ATTEMPTS_FILE
  if (configuredPath && !path.isAbsolute(configuredPath)) {
    throw new Error('PASSACAD_ATTEMPTS_FILE must be an absolute path')
  }
  return configuredPath || path.join(process.cwd(), 'data', 'passacad-attempts.json')
}

export function hashPassAcadValue(value: string) {
  return createHmac('sha256', getSecret()).update(value).digest('hex')
}

export function safeStringEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer)
}

export function createPassAcadSession(identityHash: string, expiresAt: number) {
  const payload = `${identityHash}.${expiresAt}`
  const signature = hashPassAcadValue(`session:${payload}`)
  return `${payload}.${signature}`
}

export function readPassAcadSession(request: Request) {
  const cookie = request.headers.get('cookie')
    ?.split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith('passacad_session='))
    ?.slice('passacad_session='.length)
  if (!cookie) return null

  const [identityHash, expiryText, signature] = cookie.split('.')
  if (
    !identityHash ||
    !/^[a-f0-9]{64}$/.test(identityHash) ||
    !expiryText ||
    !signature ||
    !/^\d+$/.test(expiryText)
  ) {
    return null
  }

  const expiresAt = Number(expiryText)
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now()) return null

  const expectedSignature = hashPassAcadValue(`session:${identityHash}.${expiryText}`)
  return safeStringEqual(signature, expectedSignature) ? identityHash : null
}

export function createEmptyPassAcadMember(now = Date.now()): PassAcadMember {
  return {
    email: null,
    failedAttempts: 0,
    lockedUntil: null,
    passed: false,
    lastScore: null,
    lastAttemptAt: null,
    attemptHistory: [],
    activeQuiz: null,
    updatedAt: now,
  }
}

function createEmptyStore(): PassAcadStore {
  return { version: 2, members: {} }
}

async function readStore(storePath: string): Promise<PassAcadStore> {
  try {
    const raw = await readFile(storePath, 'utf8')
    const parsed: unknown = JSON.parse(raw)
    if (
      !parsed ||
      typeof parsed !== 'object' ||
      !('version' in parsed) ||
      (parsed.version !== 1 && parsed.version !== 2) ||
      !('members' in parsed) ||
      !parsed.members ||
      typeof parsed.members !== 'object' ||
      Array.isArray(parsed.members)
    ) {
      throw new Error('PassAcad attempts JSON has an invalid structure')
    }
    const members = parsed.members as Record<string, PassAcadMember>
    for (const member of Object.values(members)) {
      if (parsed.version === 1) {
        member.email = null
        delete (member as PassAcadMember & Record<string, unknown>).otpHash
        delete (member as PassAcadMember & Record<string, unknown>).otpExpiresAt
        delete (member as PassAcadMember & Record<string, unknown>).otpLastSentAt
        delete (member as PassAcadMember & Record<string, unknown>).otpWindowStartedAt
        delete (member as PassAcadMember & Record<string, unknown>).otpSendsInWindow
        delete (member as PassAcadMember & Record<string, unknown>).otpFailures
      } else if (typeof member.email !== 'string') {
        member.email = null
      }
    }
    return { version: 2, members }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return createEmptyStore()
    }
    throw error
  }
}

async function writeStore(storePath: string, store: PassAcadStore) {
  const temporaryPath = `${storePath}.${process.pid}.${Date.now()}.tmp`
  const handle = await open(temporaryPath, 'wx', 0o600)
  try {
    await handle.writeFile(`${JSON.stringify(store, null, 2)}\n`, 'utf8')
    await handle.sync()
  } finally {
    await handle.close()
  }
  await rename(temporaryPath, storePath)
}

async function acquireLock(lockPath: string) {
  const startedAt = Date.now()
  while (Date.now() - startedAt < lockTimeoutMs) {
    try {
      return await open(lockPath, 'wx', 0o600)
    } catch (error) {
      if (!(error instanceof Error) || !('code' in error) || error.code !== 'EEXIST') {
        throw error
      }

      try {
        const lockInfo = await stat(lockPath)
        if (Date.now() - lockInfo.mtimeMs > staleLockMs) {
          await unlink(lockPath)
          continue
        }
      } catch (statError) {
        if (statError instanceof Error && 'code' in statError && statError.code === 'ENOENT') {
          continue
        }
        throw statError
      }

      await new Promise((resolve) => setTimeout(resolve, 50))
    }
  }
  throw new Error('Timed out waiting for the PassAcad attempts file lock')
}

export async function withPassAcadStore<T>(
  operation: (store: PassAcadStore) => T | Promise<T>,
): Promise<T> {
  const storePath = getStorePath()
  await mkdir(path.dirname(storePath), { recursive: true })
  const lockPath = `${storePath}.lock`
  const lockHandle = await acquireLock(lockPath)

  try {
    const store = await readStore(storePath)
    const result = await operation(store)
    await writeStore(storePath, store)
    return result
  } finally {
    await lockHandle.close()
    await unlink(lockPath).catch((error: unknown) => {
      if (!(error instanceof Error) || !('code' in error) || error.code !== 'ENOENT') {
        throw error
      }
    })
  }
}

export function getOrCreatePassAcadMember(store: PassAcadStore, identityHash: string, now = Date.now()) {
  const cutoff = now - 90 * 24 * 60 * 60 * 1000
  for (const [memberHash, member] of Object.entries(store.members)) {
    if (member.updatedAt < cutoff) delete store.members[memberHash]
  }

  const member = store.members[identityHash] ?? createEmptyPassAcadMember(now)
  member.updatedAt = now
  store.members[identityHash] = member
  return member
}

export function resetExpiredLock(member: PassAcadMember, now = Date.now()) {
  if (member.lockedUntil !== null && member.lockedUntil <= now) {
    member.lockedUntil = null
    member.failedAttempts = 0
  }
}
