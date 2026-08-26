import Link from 'next/link'
import Image from 'next/image'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata = {
  title: 'Projets NAYGAL | Innovation numérique et solutions concrètes',
  description: 'Découvrez les projets NAYGAL en infrastructure, IA, cybersécurité, traveltech, worktech et innovation numérique pour les organisations africaines.',
  alternates: {
    canonical: `${SITE}/projets`,
  },
  openGraph: {
    title: 'Projets NAYGAL | Innovation numérique et solutions concrètes',
    description: 'Découvrez les projets NAYGAL en infrastructure, IA, cybersécurité, traveltech, worktech et innovation numérique pour les organisations africaines.',
    url: `${SITE}/projets`,
  },
}

const projets = [
  {
    number: '01',
    title: 'IXP-Observer',
    subtitle: "Cartographie de l'Internet au Cameroun",
    category: 'Infrastructure & Internet',
    status: 'En conception',
    statusColor: 'bg-[#e8f3ff] text-[#276f91]',
    description:
      "Un projet d'observation et de cartographie destiné à mieux comprendre la structure, les interconnexions et l'évolution de l'écosystème Internet au Cameroun.",
    problem:
      "L'écosystème Internet est complexe à observer : réseaux, opérateurs, infrastructures, interconnexions et échanges de trafic forment un environnement difficile à représenter simplement.",
    solution:
      "IXP-Observer ambitionne de proposer une représentation accessible des infrastructures et interconnexions qui participent au fonctionnement de l'Internet camerounais.",
    tags: ['Internet', 'IXP', 'Réseaux', 'Data', 'Cartographie'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '02',
    title: 'OPEP',
    subtitle: 'Application de gestion des agences de voyage',
    category: 'TravelTech',
    status: 'À finaliser',
    statusColor: 'bg-[#fff4df] text-[#b36d08]',
    description:
      "Une solution de gestion destinée aux agences de voyage pour centraliser leurs opérations et simplifier leur gestion quotidienne.",
    problem:
      "Les agences doivent gérer simultanément les clients, réservations, opérations et informations administratives avec des outils parfois dispersés.",
    solution:
      "OPEP vise à réunir les principales opérations d'une agence au sein d'une même plateforme de gestion.",
    tags: ['TravelTech', 'Gestion', 'Réservations', 'CRM'],
    image: '/images/projets/opep/IMG-20260605-WA0002.jpg',
  },
  {
    number: '03',
    title: 'Présence PME',
    subtitle: 'Système de gestion des présences pour les entreprises africaines',
    category: 'WorkTech',
    status: 'À finaliser',
    statusColor: 'bg-[#fff4df] text-[#b36d08]',
    description:
      "Un système de gestion des présences pensé pour les réalités opérationnelles des PME africaines.",
    problem:
      "Le suivi des présences, horaires, absences et retards peut rapidement devenir complexe lorsque les entreprises utilisent des méthodes manuelles ou plusieurs outils différents.",
    solution:
      "Une solution adaptée aux PME permettant de centraliser le suivi des collaborateurs et de faciliter l'exploitation des données de présence.",
    tags: ['RH', 'PME', 'Présence', 'Gestion'],
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '04',
    title: 'Sentinelle IA',
    subtitle: 'Un SOC accessible aux PME',
    category: 'Cybersécurité & IA',
    status: 'En conception',
    statusColor: 'bg-[#edf7e7] text-[#438a2c]',
    description:
      "Un projet de Security Operations Center assisté par l'intelligence artificielle, conçu pour rendre la surveillance de sécurité plus accessible aux PME.",
    problem:
      "Les PME disposent rarement des ressources nécessaires pour mettre en place une surveillance de sécurité avancée comparable à celle des grandes organisations.",
    solution:
      "Sentinelle IA explore une approche combinant automatisation, analyse et intelligence artificielle afin de proposer une surveillance adaptée aux moyens des PME.",
    tags: ['SOC', 'IA', 'Cybersécurité', 'PME'],
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '05',
    title: 'NAYGAL Marketing',
    subtitle: 'Agence de marketing en ligne',
    category: 'Marketing digital',
    status: 'En conception',
    statusColor: 'bg-[#e8f3ff] text-[#276f91]',
    description:
      "Une initiative dédiée à l'accompagnement des organisations dans leur présence numérique et leur développement en ligne.",
    problem:
      "De nombreuses structures disposent d'une activité intéressante mais peinent à construire une présence numérique cohérente et régulière.",
    solution:
      "Une offre combinant stratégie digitale, création de contenu, présence en ligne, campagnes numériques et accompagnement.",
    tags: ['Marketing', 'Digital', 'Communication', 'Branding'],
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '06',
    title: 'NAYAC Online',
    subtitle: 'Plateforme éducative africaine',
    category: 'EdTech',
    status: 'À finaliser',
    statusColor: 'bg-[#fff4df] text-[#b36d08]',
    description:
      "La déclinaison en ligne de NAYGAL Academy : une plateforme éducative pensée pour faciliter l'accès aux contenus, formations et expériences d'apprentissage.",
    problem:
      "L'accès à certaines ressources éducatives et compétences numériques reste inégal, tandis que de nombreux contenus sont peu adaptés aux contextes locaux.",
    solution:
      "NAYAC Online ambitionne de proposer un environnement numérique permettant d'apprendre, de pratiquer et de progresser autour de compétences adaptées aux réalités africaines.",
    tags: ['EdTech', 'Formation', 'E-learning', 'NAYAC'],
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '07',
    title: 'Vacances Actives',
    subtitle: 'Plateforme de publication des activités pendant les vacances',
    category: 'Education & Jeunesse',
    status: 'En conception',
    statusColor: 'bg-[#edf7e7] text-[#438a2c]',
    description:
      "Une plateforme destinée à rendre visibles les activités proposées aux jeunes pendant les périodes de vacances.",
    problem:
      "Les familles et les jeunes disposent souvent de peu de visibilité sur les activités éducatives, culturelles, sportives ou technologiques disponibles pendant les vacances.",
    solution:
      "Une plateforme permettant aux structures de publier leurs activités et aux familles de découvrir plus facilement les opportunités disponibles.",
    tags: ['Jeunesse', 'Éducation', 'Vacances', 'Plateforme'],
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85',
  },
]

const domaines = [
  'Infrastructure Internet',
  'Cybersécurité',
  'Intelligence artificielle',
  'EdTech',
  'TravelTech',
  'WorkTech',
  'Marketing digital',
]

export default function ProjetsPage() {
  return (
    <main className="overflow-hidden bg-white pt-[72px] text-[#032965]">

      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#032965] text-white">
        <Image
          src="/images/projets/h-proj.webp"
          alt="Technologies et innovation"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#032965]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/75 via-[#032965]/45 to-[#032965]/25" />

        <div className="container-custom relative z-10">
          <div className="grid min-h-[720px] items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">

            <div className="py-20 lg:max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#52a234]" />
                NAYGAL · Projets & Innovation
              </p>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
                Transformer les idées en
                <span className="block text-[#77bb43]"> solutions.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                NAYGAL développe et expérimente des solutions numériques
                répondant à des problématiques concrètes dans les domaines
                de l'éducation, des infrastructures, de la cybersécurité,
                des entreprises et de la société.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projets"
                  className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Découvrir nos projets
                </a>

                <Link
                  href="/contact"
                  className="inline-flex justify-center border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Proposer un projet
                </Link>
              </div>
            </div>

            <div className="hidden lg:block" />

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#cfe1ef] bg-[#e8f3ff] py-8">
        <div className="container-custom">
          <div className="grid gap-5 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <p className="font-semibold text-[#032965]">
              Notre laboratoire d'idées
            </p>

            <p className="leading-7 text-slate-600">
              Certains projets deviennent des produits, d'autres servent
              d'expérimentation ou de preuve de concept. Tous ont un point
              commun : partir d'un problème réel pour explorer une réponse
              technologique pertinente.
            </p>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="section-padding">
        <div className="container-custom">

          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">
              Projets en cours de conception
            </p>

            <h2 className="mt-3 text-[#032965]">
              Des projets différents, une même ambition.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explorer des technologies utiles, concevoir des solutions
              adaptées à notre environnement et créer des outils capables
              d'avoir un impact concret.
            </p>
          </div>

          <div className="mt-14 space-y-8">

            {projets.map((projet, index) => (
              <article
                key={projet.title}
                className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-[.9fr_1.1fr]">

                  {/* IMAGE */}
                  <div className="relative min-h-[300px] overflow-hidden">

                    <Image
                      src={projet.image}
                      alt={projet.title}
                       fill sizes="100vw"   className={
                        projet.title === 'OPEP'
                          ? 'absolute inset-0 h-full w-full bg-white object-contain'
                          : 'absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                      }
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <span className="text-sm font-bold text-[#a4d78f]">
                        {projet.number}
                      </span>

                      <p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-white/80">
                        {projet.category}
                      </p>
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-7 sm:p-9 lg:p-10">

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${projet.statusColor}`}
                      >
                        {projet.status}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-[.12em] text-slate-400">
                        Projet NAYGAL
                      </span>
                    </div>

                    <h3 className="mt-7 text-3xl font-semibold tracking-tight text-[#032965]">
                      {projet.title}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-[#52a234]">
                      {projet.subtitle}
                    </p>

                    <p className="mt-5 leading-7 text-slate-600">
                      {projet.description}
                    </p>

                    <div className="mt-8 grid gap-6 border-t border-slate-100 pt-7 sm:grid-cols-2">

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#276f91]">
                          Le problème
                        </p>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {projet.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">
                          Notre approche
                        </p>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {projet.solution}
                        </p>
                      </div>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {projet.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* DOMAINES */}
      <section className="border-y border-slate-100 bg-[#f4f8fd] py-20 sm:py-24">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">

            <div>
              <p className="eyebrow text-[#438a2c]">
                Terrains d'exploration
              </p>

              <h2 className="mt-3 text-[#032965]">
                Là où technologie et enjeux locaux se rencontrent.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Nos projets ne sont pas limités à un seul secteur. Nous
              explorons différentes disciplines lorsque la technologie
              peut contribuer à résoudre un problème concret.
            </p>

          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {domaines.map((domaine, index) => (
              <div
                key={domaine}
                className="border-l-2 border-[#52a234] bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold text-[#276f91]">
                  0{index + 1}
                </span>

                <p className="mt-6 font-semibold text-[#032965]">
                  {domaine}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-[#438a2c]">
              De l'idée au produit
            </p>

            <h2 className="mt-3 text-[#032965]">
              Tous les projets passent par une phase d'exploration.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Une idée n'est pas encore une solution. Nous la confrontons
              progressivement aux besoins, aux contraintes techniques et
              aux réalités du terrain.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-5">

            {[
              ['01', 'Idée', 'Identifier une problématique.'],
              ['02', 'Recherche', 'Explorer les possibilités.'],
              ['03', 'Prototype', 'Construire une première version.'],
              ['04', 'Test', 'Confronter la solution au terrain.'],
              ['05', 'Évolution', 'Améliorer et préparer la suite.'],
            ].map(([number, title, description], index) => (
              <div
                key={title}
                className="relative border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-bold text-[#52a234]">
                  {number}
                </span>

                <h3 className="mt-7 font-semibold text-[#032965]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>

                {index < 4 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-[#52a234] md:block">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PARTICIPER */}
      <section className="border-y border-[#d5e2d0] bg-[#edf7e7] py-20 sm:py-24">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

            <div>
              <p className="eyebrow text-[#438a2c]">
                Vous avez une idée ?
              </p>

              <h2 className="mt-3 text-[#032965]">
                Certains projets peuvent naître avec vous.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                NAYGAL travaille également avec des entreprises,
                établissements, associations et porteurs de projets pour
                transformer des problématiques concrètes en solutions
                numériques.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Soumettre une idée →
              </Link>
            </div>

            <div className="bg-white p-7 shadow-sm sm:p-9">

              <p className="text-sm font-bold uppercase tracking-[.15em] text-[#276f91]">
                Collaboration
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-[#032965]">
                Nous pouvons intervenir sur plusieurs niveaux.
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  'Étude et cadrage',
                  'Prototype / preuve de concept',
                  'Développement',
                  'Intégration',
                  'Expérimentation terrain',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-100 pb-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#52a234]" />
                    <span className="text-sm font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#032965] py-20 text-white sm:py-24">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                NAYGAL · Innovation
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Une idée mérite parfois simplement qu'on commence à la construire.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Vous avez une problématique, une idée de produit ou un besoin
                qui pourrait être résolu par la technologie ? Parlons-en.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Parlons de votre projet →
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}
