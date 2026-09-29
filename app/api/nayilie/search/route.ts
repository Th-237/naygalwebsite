import { NextResponse } from 'next/server'

type Topic = {
  path: string
  title: string
  summary: string
  terms: string[]
}

const topics: Topic[] = [
  { path: '/expertises', title: 'Toutes les expertises', summary: 'Découvrez les expertises de NAYGAL en infrastructure, cybersécurité, cloud, intelligence artificielle et transformation numérique.', terms: ['expertises', 'toutes les expertises', 'nos services', 'tous les services'] },
  { path: '/expertises/cybersecurite', title: 'Cybersécurité', summary: 'NAYGAL accompagne les organisations dans la protection de leurs systèmes, accès et données.', terms: ['cybersecurite', 'cyber', 'securite', 'securiser', 'piratage', 'pirate', 'hacker', 'attaque', 'virus', 'ransomware', 'phishing', 'donnees', 'protection', 'risque', 'audit'] },
  { path: '/expertises/intelligence-artificielle', title: 'Intelligence artificielle et automatisation', summary: 'Découvrez les usages de l’IA, des assistants et de l’automatisation adaptés aux organisations.', terms: ['ia', 'intelligence artificielle', 'chatbot', 'assistant', 'nayilie', 'automatisation', 'automatiser', 'agent', 'generative', 'workflow', 'generer', 'prompt'] },
  { path: '/expertises/cloud', title: 'Cloud', summary: 'Explorez les solutions cloud, d’hébergement et de stockage adaptées à vos besoins.', terms: ['cloud', 'nuage', 'hebergement', 'serveur distant', 'stockage', 'sauvegarde', 'cloudstore', 'donnees en ligne'] },
  { path: '/expertises/reseaux-infrastructures', title: 'Réseaux et infrastructures', summary: 'NAYGAL conçoit et déploie des réseaux, systèmes et infrastructures adaptés aux organisations.', terms: ['reseau', 'wifi', 'internet', 'connexion', 'connectivite', 'infrastructure', 'serveur', 'nas', 'materiel', 'installation', 'cablage', 'systeme'] },
  { path: '/expertises/transformation-numerique', title: 'Transformation numérique', summary: 'Faites le point sur vos usages et définissez des étapes concrètes pour faire évoluer votre organisation.', terms: ['transformation', 'digitalisation', 'modernisation', 'strategie numerique', 'feuille de route', 'processus', 'organisation', 'digital'] },
  { path: '/academy', title: 'NAYGAL Academy', summary: 'Découvrez les programmes de formation de NAYGAL Academy pour les jeunes, les établissements et les professionnels.', terms: ['academy', 'naygal academy', 'academykids', 'academy kids', 'atelier', 'ateliers', 'eleve', 'etudiant', 'ecole', 'scolaire', 'enseignement', 'enseignant', 'pedagogie', 'jeune'] },
  { path: '/academy/formations', title: 'Formations professionnelles', summary: 'Consultez les formations en numérique, cybersécurité, réseaux, intelligence artificielle et gestion de projets.', terms: ['formation', 'formations', 'former', 'apprendre', 'apprentissage', 'cours', 'competence', 'competences', 'certification', 'certificat', 'professionnel', 'carriere', 'emploi', 'metier', 'formation adulte', 'cybersecurite', 'reseaux', 'intelligence artificielle', 'informatique', 'numerique'] },
  { path: '/academy/dans-votre-ecole', title: 'NAYGAL Academy dans votre école', summary: 'NAYGAL Academy propose des activités et un accompagnement numérique aux établissements scolaires.', terms: ['ecole', 'etablissement', 'college', 'lycee', 'primaire', 'eleve', 'enseignant', 'classe', 'academykids', 'academy kids', 'mine-sec', 'scolaire'] },
  { path: '/ressources', title: 'Ressources', summary: 'Parcourez les articles, guides, conseils et outils de la bibliothèque NAYGAL.', terms: ['ressource', 'ressources', 'article', 'articles', 'guide', 'guides', 'conseil', 'conseils', 'outil', 'blog', 'lire', 'publication'] },
  { path: '/actualites', title: 'Actualités NAYGAL', summary: 'Retrouvez les dernières actualités, annonces et initiatives de NAYGAL.', terms: ['actualite', 'actualites', 'nouvelle', 'nouvelles', 'news', 'annonce', 'annonces', 'evenement', 'evenements'] },
  { path: '/projets', title: 'Projets NAYGAL', summary: 'Découvrez des projets et initiatives accompagnés par NAYGAL.', terms: ['projet', 'projets', 'realisation', 'reference', 'exemple', 'portfolio'] },
  { path: '/a-propos/equipe', title: 'L’équipe NAYGAL', summary: 'Faites connaissance avec les personnes et les expertises qui composent NAYGAL.', terms: ['equipe', 'fondateur', 'cofondateur', 'co fondateur', 'theophile', 'adrian', 'richelle', 'qui dirige', 'responsable'] },
  { path: '/a-propos', title: 'À propos de NAYGAL', summary: 'Découvrez NAYGAL, son histoire, sa vision et ses engagements.', terms: ['naygal', 'entreprise', 'societe', 'histoire', 'vision', 'valeur', 'mission', 'qui sommes nous', 'cameroun'] },
  { path: '/mouvement/notre-mission', title: 'Notre mission', summary: 'Découvrez la mission de NAYGAL et son engagement pour un numérique utile et accessible.', terms: ['mission', 'impact', 'mouvement', 'communautaire', 'inclusion', 'engagement'] },
  { path: '/mouvement/devenir-partenaire', title: 'Devenir partenaire', summary: 'Découvrez comment construire un partenariat avec NAYGAL.', terms: ['partenaire', 'partenariat', 'collaborer', 'collaboration', 'sponsor', 'sponsoring'] },
  { path: '/contact', title: 'Contacter NAYGAL', summary: 'Présentez votre besoin à l’équipe NAYGAL pour être orienté vers le bon interlocuteur.', terms: ['contact', 'contacter', 'joindre', 'telephone', 'email', 'adresse', 'rendez vous', 'rdv', 'devis', 'prix', 'tarif', 'cout', 'budget', 'payer', 'acheter', 'souscrire', 'souscription', 'abonnement', 'abonner', 'commande', 'commander', 'offre'] },
]

