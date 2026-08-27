import Link from 'next/link'
import GrandCarousel from '../../../components/GrandCarousel'
import Image from 'next/image'

function getIcon(title: string) {
  const size = 16
  switch (true) {
    case /design|création|design/i.test(title):
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#032965" />
          <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#52A234" />
        </svg>
      )
    case /photo|vidéo|photographie/i.test(title):
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#032965" strokeWidth="1.2" fill="#fff" />
          <circle cx="12" cy="12" r="2.5" fill="#52A234" />
        </svg>
      )
    case /drone/i.test(title):
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 7a3 3 0 100 6 3 3 0 000-6z" fill="#032965" />
          <path d="M4 7l3 0m10 0l3 0M4 17l3 0m10 0l3 0" stroke="#52A234" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case /science|sciences|expériment/i.test(title):
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M8 2h8l-3 7v6a1 1 0 01-2 0V9L8 2z" fill="#032965" />
          <path d="M9 20h6" stroke="#52A234" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case /entrepreneuriat|innovation|entrepreneur/i.test(title):
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v6" stroke="#032965" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M7 9a5 5 0 1010 0c0-2.76-2-3-2-5H9c0 2-2 2.24-2 5z" fill="#52A234" />
        </svg>
      )
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="#032965" strokeWidth="1.2" fill="#fff" />
        </svg>
      )
  }
}

const parcours = [
  {
    level: '01',
    title: 'Junior',
    age: '6 – 10 ans',
    tagline: 'Je découvre',
    description:
      'Premiers contacts avec le numérique, la logique, la création et les sciences à travers des activités ludiques et concrètes.',
    themes: ['Éveil numérique', 'Logique', 'Créativité', 'Sciences'],
    image: '/images/academy/ateliers/junior.jpg',
    accent: 'bg-[#e8f3ff]',
    badge: 'bg-[#276f91]',
  },
  {
    level: '02',
    title: 'Explorer',
    age: '11 – 14 ans',
    tagline: "J’explore",
    description:
      'Je découvre les technologies, les métiers et les possibilités offertes par le numérique à travers des expériences variées.',
    themes: [
      'Programmation',
      'Robotique',
      'Design',
      'Photographie',
      'Drones',
    ],
    image: '/images/academy/ateliers/explorer.jpg',
    accent: 'bg-[#edf7e7]',
    badge: 'bg-[#52a234]',
  },
  {
    level: '03',
    title: 'Tech',
    age: '15 – 18 ans',
    tagline: 'Je construis',
    description:
      'Je développe des compétences techniques et créatives à travers des projets, des défis et des expériences immersives.',
    themes: [
      'IA',
      'Cybersécurité',
      'Développement',
      'Électronique',
      'Drones',
    ],
    image: '/images/academy/ateliers/Tech.jpg',
    accent: 'bg-[#fff4df]',
    badge: 'bg-[#df8b18]',
  },
  {
    level: '04',
    title: 'Pro',
    age: '18+',
    tagline: 'Je me professionnalise',
    description:
      'Je renforce mes compétences avec des ateliers pratiques orientés vers l’emploi, les projets et les besoins professionnels.',
    themes: [
      'Cloud',
      'Réseaux',
      'IA',
      'Cybersécurité',
      'Automatisation',
    ],
    image: '/images/academy/ateliers/pro.jpg',
    accent: 'bg-[#f1ecff]',
    badge: 'bg-[#7654c8]',
  },
  {
    level: '05',
    title: 'Business',
    age: 'Professionnels & organisations',
    tagline: 'Je transforme',
    description:
      'Des ateliers conçus pour les entreprises, les équipes et les porteurs de projets qui souhaitent exploiter les technologies.',
    themes: [
      'Transformation digitale',
      'IA métier',
      'Innovation',
      'Management',
      'Automatisation',
    ],
    image: '/images/academy/ateliers/business.jpg',
    accent: 'bg-[#eaf6f1]',
    badge: 'bg-[#218c6b]',
  },
]

