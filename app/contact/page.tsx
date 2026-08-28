'use client'

import { useEffect, useState } from 'react'
import PhoneSelect from '@/components/PhoneSelect'
import Image from 'next/image'

type ContactSubject =
  | ''
  | 'services'
  | 'projet'
  | 'formation'
  | 'partenariat'
  | 'autre'

const heroImages = [
  {
    src: '/images/contact/Grand-caroussel/1.png',
    title: 'Construire ensemble',
    text: 'Des équipes, des idées et des technologies au service de projets utiles.',
  },
  {
    src: '/images/contact/Grand-caroussel/4.jpg',
    title: 'Transformer les idées',
    text: 'De la réflexion à la mise en œuvre, nous vous accompagnons à chaque étape.',
  },
  {
    src: '/images/contact/Grand-caroussel/3.jpg',
    title: 'Faire avancer les organisations',
    text: 'Infrastructure, cloud, cybersécurité, logiciels et intelligence artificielle.',
  },
  {
    src: '/images/contact/Grand-caroussel/2.jpg',
    title: 'Préparer demain',
    text: 'Des solutions pensées pour les réalités africaines et les usages de demain.',
  },
]

const intentions = [
  {
    id: 'services' as const,
    number: '01',
    title: 'Services IT',
    short: 'Infrastructure, réseau, cloud & cybersécurité',
  },
  {
    id: 'projet' as const,
    number: '02',
    title: 'Projet numérique',
    short: 'Application, plateforme, logiciel & IA',
  },
  {
    id: 'formation' as const,
    number: '03',
    title: 'Formation',
    short: 'NAYGAL ACADEMY, ateliers & montée en compétences',
  },
  {
    id: 'partenariat' as const,
    number: '04',
    title: 'Partenariat',
    short: 'Entreprise, école, association ou institution',
  },
  {
    id: 'autre' as const,
    number: '05',
    title: 'Autre demande',
    short: 'Une question ou un besoin spécifique',
  },
]

const serviceOptions = [
  'Infrastructure',
  'Serveurs NAS',
  'Réseaux',
  'Maintenance',
  'Cybersécurité / SOC',
  'Cloud',
  'Automatisation IA',
]

const projectOptions = [
  'Application web',
  'Application métier',
  'Plateforme numérique',
  'Intelligence artificielle',
  'Automatisation',
  'Prototype / MVP',
  'Autre projet',
]

const formationOptions = [
  'Formation professionnelle',
  'Formation entreprise',
  'Atelier',
  'NAYGAL ACADEMY',
  'Formation scolaire',
  'Événement éducatif',
]

