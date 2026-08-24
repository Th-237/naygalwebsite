'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type Message = {
  id: number
  sender: 'bot' | 'user'
  text: string
  actionHref?: string
  actionLabel?: string
  actionSummary?: string
}

const welcomeMessage: Message = {
  id: 1,
  sender: 'bot',
  text: 'Bonjour ! Je suis NAYILIE, votre guide virtuel pour naviguer sur le site. Je peux vous orienter vers nos expertises, formations, ressources et contacts.',
}

const quickQuestions = [
  'Explorer les expertises',
  'Trouver une formation',
  'Contact / Devis',
]

function getAnswer(question: string): Pick<Message, 'text' | 'actionHref' | 'actionLabel' | 'actionSummary'> {
  const normalizedQuestion = question.toLowerCase()

  const routeMap: { keywords: RegExp; href: string; label: string; summary: string; text: string }[] = [
    { keywords: /(contribu|don|soutien|payer|paiement|offre|montant|financier)/, href: '/mouvement/soutenir-nos-initiatives', label: 'Voir les contributions', summary: 'Soutenir NAYGAL : contributions financières, matérielles et partage d’expertise.', text: 'Vous pouvez soutenir NAYGAL de plusieurs manières.' },
    { keywords: /(mission|notre mission|mouvement)/, href: '/mouvement/notre-mission', label: 'Notre mission', summary: 'Découvrez la mission et les domaines d’action de NAYGAL.', text: 'La mission de NAYGAL est de rendre le numérique utile, accessible et construit localement.' },
    { keywords: /(éducation|education|scolaire|école|ecole|étudiant|etudiant|élève|eleve|nayac|formation|apprendre|ateliers)/, href: '/academy/ateliers', label: 'Voir les formations', summary: 'Parcours et ateliers pratiques proposés par NAYGAL Academy.', text: 'Avec NAYGAL Academy, nous proposons des formations et ateliers pratiques pour établissements et professionnels.' },
    { keywords: /(cyber|sécur|secur|pirat|menace)/, href: '/expertises/cybersecurite', label: 'Cybersécurité', summary: 'Audit, protection des accès, sauvegarde et sensibilisation.', text: "Nous accompagnons sur l'audit, la protection et la sensibilisation en cybersécurité." },
    { keywords: /(ia|intelligence artificielle|automati)/, href: '/expertises/intelligence-artificielle', label: 'Intelligence artificielle', summary: 'Cas d’usage IA, sécurité des données et déploiement pilote.', text: 'Nous aidons à identifier des cas d’usage IA utiles et sécurisés.' },
    { keywords: /(cloud|réseau|reseau|infrastructure|serveur)/, href: '/expertises/reseaux-infrastructures', label: 'Réseaux & infra', summary: 'Conception et évolution d’infrastructures et environnements cloud.', text: 'NAYGAL conçoit et fait évoluer les infrastructures et réseaux.' },
    { keywords: /(service|expertise|offre|proposez|expertises)/, href: '/expertises', label: 'Toutes les expertises', summary: 'Découvrez l’ensemble des expertises proposées par NAYGAL.', text: 'Nos expertises couvrent infrastructures, cybersécurité, cloud, IA et transformation numérique.' },
    { keywords: /(contact|expert|devis|projet|rendez-vous|rdv)/, href: '/contact', label: 'Nous contacter', summary: 'Formulaire de contact pour présenter votre besoin et demander un devis.', text: "Notre équipe peut échanger avec vous pour comprendre votre besoin." },
    { keywords: /(ressource|article|guide|blog|actualit|news|publication)/, href: '/ressources', label: 'Ressources', summary: 'Guides, articles et outils pour vos projets numériques.', text: 'Je peux vous diriger vers notre bibliothèque de contenus utiles.' },
    { keywords: /(projet|projets)/, href: '/projets', label: 'Projets', summary: 'Découvrez les projets accompagnés par NAYGAL.', text: 'Voici nos projets récents et exemples d’accompagnement.' },
    { keywords: /(services|service)/, href: '/services', label: 'Services', summary: 'Présentation des services et offres techniques.', text: 'Voici les services proposés par NAYGAL.' },
  ]

  if (/(merci|thanks|super|parfait)/.test(normalizedQuestion)) {
    return { text: "Avec plaisir ! Je reste disponible si vous avez une autre question." }
  }
  if (/(bonjour|salut|bonsoir)/.test(normalizedQuestion)) {
    return { text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?' }
  }

  // Try to match a known route by keywords
  for (const route of routeMap) {
    if (route.keywords.test(normalizedQuestion)) {
      return { text: route.text, actionHref: route.href, actionLabel: route.label, actionSummary: route.summary }
    }
  }

  // Handle explicit "où est" style questions with a loose keyword match
  if (/où|ou se trouve|ou trouver|où trouver|trouve/.test(normalizedQuestion)) {
    for (const route of routeMap) {
      // try to find the target keyword inside the question
      const wordMatch = route.label.toLowerCase().split(' ')[0]
      if (normalizedQuestion.includes(wordMatch)) {
        return { text: `Je peux vous y conduire : ${route.label}`, actionHref: route.href, actionLabel: route.label, actionSummary: route.summary }
      }
    }
  }

  // default fallback
  return { text: 'Je peux vous renseigner sur nos expertises, formations, ressources ou contacts. Que cherchez-vous précisément ?', actionHref: '/ressources', actionLabel: 'Explorer les ressources', actionSummary: 'La bibliothèque NAYGAL rassemble des guides, conseils, articles et outils.' }
}

export default function Chatbot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const [pendingAction, setPendingAction] = useState<{ href: string; label: string; summary: string } | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const redirectToAction = (action: { href: string; label: string; summary: string }) => {
    setMessages((current) => [...current, { id: Date.now(), sender: 'bot', text: `${action.summary} Je vous y dirige maintenant…` }])
    setPendingAction(null)
    window.setTimeout(() => router.push(action.href), 650)
  }

  const sendMessage = (event?: FormEvent, suggestedQuestion?: string) => {
    event?.preventDefault()
    const question = (suggestedQuestion ?? input).trim()
    if (!question) return

    if (pendingAction && /^(oui|ouais|yes|d'accord|ok|okay|vas-y|allez)$/i.test(question)) {
      setMessages((current) => [...current, { id: Date.now(), sender: 'user', text: question }])
      setInput('')
      redirectToAction(pendingAction)
      return
    }

    if (pendingAction && /^(non|pas maintenant|plus tard)$/i.test(question)) {
      setMessages((current) => [...current, { id: Date.now(), sender: 'user', text: question }, { id: Date.now() + 1, sender: 'bot', text: 'Très bien. Je reste disponible si vous souhaitez explorer un autre sujet.' }])
      setPendingAction(null)
      setInput('')
      return
    }

    // First try server-side retrieval (RAG-like). If fails, fallback to local rule-based answers
    ;(async () => {
      setMessages((current) => [...current, { id: Date.now(), sender: 'user', text: question }])
      setInput('')
      try {
        const res = await fetch('/api/nayilie/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ q: question }),
        })
        const payload = await res.json()
        if (payload && payload.answer) {
          const candidate = payload.candidates && payload.candidates[0]
          setMessages((current) => [
            ...current,
            { id: Date.now() + 1, sender: 'bot', text: payload.answer, actionHref: candidate?.path, actionLabel: candidate ? `Voir ${candidate.title}` : undefined, actionSummary: candidate?.excerpt },
          ])
          setPendingAction(payload.candidates && payload.candidates[0] ? { href: payload.candidates[0].path, label: `Voir ${payload.candidates[0].title}`, summary: payload.candidates[0].excerpt } : null)
          return
        }
      } catch (e) {
        // ignore and fallback
        // console.error('Search API error', e)
      }

      // fallback to simple rule-based reply
      const answer = getAnswer(question)
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, sender: 'bot', ...answer },
      ])
      setPendingAction(answer.actionHref && answer.actionLabel && answer.actionSummary ? { href: answer.actionHref, label: answer.actionLabel, summary: answer.actionSummary } : null)
    })()
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section id="nayilie-chatbot" role="dialog" aria-modal="false" aria-labelledby="chatbot-title" className="mb-4 flex h-[min(560px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/25">
          <header className="flex items-center justify-between bg-[#021d47] px-5 py-4 text-white">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#52a234] font-bold text-[#021d47]">Ni</span><div><h2 id="chatbot-title" className="font-semibold">NAYILIE — Guide</h2><p className="text-xs text-[#b8dfa7]">En ligne pour vous orienter</p></div></div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#b8dfa7]" aria-label="Fermer l’assistant"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /></svg></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite" aria-label="Conversation avec l’assistant">
            {messages.map((message) => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender === 'user' ? 'rounded-br-md bg-[#021d47] text-white' : 'rounded-bl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200'}`}><p>{message.text}</p>{message.actionHref && message.actionLabel && message.actionSummary && <div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => redirectToAction({ href: message.actionHref!, label: message.actionLabel!, summary: message.actionSummary! })} className="rounded-lg bg-[#52a234] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#438a2c]">{message.actionLabel}</button><button type="button" onClick={() => setPendingAction(null)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50">Non merci</button></div>}</div></div>)}
          </div>
          <div className="border-t border-slate-100 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">{quickQuestions.map((question) => <button key={question} type="button" onClick={() => sendMessage(undefined, question)} className="shrink-0 rounded-full border border-[#52a234]/30 bg-[#edf7e7] px-3 py-1.5 text-xs font-semibold text-[#276f91] transition hover:bg-[#52a234] hover:text-white">{question}</button>)}</div>
            <form onSubmit={sendMessage} className="flex items-center gap-2"><label className="sr-only" htmlFor="chatbot-input">Votre message</label><input ref={inputRef} id="chatbot-input" value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20" placeholder="Écrivez votre message…" /><button type="submit" className="rounded-xl bg-[#52a234] p-3 text-white transition hover:bg-[#438a2c] focus:outline-none focus:ring-2 focus:ring-[#52a234] focus:ring-offset-2" aria-label="Envoyer le message"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4Z" /></svg></button></form>
          </div>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="nayilie-chatbot" className="group flex items-center gap-3 rounded-full bg-[#021d47] py-2 pl-2 pr-4 text-sm font-bold text-white shadow-xl shadow-[#021d47]/30 transition hover:-translate-y-0.5 hover:bg-[#032965] focus:outline-none focus:ring-2 focus:ring-[#52a234] focus:ring-offset-2 sm:pr-5">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#52a234] text-[#021d47]"><span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#021d47] bg-white" /><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20 11.5a7.5 7.5 0 0 1-8 7.48A8.3 8.3 0 0 1 8.3 18L4 20l1.25-3.55A7.47 7.47 0 1 1 20 11.5Z" /></svg></span><span>{isOpen ? 'Fermer' : 'Besoin d’aide ?'}</span>
      </button>
    </div>
  )
}
