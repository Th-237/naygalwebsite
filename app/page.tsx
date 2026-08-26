import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'

const heroSlides = [
  {
    src: '/images/home/caroussel_principal/Hacking-ARTP-1.webp',
    alt: "Équipe travaillant autour d'un projet numérique",
  },
  {
    src: '/images/home/caroussel_principal/pexels-brett-sayles-2881224.jpg',
    alt: 'Équipe collaborative',
  },
  {
    src: '/images/home/caroussel_principal/pexels-roman-odintsov-11025019.jpg',
    alt: 'Formation technologique',
  },
  {
    src: '/images/home/caroussel_principal/pexels-sejio402-6429140.jpg',
    alt: 'Infrastructure informatique',
  },
  {
    src: '/images/home/caroussel_principal/pexels-magda-ehlers-pexels-34182367.jpg',
    alt: 'Technologies numériques',
  },
  {
    src: '/images/home/caroussel_principal/pexels-ron-lach-10638075.jpg',
    alt: 'Collaboration autour d’un projet',
  },
]

const quickLinks = [
  {
    title: 'Services',
    description: 'Infrastructure, réseaux, cloud, cybersécurité et IA.',
    href: '/services',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
  },
  {
    title: 'NAYGAL Academy',
    description: 'Former les talents numériques de demain.',
    href: '/academy',
    image: '/images/home/NAYGALACADEMY.jpg',
  },
  {
    title: 'Nos projets',
    description: 'Découvrir les solutions que nous concevons.',
    href: '/projets',
    image: '/images/home/NOSPROJETS.png',
  },
  {
    title: 'À propos',
    description: 'Comprendre NAYGAL, notre vision et notre histoire.',
    href: '/a-propos',
    image: '/images/home/images.jpeg',
  },
]

const services = [
  {
    number: '01',
    title: 'Infrastructure',
    description:
      'Concevoir des infrastructures informatiques fiables, évolutives et adaptées à votre organisation.',
    href: '/services/infrastructure',
  },
  {
    number: '02',
    title: 'Réseaux',
    description:
      'Connecter vos équipes, vos sites et vos équipements avec des réseaux performants et sécurisés.',
    href: '/services/reseaux',
  },
  {
    number: '03',
    title: 'Cybersécurité',
    description:
      'Prévenir, détecter et répondre aux menaces qui ciblent vos systèmes et vos données.',
    href: '/services/cybersecurite',
  },
  {
    number: '04',
    title: 'Cloud',
    description:
      'Exploiter le cloud avec une approche maîtrisée, sécurisée et adaptée à vos besoins.',
    href: '/services/cloud',
  },
  {
    number: '05',
    title: 'Automatisation IA',
    description:
      'Transformer les tâches répétitives en processus intelligents et plus efficaces.',
    href: '/services/automatisation-ia',
  },
  {
    number: '06',
    title: 'Maintenance',
    description:
      'Maintenir vos équipements et systèmes opérationnels dans la durée.',
    href: '/services/maintenance',
  },
]

const problems = [
  {
    title: 'Votre informatique vous ralentit ?',
    description:
      'Nous identifions les points de blocage et construisons une infrastructure plus fiable.',
  },
  {
    title: 'Vos données sont difficiles à maîtriser ?',
    description:
      'Nous vous aidons à centraliser, organiser, sauvegarder et sécuriser votre information.',
  },
  {
    title: 'Vous voulez automatiser votre activité ?',
    description:
      'Nous identifions les processus pouvant être améliorés par les logiciels, l’automatisation et l’IA.',
  },
  {
    title: 'Vous souhaitez développer les compétences de vos équipes ?',
    description:
      'NAYGAL Academy propose des formations et ateliers adaptés aux différents niveaux.',
  },
]

const projects = [
  {
    title: 'IXP-Observer',
    category: 'Infrastructure numérique',
    description:
      "Cartographier et mieux comprendre l'écosystème Internet au Cameroun.",
    href: '/projets',
    image: '/images/home/ixp-observer.jpg',
  },
  {
    title: 'Sentinelle IA',
    category: 'Cybersécurité',
    description:
      'Un système SOC pensé pour rendre la cybersécurité plus accessible aux PME.',
    href: '/projets',
    image: '/images/home/sentinelleia.webp',
  },
  {
    title: 'NAYAC Online',
    category: 'Éducation numérique',
    description:
      'Une plateforme éducative africaine pour apprendre, pratiquer et progresser.',
    href: '/projets',
    image: '/images/home/NAYACONLINE.jpg',
  },
]