const stopWords = new Set([
  'a', 'au', 'aux', 'avec', 'ce', 'cela', 'dans', 'de', 'des', 'du', 'en', 'et', 'est', 'la',
  'le', 'les', 'ma', 'mais', 'me', 'mon', 'ne', 'nos', 'notre', 'ou', 'par', 'pour', 'qui',
  'que', 'quoi', 'sa', 'se', 'son', 'sur', 'un', 'une', 'vers', 'vous', 'votre', 'je', 'nous',
  'veux', 'voudrais', 'voudrait', 'aimerais', 'cherche', 'recherche', 'besoin', 'besoins', 'faire',
  'fais', 'fait', 'obtenir', 'savoir', 'peux', 'peut', 'pouvez', 'comment', 'quel', 'quelle',
  'quels', 'quelles', 'svp', 'sil', 'plait', 'contre', 'chez', 'tu', 'toi', 'es', 'suis',
])

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function tokens(value: string) {
  return normalize(value).split(/\s+/).filter((token) => token.length > 1 && !stopWords.has(token))
}

function editDistanceAtMostOne(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 1 || a === b) return a === b
  let i = 0
  let j = 0
  let edits = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue }
    if (++edits > 1) return false
    if (a.length > b.length) i++
    else if (b.length > a.length) j++
    else { i++; j++ }
  }
  return edits + Number(i < a.length || j < b.length) <= 1
}

