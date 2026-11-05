import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'
import { passingScore, quizQuestionCount, createStudentQuiz } from '@/lib/passacad-student-quiz'
import type { StudyDomain, StoredQuizQuestion } from '@/lib/passacad-types'
import {
  createPassAcadSession,
  getOrCreatePassAcadMember,
  hashPassAcadValue,
  readPassAcadSession,
  withPassAcadStore,
} from '@/lib/passacad-store'

export const runtime = 'nodejs'

const sessionDurationMs = 2 * 60 * 60 * 1000
const quizDurationMs = 30 * 60 * 1000
const allowedDomains = new Set<StudyDomain>(['it', 'engineering', 'business', 'creative', 'other'])

type RequestBody = Record<string, unknown>

function isRecord(value: unknown): value is RequestBody {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function getString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function isStudyDomain(value: unknown): value is StudyDomain {
  return typeof value === 'string' && allowedDomains.has(value as StudyDomain)
}

function publicQuestions(questions: StoredQuizQuestion[]) {
  return questions.map(({ id, prompt, options }) => ({ id, prompt, options }))
}

function createSessionCookie(identityHash: string, expiresAt: number) {
  const session = createPassAcadSession(identityHash, expiresAt)
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `passacad_session=${session}; HttpOnly; SameSite=Lax; Path=/api/passacad; Max-Age=${Math.floor(sessionDurationMs / 1000)}${secure}`
}

async function handleQuizStart(request: Request, body: RequestBody) {
  const domain = body.domain
  if (!isStudyDomain(domain)) {
    return NextResponse.json({ error: 'Choisis un domaine d’études valide.' }, { status: 400 })
  }

  const now = Date.now()
  const identityHash = readPassAcadSession(request) ?? hashPassAcadValue(`session:${randomUUID()}`)
  const result = await withPassAcadStore((store) => {
    const member = getOrCreatePassAcadMember(store, identityHash, now)

    if (
      member.activeQuiz &&
      member.activeQuiz.expiresAt > now &&
      member.activeQuiz.domain === domain &&
      member.activeQuiz.questions.length === quizQuestionCount
    ) {
      return { quizId: member.activeQuiz.id, questions: publicQuestions(member.activeQuiz.questions) }
    }

    const questions = createStudentQuiz(domain)
    const quizId = randomUUID()
    member.activeQuiz = { id: quizId, domain, expiresAt: now + quizDurationMs, questions }
    return { quizId, questions: publicQuestions(questions) }
  })

  const response = NextResponse.json({ ok: true, ...result })
  response.headers.set('Set-Cookie', createSessionCookie(identityHash, now + sessionDurationMs))
  return response
}

async function handleQuizSubmission(body: RequestBody, identityHash: string) {
  const quizId = getString(body.quizId, 80)
  const answers = body.answers
  if (!quizId || !Array.isArray(answers) || answers.length !== quizQuestionCount || !answers.every(
    (answer) => Number.isInteger(answer) && answer >= 0 && answer <= 2,
  )) {
    return NextResponse.json({ error: 'Réponses de test invalides.' }, { status: 400 })
  }

  const now = Date.now()
  const result = await withPassAcadStore((store) => {
    const member = store.members[identityHash]
    if (!member) return { error: 'Relance le test pour ouvrir une nouvelle session.', status: 401 as const }
    const quiz = member.activeQuiz
    if (!quiz || quiz.id !== quizId || quiz.expiresAt <= now) {
      return { error: 'Ce test a expiré. Prépare une nouvelle tentative.', status: 409 as const }
    }

    const score = quiz.questions.reduce(
      (total, question, index) => total + Number(answers[index] === question.answer),
      0,
    )
    const passed = score >= passingScore
    member.lastScore = score
    member.lastAttemptAt = now
    member.attemptHistory.push({ at: now, score, passed })
    member.attemptHistory = member.attemptHistory.slice(-20)
    member.activeQuiz = null
    member.failedAttempts = passed ? 0 : member.failedAttempts + 1
    member.lockedUntil = null

    if (passed) {
      member.passed = true
    }

    return { ok: true, passed, score }
  })

  if ('error' in result) {
    return NextResponse.json(result, { status: result.status })
  }
  return NextResponse.json(result)
}

export async function GET(request: Request) {
  const identityHash = readPassAcadSession(request)
  if (!identityHash) return NextResponse.json({ error: 'Ta session PassAcad a expiré. Relance le test.' }, { status: 401 })

  try {
    const status = await withPassAcadStore((store) => {
      const member = store.members[identityHash]
      if (!member) return null
      return { passed: member.passed, score: member.lastScore }
    })
    if (!status) return NextResponse.json({ error: 'Aucun parcours PassAcad trouvé.' }, { status: 404 })
    return NextResponse.json({ ok: true, ...status })
  } catch (error) {
    console.error('PassAcad attempt status failed', error)
    return NextResponse.json({ error: 'Le service PassAcad est momentanément indisponible.' }, { status: 503 })
  }
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }
  if (!isRecord(body)) return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })

  const action = getString(body.action, 32)
  try {
    if (action === 'start') return await handleQuizStart(request, body)

    const identityHash = readPassAcadSession(request)
    if (!identityHash) return NextResponse.json({ error: 'Relance le test pour ouvrir une nouvelle session.' }, { status: 401 })

    if (action === 'submit') return await handleQuizSubmission(body, identityHash)
    return NextResponse.json({ error: 'Action PassAcad inconnue.' }, { status: 400 })
  } catch (error) {
    console.error('PassAcad request failed', error)
    return NextResponse.json({ error: 'Le service PassAcad est momentanément indisponible. Réessaie plus tard.' }, { status: 503 })
  }
}