const academyCards = [
  {
    title: 'Formations',
    description:
      'Des parcours progressifs pour acquérir des compétences numériques utiles.',
    href: '/academy/formations',
  },
  {
    title: 'Ateliers',
    description:
      'Des expériences pratiques autour du numérique, des sciences, de la création et des métiers.',
    href: '/academy/ateliers',
  },
  {
    title: 'Événements',
    description:
      'Des rencontres pour découvrir, expérimenter et partager.',
    href: '/academy/evenements',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#032965] lg:min-h-[700px]">

        <div className="absolute inset-0">
          <HeroCarousel slides={heroSlides} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/75 to-[#032965]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-[#032965]/20" />

        {/* Hero content */}
        <div className="container-custom relative z-10 flex min-h-[650px] items-end pb-20 pt-32 lg:min-h-[700px]">

          <div className="max-w-4xl">

            <div className="mb-7 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#71b224]" />

              <span className="text-xs font-bold uppercase tracking-[.2em] text-white/80">
                NAYGAL · Technologie & Innovation
              </span>

            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] text-white sm:text-6xl lg:text-8xl">

              Le numérique
              <span className="block text-[#71b224]">
                commence ici.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">

              NAYGAL accompagne les entreprises, établissements et
              organisations africaines dans la conception, la sécurisation et
              l'évolution de leurs environnements numériques.

            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-[#71b224] px-7 py-4 font-semibold text-white transition hover:bg-[#5d9b1c]"
              >
                Découvrir nos services
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#032965]"
              >
                Parlons de votre projet
              </Link>

            </div>

          </div>

        </div>

        {/* Indicateurs carousel */}
        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-2 sm:flex">

          <span className="h-1.5 w-10 bg-white" />
          <span className="h-1.5 w-5 bg-white/40" />
          <span className="h-1.5 w-5 bg-white/40" />
          <span className="h-1.5 w-5 bg-white/40" />
          <span className="h-1.5 w-5 bg-white/40" />
          <span className="h-1.5 w-5 bg-white/40" />

        </div>

      </section>


      {/* =========================================================
          QUICK LINKS
      ========================================================= */}

      <section className="border-b border-slate-200 bg-white">

        <div className="container-custom">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            {quickLinks.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="group border-b border-slate-200 p-5 transition hover:bg-[#f4f8fb] sm:border-r lg:border-b-0"
              >

                <div className="relative mb-5 h-32 overflow-hidden">

                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#032965]/20 transition group-hover:bg-[#032965]/5" />

                </div>

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-lg font-semibold text-[#032965]">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-5 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                  <span className="ml-4 mt-1 shrink-0 text-xl text-[#276f91] transition group-hover:translate-x-1 group-hover:text-[#52a234]">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">
                Notre mission
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-5xl">

                Rendre la technologie utile, accessible et durable.

              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-600">

                Nous croyons que la transformation numérique ne consiste pas
                simplement à acheter de nouveaux outils.

              </p>

              <p className="mt-6 text-lg leading-8 text-slate-500">

                Elle consiste à comprendre les besoins, concevoir les bonnes
                solutions, développer les compétences et construire des
                infrastructures capables d'évoluer avec les organisations.

              </p>

              <Link
                href="/a-propos"
                className="mt-8 inline-flex items-center font-semibold text-[#032965] hover:text-[#438a2c]"
              >
                Découvrir NAYGAL
                <span className="ml-2">→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PROBLEMS
      ========================================================= */}

      <section className="bg-[#f5f8fb] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#276f91]">
              Vous êtes confronté à...
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-[#032965] sm:text-5xl">

              Des problèmes numériques concrets ?

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              Nous partons du problème avant de choisir la technologie.

            </p>

          </div>

          <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">

            {problems.map((problem, index) => (

              <div
                key={problem.title}
                className="group bg-white p-8 transition hover:bg-[#f9fbfd] sm:p-10"
              >

                <span className="text-xs font-bold text-[#52a234]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 max-w-md text-2xl font-semibold text-[#032965]">
                  {problem.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-600">
                  {problem.description}
                </p>

                <div className="mt-7 h-px w-8 bg-[#52a234] transition-all duration-300 group-hover:w-16" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">
                Nos services
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-[#032965] sm:text-5xl">

                Tout ce dont votre environnement numérique a besoin.

              </h2>

            </div>

            <Link
              href="/services"
              className="font-semibold text-[#032965] hover:text-[#438a2c]"
            >
              Voir tous les services →
            </Link>

          </div>

          <div className="mt-12 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <Link
                key={service.number}
                href={service.href}
                className="group min-h-[250px] border-b border-r border-slate-200 p-7 transition hover:bg-[#f5f8fb]"
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs font-bold text-[#52a234]">
                    {service.number}
                  </span>

                  <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#52a234]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-2xl font-semibold text-[#032965]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <p className="mt-7 text-sm font-semibold text-[#276f91]">
                  Découvrir →
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED PROJECT
      ========================================================= */}

      <section className="bg-[#f5f8fb] py-20 sm:py-28">

        <div className="container-custom">

          <div className="mb-10 flex items-end justify-between gap-6">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#276f91]">
                Projets
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-[#032965] sm:text-5xl">
                Ce que nous construisons.
              </h2>

            </div>

            <Link
              href="/projets"
              className="hidden font-semibold text-[#032965] hover:text-[#438a2c] sm:block"
            >
              Tous les projets →
            </Link>

          </div>


          {/* Projet principal */}

          <Link
            href={projects[0].href}
            className="group relative block min-h-[500px] overflow-hidden bg-[#032965]"
          >

            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/95 via-[#032965]/60 to-transparent" />

            <div className="relative flex min-h-[500px] items-end p-8 sm:p-12 lg:p-16">

              <div className="max-w-2xl text-white">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  {projects[0].category}
                </p>

                <h3 className="mt-4 text-4xl font-semibold sm:text-5xl">
                  {projects[0].title}
                </h3>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                  {projects[0].description}
                </p>

                <span className="mt-8 inline-flex bg-white px-6 py-3.5 font-semibold text-[#032965] transition group-hover:bg-[#71b224] group-hover:text-white">
                  Découvrir le projet →
                </span>

              </div>

            </div>

          </Link>


          {/* Petits projets */}

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {projects.slice(1).map((project) => (

              <Link
                key={project.title}
                href={project.href}
                className="group relative min-h-[320px] overflow-hidden bg-[#032965]"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/95 via-[#032965]/30 to-transparent" />

                <div className="relative flex min-h-[320px] items-end p-7 text-white">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#a4d78f]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-block font-semibold text-white">
                      En savoir plus →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          ACADEMY
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid items-stretch lg:grid-cols-[1.05fr_.95fr]">

            {/* Image */}

            <div className="relative min-h-[480px] overflow-hidden">

              <Image
                src="/images/home/NAYAC/en_salle.jpg"
                alt="Jeunes apprenants"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/90 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  NAYGAL Academy · NAYAC
                </p>

                <p className="mt-3 text-3xl font-semibold">
                  Apprendre.
                  <br />
                  Pratiquer.
                  <br />
                  Construire.
                </p>

              </div>

            </div>


            {/* Content */}

            <div className="bg-[#eaf3f9] p-8 sm:p-12 lg:p-16">

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#438a2c]">
                NAYAC
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-5xl">

                Former les talents numériques de demain.

              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">

                Des parcours allant de la découverte du numérique aux
                compétences professionnelles, avec une approche centrée sur
                la pratique.

              </p>

              <div className="mt-9 divide-y divide-[#032965]/10 border-y border-[#032965]/10">

                {academyCards.map((card) => (

                  <Link
                    key={card.title}
                    href={card.href}
                    className="group flex items-center justify-between gap-5 py-5"
                  >

                    <div>

                      <h3 className="font-semibold text-[#032965]">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        {card.description}
                      </p>

                    </div>

                    <span className="shrink-0 text-xl text-[#276f91] transition group-hover:translate-x-1 group-hover:text-[#52a234]">
                      →
                    </span>

                  </Link>

                ))}

              </div>

              <Link
                href="/academy"
                className="mt-9 inline-flex bg-[#032965] px-7 py-4 font-semibold text-white transition hover:bg-[#021f50]"
              >
                Découvrir NAYGAL Academy →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          NAYTECH ROOM
      ========================================================= */}

      <section className="bg-[#f5f8fb] py-20 sm:py-28">

        <div className="container-custom">

          <div className="relative overflow-hidden bg-[#032965]">

            <Image
              src="/images/home/NAYTECHROOM.png"
              alt="Salle de formation informatique"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032965] via-[#032965]/85 to-[#032965]/30" />

            <div className="relative p-8 sm:p-12 lg:p-16">

              <div className="max-w-3xl">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  NAYTECH ROOM
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-5xl">

                  Une salle pour apprendre la technologie en la pratiquant.

                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100/75">

                  Un espace NAYAC dédié aux formations, ateliers, projets
                  collaboratifs, réseaux, cybersécurité, robotique,
                  développement et intelligence artificielle.

                </p>

                <Link
                  href="/academy/ateliers"
                  className="mt-8 inline-flex bg-[#71b224] px-7 py-4 font-semibold text-white transition hover:bg-[#5d9b1c]"
                >
                  Découvrir NAYTECH ROOM →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MOUVEMENT
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid items-stretch lg:grid-cols-2">

            <div className="relative min-h-[420px] overflow-hidden">

              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1800&q=90"
                alt="Communauté réunie autour d'une initiative"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/90 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Le Mouvement NAYGAL
                </p>

              </div>

            </div>

            <div className="flex flex-col justify-center bg-[#032965] p-8 text-white sm:p-12 lg:p-16">

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Construire ensemble
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">

                Et si nous construisions le numérique ensemble ?

              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100/75">

                NAYGAL rassemble entreprises, experts, établissements,
                étudiants et partenaires autour d'une même ambition :
                contribuer à une transformation numérique utile et durable.

              </p>

              <Link
                href="/mouvement"
                className="mt-8 inline-flex w-fit bg-white px-7 py-4 font-semibold text-[#032965] transition hover:bg-[#edf7e7]"
              >
                Découvrir le mouvement →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#71b224]">

        <div className="container-custom py-20 sm:py-24">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
                Votre prochain projet
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-.04em] text-white sm:text-6xl">

                Une idée, un problème ou un projet numérique ?

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">

                Commençons par en parler. Nous verrons ensemble ce qui peut
                être amélioré, automatisé, sécurisé ou construit.

              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center bg-[#032965] px-8 py-4 font-semibold text-white transition hover:bg-[#021f50]"
            >
              Parlons de votre projet
              <span className="ml-3">→</span>
            </Link>

          </div>

        </div>

      </section>
    </main>
  )
}
