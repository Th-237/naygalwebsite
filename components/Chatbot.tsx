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
  text: 'Bonjour ! Je suis l’assistant NAYGAL. Je peux vous orienter vers nos expertises, formations et ressources.',
}

const quickQuestions = [
  'Contribuer au Mouvement',
  'Notre mission',
  'Découvrir NAYAC',
]

function getAnswer(question: string): Pick<Message, 'text' | 'actionHref' | 'actionLabel' | 'actionSummary'> {
  const normalizedQuestion = question.toLowerCase()

  if (/(merci|thanks|super|parfait)/.test(normalizedQuestion)) {
    return { text: 'Avec plaisir ! Je reste disponible si vous avez une autre question sur NAYGAL ou vos projets numériques.' }
  }
  if (/(bonjour|salut|bonsoir)/.test(normalizedQuestion)) {
    return { text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?' }
  }
  if (/(contribu|don|soutien|payer|paiement|offre|montant|financier)/.test(normalizedQuestion)) {
    return { text: 'Vous pouvez soutenir NAYGAL de plusieurs manières : contribution financière, don de matériel, partage d’expertise ou mise en réseau. Voulez-vous découvrir le Mouvement et les offres de soutien ?', actionHref: '/mouvement/soutenir-nos-initiatives', actionLabel: 'Oui, voir les contributions', actionSummary: 'Le Mouvement NAYGAL propose des contributions financières, matérielles et humaines pour soutenir les initiatives, les formations et les projets sur le terrain.' }
  }
  if (/(mission|notre mission|mouvement)/.test(normalizedQuestion)) {
    return { text: 'La mission de NAYGAL est de rendre le numérique utile, accessible et construit localement. Voulez-vous en savoir plus sur notre mission et nos domaines d’action ?', actionHref: '/mouvement/notre-mission', actionLabel: 'Oui, voir la mission', actionSummary: 'Découvrez comment NAYGAL agit sur l’éducation numérique, les infrastructures, l’innovation, la collaboration et la transformation numérique.' }
  }
  if (/(éducation|education|scolaire|école|ecole|étudiant|etudiant|élève|eleve|nayac|formation|apprendre)/.test(normalizedQuestion)) {
    return { text: 'Oui. Avec NAYGAL Academy et NAYAC, nous proposons des formations, ateliers et parcours pratiques pour les établissements, les élèves, les étudiants et les professionnels. Souhaitez-vous que je vous présente NAYGAL Academy ?', actionHref: '/academy', actionLabel: 'Oui, présenter NAYGAL Academy', actionSummary: 'NAYGAL Academy propose des parcours pratiques en réseaux, cybersécurité, intelligence artificielle et numérique, pour les écoles, les professionnels et les organisations.' }
  }
  if (/(cyber|sécur|secur|pirat|menace)/.test(normalizedQuestion)) {
    return { text: 'NAYGAL accompagne les organisations sur l’audit, la protection des accès, la sauvegarde et la sensibilisation des équipes. Souhaitez-vous découvrir nos solutions cybersécurité ?', actionHref: '/expertises/cybersecurite', actionLabel: 'Oui, voir la cybersécurité', actionSummary: 'Nos solutions cybersécurité couvrent l’audit, la protection des accès, les sauvegardes et la sensibilisation de vos équipes.' }
  }
  if (/(ia|intelligence artificielle|automati)/.test(normalizedQuestion)) {
    return { text: 'Nous vous aidons à identifier des cas d’usage IA utiles, sécurisés et adaptés à vos équipes, avant de les déployer progressivement. Voulez-vous explorer notre expertise IA ?', actionHref: '/expertises/intelligence-artificielle', actionLabel: 'Oui, explorer l’IA', actionSummary: 'L’expertise IA vous aide à sélectionner des cas d’usage pertinents, sécuriser les données et déployer un premier pilote utile.' }
  }
  if (/(cloud|réseau|reseau|infrastructure|serveur)/.test(normalizedQuestion)) {
    return { text: 'NAYGAL conçoit et fait évoluer les infrastructures, réseaux, serveurs et environnements cloud selon les besoins réels de votre organisation. Voulez-vous explorer ces expertises ?', actionHref: '/expertises/reseaux-infrastructures', actionLabel: 'Oui, voir les expertises', actionSummary: 'Cette expertise réunit réseaux, serveurs, stockage et environnements cloud, pour une infrastructure fiable et évolutive.' }
  }
  if (/(service|expertise|offre|proposez)/.test(normalizedQuestion)) {
    return { text: 'Nos expertises couvrent les infrastructures & réseaux, la cybersécurité, le cloud & les données, l’IA & l’automatisation et la transformation numérique. Souhaitez-vous voir l’ensemble de nos expertises ?', actionHref: '/expertises', actionLabel: 'Oui, voir les expertises', actionSummary: 'Découvrez les domaines techniques qui permettent à NAYGAL d’accompagner votre organisation de manière cohérente et progressive.' }
  }
  if (/(contact|expert|devis|projet|rendez-vous|rdv)/.test(normalizedQuestion)) {
    return { text: 'Notre équipe peut échanger avec vous pour comprendre votre besoin et identifier les prochaines étapes. Souhaitez-vous accéder à notre formulaire de contact ?', actionHref: '/contact', actionLabel: 'Oui, nous contacter', actionSummary: 'Le formulaire vous permet de présenter votre besoin ; notre équipe vous recontactera pour organiser les prochaines étapes.' }
  }

  return { text: 'Je peux vous renseigner sur nos services, la cybersécurité, le cloud, l’IA, NAYAC, le Mouvement NAYGAL et nos ressources. Souhaitez-vous parcourir notre bibliothèque de contenus utiles ?', actionHref: '/ressources', actionLabel: 'Oui, voir les ressources', actionSummary: 'La bibliothèque NAYGAL rassemble des guides, conseils, articles et outils pour mieux décider et faire avancer vos projets.' }
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

    const answer = getAnswer(question)
    setMessages((current) => [
      ...current,
      { id: Date.now(), sender: 'user', text: question },
      { id: Date.now() + 1, sender: 'bot', ...answer },
    ])
    setPendingAction(answer.actionHref && answer.actionLabel && answer.actionSummary ? { href: answer.actionHref, label: answer.actionLabel, summary: answer.actionSummary } : null)
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section id="naygal-chatbot" role="dialog" aria-modal="false" aria-labelledby="chatbot-title" className="mb-4 flex h-[min(560px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/25">
          <header className="flex items-center justify-between bg-[#021d47] px-5 py-4 text-white">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#52a234] font-bold text-[#021d47]">N</span><div><h2 id="chatbot-title" className="font-semibold">Assistant NAYGAL</h2><p className="text-xs text-[#b8dfa7]">En ligne pour vous orienter</p></div></div>
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
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="naygal-chatbot" className="group flex items-center gap-3 rounded-full bg-[#021d47] py-2 pl-2 pr-4 text-sm font-bold text-white shadow-xl shadow-[#021d47]/30 transition hover:-translate-y-0.5 hover:bg-[#032965] focus:outline-none focus:ring-2 focus:ring-[#52a234] focus:ring-offset-2 sm:pr-5">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#52a234] text-[#021d47]"><span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#021d47] bg-white" /><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20 11.5a7.5 7.5 0 0 1-8 7.48A8.3 8.3 0 0 1 8.3 18L4 20l1.25-3.55A7.47 7.47 0 1 1 20 11.5Z" /></svg></span><span>{isOpen ? 'Fermer' : 'Besoin d’aide ?'}</span>
      </button>
    </div>
  )
}
