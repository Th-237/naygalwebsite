'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

const filters = ['Toutes', 'Guides', 'Articles', 'Conseils', 'Outils']

const resources = [
  { type: 'Guide', category: 'Guides', title: 'Créer une feuille de route numérique réaliste', description: 'Les étapes essentielles pour identifier les priorités, organiser vos actions et mesurer les progrès.', duration: '12 min', color: 'bg-[#e8f3ff]', icon: '↗' },
  { type: 'Checklist', category: 'Outils', title: 'Les essentiels de la cybersécurité', description: 'Une liste claire pour renforcer la protection de vos accès, postes et données.', duration: '8 points', color: 'bg-[#edf7e7]', icon: '✓' },
  { type: 'Article', category: 'Articles', title: 'Le cloud hybride : garder le contrôle sans freiner l’évolution', description: 'Comprendre les choix d’architecture qui répondent aux besoins réels des organisations.', duration: '5 min', color: 'bg-[#fff4df]', icon: '☁' },
  { type: 'Conseil', category: 'Conseils', title: 'Bien démarrer avec l’intelligence artificielle', description: 'Des cas d’usage concrets pour expérimenter l’IA avec méthode et sécurité.', duration: '7 min', color: 'bg-[#f0ebfb]', icon: 'AI' },
  { type: 'Guide', category: 'Guides', title: 'Choisir les bons outils pour faire collaborer vos équipes', description: 'Une méthode simple pour aligner les outils, les usages et les compétences.', duration: '10 min', color: 'bg-[#e8f3ff]', icon: '↗' },
  { type: 'Outil', category: 'Outils', title: 'Évaluer la maturité numérique de votre organisation', description: 'Faites le point sur vos pratiques, vos outils et les priorités de transformation.', duration: 'Auto-évaluation', color: 'bg-[#edf7e7]', icon: '01' },
  // PDF resource placed in public/documents/
  { type: 'Article', category: 'Articles', title: "L'enseignement avec l'IA : guide pour les enseignants", description: "Article (PDF) — enseignement et IA au Cameroun.", duration: 'PDF', color: 'bg-[#fff4df]', icon: '📄', href: '/documents/article_ia_enseignants_cameroun.pdf' },
]

export default function RessourcesPage() {
  const [activeFilter, setActiveFilter] = useState('Toutes')
  const [query, setQuery] = useState('')

  const displayedResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return resources.filter((resource) => {
      const matchesFilter = activeFilter === 'Toutes' || resource.category === activeFilter
      const matchesQuery = !normalizedQuery || `${resource.title} ${resource.description} ${resource.type}`.toLowerCase().includes(normalizedQuery)
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, query])

  return (
    <main className="bg-[#f6f8fb] pt-20 text-[#032965] sm:pt-[72px]">
      <section className="relative overflow-hidden bg-[#021d47] py-16 text-white sm:py-20">
        <div className="grid-pattern absolute inset-0 opacity-70" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#52a234]/15 blur-[100px]" />
        <div className="container-custom relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.18em] text-[#b8dfa7]"><span className="h-2 w-2 rounded-full bg-[#52a234]" /> Bibliothèque NAYGAL</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Des ressources pour décider, apprendre et avancer.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Explorez des guides, des conseils et des outils conçus pour vous aider à passer du numérique utile à l’action.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#b8dfa7]">Le point de départ</p>
            <h2 className="mt-3 text-2xl font-semibold">Vous ne savez pas par où commencer ?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Commencez par évaluer votre situation, puis construisez les prochaines étapes avec notre équipe.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#b8dfa7]">Parler à un expert <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 py-3 backdrop-blur lg:top-[72px]">
        <div className="container-custom flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-1 overflow-x-auto">
            {filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'bg-[#032965] text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{filter}</button>)}
          </div>
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm lg:w-80"><svg aria-hidden="true" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une ressource" className="min-w-0 flex-1 bg-transparent text-sm outline-none" /></label>
        </div>
      </section>

      <section className="container-custom py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#52a234] p-8 text-[#021d47] sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#1f6920]">Ressource à la une</p>
            <h2 className="mt-10 max-w-md text-3xl font-semibold leading-tight tracking-tight">Construisez une transformation numérique qui vous ressemble.</h2>
            <p className="mt-4 max-w-md leading-7 text-[#163a21]">Un guide pratique pour relier vos ambitions, vos contraintes et les actions qui auront le plus d’impact.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#021d47] px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#021d47]">Lire le guide</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Link href="/actualites" className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f3ff] text-xl">◌</span><h3 className="mt-12 text-2xl font-semibold">Articles & décryptages</h3><p className="mt-3 text-sm leading-6 text-slate-600">Suivez les tendances qui façonnent les organisations aujourd’hui.</p><span className="mt-6 inline-block text-sm font-bold group-hover:translate-x-1">Explorer →</span></Link>
            <Link href="/academy" className="group rounded-[2rem] bg-[#276f91] p-7 text-white transition hover:-translate-y-1 hover:shadow-xl"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl">↗</span><h3 className="mt-12 text-2xl font-semibold">Apprendre avec NAYAC</h3><p className="mt-3 text-sm leading-6 text-blue-100">Des parcours pratiques pour vos équipes et vos établissements.</p><span className="mt-6 inline-block text-sm font-bold group-hover:translate-x-1">Voir les parcours →</span></Link>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6"><div><p className="eyebrow">Explorer la bibliothèque</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Les ressources utiles maintenant</h2></div><p className="hidden text-sm text-slate-500 sm:block">{displayedResources.length} ressource{displayedResources.length > 1 ? 's' : ''}</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedResources.length ? displayedResources.map((resource) => (
            <article key={resource.title} className="group flex min-h-72 flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between">
                <span className={`flex h-12 min-w-12 items-center justify-center rounded-2xl ${resource.color} text-sm font-bold`}>
                  {resource.href && resource.href.endsWith('.pdf') ? (
                    <a href={resource.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M17 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="7" y="15" fill="currentColor" fontSize="9" fontWeight="700">PDF</text>
                      </svg>
                    </a>
                  ) : (
                    resource.icon
                  )}
                </span>
                <span className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">{resource.duration}</span>
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">{resource.type}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>

              {resource.href ? (
                <div className="mt-auto pt-6 flex items-center gap-4">
                  <Link href={resource.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold group-hover:text-[#438a2c]">Ouvrir le PDF →</Link>
                  <a href={resource.href} download className="text-sm font-semibold text-slate-600 hover:text-slate-800">Télécharger</a>
                </div>
              ) : (
                <Link href="/contact" className="mt-auto pt-6 text-sm font-bold group-hover:text-[#438a2c]">Consulter →</Link>
              )}
            </article>
          )) : <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-600">Aucune ressource ne correspond à votre recherche.</div>}
        </div>
      </section>

      <section className="bg-[#021d47] py-16 text-center text-white sm:py-20"><div className="container-custom"><p className="text-sm font-bold uppercase tracking-[.18em] text-[#b8dfa7]">Une question, un projet ?</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Faisons le tri ensemble et trouvons les bonnes prochaines étapes.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#52a234] px-6 py-3.5 text-sm font-bold text-[#021d47] transition hover:bg-white">Échanger avec NAYGAL</Link></div></section>
    </main>
  )
}
