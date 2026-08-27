'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'

const featuredStory = {
  category: 'IA & automatisation',
  type: 'Dossier à la une',
  title: 'L’IA générative transforme les équipes IT : vers une nouvelle gouvernance des outils numériques',
  description:
    'Les organisations accélèrent l’adoption de solutions d’IA pour automatiser les tâches répétitives, réduire les délais d’intervention et mieux piloter leurs données.',
  meta: 'Publié le 8 août 2026 • 6 min de lecture',
  image: '/images/expertises/Education Afrique _ AIworkflow.jpg',
}

const categories = [
  { label: 'Tous les sujets', shortLabel: 'Tout' },
  { label: 'Cybersécurité', shortLabel: 'Sécurité' },
  { label: 'Cloud', shortLabel: 'Cloud' },
  { label: 'IA', shortLabel: 'IA' },
  { label: 'Réseaux', shortLabel: 'Réseaux' },
  { label: 'Formation', shortLabel: 'Formation' },
]

const articles = [
  {
    category: 'Cybersécurité',
    type: 'Guide pratique',
    title: 'Comment sécuriser les accès à distance sans freiner la productivité des équipes',
    description: 'Des pratiques simples et concrètes pour renforcer la protection des postes de travail et des services cloud.',
    meta: '4 min de lecture',
    image: '/images/services/cybersecurite/phishing.jpeg',
  },
  {
    category: 'Cloud',
    type: 'Décryptage',
    title: 'Le cloud hybride devient la référence pour les organisations qui veulent garder le contrôle',
    description: 'Un modèle qui combine flexibilité, continuité de service et meilleure maîtrise des coûts.',
    meta: '5 min de lecture',
    image: '/images/services/cloud/st-digital.jpeg',
  },
  {
    category: 'Réseaux',
    type: 'Tendance',
    title: 'Les infrastructures modernes s’appuient sur une connectivité plus intelligente et plus résiliente',
    description: 'Les besoins en performance, qualité de service et observabilité redéfinissent la conception des réseaux.',
    meta: '3 min de lecture',
    image: '/images/services/reseaux/1.jpg',
  },
  {
    category: 'Formation',
    type: 'Conseil expert',
    title: 'Former les équipes aux outils numériques, un levier essentiel de la transformation',
    description: 'Les organisations qui investissent dans la montée en compétences gagnent en autonomie et en rapidité.',
    meta: '2 min de lecture',
    image: '/images/academy/formations/pexels-divinetechygirl-1181319.jpg',
  },
]

const resourceCollections = [
  {
    number: '01',
    title: 'Développer votre organisation',
    description: 'Des repères concrets pour structurer les priorités et faire avancer vos projets numériques.',
    topics: ['Feuille de route', 'Digitalisation', 'Pilotage des projets'],
  },
  {
    number: '02',
    title: 'Gagner en efficacité',
    description: 'Des idées utiles pour mieux collaborer, automatiser les tâches et accompagner vos équipes.',
    topics: ['Productivité', 'Collaboration', 'Automatisation'],
  },
  {
    number: '03',
    title: 'Renforcer votre sécurité',
    description: 'Les essentiels pour protéger vos accès, vos données et la continuité de votre activité.',
    topics: ['Sauvegarde', 'Protection des accès', 'Sensibilisation'],
  },
]

