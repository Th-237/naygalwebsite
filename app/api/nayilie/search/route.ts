import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

type IndexItem = { id: string; path: string; title: string; excerpt: string; text: string }

function tokenize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9àâäéèêëîïôöùûüç\s]/gi, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function score(queryTokens: string[], text: string) {
  const tokens = tokenize(text)
  const set = new Set(tokens)
  let cnt = 0
  for (const t of queryTokens) if (set.has(t)) cnt++
  return cnt
}

export async function POST(request: Request) {
  try {
    const { q } = await request.json()
    if (!q || typeof q !== 'string') return NextResponse.json({ error: 'Missing query' }, { status: 400 })

    const idxPath = path.join(process.cwd(), 'scripts', 'index.json')
    if (!fs.existsSync(idxPath)) return NextResponse.json({ error: 'Index not found. Run scripts/build_index.js' }, { status: 500 })

    const raw = fs.readFileSync(idxPath, 'utf8')
    const items: IndexItem[] = JSON.parse(raw)

    const qtokens = tokenize(q)
    const scored = items.map((it) => ({ it, s: score(qtokens, it.text) }))
    scored.sort((a, b) => b.s - a.s)
    const top = scored.slice(0, 3).filter((r) => r.s > 0)

    if (top.length === 0) {
      return NextResponse.json({ answer: null, candidates: [] })
    }

    const candidates = top.map(({ it, s }) => ({ path: it.path.replace(/^app\//, '/').replace(/\\\\/g, '/'), title: it.title, excerpt: it.excerpt, score: s }))

    // Compose a short answer using the top hit excerpt
    const best = candidates[0]
    const answer = `${best.excerpt.slice(0, 400)}...` // trimmed

    return NextResponse.json({ answer, candidates })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
