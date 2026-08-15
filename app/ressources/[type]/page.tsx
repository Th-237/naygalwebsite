import Link from 'next/link'
import { notFound } from 'next/navigation'

const collections = {
  articles: {
    eyebrow: 'Regards & tendances',
    title: 'Les articles NAYGAL',
    description: 'Des analyses pour comprendre les évolutions du numérique et leurs effets concrets sur les organisations.',
    color: 'bg-[#e8f3ff]',
    items: [
      ['IA & automatisation', 'L’intelligence artificielle, une opportunité à structurer dès aujourd’hui', '6 min'],
      ['Cloud', 'Cloud hybride : trouver le bon équilibre entre agilité et maîtrise', '5 min'],
      ['Infrastructures', 'Ce que les réseaux modernes changent pour la continuité des activités', '4 min'],
      ['Agritech', 'Données, capteurs et drones : des leviers concrets pour mieux cultiver', '7 min'],
      ['Éducation', 'Le numérique au service de l’apprentissage et de l’accès aux compétences', '5 min'],
      ['Écosystème', 'Les plateformes mondiales et les choix locaux : créer une stratégie durable', '6 min'],
    ],
  },
  conseils: {
    eyebrow: 'Passer à l’action',
    title: 'Les conseils NAYGAL',
    description: 'Des recommandations simples, pragmatiques et directement applicables à votre contexte.',
    color: 'bg-[#edf7e7]',
    items: [
      ['Cybersécurité', 'Les cinq réflexes à installer pour protéger les accès de vos équipes', 'À faire'],
      ['Organisation', 'Comment choisir un premier projet numérique avec un impact mesurable', 'À lire'],
      ['Équipes', 'Faire adopter un nouvel outil sans perdre vos collaborateurs en route', 'À lire'],
      ['Données', 'Commencer à mieux organiser ses données sans tout réinventer', 'À faire'],
      ['IA', 'Trois cas d’usage simples pour explorer l’IA en toute sécurité', 'À tester'],
      ['Budget', 'Investir dans le numérique : regarder le coût total, pas seulement le prix', 'À lire'],
    ],
  },
  guides: {
    eyebrow: 'Approfondir un sujet',
    title: 'Les guides NAYGAL',
    description: 'Des ressources structurées pour vous aider à cadrer un projet et avancer étape par étape.',
    color: 'bg-[#fff4df]',
    items: [
      ['Transformation numérique', 'Créer une feuille de route numérique réaliste en 6 étapes', '12 min'],
      ['Cybersécurité', 'Le guide de démarrage pour renforcer la sécurité de votre organisation', '15 min'],
      ['Cloud', 'Bien préparer un projet de cloud hybride', '10 min'],
      ['Formation', 'Construire un plan de montée en compétences pour vos équipes', '9 min'],
      ['Réseaux', 'Les questions à poser avant de faire évoluer votre infrastructure', '11 min'],
      ['IA & automatisation', 'De l’idée au premier pilote : introduire l’IA avec méthode', '14 min'],
    ],
  },
} as const

type CollectionType = keyof typeof collections

export function generateStaticParams() {
  return Object.keys(collections).map((type) => ({ type }))
}

export default async function ResourceCollectionPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params
  const collection = collections[type as CollectionType]

  if (!collection) notFound()

  return (
    <main className="min-h-screen bg-[#f6f8fb] pt-20 text-[#032965] sm:pt-[72px]">
      <section className="relative overflow-hidden bg-[#021d47] py-16 text-white sm:py-20">
        <div className="grid-pattern absolute inset-0 opacity-70" />
        <div className="container-custom relative">
          <Link href="/ressources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b8dfa7] hover:text-white">← Toutes les ressources</Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[.18em] text-[#b8dfa7]">{collection.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{collection.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{collection.description}</p>
        </div>
      </section>

      <nav aria-label="Types de ressources" className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 py-3 backdrop-blur lg:top-[72px]"><div className="container-custom flex gap-2 overflow-x-auto"><Link href="/ressources/articles" className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${type === 'articles' ? 'bg-[#032965] text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Articles</Link><Link href="/ressources/conseils" className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${type === 'conseils' ? 'bg-[#032965] text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Conseils</Link><Link href="/ressources/guides" className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${type === 'guides' ? 'bg-[#032965] text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Guides</Link></div></nav>

      <section className="container-custom py-14 sm:py-20">
        <div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">À explorer</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Des contenus pour avancer</h2></div><p className="hidden text-sm text-slate-500 sm:block">{collection.items.length} ressources</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collection.items.map(([category, title, duration], index) => (
            <article key={title} className="group flex min-h-72 flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${collection.color} text-sm font-bold`}>0{index + 1}</span><span className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">{duration}</span></div>
              <p className="mt-10 text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">{category}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight">{title}</h3>
              <Link href="/contact" className="mt-auto pt-7 text-sm font-bold text-[#032965] group-hover:text-[#438a2c]">Consulter la ressource →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#021d47] py-16 text-center text-white"><div className="container-custom"><p className="text-sm font-bold uppercase tracking-[.18em] text-[#b8dfa7]">Besoin d’aller plus loin ?</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Parlons de votre projet et de vos priorités.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#52a234] px-6 py-3.5 text-sm font-bold text-[#021d47] transition hover:bg-white">Échanger avec NAYGAL</Link></div></section>
    </main>
  )
}