function scoreTopic(query: string, queryTokens: string[], topic: Topic) {
  const normalizedQuery = normalize(query)
  const normalizedTerms = topic.terms.map(normalize)
  let score = 0
  for (const term of normalizedTerms) {
    if (term.length > 3 && normalizedQuery.includes(term)) score += term.includes(' ') ? 6 : 4
  }

  const termTokens = new Set(normalizedTerms.flatMap((term) => tokens(term)))
  let matched = 0
  for (const token of queryTokens) {
    if (termTokens.has(token)) { matched++; score += 2; continue }
    const similar = [...termTokens].some((term) => term.length >= 5 && token.length >= 5 && editDistanceAtMostOne(token, term))
    if (similar) { matched++; score += 1 }
  }

  const coverage = queryTokens.length ? matched / queryTokens.length : 0
  return { score, coverage }
}

function buildAnswer(query: string, results: { topic: Topic; score: number }[]) {
  const normalized = normalize(query)
  if (/\b(qui es tu|qui etes vous|tu es qui|presente toi|qui etes tu|qui est nayilie|c est quoi nayilie|qu est ce que nayilie)\b/.test(normalized)) {
    return 'Je suis NAYILIE, l’assistant virtuel de NAYGAL. Je peux vous aider à trouver une expertise, une formation, une actualité ou la bonne personne à contacter.'
  }
  if (/\b(que peux tu faire|comment peux tu aider|aide moi|aidez moi)\b/.test(normalized)) {
    return 'Je peux vous orienter sur les services de NAYGAL, les formations de l’Academy, nos projets, nos actualités et les moyens de nous contacter. Vous pouvez poser plusieurs questions dans le même message.'
  }
  if (/^(bonjour|salut|bonsoir|hello|coucou)$/.test(normalized)) {
    return 'Bonjour ! Je suis NAYILIE. Vous pouvez me poser une question sur un service, une formation, un projet ou une ressource NAYGAL.'
  }
  if (/\b(merci|thanks|super|parfait)\b/.test(normalized)) return 'Avec plaisir ! Vous pouvez aussi me demander plusieurs choses dans le même message.'
  if (/\b(souscrire|souscription|abonnement|abonner|commander)\b/.test(normalized)) {
    return 'Pour souscrire à une offre, contactez l’équipe NAYGAL afin de préciser votre besoin et les modalités adaptées. Vous pouvez consulter les informations sur le service et nous écrire depuis la page Contact.'
  }
  if (/\b(prix|devis|tarif|cout|budget|acheter|payer)\b/.test(normalized)) {
    return 'Pour un tarif ou un devis, indiquez-nous les services concernés et votre contexte. Voici les pages qui correspondent à votre demande.'
  }
  if (/\b(contact|contacter|joindre|telephone|email|rendez vous|rdv)\b/.test(normalized)) {
    return results.length > 1
      ? 'J’ai repéré plusieurs sujets dans votre message. Vous pouvez consulter les pages correspondantes ou contacter directement notre équipe.'
      : 'Vous pouvez contacter l’équipe NAYGAL depuis la page Contact. Décrivez votre besoin pour être orienté vers le bon interlocuteur.'
  }
  if (results.length > 1) return `Votre question touche plusieurs sujets. Voici les pages NAYGAL les plus pertinentes : ${results.map(({ topic }) => topic.title).join(', ')}.`
  if (results.length === 1) return `Voici la page la plus pertinente pour votre demande : ${results[0].topic.summary}`
  return 'Je n’ai pas trouvé de correspondance précise. Essayez avec d’autres mots, par exemple « formation en cybersécurité », « installer un réseau » ou « devis cloud ». '
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const q = typeof body?.q === 'string' ? body.q.trim() : ''
    if (!q) return NextResponse.json({ error: 'Missing query' }, { status: 400 })
    if (q.length > 500) return NextResponse.json({ error: 'Query is too long' }, { status: 400 })

    const queryTokens = [...new Set(tokens(q))]
    const scored = topics
      .map((topic) => ({ topic, ...scoreTopic(q, queryTokens, topic) }))
      .filter(({ score, coverage }) => score >= 4 && coverage >= 0.25)
      .sort((a, b) => b.score - a.score)

    const selected = scored.slice(0, 3)
    const results = selected.map(({ topic, score }) => ({
      path: topic.path,
      title: topic.title,
      excerpt: topic.summary,
      score,
    }))

    return NextResponse.json({ answer: buildAnswer(q, selected), candidates: results })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