const explorations = [
  {
    number: '01',
    title: 'Design & création',
    description:
      'Découvrir le design graphique, la création visuelle, l’UI/UX et les outils permettant de transformer une idée en expérience.',
    image: '/images/academy/ateliers/Au-delà de la salle.jpg',
  },
  {
    number: '02',
    title: 'Photographie & vidéo',
    description:
      'Apprendre à observer, cadrer, raconter et produire des contenus visuels avec les bases de la photographie et de la vidéo.',
    image: '/images/academy/ateliers/Tech.jpg',
  },
  {
    number: '03',
    title: 'Drones & exploration',
    description:
      'Découvrir le fonctionnement des drones, leurs usages, la prise de vue aérienne et les technologies qui rendent ces systèmes possibles.',
    image: '/images/academy/ateliers/Drones & exploration.jpg',
  },
  {
    number: '04',
    title: 'Sciences & expérimentation',
    description:
      'Observer, manipuler, tester et comprendre les phénomènes scientifiques grâce à des expériences accessibles et concrètes.',
    image: '/images/academy/ateliers/Sciences & expérimentation.jpg',
  },
  {
    number: '05',
    title: 'Découverte des métiers',
    description:
      'Rencontrer des professionnels, comprendre leurs parcours et découvrir des métiers parfois encore inconnus.',
    image: '/images/academy/ateliers/Découverte des métiers.jpg',
  },
  {
    number: '06',
    title: 'Immersion en entreprise',
    description:
      'Visiter des entreprises, observer leur fonctionnement et comprendre comment les technologies sont utilisées dans le monde professionnel.',
    image: '/images/academy/ateliers/Immersion en entreprise.jpg',
  },
  {
    number: '07',
    title: 'Visites d’écoles & universités',
    description:
      'Découvrir les établissements, les filières, les métiers associés et les différents parcours possibles après le secondaire.',
    image: '/images/academy/ateliers/Visites d’écoles & universités.jpg',
  },
  {
    number: '08',
    title: 'Entrepreneuriat & innovation',
    description:
      'Apprendre à transformer une idée en projet, identifier un besoin et découvrir les premières étapes de l’innovation.',
    image: '/images/academy/ateliers/Entrepreneuriat & innovation.jpg',
  },
]

const pedagogie = [
  {
    number: '01',
    title: 'Comprendre',
    description:
      'Découvrir une technologie, un métier ou un concept à travers des explications simples et adaptées.',
  },
  {
    number: '02',
    title: 'Manipuler',
    description:
      'Prendre en main les outils, expérimenter et apprendre directement par l’action.',
  },
  {
    number: '03',
    title: 'Construire',
    description:
      'Passer de la théorie à un projet concret, individuel ou collectif.',
  },
  {
    number: '04',
    title: 'Partager',
    description:
      'Présenter son travail, expliquer ses choix et apprendre à collaborer avec les autres.',
  },
]

