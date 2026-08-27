import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

type IndexItem = { id: string; path: string; title: string; excerpt: string; text: string }

function tokenize(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1)
}

const stopWords = new Set([
  'avec', 'dans', 'pour', 'une', 'des', 'les', 'sur', 'est', 'que', 'qui', 'mon', 'ma',
  'mes', 'notre', 'nos', 'vous', 'votre', 'aux', 'comment', 'quel', 'quelle', 'quels',
  'quelles', 'peut', 'faire', 'avoir', 'sont', 'the', 'and', 'from', 'about',
])

const synonyms: Record<string, string[]> = {
  cyber: ['cybersecurite', 'securite', 'piratage', 'menace', 'protection'],
  securite: ['cybersecurite', 'cyber', 'protection', 'sauvegarde'],
  ia: ['intelligence', 'artificielle', 'automatisation', 'assistant', 'agent'],
  intelligence: ['ia', 'artificielle', 'automatisation'],
  prix: ['devis', 'tarif', 'cout', 'budget', 'offre'],
  formation: ['academy', 'atelier', 'apprendre', 'competence', 'cours'],
  reseau: ['infrastructure', 'serveur', 'wifi', 'internet', 'connectivite'],
  cloud: ['hebergement', 'donnees', 'stockage', 'sauvegarde'],
  entreprise: ['organisation', 'pme', 'societe', 'equipe'],
}

function expandedTokens(query: string) {
  const tokens = tokenize(query).filter((token) => !stopWords.has(token))
  return [...new Set(tokens.flatMap((token) => [token, ...(synonyms[token] ?? [])]))]
}

function score(queryTokens: string[], item: IndexItem) {
  const titleTokens = new Set(tokenize(item.title))
  const pathTokens = new Set(tokenize(item.path))
  const tokens = tokenize(item.text)
  const set = new Set(tokens)
  let total = 0
  for (const token of queryTokens) {
    if (titleTokens.has(token)) total += 8
    else if (pathTokens.has(token)) total += 5
    else if (set.has(token)) total += 1
  }
  return total
}

function answerFor(query: string, best: { title: string; excerpt: string }) {
  const normalized = tokenize(query).join(' ')
  if (/bonjour|salut|bonsoir|hello/.test(normalized)) return 'Bonjour ! Je suis NAYILIE. Je peux vous aider à trouver un service, une formation, une ressource ou le bon contact chez NAYGAL.'
  if (/prix|devis|tarif|cout|budget|acheter/.test(normalized)) return 'Pour obtenir un devis adapté à votre besoin, présentez-nous votre projet et son contexte. Notre équipe vous répondra avec une première orientation.'
  if (/contact|joindre|telephone|email|rendez vous|rdv/.test(normalized)) return 'Vous pouvez contacter l’équipe NAYGAL depuis la page contact. Décrivez votre besoin pour être orienté vers le bon interlocuteur.'
  if (/qui est naygal|naygal/.test(normalized)) return 'NAYGAL accompagne les organisations au Cameroun avec des solutions d’infrastructure IT, de cybersécurité, de cloud, d’IA et de transformation numérique.'
  return `J’ai trouvé une information pertinente dans « ${best.title} ». ${best.excerpt.replace(/\s+/g, ' ').slice(0, 320)}${best.excerpt.length > 320 ? '…' : ''}`
}

function publicPath(filePath: string) {
  const route = filePath.replace(/\\/g, '/').replace(/^app\//, '').replace(/\/page\.tsx$/, '').replace(/\/route\.ts$/, '')
  return route === 'page.tsx' || route === 'page' || route === '' ? '/' : `/${route}`
}

export async function POST(request: Request) {
  try {
    const { q } = await request.json()
    if (!q || typeof q !== 'string') return NextResponse.json({ error: 'Missing query' }, { status: 400 })

    const idxPath = path.join(process.cwd(), 'scripts', 'index.json')
    if (!fs.existsSync(idxPath)) return NextResponse.json({ error: 'Index not found. Run scripts/build_index.js' }, { status: 500 })

    const raw = fs.readFileSync(idxPath, 'utf8')
    const items: IndexItem[] = JSON.parse(raw)

    const qtokens = expandedTokens(q)
    const scored = items
      .filter((it) => it.id.startsWith('app/') && it.id.endsWith('page.tsx'))
      .map((it) => ({ it, s: score(qtokens, it) }))
    scored.sort((a, b) => b.s - a.s)
    const top = scored.slice(0, 3).filter((r) => r.s >= 2)

    if (top.length === 0) {
      return NextResponse.json({ answer: null, candidates: [] })
    }

    const candidates = top.map(({ it, s }) => ({ path: publicPath(it.path), title: it.title, excerpt: it.excerpt, score: s }))

    const best = candidates[0]
    const answer = answerFor(q, best)

    return NextResponse.json({ answer, candidates })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
