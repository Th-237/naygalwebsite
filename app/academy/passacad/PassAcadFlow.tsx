'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Image from 'next/image'
import type { QuizQuestion, StudyDomain } from '@/lib/passacad-types'

const whatsappNumber = '237655002493'
const membershipFee = '5 000 FCFA'
const passingScore = 3

type Profile = 'student' | 'professional' | 'curious'
type Stage = 'profile' | 'quiz' | 'result' | 'payment'
type PaymentMethod = 'Orange Money' | 'MTN MoMo'
type Question = {
  id?: string
  prompt: string
  options: string[]
}
type PassAcadApiResponse = {
  error?: string
  quizId?: string
  questions?: QuizQuestion[]
  attemptsRemaining?: number
  retryAfter?: number
  passed?: boolean
  score?: number | null
}

const profiles: { id: Profile; title: string; description: string }[] = [
  {
    id: 'student',
    title: 'Étudiant·e',
    description: 'Un test d’intégration adapté à ton domaine d’études.',
  },
  {
    id: 'professional',
    title: 'Professionnel·le',
    description: 'Quelques questions pour comprendre tes intérêts et tes objectifs.',
  },
  {
    id: 'curious',
    title: 'Passionné·e / curieux·se',
    description: 'Partage ce qui t’attire dans le numérique et ce que tu veux explorer.',
  },
]

const studyDomains: { id: StudyDomain; label: string }[] = [
  { id: 'it', label: 'Informatique & télécommunications' },
  { id: 'engineering', label: 'Sciences & ingénierie' },
  { id: 'business', label: 'Gestion, commerce & entrepreneuriat' },
  { id: 'creative', label: 'Communication, design & arts' },
  { id: 'other', label: 'Autre domaine' },
]

const interestQuestions: Question[] = [
  {
    prompt: 'Qu’est-ce qui te donne envie de rejoindre NAYGAL Community ?',
    options: ['Apprendre de nouvelles compétences numériques.', 'Rencontrer des personnes et échanger.', 'Faire avancer un projet ou une idée.'],
  },
  {
    prompt: 'Quels sujets aimerais-tu explorer avec la communauté ?',
    options: ['IA, outils numériques et productivité.', 'Cybersécurité, réseaux et infrastructure.', 'Développement, création et entrepreneuriat.'],
  },
  {
    prompt: 'Comment aimerais-tu prendre part à la communauté ?',
    options: ['Poser des questions et apprendre avec les autres.', 'Partager mes expériences et mes ressources.', 'Participer à des activités et construire des projets.'],
  },
]

function createWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function PassAcadFlow() {
  const [stage, setStage] = useState<Stage>('profile')
  const [countdownSeconds, setCountdownSeconds] = useState<number | null>(null)
  const [promoActive, setPromoActive] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [studyDomain, setStudyDomain] = useState<StudyDomain>('it')
  const [institution, setInstitution] = useState('')
  const [email, setEmail] = useState('')
  const [flowMessage, setFlowMessage] = useState('')
  const [emailInSession, setEmailInSession] = useState(false)
  const [quizId, setQuizId] = useState('')
  const [attemptsRemaining, setAttemptsRemaining] = useState(3)
  const [retrySeconds, setRetrySeconds] = useState(0)
  const [quizLoading, setQuizLoading] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<number[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Orange Money')
  const [transactionReference, setTransactionReference] = useState('')
  const [proofFile, setProofFile] = useState<File | null>(null)
  const [shareMessage, setShareMessage] = useState('')
  const [fallbackUrl, setFallbackUrl] = useState('')

  const isStudent = profile === 'student'
  const currentQuestions = isStudent ? quizQuestions : interestQuestions
  const currentQuestion = currentQuestions[questionIndex]
  const selectedAnswer = answers[questionIndex]
  const passed = !isStudent || (score !== null && score >= passingScore)
  const countdownParts = countdownSeconds === null
    ? null
    : {
        days: Math.floor(countdownSeconds / 86_400),
        hours: Math.floor((countdownSeconds % 86_400) / 3_600),
        minutes: Math.floor((countdownSeconds % 3_600) / 60),
        seconds: countdownSeconds % 60,
      }

  useEffect(() => {
    const membershipDeadline = new Date('2026-11-17T00:00:00+01:00').getTime()
    const promoEndsAt = new Date('2026-11-17T00:00:00+01:00').getTime()

    function updateCountdown() {
      const now = Date.now()
      if (now >= promoEndsAt) {
        setPromoActive(false)
        return
      }

      setPromoActive(true)
      setCountdownSeconds(Math.max(0, Math.floor((membershipDeadline - now) / 1000)))
    }

    updateCountdown()
    const intervalId = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  const retryCountdownActive = retrySeconds > 0
  useEffect(() => {
    if (!retryCountdownActive) return
    const intervalId = window.setInterval(() => {
      setRetrySeconds((seconds) => Math.max(0, seconds - 1))
    }, 1000)
    return () => window.clearInterval(intervalId)
  }, [retryCountdownActive])

  function updateRetryLock(retryAfter: number | undefined) {
    setRetrySeconds(typeof retryAfter === 'number' ? Math.max(0, Math.ceil(retryAfter)) : 0)
  }

  async function startQuiz() {
    setQuizLoading(true)
    setFlowMessage('')
    try {
      if (isStudent) {
        const response = await fetch('/api/passacad', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'start', domain: studyDomain, email }),
        })
        const data: PassAcadApiResponse = await response.json()
        if (response.ok || response.status === 409 || response.status === 429) setEmailInSession(true)
        if (!response.ok) {
          updateRetryLock(data.retryAfter)
          if (data.passed && typeof data.score === 'number') {
            setScore(data.score)
            setStage('result')
            return
          }
          setFlowMessage(data.error ?? 'Le test n’a pas pu démarrer. Réessaie.')
          return
        }
        if (!data.quizId || !data.questions) {
          setFlowMessage('Le test reçu est incomplet. Réessaie.')
          return
        }
        setQuizId(data.quizId)
        setAttemptsRemaining(data.attemptsRemaining ?? 3)
        updateRetryLock(data.retryAfter)
        setQuizQuestions(data.questions)
        setEmailInSession(true)
      } else {
        setQuizQuestions([])
      }

    setAnswers([])
    setQuestionIndex(0)
    setScore(null)
    setStage('quiz')
    } catch {
      setFlowMessage('Connexion impossible au service PassAcad. Vérifie ta connexion puis réessaie.')
    } finally {
      setQuizLoading(false)
    }
  }

  function chooseProfile(nextProfile: Profile) {
    setProfile(nextProfile)
    setQuizQuestions([])
    setQuizId('')
    setAnswers([])
    setQuestionIndex(0)
    setScore(null)
    updateRetryLock(undefined)
    setEmailInSession(false)
    setFlowMessage('')
    if (nextProfile !== 'student') {
      setEmailInSession(false)
    }
  }

  async function submitAnswer() {
    if (selectedAnswer === undefined) return

    if (questionIndex < currentQuestions.length - 1) {
      setQuestionIndex((current) => current + 1)
      return
    }

    const finalAnswers = [...answers]
    finalAnswers[questionIndex] = selectedAnswer
    setAnswers(finalAnswers)
    if (isStudent) {
      setQuizLoading(true)
      try {
        const response = await fetch('/api/passacad', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'submit', quizId, answers: finalAnswers }),
        })
        const data: PassAcadApiResponse = await response.json()
        if (!response.ok) {
          updateRetryLock(data.retryAfter)
          setFlowMessage(data.error ?? 'Ton résultat n’a pas pu être enregistré.')
          return
        }
        if (typeof data.score !== 'number') {
          setFlowMessage('Le résultat reçu est incomplet. Contacte l’équipe NAYGAL avant de recommencer.')
          return
        }
        setScore(data.score)
        setAttemptsRemaining(data.attemptsRemaining ?? 3)
        updateRetryLock(data.retryAfter)
      } catch {
        setFlowMessage('Connexion impossible. Tes réponses n’ont pas été validées, réessaie.')
        return
      } finally {
        setQuizLoading(false)
      }
    } else {
      setScore(null)
    }
    setStage('result')
  }

  function sendPaymentProof(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const responseSummary = (isStudent ? [] : currentQuestions).map(
      (question, index) => `${index + 1}. ${question.prompt} ${question.options[answers[index]] ?? 'Sans réponse'}`,
    )
    const message = [
      'Bonjour NAYGAL, je souhaite faire vérifier mon paiement PassAcad.',
      '',
      `Nom complet : ${name.trim()}`,
      `Téléphone utilisé pour le paiement : ${phone.trim()}`,
      `Profil : ${profiles.find((item) => item.id === profile)?.title ?? 'Non renseigné'}`,
      ...(isStudent ? [`E-mail étudiant déclaré : ${email.trim().toLowerCase()}`] : []),
      ...(isStudent
        ? [`Établissement : ${institution.trim()}`, `Domaine d’études : ${studyDomains.find((item) => item.id === studyDomain)?.label}`]
        : []),
      `Moyen de paiement : ${paymentMethod}`,
      `Montant : ${membershipFee}`,
      `Référence de transaction : ${transactionReference.trim() || 'Voir la capture jointe'}`,
      ...(isStudent
        ? [`Test PassAcad : réussi (${score}/${currentQuestions.length})`]
        : ['Questionnaire d’intérêt PassAcad : complété']),
      '',
      'Réponses au parcours :',
      ...responseSummary,
      '',
      'Merci de vérifier le paiement et de m’indiquer les prochaines étapes pour recevoir mon PassAcad et rejoindre la communauté WhatsApp.',
    ].join('\n')
    const url = createWhatsAppUrl(message)

    if (proofFile && typeof navigator.share === 'function' && navigator.canShare?.({ files: [proofFile] })) {
      setFallbackUrl(url)
      setShareMessage('')
      navigator
        .share({
          files: [proofFile],
          title: 'Justificatif de paiement PassAcad',
          text: message,
        })
        .then(() => {
          setShareMessage(
            'Le partage a été déclenché. Vérifie que tu as choisi WhatsApp et confirmé l’envoi. Le PassAcad sera transmis après vérification par l’équipe.',
          )
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === 'AbortError') {
            setShareMessage('Partage annulé. Tu peux réessayer ou ouvrir WhatsApp avec le lien ci-dessous.')
            return
          }

          setShareMessage(
            'Le partage de la capture n’a pas pu démarrer. Ouvre WhatsApp avec le lien ci-dessous et joins-y ta capture.',
          )
        })
      return
    }

    setFallbackUrl(url)
    setShareMessage(
      proofFile
        ? 'Ton navigateur ne peut pas joindre automatiquement la capture. Ouvre WhatsApp avec le lien ci-dessous, puis joins le fichier sélectionné.'
        : 'Ouvre WhatsApp avec le lien ci-dessous pour envoyer les informations du paiement.',
    )
  }

  const selectedProfile = profiles.find((item) => item.id === profile)
  const currentJourneyStep = stage === 'profile' ? 0 : stage === 'quiz' || stage === 'result' ? 1 : 2
  const journey = [
    { number: '01', title: 'Ta porte d’entrée', detail: 'Choisis ton profil', icon: '↗' },
    { number: '02', title: 'Ton parcours', detail: 'Quelques questions', icon: '⌁' },
    { number: '03', title: 'Ton PassAcad', detail: '5 000 FCFA · vérification', icon: '✳' },
    { number: '04', title: 'Ton espace', detail: 'Invitation privée', icon: '◎' },
  ]

  return (
    <main className="overflow-hidden bg-white pt-[72px] text-[#032965]">
      {promoActive && (
        <section aria-label="Offre PassAcad Golf Bastos" className="border-b border-[#e1ddcf] bg-[#f5f2e9]">
          <div className="container-custom flex flex-col gap-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8d4c8] bg-white sm:h-12 sm:w-12">
                <Image
                  src="/images/partners/golf_bastos.webp"
                  alt=""
                  width={64}
                  height={64}
                  sizes="48px"
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-5 text-[#082b5b] sm:text-base">
                  Tente de gagner un pass VIP pour le Golf Bastos.
                </p>
                <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm">
                  Adhésion réglée et vérifiée avant le 17 novembre pour participer.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:justify-end sm:gap-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#4c7b42] sm:text-xs">
                  {countdownParts && countdownSeconds === 0 ? 'Clôture aujourd’hui' : 'Clôture dans'}
                </p>
                {countdownParts && countdownSeconds !== null && countdownSeconds > 0 && (
                  <div
                    className="flex items-center gap-1 font-mono text-xs font-bold tabular-nums text-[#082b5b] sm:gap-1.5 sm:text-sm"
                    role="timer"
                    aria-label={`${countdownParts.days} jours, ${countdownParts.hours} heures, ${countdownParts.minutes} minutes et ${countdownParts.seconds} secondes avant la clôture des adhésions le 17 novembre`}
                    aria-live="off"
                  >
                    {[
                      [countdownParts.days, 'j'],
                      [countdownParts.hours, 'h'],
                      [countdownParts.minutes, 'min'],
                      [countdownParts.seconds, 's'],
                    ].map(([value, unit]) => (
                      <span key={unit} className="inline-flex items-center gap-1 rounded-sm border border-[#d8d4c8] bg-white px-1.5 py-1 sm:px-2">
                        {String(value).padStart(2, '0')}<span className="text-[9px] font-medium text-slate-500">{unit}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => document.getElementById('passacad-flow')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex min-h-9 items-center justify-center gap-2 bg-[#4c7b42] px-4 text-xs font-bold text-white transition hover:bg-[#315c2c] sm:min-h-10"
              >
                Rejoindre <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>
      )}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#041d45] text-white lg:min-h-[730px]">
        <Image
          src="/images/academy/Grand%20caroussel/img2.jpg"
          alt="Deux jeunes apprenantes échangent autour d’un projet numérique"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="absolute inset-0 -z-20 object-cover object-[center_38%] lg:object-[center_42%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031b42] via-[#031b42]/90 to-[#031b42]/35 lg:via-[#031b42]/75 lg:to-[#031b42]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031b42]/80 via-transparent to-[#031b42]/15" />
        <div className="absolute inset-0 -z-10 opacity-[.14] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div className="container-custom relative flex min-h-[680px] flex-col justify-center py-12 sm:py-20 lg:min-h-[730px]">
          <div className="max-w-3xl lg:pb-16">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#c7e9ae]">
              <span className="h-px w-8 bg-[#8ed15b]" />
              NAYGAL Academy <span className="text-white/40">/</span> PassAcad
            </p>
            <p className="mt-9 text-sm font-medium tracking-[.08em] text-blue-100/80">
              Un réseau grandit quand chacun y apporte quelque chose.
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.5rem]">
              Une place
              <span className="block font-normal italic text-[#a8d779]">se construit.</span>
              <span className="mt-2 block text-3xl font-medium tracking-[-.03em] text-white/90 sm:text-5xl">
                La tienne commence ici.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
              Étudiant·e, professionnel·le, curieux·se : trouve ta place dans
              NAYGAL Community. Ton itinéraire s’adapte à ce que tu étudies, fais
              ou rêves d’apprendre.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => document.getElementById('passacad-flow')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#a8d779] px-7 font-bold text-[#092345] transition hover:bg-[#c1e49f]"
              >
                Construire mon parcours <span aria-hidden="true">↗</span>
              </button>
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">{membershipFee}</span> d’adhésion
                <span className="mx-2 text-white/40">·</span>
                Paiement après le parcours
              </p>
            </div>
          </div>

          <div className="relative z-10 ml-auto mt-8 w-[min(19rem,calc(100%-2rem))] rotate-[-2deg] sm:mr-8 lg:absolute lg:bottom-14 lg:right-[7%] lg:mr-0 lg:mt-0">
            <div className="relative overflow-hidden border border-white/50 bg-[#f7f4e9] p-5 text-[#082b5b] shadow-[0_28px_70px_-20px_rgba(0,0,0,.65)] sm:p-6">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#0b356b]/10" />
              <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full border border-[#0b356b]/10" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#4c7b42]">NAYGAL Community</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight">PassAcad</p>
                </div>
                <span className="grid h-10 w-10 place-items-center border border-[#0b356b]/20 text-lg" aria-hidden="true">✳</span>
              </div>
              <div className="relative mt-6 flex items-end justify-between border-t border-[#0b356b]/15 pt-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[.18em] text-slate-500">Édition communauté</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[.12em]">Cameroun · 2026</p>
                </div>
                <span className="font-mono text-[10px] tracking-[.18em] text-[#4c7b42]">N° À VENIR</span>
              </div>
              <div className="mt-4 flex gap-1" aria-hidden="true">
                {Array.from({ length: 28 }, (_, index) => (
                  <span key={index} className={`h-5 flex-1 ${index % 4 === 0 || index % 7 === 0 ? 'bg-[#0b356b]' : 'bg-[#0b356b]/25'}`} />
                ))}
              </div>
              <p className="mt-2 text-right text-[8px] uppercase tracking-[.2em] text-slate-500">Une place se construit</p>
            </div>
          </div>
          <p className="absolute bottom-8 left-4 hidden text-[10px] font-medium uppercase tracking-[.2em] text-white/55 sm:left-8 lg:block">
            04 étapes <span className="mx-2 text-[#a8d779]">/</span> une communauté à construire
          </p>
        </div>
      </section>

      <section aria-labelledby="membership-benefits" className="bg-white py-14 sm:py-20">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4c7b42]">Ce que ton PassAcad débloque</p>
              <h2 id="membership-benefits" className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Une adhésion qui ouvre des portes concrètes.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-slate-600">
              Les frais d’adhésion de <strong className="text-[#082b5b]">{membershipFee}</strong> donnent accès
              aux avantages de NAYGAL Community : des rencontres, des ateliers pratiques et une veille sur
              les opportunités professionnelles de nos entreprises partenaires.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden border border-[#e4e0d5] bg-[#e4e0d5] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Une communauté engagée',
                description: 'Un espace WhatsApp orienté vers le numérique utile, l’entraide et le partage de ressources.',
                mark: '↗',
              },
              {
                number: '02',
                title: 'Des rencontres privilégiées',
                description: 'Accès privilégié aux événements NAYGAL et aux rencontres avec des professionnels.',
                mark: '◎',
              },
              {
                number: '03',
                title: 'Des ateliers pratiques',
                description: 'Exonération des frais d’inscription aux ateliers pratiques NAYGAL, selon le calendrier proposé.',
                mark: '⌁',
              },
              {
                number: '04',
                title: 'Des opportunités à suivre',
                description: 'Visibilité sur les propositions des entreprises partenaires, dont des stages et de l’alternance.',
                mark: '✳',
              },
            ].map((benefit) => (
              <article key={benefit.number} className="bg-[#f8f6ef] p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[.16em] text-[#4c7b42]">{benefit.number} / PASSACAD</span>
                  <span className="grid h-9 w-9 place-items-center border border-[#c9c8bd] text-[#315c2c]" aria-hidden="true">{benefit.mark}</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold text-[#082b5b]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2 border-l-2 border-[#a8d779] pl-4 text-xs leading-5 text-slate-500 sm:flex-row sm:gap-1">
            <p>La participation à un événement tech par mois est incluse dans l’adhésion.</p>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <p>Les stages et opportunités dépendent des offres des entreprises partenaires et ne constituent pas une garantie de recrutement.</p>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#e6e2d7] bg-[#f5f2e9] py-14 sm:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4c7b42]">Le plan de route</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Quatre étapes. Une porte qui s’ouvre.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Prends le temps de faire connaissance. Le paiement vient seulement
              après ton parcours.
            </p>
          </div>
          <div className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-[#bdc8b3] lg:block" aria-hidden="true" />
            {journey.map((step, index) => (
              <article key={step.number} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center border text-sm ${
                    index < currentJourneyStep
                      ? 'border-[#4c7b42] bg-[#4c7b42] text-white'
                      : index === currentJourneyStep
                        ? 'border-[#4c7b42] bg-[#f5f2e9] text-[#315c2c] ring-4 ring-[#4c7b42]/10'
                        : 'border-[#c9c8bd] bg-[#f5f2e9] text-slate-500'
                  }`}>
                    {step.icon}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[.17em] text-[#4c7b42] lg:mt-5">
                    Étape {step.number}
                  </p>
                </div>
                <div className="ml-14 mt-[-2px] lg:ml-0 lg:mt-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="passacad-flow" className="scroll-mt-24 bg-[#fbfaf6] py-16 sm:py-24">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#4c7b42]">Ton itinéraire commence</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Chaque parcours est différent.
              <span className="block font-normal italic text-[#4c7b42]">Le premier pas est le tien.</span>
            </h2>
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)] lg:gap-10">
            <div className="min-w-0">
            <div className="mb-8 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[.1em] text-slate-400 sm:gap-3 sm:text-xs">
              <span className={stage === 'profile' ? 'text-[#438a2c]' : ''}>1. Profil</span>
              <span aria-hidden="true" className="h-px flex-1 bg-slate-200" />
              <span className={stage === 'quiz' || stage === 'result' ? 'text-[#438a2c]' : ''}>2. Questions</span>
              <span aria-hidden="true" className="h-px flex-1 bg-slate-200" />
              <span className={stage === 'payment' ? 'text-[#438a2c]' : ''}>3. Adhésion</span>
            </div>

            <div className="border border-[#e4e0d5] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(3,41,101,.35)] sm:p-10">
              {stage === 'profile' && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">Étape 1 · Ton profil</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">Par quelle porte entres-tu ?</h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    Choisis le profil qui te correspond. Les étudiants passent un test construit
                    autour de leur domaine d’études ; les autres répondent à quelques questions
                    pour nous parler de leurs intérêts.
                  </p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {profiles.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => chooseProfile(item.id)}
                        aria-pressed={profile === item.id}
                        className={`rounded-xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-[#52a234] hover:shadow-md ${
                          profile === item.id ? 'border-[#52a234] bg-[#f3f8f0] ring-1 ring-[#52a234]' : 'border-slate-200 bg-white'
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">Profil 0{index + 1}</span>
                        <span className="mt-3 block font-bold text-[#032965]">{item.title}</span>
                        <span className="mt-2 block text-sm leading-5 text-slate-600">{item.description}</span>
                      </button>
                    ))}
                  </div>
                  {isStudent && (
                    <div className="mt-7 grid gap-5 rounded-xl bg-[#f7f9fc] p-5 sm:grid-cols-2 sm:p-6">
                      <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
                        Adresse e-mail étudiante
                        <input
                          required
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value)
                            setEmailInSession(false)
                            setAttemptsRemaining(3)
                            updateRetryLock(undefined)
                            setFlowMessage('')
                          }}
                          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                          placeholder="nom@exemple.com"
                        />
                        <span className="mt-1 block text-xs font-normal text-slate-500">
                          Elle sera conservée en clair dans le fichier JSON PassAcad du serveur, puis supprimée après 90 jours sans activité.
                          Aucun code ne sera envoyé : l’adresse n’est pas vérifiée et peut être remplacée par une autre.
                        </span>
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Établissement
                        <input
                          required
                          value={institution}
                          onChange={(event) => setInstitution(event.target.value)}
                          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                          placeholder="Ex. ISTAG"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Domaine d’études
                        <select
                          value={studyDomain}
                          onChange={(event) => {
                            const selectedDomain = studyDomains.find((domain) => domain.id === event.target.value)
                            setStudyDomain(selectedDomain?.id ?? 'other')
                            setQuizQuestions([])
                            setAnswers([])
                            setQuestionIndex(0)
                          }}
                          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                        >
                          {studyDomains.map((domain) => <option key={domain.id} value={domain.id}>{domain.label}</option>)}
                        </select>
                      </label>
                      <p className="text-sm leading-6 text-slate-600 sm:col-span-2">
                        Ton établissement nous aide à t’orienter vers l’espace correspondant,
                        par exemple l’Académie des bâtisseurs à l’ISTAG.
                      </p>
                      {emailInSession && (
                        <div className="sm:col-span-2">
                          <p className="text-sm font-semibold text-[#438a2c]" role="status">Adresse enregistrée pour cette session PassAcad.</p>
                        </div>
                      )}
                      {flowMessage && (
                        <p className="text-sm leading-6 text-slate-600 sm:col-span-2" role="status">
                          {flowMessage}
                        </p>
                      )}
                    </div>
                  )}
                  {profile && (
                    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-slate-500">
                        {isStudent
                          ? `5 questions aléatoires parmi 8 · seuil indicatif : 3/5 · essais restants : ${attemptsRemaining}`
                          : '3 questions · aucun score éliminatoire'}
                      </p>
                      {isStudent ? (
                        email.trim() && (retrySeconds === 0) && (
                          <button
                            type="button"
                            onClick={startQuiz}
                            disabled={!institution.trim() || quizLoading}
                            className="rounded-md bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50] disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            {quizLoading ? 'Préparation…' : 'Commencer le test'} <span aria-hidden="true">→</span>
                          </button>
                        )
                      ) : (
                        <button
                          type="button"
                          onClick={startQuiz}
                          disabled={quizLoading}
                          className="rounded-md bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {quizLoading ? 'Préparation…' : 'Continuer'} <span aria-hidden="true">→</span>
                        </button>
                      )}
                    </div>
                  )}
                  {isStudent && retrySeconds > 0 && (
                    <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900" role="status">
                      Tu as utilisé tes trois essais. Tu pourras retenter dans {Math.floor(retrySeconds / 3600)} h{' '}
                      {Math.floor((retrySeconds % 3600) / 60)} min {retrySeconds % 60} s.
                    </p>
                  )}
                </div>
              )}

              {stage === 'quiz' && currentQuestion && (
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">
                      {isStudent ? 'Test d’intégration PassAcad' : 'Tes intérêts PassAcad'}
                    </p>
                    <p className="text-sm font-semibold text-slate-500">
                      Question {questionIndex + 1} / {currentQuestions.length}
                    </p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#52a234] transition-all"
                      style={{ width: `${((questionIndex + 1) / currentQuestions.length) * 100}%` }}
                    />
                  </div>
                  {isStudent && (
                    <p className="mt-5 text-sm text-slate-500">
                      {studyDomains.find((domain) => domain.id === studyDomain)?.label} · {institution}
                    </p>
                  )}
                  <h2 className="mt-8 text-2xl font-semibold leading-snug">{currentQuestion.prompt}</h2>
                  <fieldset className="mt-6 space-y-3">
                    <legend className="sr-only">Choisis une réponse</legend>
                    {currentQuestion.options.map((option, index) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                          selectedAnswer === index
                            ? 'border-[#52a234] bg-[#f3f8f0]'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          checked={selectedAnswer === index}
                          onChange={() => {
                            const nextAnswers = [...answers]
                            nextAnswers[questionIndex] = index
                            setAnswers(nextAnswers)
                          }}
                          className="mt-1 accent-[#52a234]"
                        />
                        <span className="text-sm leading-6 text-slate-700">{option}</span>
                      </label>
                    ))}
                  </fieldset>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        if (questionIndex === 0) {
                          setStage('profile')
                        } else {
                          setQuestionIndex((current) => current - 1)
                        }
                      }}
                      className="font-semibold text-slate-500 transition hover:text-[#032965] disabled:invisible"
                    >
                      {questionIndex === 0 ? '← Modifier mon profil' : '← Précédent'}
                    </button>
                    <button
                      type="button"
                      onClick={submitAnswer}
                      disabled={selectedAnswer === undefined || quizLoading}
                      className="rounded-md bg-[#032965] px-6 py-3 font-semibold text-white transition hover:bg-[#021f50] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {quizLoading
                        ? 'Vérification…'
                        : questionIndex === currentQuestions.length - 1
                        ? isStudent ? 'Voir mon résultat' : 'Terminer le questionnaire'
                        : 'Question suivante →'}
                    </button>
                  </div>
                </div>
              )}

              {stage === 'result' && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">
                    {isStudent ? 'Résultat du test d’intégration' : 'Parcours de découverte'}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    {isStudent
                      ? passed ? 'Bravo, tu peux continuer !' : 'Tu peux retenter ta chance.'
                      : 'Merci de nous en avoir dit plus.'}
                  </h2>
                  {isStudent && score !== null && (
                    <p className="mt-4 text-lg text-slate-600">
                      Ton score : <strong className="text-[#032965]">{score}/5</strong>
                    </p>
                  )}
                  {passed ? (
                    <>
                      <p className="mt-4 leading-7 text-slate-600">
                        {isStudent
                          ? <>Tu atteins le seuil indicatif. L’étape suivante est l’adhésion PassAcad de {membershipFee}, réglée par Orange Money ou MTN MoMo.</>
                          : <>Tes réponses nous aideront à t’orienter vers les échanges et activités qui te correspondent. Tu peux maintenant poursuivre avec l’adhésion de {membershipFee}.</>}
                      </p>
                      <button
                        type="button"
                        onClick={() => setStage('payment')}
                        className="mt-7 rounded-md bg-[#52a234] px-6 py-3.5 font-semibold text-white transition hover:bg-[#438a2c]"
                      >
                        Continuer vers l’adhésion →
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="mt-4 leading-7 text-slate-600">
                        Le seuil indicatif est de {passingScore} bonnes réponses. Tu peux revoir ton domaine
                        d’études ou recommencer le test quand tu le souhaites.
                      </p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">
                        {retrySeconds > 0
                          ? `Tes trois essais sont terminés. Tu pourras réessayer dans ${Math.floor(retrySeconds / 3600)} h ${Math.floor((retrySeconds % 3600) / 60)} min ${retrySeconds % 60} s.`
                          : `Il te reste ${attemptsRemaining} essai${attemptsRemaining > 1 ? 's' : ''}.`}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setStage('profile')
                          setQuizQuestions([])
                          setAnswers([])
                        }}
                        className="mt-7 rounded-md border border-[#032965]/20 px-6 py-3.5 font-semibold text-[#032965] transition hover:bg-[#f5f8fc]"
                      >
                        Revoir mon profil
                      </button>
                      {retrySeconds === 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setStage('profile')
                            setQuizQuestions([])
                            setAnswers([])
                            void startQuiz()
                          }}
                          className="ml-3 mt-7 rounded-md bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50]"
                        >
                          Recommencer le test
                        </button>
                      )}
                    </>
                  )}
                  <p className="mt-6 text-xs leading-5 text-slate-500">
                    {isStudent
                      ? 'Ce résultat est affiché dans ton navigateur et n’est pas enregistré sur un serveur. La validation finale de l’adhésion est faite par l’équipe.'
                      : 'Tes réponses restent dans ton navigateur jusqu’à la préparation du message WhatsApp ; elles ne sont pas envoyées à un serveur.'}
                  </p>
                </div>
              )}

              {stage === 'payment' && passed && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">Étape 3 · Adhésion</p>
                  <h2 className="mt-3 text-3xl font-semibold">Finalise ton PassAcad.</h2>
                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4 rounded-xl bg-[#f3f8f0] p-5">
                    <div>
                      <p className="text-sm text-slate-600">Adhésion à la communauté</p>
                      <p className="mt-1 text-2xl font-bold text-[#032965]">{membershipFee}</p>
                    </div>
                    <p className="text-sm font-semibold text-[#438a2c]">Orange Money ou MTN MoMo</p>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">
                    {isStudent && institution
                      ? <>Ton parcours étudiant à {institution} sera indiqué à l’équipe pour t’orienter vers l’espace adapté. </>
                      : null}
                    Demande d’abord à l’équipe NAYGAL les coordonnées Mobile Money officielles.
                    Après le paiement, indique le nom et le numéro utilisés, ou joins la capture du reçu.
                    Le PassAcad et le lien privé WhatsApp seront envoyés après vérification manuelle.
                  </p>
                  <a
                    href={createWhatsAppUrl(`Bonjour NAYGAL, mon parcours PassAcad (${profiles.find((item) => item.id === profile)?.title ?? 'membre'}${isStudent ? ` · ${institution} · ${studyDomains.find((item) => item.id === studyDomain)?.label}` : ''}) est terminé. Merci de m’envoyer les coordonnées officielles pour régler mon adhésion de ${membershipFee} par Orange Money ou MTN MoMo.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-md border border-[#032965]/20 px-5 py-3 font-semibold text-[#032965] transition hover:bg-[#f5f8fc]"
                  >
                    Demander les coordonnées officielles sur WhatsApp
                  </a>

                  <form onSubmit={sendPaymentProof} className="mt-9 space-y-5 border-t border-slate-100 pt-8">
                    <h3 className="text-xl font-bold">Transmettre les informations du paiement</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Nom complet
                        <input
                          required
                          autoComplete="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                          placeholder="Ton nom et prénom"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Numéro utilisé pour le paiement
                        <input
                          required
                          type="tel"
                          autoComplete="tel"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </label>
                    </div>
                    <label className="block text-sm font-semibold text-slate-700">
                      Moyen de paiement
                      <select
                        value={paymentMethod}
                        onChange={(event) =>
                          setPaymentMethod(event.target.value === 'MTN MoMo' ? 'MTN MoMo' : 'Orange Money')
                        }
                        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                      >
                        <option>Orange Money</option>
                        <option>MTN MoMo</option>
                      </select>
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      Référence de transaction <span className="font-normal text-slate-500">(si disponible)</span>
                      <input
                        value={transactionReference}
                        onChange={(event) => setTransactionReference(event.target.value)}
                        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/20"
                        placeholder="Numéro de transaction"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      Capture du reçu <span className="font-normal text-slate-500">(facultative)</span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(event) => setProofFile(event.target.files?.[0] ?? null)}
                        className="mt-2 block w-full rounded-md border border-slate-300 bg-white text-sm font-normal file:mr-4 file:border-0 file:bg-[#f5f8fc] file:px-4 file:py-3 file:font-semibold file:text-[#032965]"
                      />
                    </label>
                    <p className="text-xs leading-5 text-slate-500">
                      La capture n’est pas stockée par ce site. Sur les appareils compatibles, le menu
                      de partage permet de la joindre à WhatsApp ; sinon, tu devras la joindre manuellement
                      après ouverture de WhatsApp.
                    </p>
                    {!transactionReference.trim() && !proofFile && (
                      <p className="text-sm text-amber-700" role="status">
                        Ajoute une référence de transaction ou une capture pour envoyer ta demande.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={!transactionReference.trim() && !proofFile}
                      className="rounded-md bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Préparer l’envoi sur WhatsApp →
                    </button>
                    {shareMessage && (
                      <p className="rounded-lg bg-[#f5f8fc] p-4 text-sm leading-6 text-slate-700" role="status">
                        {shareMessage}
                      </p>
                    )}
                    {fallbackUrl && (
                      <a
                        href={fallbackUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex font-semibold text-[#438a2c] underline underline-offset-4"
                      >
                        Ouvrir WhatsApp pour envoyer les informations
                      </a>
                    )}
                    <p className="text-xs leading-5 text-slate-500">
                      L’envoi de ce message ne confirme pas le paiement. L’équipe vérifiera la transaction
                      avant de transmettre le PassAcad et le lien du groupe.
                    </p>
                  </form>
                </div>
              )}
            </div>
            </div>

            <aside className="relative overflow-hidden border border-[#dcd8cb] bg-[#f0ede3] p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#0b356b]/10" aria-hidden="true" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0b356b]/10" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#4c7b42]">Ton passeport communautaire</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">PassAcad</h3>
                  </div>
                  <span className="grid h-11 w-11 place-items-center border border-[#0b356b]/20 text-lg text-[#0b356b]" aria-hidden="true">✳</span>
                </div>

                <div className="mt-8 border-y border-[#0b356b]/15 py-5">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">Profil sélectionné</p>
                  <p className="mt-2 text-xl font-semibold text-[#082b5b]">{selectedProfile?.title ?? 'À découvrir'}</p>
                  <p className="mt-1 min-h-5 text-sm text-slate-600">
                    {isStudent
                      ? studyDomains.find((domain) => domain.id === studyDomain)?.label
                      : selectedProfile ? 'NAYGAL Community · Cameroun' : 'Choisis une porte pour commencer'}
                  </p>
                  {isStudent && institution.trim() && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-[.12em] text-[#4c7b42]">{institution.trim()}</p>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">État du parcours</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#4c7b42]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#70a954]" />
                    {stage === 'profile' ? 'À compléter' : stage === 'quiz' ? 'En cours' : stage === 'result' ? 'Questions terminées' : 'Adhésion'}
                  </span>
                </div>

                <div className="mt-5 flex gap-1" aria-hidden="true">
                  {journey.map((step, index) => (
                    <span
                      key={step.number}
                      className={`h-1.5 flex-1 ${
                        index < currentJourneyStep
                          ? 'bg-[#4c7b42]'
                          : index === currentJourneyStep
                            ? 'bg-[#a8d779]'
                            : 'bg-[#0b356b]/15'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[9px] font-medium uppercase tracking-[.14em] text-slate-500">
                  <span>Profil</span><span>Questions</span><span>Pass</span><span>Communauté</span>
                </div>

                <div className="mt-8 border-t border-[#0b356b]/15 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">Adhésion après le parcours</p>
                      <p className="mt-1 text-2xl font-semibold text-[#082b5b]">{membershipFee}</p>
                    </div>
                    <span className="border border-[#0b356b]/20 px-2 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#4c7b42]">Orange · MTN</span>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-slate-600">
                    Les coordonnées de paiement sont communiquées par NAYGAL. L’invitation privée est envoyée après vérification.
                  </p>
                </div>
                <div className="mt-6 flex gap-1" aria-hidden="true">
                  {Array.from({ length: 34 }, (_, index) => (
                    <span key={index} className={`h-6 flex-1 ${index % 4 === 0 || index % 7 === 0 ? 'bg-[#0b356b]' : 'bg-[#0b356b]/20'}`} />
                  ))}
                </div>
                <p className="mt-2 text-right font-mono text-[9px] tracking-[.2em] text-slate-500">NAYGAL · CM · PASSACAD</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f5f8fc] py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">NAYGAL Community</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Plusieurs espaces. Une même envie de faire avancer le numérique.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              La communauté WhatsApp est organisée selon les profils. Pour les étudiants, l’orientation
              tient aussi compte du domaine d’études et de l’établissement : chaque université peut avoir
              son identité propre, plutôt qu’un nom unique imposé à toutes.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              ['Étudiants · par campus', 'Un espace rattaché à l’université et pensé selon le domaine d’études. À l’ISTAG, il s’appelle l’Académie des bâtisseurs.'],
              ['Professionnels', 'Un espace pour partager des expériences métier, des ressources et les usages du numérique utile.'],
              ['Passionnés & curieux', 'Un point de rencontre pour apprendre, poser des questions, explorer et faire avancer des idées.'],
            ].map(([title, description], index) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-[.16em] text-[#438a2c]">0{index + 1} · Communauté</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-[#032965] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b8e3a8]">L’esprit PassAcad</p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-blue-100 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Respecter chaque membre et accueillir les questions.',
                'Partager des contenus utiles, liés aux échanges du groupe.',
                'Protéger les données personnelles et la vie privée.',
                'Contribuer avec bienveillance et garder l’espace constructif.',
              ].map((rule, index) => (
                <p key={rule}><span className="mr-2 font-bold text-[#8ed15b]">0{index + 1}</span>{rule}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e4e0d5] bg-[#fbfaf6] py-16 sm:py-20">
        <div className="container-custom grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#4c7b42]">Avant de nous rejoindre</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Les réponses, sans détour.</h2>
            <p className="mt-4 max-w-sm leading-7 text-slate-600">
              Les frais, le paiement et les avantages PassAcad expliqués simplement.
            </p>
          </div>
          <div className="divide-y divide-[#e4e0d5] border-y border-[#e4e0d5]">
            {[
              {
                question: 'Que couvrent les frais d’adhésion de 5 000 FCFA ?',
                answer: 'Ils couvrent l’accès à NAYGAL Community, l’exonération des frais d’inscription aux ateliers pratiques NAYGAL, l’accès privilégié aux événements et rencontres professionnelles, ainsi que la participation à un événement tech par mois.',
              },
              {
                question: 'Comment effectuer le paiement ?',
                answer: 'Après ton parcours PassAcad, contacte l’équipe NAYGAL sur WhatsApp pour recevoir les coordonnées officielles Orange Money ou MTN MoMo. Après paiement, transmets la référence ou le reçu : l’équipe vérifiera la transaction avant de confirmer l’adhésion et d’envoyer l’invitation au groupe.',
              },
              {
                question: 'L’adhésion garantit-elle un stage ou un emploi ?',
                answer: 'Non. Les membres ont de la visibilité sur les propositions communiquées par les entreprises partenaires, notamment des stages ou de l’alternance, selon les opportunités disponibles. L’adhésion ne garantit ni offre ni recrutement.',
              },
              {
                question: 'Qui peut participer au tirage Golf Bastos ?',
                answer: 'Seules les personnes dont l’adhésion a été payée et vérifiée par l’équipe NAYGAL avant le 17 novembre sont éligibles au tirage. Le tirage aura lieu après la clôture des adhésions. L’adhésion donne une chance de gagner, mais ne garantit pas de remporter le pass VIP.',
              },
            ].map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#082b5b] marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#c9c8bd] text-[#4c7b42] transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pr-12 pt-4 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