export default function AteliersPage() {
  return (
    <main className="overflow-hidden bg-white pt-[72px] text-[#032965]">

      {/* HERO */}
      <section data-reveal className="relative bg-[#f4f8fd] py-20 sm:py-28">

        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[10%] top-20 h-40 w-40 rounded-full bg-[#d8eaf8] blur-3xl" />
          <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-[#dcefd2] blur-3xl" />
        </div>

        <div className="container-custom relative">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">

            <div>

              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#438a2c] shadow-sm">

                <span className="h-2 w-2 rounded-full bg-[#52a234]" />

                NAYGAL Academy · Ateliers

              </p>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-6xl lg:text-7xl">

                Apprendre autrement.
                <span className="block text-[#52a234]">
                  En faisant.
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">

                Les ateliers NAYGAL ACADEMY proposent des expériences pratiques pour
                découvrir le numérique, les sciences, la création, les métiers
                et les technologies qui façonnent notre monde.

              </p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">

                De l’éveil des plus jeunes aux ateliers destinés aux
                professionnels, chaque expérience est pensée pour apprendre,
                expérimenter, créer et progressivement trouver sa place dans
                un monde en transformation.

              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#parcours"
                  className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition-smooth hover:bg-[#438a2c]"
                >
                  Découvrir les parcours
                </a>

                <Link
                  href="/contact"
                  className="inline-flex justify-center border border-[#032965] px-7 py-4 font-semibold text-[#032965] transition-smooth hover:bg-white"
                >
                  Organiser un atelier
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#b8d7f1]" />

              <div className="absolute -bottom-6 -right-5 h-40 w-40 rounded-full bg-[#d7ebc9]" />

              <div className="relative">
                {/* Carousel hero */}
                <div className="relative overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
                  {/* ImageCarousel will be lazy and autoplay */}
                  <GrandCarousel
                    images={[
                      '/images/academy/ateliers/Grand-caroussel/img1.jpg',
                      '/images/academy/ateliers/Grand-caroussel/pexels-domingos-henriques-3418942-17471222.jpg',
                      '/images/academy/ateliers/Grand-caroussel/pexels-roman-odintsov-11025023(1).jpg',
                      '/images/academy/ateliers/Grand-caroussel/pexels-zeal-creative-studios-58866141-33920046.jpg',
                      '/images/academy/ateliers/Grand-caroussel/img2.jpg',
                    ]}
                    interval={4500}
                  />

                  
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#cfe1ef] bg-white py-14">

        <div className="container-custom">

          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.16em] text-[#438a2c]">
                Une expérience avant tout
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Le meilleur apprentissage commence souvent par une expérience.
              </h2>

            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">

              Un enfant peut découvrir la programmation en construisant un
              petit jeu. Un adolescent peut découvrir un métier en visitant
              une entreprise. Un étudiant peut expérimenter l’intelligence
              artificielle. Un professionnel peut automatiser une tâche
              réelle. C’est cette diversité d’expériences que NAYGAL ACADEMY souhaite
              rendre accessible.

            </p>

          </div>

        </div>

      </section>

      {/* PARCOURS */}
      <section
        data-reveal
        id="parcours"
        className="section-padding bg-[#f4f8fd]"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#438a2c]">
              Un parcours pour chaque étape
            </p>

            <h2 className="mt-3 text-[#032965]">
              De la découverte à la professionnalisation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              NAYGAL ACADEMY accompagne les participants progressivement, avec des
              contenus et des expériences adaptés à leur âge, leur niveau et
              leurs objectifs.

            </p>

          </div>

          <div className="mt-12 space-y-6">

            {parcours.map((item) => (

              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl transition-smooth"
              >

                <div className="grid lg:grid-cols-[.8fr_1.2fr]">

                  <div className="relative min-h-[280px] overflow-hidden">

                    <Image
                      src={encodeURI(item.image)}
                      alt={item.title}
                       fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 transition-smooth will-change-transform"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/80 via-[#032965]/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">

                      <span className="text-sm font-bold tracking-[.16em]">
                        {item.level}
                      </span>

                      <h3 className="mt-2 text-3xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/80">
                        {item.age}
                      </p>

                    </div>

                  </div>

                  <div className="p-7 sm:p-9">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span
                        className={`rounded-full ${item.badge} px-4 py-2 text-xs font-bold uppercase tracking-[.12em] text-white`}
                      >
                        {item.tagline}
                      </span>

                    </div>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">

                      {item.themes.map((theme) => (

                        <span
                          key={theme}
                          className={`${item.accent} rounded-full px-3 py-2 text-xs font-semibold text-[#032965] transition-smooth`}
                        >
                          {theme}
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

      {/* EXPLORATIONS */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.16em] text-[#438a2c]">
                Explorer le monde
              </p>

              <h2 className="mt-3 text-[#032965]">
                Le numérique n’est qu’un début.
              </h2>

            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">

              Les ateliers NAYGAL ACADEMY ouvrent aussi les portes de la création,
              des sciences, de la culture technologique et du monde
              professionnel. L’objectif : permettre à chacun d’explorer des
              domaines différents avant de choisir ceux qui lui correspondent.

            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {explorations.map((item) => (

              <article
                key={item.title}
                className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl transition-smooth"
              >

                <div className="relative h-48 overflow-hidden">

                  <Image
                    src={encodeURI(item.image)}
                    alt={item.title}
                     fill sizes="100vw"   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 transition-smooth"
                  />

                  <div className="absolute left-4 top-4 flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-xs font-bold text-[#032965] shadow">
                      {item.number}
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center text-[#032965]">
                      {getIcon(item.title)}
                    </div>
                  </div>

                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#032965]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* IMMERSION */}
      <section className="bg-[#032965] py-20 text-white sm:py-24">

        <div className="container-custom">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Au-delà de la salle
              </p>

              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">

                Apprendre, c’est aussi rencontrer le monde réel.

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">

                NAYGAL ACADEMY souhaite créer des passerelles entre les apprenants,
                les écoles, les universités, les entreprises et les
                professionnels.

              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Visites d’entreprises',
                  'Rencontres avec des professionnels',
                  'Visites d’écoles et universités',
                  'Démonstrations technologiques',
                  'Sorties éducatives et découvertes',
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#52a234] text-sm">
                      ✓
                    </span>

                    <span className="text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="group relative h-[420px] overflow-hidden rounded-[1.5rem] transition-smooth hover:shadow-xl">

              <Image
                src={encodeURI('/images/academy/ateliers/Decouvrir_son_environnement.jpg')}
                alt="Jeunes découvrant leur environnement éducatif"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032965] via-transparent to-transparent transition-opacity duration-500" />

              <div className="absolute bottom-7 left-7 right-7">

                <p className="text-lg font-semibold">
                  Découvrir son environnement.
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Comprendre les possibilités qui existent autour de soi.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f4f8fd] text-center">

        <div className="container-custom">

          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#438a2c]">
            Construisons l’expérience ensemble
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-[#032965]">
            Vous souhaitez organiser un atelier NAYGAL ACADEMY ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Établissement scolaire, entreprise, association, collectivité ou
            organisation : nous pouvons construire un atelier adapté à votre
            public, votre contexte et vos objectifs.

          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Organiser un atelier →
            </Link>

            <Link
              href="/academy/formations"
              className="inline-flex justify-center border border-[#032965] px-7 py-4 font-semibold text-[#032965] transition hover:bg-white"
            >
              Voir les formations
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}