const SITE = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://naygal.cm'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ressources et actualités numériques | NAYGAL',
  description:
    'Guides, conseils et actualités sur la cybersécurité, le cloud, l’IA et la transformation numérique au service des organisations en Afrique.',
  url: `${SITE}/actualites`,
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState('Tous les sujets')
  const [query, setQuery] = useState('')

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'Tous les sujets' || article.category === activeCategory
      const searchableText = `${article.title} ${article.description} ${article.category}`.toLowerCase()
      return matchesCategory && (normalizedQuery.length === 0 || searchableText.includes(normalizedQuery))
    })
  }, [activeCategory, query])

  return (
    <main className="overflow-hidden bg-[#f6f8fb] pt-20 text-naygal-dark sm:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative isolate overflow-hidden bg-[#021d47] text-white">
        <Image
          src="/images/actualites/act.jpg"
          alt="Équipe africaine réunie autour d’un projet numérique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#021d47]/75 to-[#021d47]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-[#021d47]/20" />
        <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.65) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="container-custom relative flex min-h-[560px] items-end py-20 sm:min-h-[620px] sm:py-24">
          <div className="animate-carousel-copy max-w-4xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b8dfa7]"><span className="h-2 w-2 rounded-full bg-naygal-green" /> Actualités numériques en Afrique</p>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-7xl">Comprendre les transformations qui façonnent notre avenir numérique.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Analyses, conseils et retours de terrain sur la cybersécurité, le cloud, l’intelligence artificielle et les compétences numériques.</p>
            <div className="mt-8 h-px w-20 bg-gradient-to-r from-naygal-green to-transparent" />
          </div>
        </div>
      </section>

      <nav aria-label="Thématiques et recherche de ressources" className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur lg:top-[72px]">
        <div className="container-custom flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <button key={category.label} type="button" onClick={() => setActiveCategory(category.label)} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${activeCategory === category.label ? 'bg-naygal-dark text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-naygal-dark'}`}>
                {category.shortLabel}
              </button>
            ))}
          </div>
          <label className="flex w-full shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm lg:w-80">
            <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une ressource" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" />
          </label>
        </div>
      </nav>

      <section className="container-custom py-12 sm:py-16">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">À découvrir maintenant</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Les ressources à la une</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">Des contenus conçus pour éclairer vos choix technologiques et passer plus facilement à l’action.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <article className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-naygal-dark shadow-xl shadow-naygal-dark/10">
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image src={featuredStory.image} alt="Équipe collaborant autour d’un projet numérique" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#021d47] via-[#021d47]/75 to-[#021d47]/10" />
            <div className="relative flex h-full min-h-[460px] flex-col justify-end p-7 text-white sm:p-10">
              <div className="mb-auto flex items-center justify-between gap-4"><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-sm">{featuredStory.type}</span><span className="text-sm text-white/80">{featuredStory.meta}</span></div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b8dfa7]">{featuredStory.category}</p>
              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{featuredStory.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-200">{featuredStory.description}</p>
              <Link href="/contact" className="group mt-7 inline-flex w-fit items-center gap-2 font-semibold text-white">Découvrir le dossier <ArrowIcon /></Link>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-[#d7ead0] bg-[#eaf5e6] p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-naygal-green text-naygal-dark"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg></span>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-[#438a2c]">NAYGAL Academy</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">Faites monter vos équipes en compétence.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Des parcours pratiques, ancrés dans les usages et les outils de votre quotidien.</p>
              <Link href="/academy" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold">Voir les formations <ArrowIcon /></Link>
            </div>
            <div className="rounded-[2rem] bg-[#276f91] p-7 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#c8e7f3]">Un projet en tête ?</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">Parlez à un expert NAYGAL.</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">Obtenez un premier échange adapté à vos enjeux et à votre contexte.</p>
              <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold">Nous contacter <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-20">
        <div className="container-custom">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">Explorer par objectif</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Trouvez le bon point de départ</h2></div>
            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-bold text-[#438a2c]">Construire votre feuille de route <ArrowIcon /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {resourceCollections.map((collection) => (
              <article key={collection.number} className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#9bcf88] hover:shadow-xl hover:shadow-slate-200/70">
                <div className="flex items-center justify-between"><span className="text-sm font-bold text-naygal-green">{collection.number}</span><ArrowIcon /></div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">{collection.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{collection.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{collection.topics.map((topic) => <li key={topic} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{topic}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-14 sm:py-20">
        <div><p className="eyebrow">Dernières publications</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Restez informé, passez à l’action</h2></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredArticles.length > 0 ? filteredArticles.map((article) => (
            <article key={article.title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
              <div className="relative h-48 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-naygal-dark/25 to-transparent" />
              </div>
              <div className="p-6"><div className="flex items-center justify-between gap-3 text-xs font-semibold"><span className="text-[#438a2c]">{article.category}</span><span className="text-slate-400">{article.meta}</span></div><p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{article.type}</p><h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight">{article.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p><Link href="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-naygal-dark">Lire la ressource <ArrowIcon /></Link></div>
            </article>
          )) : <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-600">Aucune ressource ne correspond à votre recherche pour le moment.</div>}
        </div>
      </section>

      <section className="container-custom pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-naygal-dark px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-naygal-green/15 blur-[80px]" />
          <div className="relative mx-auto max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b8dfa7]">Votre prochain projet commence ici</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Faites du numérique un accélérateur pour votre organisation.</h2><p className="mt-5 leading-7 text-slate-300">Échangez avec notre équipe pour identifier les priorités, les solutions adaptées et les prochaines étapes.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-naygal-green px-6 py-3.5 text-sm font-bold text-naygal-dark transition hover:bg-white">Parler de votre projet</Link></div>
        </div>
      </section>
    </main>
  )
}

// Metadata moved to server-resolved layer to avoid exporting from a client component.