export default function ContactPage() {
  const [currentHero, setCurrentHero] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '' as ContactSubject,
    detail: '',
    message: '',
  })

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle')

  /*
   * HERO CAROUSEL
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((current) => (current + 1) % heroImages.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  const selectHero = (index: number) => {
    setCurrentHero(index)
  }

  const selectIntent = (subject: ContactSubject) => {
    setFormData((current) => ({
      ...current,
      subject,
      detail: '',
    }))

    setTimeout(() => {
      document
        .getElementById('contact-form')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const whatsappMessage = [
        'Bonjour NAYGAL, je souhaite vous contacter.',
        '',
        `Nom: ${formData.name}`,
        `Email: ${formData.email}`,
        `Téléphone: ${formData.phone || 'Non renseigné'}`,
        `Organisation: ${formData.organization || 'Non renseignée'}`,
        `Type de demande: ${getSubjectLabel() || formData.subject || 'Non renseigné'}`,
        `Précision: ${formData.detail || 'Non renseignée'}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')

      const whatsappUrl = `https://wa.me/237655002493?text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      setStatus('sent')

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        detail: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const getDetailOptions = () => {
    switch (formData.subject) {
      case 'services':
        return serviceOptions
      case 'projet':
        return projectOptions
      case 'formation':
        return formationOptions
      default:
        return []
    }
  }

  const getSubjectLabel = () => {
    switch (formData.subject) {
      case 'services':
        return 'Services IT'
      case 'projet':
        return 'Projet numérique'
      case 'formation':
        return 'Formation'
      case 'partenariat':
        return 'Partenariat'
      case 'autre':
        return 'Autre demande'
      default:
        return ''
    }
  }

  return (
    <main className="overflow-hidden bg-[#071321] pt-[72px] text-white">

      {/* =========================================================
          HERO / DARK CAROUSEL
      ========================================================= */}
      <section className="relative lg:min-h-[720px] min-h-[360px] overflow-hidden bg-[#03101f]">

        {/* Images */}
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              currentHero === index
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
               fill sizes="100vw"   className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
                currentHero === index
                  ? 'scale-105'
                  : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#03101f]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03101f] via-[#03101f]/75 to-[#03101f]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03101f] via-transparent to-[#03101f]/30" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative flex lg:min-h-[720px] min-h-[360px] items-end pb-20 pt-16">

          <div className="grid w-full gap-10 lg:grid-cols-[1fr_360px] lg:items-end">

            {/* HERO CONTENT */}
            <div className="max-w-4xl">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#6ec34e]" />

                <p className="text-xs font-bold uppercase tracking-[.22em] text-[#a7dc91]">
                  Contact · NAYGAL
                </p>

              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-7xl">

                {heroImages[currentHero].title}

                <span className="text-[#6ec34e]">.</span>

              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {heroImages[currentHero].text}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() => selectIntent('services')}
                  className="bg-[#52a234] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Démarrer une discussion →
                </button>

                <a
                  href="https://wa.me/237655002493?text=Bonjour%20NAYGAL%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-[#25D366]/60 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.5 0 .12 5.36.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65A11.92 11.92 0 0 0 12.06 24c6.55 0 11.93-5.36 11.93-11.92 0-3.18-1.24-6.17-3.47-8.6ZM12.06 21.8c-1.9 0-3.77-.5-5.4-1.46l-.39-.23-3.74.98 1-3.64-.25-.38A9.88 9.88 0 0 1 2.15 11.9c0-5.47 4.45-9.92 9.91-9.92 2.64 0 5.13 1.03 7 2.9a9.9 9.9 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.9 9.92Zm5.43-7.46c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.52s1.08 2.92 1.22 3.13c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35Z" />
                  </svg>
                  WhatsApp
                </a>

              </div>

            </div>

            {/* CAROUSEL CONTROLS */}
            <div className="hidden lg:block">

              <div className="border border-white/15 bg-[#071321]/70 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a7dc91]">
                    NAYGAL · CONTACT
                  </p>

                  <p className="text-xs text-slate-400">
                    0{currentHero + 1} / 0{heroImages.length}
                  </p>

                </div>

                <div className="mt-5 space-y-2">

                  {heroImages.map((image, index) => (
                    <button
                      key={image.title}
                      type="button"
                      onClick={() => selectHero(index)}
                      className="group flex w-full items-center gap-3 text-left"
                    >

                      <span
                        className={`h-px transition-all duration-500 ${
                          currentHero === index
                            ? 'w-12 bg-[#52a234]'
                            : 'w-5 bg-white/20'
                        }`}
                      />

                      <span
                        className={`text-xs transition ${
                          currentHero === index
                            ? 'font-semibold text-white'
                            : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {image.title}
                      </span>

                    </button>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MOBILE DOTS */}
        <div className="absolute bottom-7 left-0 right-0 lg:hidden">

          <div className="container-custom flex gap-2">

            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                onClick={() => selectHero(index)}
                className={`h-1 transition-all ${
                  currentHero === index
                    ? 'w-10 bg-[#52a234]'
                    : 'w-4 bg-white/30'
                }`}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT BAR
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#091a2b]">

        <div className="container-custom">

          <div className="grid sm:grid-cols-3">

            <a
              href="mailto:naygalcameroun@gmail.com"
              className="border-b border-white/10 p-6 transition hover:bg-white/[.03] sm:border-b-0 sm:border-r"
            >

              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#6ec34e]">
                Email
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                naygalcameroun@gmail.com
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Écrire à notre équipe →
              </p>

            </a>

            <a
              href="https://wa.me/237655002493?text=Bonjour%20NAYGAL%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
              target="_blank"
              rel="noreferrer"
              className="border-b border-white/10 p-6 transition hover:bg-white/[.03] sm:border-b-0 sm:border-r"
            >

              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#6ec34e]">
                WhatsApp
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                +237 655 002 493
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Échanger directement →
              </p>

            </a>

            <div className="p-6">

              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#6ec34e]">
                Localisation
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Douala, Cameroun
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Afrique · Technologie · Innovation
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          INTENTIONS
      ========================================================= */}
      <section className="bg-[#071321] py-16 sm:py-20">

        <div className="container-custom">

          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6ec34e]">
                01 · Votre besoin
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">
                Pourquoi souhaitez-vous nous contacter ?
              </h2>

            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-400 lg:justify-self-end">
              Sélectionnez votre objectif. Votre choix permettra d'orienter
              directement votre demande vers le bon sujet.
            </p>

          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {intentions.map((item) => {

              const selected = formData.subject === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectIntent(item.id)}
                  className={`group relative min-h-[175px] border p-6 text-left transition-all duration-300 ${
                    selected
                      ? 'border-[#52a234] bg-[#102d22] shadow-[0_0_40px_rgba(82,162,52,.12)]'
                      : 'border-white/10 bg-[#0b1c2d] hover:-translate-y-1 hover:border-white/20 hover:bg-[#0e2337]'
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold text-[#6ec34e]">
                      {item.number}
                    </span>

                    <span
                      className={`text-xl transition-transform group-hover:translate-x-1 ${
                        selected
                          ? 'text-[#a7dc91]'
                          : 'text-slate-600'
                      }`}
                    >
                      →
                    </span>

                  </div>

                  <h3 className="mt-9 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.short}
                  </p>

                  {selected && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#52a234]" />
                  )}

                </button>
              )
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          VISUAL SECTION
      ========================================================= */}
      <section className="bg-[#06111e] py-10 sm:py-14">

        <div className="container-custom">

          <div className="grid gap-4 md:grid-cols-[1.4fr_.6fr]">

            <div className="group relative min-h-[220px] md:min-h-[330px] overflow-hidden">

              <Image
                src='/images/contact/expertise.jpg'
                alt="Équipe travaillant sur un projet"
                  fill sizes="(max-width: 768px) calc(100vw - 2rem), 70vw"   className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#03101f]/95 via-[#03101f]/50 to-transparent" />

              <div className="relative flex min-h-[220px] md:min-h-[330px] flex-col justify-end p-7 sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#a7dc91]">
                  Une équipe, plusieurs expertises
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                  Un interlocuteur pour vos enjeux technologiques.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Infrastructure, cybersécurité, cloud, logiciels, IA et
                  formation : nous pouvons intervenir à différents niveaux
                  de votre transformation numérique.
                </p>

              </div>

            </div>

            <div className="border border-white/10 bg-[#0b1c2d] p-7">

              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#6ec34e]">
                Expertise
              </p>

              <div className="mt-7 space-y-0">

                {[
                  'Infrastructure',
                  'Cybersécurité',
                  'Cloud',
                  'Logiciels',
                  'Intelligence artificielle',
                  'NAYGAL ACADEMY',
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 py-4"
                  >

                    <div className="flex items-center gap-3">

                      <span className="text-[10px] font-bold text-[#52a234]">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>

                    </div>

                    <span className="text-xs text-slate-600">
                      →
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FORM
      ========================================================= */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#071321] py-16 sm:py-20"
      >

        <div className="container-custom">

          <div className="grid border border-white/10 lg:grid-cols-[.55fr_1fr] gap-6">

            {/* LEFT */}
            <aside className="relative overflow-hidden bg-[#0a2033] flex">

              <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#276f91]/20 blur-3xl" />

              <div className="relative flex h-full flex-col p-7 sm:p-10">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a7dc91]">
                  02 · Votre demande
                </p>

                <h2 className="mt-12 text-3xl font-semibold leading-tight text-white">
                  Donnez-nous
                  <br />
                  le contexte.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Expliquez-nous votre situation, votre objectif et les
                  difficultés rencontrées. Nous nous chargeons du reste.
                </p>

                <div className="mt-10 border border-white/10 bg-black/10 p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-500">
                    Sujet
                  </p>

                  <div className="mt-3 flex items-center justify-between">

                    <p className="font-semibold text-white">
                      {formData.subject
                        ? getSubjectLabel()
                        : 'À sélectionner'}
                    </p>

                    {formData.subject && (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#52a234] text-xs">
                        ✓
                      </span>
                    )}

                  </div>

                </div>

                <div className="mt-auto border-t border-white/10 pt-7">

                  <p className="text-xs text-slate-500">
                    NAYGAL
                  </p>

                  <p className="mt-3 text-sm text-slate-300">
                    naygalcameroun@gmail.com
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    +237 655 002 493
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Douala, Cameroun
                  </p>

                </div>

              </div>

            </aside>

            {/* FORM */}
            <div className="bg-[#0b1c2d] p-7 sm:p-10 flex items-start">

              <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl mx-auto space-y-5"
              >

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                    >
                      Nom complet *
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Votre nom"
                      className="w-full border border-white/10 bg-[#071321] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="vous@exemple.com"
                      className="w-full border border-white/10 bg-[#071321] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                    />

                  </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="organization"
                      className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                    >
                      Organisation
                    </label>

                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      placeholder="Entreprise, école, association..."
                      className="w-full border border-white/10 bg-[#071321] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300">
                      Téléphone
                    </label>

                    <PhoneSelect
                      value={formData.phone}
                      onChange={(full) =>
                        setFormData({
                          ...formData,
                          phone: full,
                        })
                      }
                    />

                  </div>

                </div>

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                  >
                    Type de demande *
                  </label>

                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value as ContactSubject,
                        detail: '',
                      })
                    }
                    className="w-full border border-white/10 bg-[#071321] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                  >

                    <option value="">
                      Sélectionnez votre besoin
                    </option>

                    {intentions.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.title}
                      </option>
                    ))}

                  </select>

                </div>

                {getDetailOptions().length > 0 && (

                  <div>

                    <label
                      htmlFor="detail"
                      className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                    >
                      Précisez votre besoin
                    </label>

                    <select
                      id="detail"
                      value={formData.detail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          detail: e.target.value,
                        })
                      }
                      className="w-full border border-white/10 bg-[#071321] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                    >

                      <option value="">
                        Sélectionnez une option
                      </option>

                      {getDetailOptions().map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}

                    </select>

                  </div>

                )}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-[.08em] text-slate-300"
                  >
                    Votre message *
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Expliquez-nous votre besoin, votre problème ou votre idée..."
                    className="w-full resize-none border border-white/10 bg-[#071321] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
                  />

                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-sm text-[11px] leading-5 text-slate-500">
                    Vos informations sont utilisées uniquement pour traiter
                    votre demande et vous recontacter.
                  </p>

                  <button
                    type="submit"
                    disabled={
                      status === 'sending' ||
                      status === 'sent'
                    }
                    className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#52a234] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#438a2c] disabled:cursor-not-allowed disabled:opacity-50"
                  >

                    {status === 'idle' && (
                      <>
                        Envoyer ma demande
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}

                    {status === 'sending' && (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Envoi...
                      </>
                    )}

                    {status === 'sent' && (
                      <>✓ Ouvrir WhatsApp</>
                    )}

                    {status === 'error' && (
                      <>Réessayer →</>
                    )}

                  </button>

                </div>

                {status === 'sent' && (

                  <div className="border border-[#52a234]/30 bg-[#52a234]/10 p-4">

                    <p className="text-sm font-semibold text-[#a7dc91]">
                      Votre demande a été préparée dans WhatsApp.
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Vérifiez votre navigateur et envoyez le message pour
                      finaliser votre demande.
                    </p>

                  </div>

                )}

                {status === 'error' && (

                  <div className="border border-red-500/20 bg-red-500/10 p-4">

                    <p className="text-sm font-semibold text-red-300">
                      Une erreur est survenue.
                    </p>

                    <p className="mt-1 text-xs text-red-400">
                      Vérifiez votre connexion puis réessayez.
                    </p>

                  </div>

                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL IMAGE / AFRICA
      ========================================================= */}
      <section className="bg-[#03101f] py-10">

        <div className="container-custom">

            <div className="relative min-h-[220px] sm:min-h-[360px] overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85"
              alt="Paysage africain"
               fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#03101f]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#03101f] via-[#03101f]/40 to-transparent" />

            <div className="relative flex min-h-[360px] items-center p-8 sm:p-12">

              <div className="max-w-2xl">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a7dc91]">
                  NAYGAL · Cameroun
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">
                  Construire depuis l'Afrique.
                  <br />
                  Penser pour le monde.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  Notre ambition est de contribuer à bâtir un écosystème
                  technologique africain capable de concevoir, déployer et
                  maîtriser ses propres solutions.
                </p>

                <div className="mt-7 h-px w-20 bg-[#52a234]" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOT CTA
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#071321] py-12">

        <div className="container-custom">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6ec34e]">
                Prêt à commencer ?
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                Une idée mérite au moins une conversation.
              </h2>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href="mailto:naygalcameroun@gmail.com"
                className="border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                naygalcameroun@gmail.com
              </a>

              <a
                href="https://wa.me/237655002493?text=Bonjour%20NAYGAL%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebc5b]"
              >
                WhatsApp NAYGAL →
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}