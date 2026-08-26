import Link from 'next/link'
import Image from 'next/image'

const pillars = [
  {
    number: '01',
    code: 'ORIGIN',
    title: 'Notre histoire',
    description:
      'Comprendre le point de départ de NAYGAL, les idées qui ont donné naissance au projet et les étapes qui façonnent son évolution.',
    href: '/a-propos/notre-histoire',
    image: '/images/a-propos/notre-histoire/pexels-popoola-bolaji-226044498-12286603.jpg',
  },
  {
    number: '02',
    code: 'VISION',
    title: 'Notre vision',
    description:
      'Imaginer un avenir où la technologie devient un véritable levier d’innovation, de compétences et d’opportunités.',
    href: '/a-propos/vision',
    image: '/images/a-propos/vision/pexels-josh-toxic-2157548765-36424379.jpg',
  },
  {
    number: '03',
    code: 'VALUES',
    title: 'Nos valeurs',
    description:
      'Les principes qui déterminent notre façon de travailler, de collaborer, d’innover et de créer de la valeur.',
    href: '/a-propos/valeurs',
    image: '/images/a-propos/valeurs/pexels-ann-h-45017-38748856.jpg',
  },
  {
    number: '04',
    code: 'PEOPLE',
    title: 'Notre équipe',
    description:
      'Les personnes et les compétences qui donnent vie à NAYGAL et transforment les idées en réalisations.',
    href: '/a-propos/equipe',
    image: '/images/a-propos/equipe/pexels-harrun-muhammad-116282236-37198881.jpg',
  },
]

const ecosystem = [
  {
    number: '01',
    title: 'Technology',
    text: 'Infrastructures, cybersécurité, cloud, IA et transformation numérique.',
  },
  {
    number: '02',
    title: 'Education',
    text: 'Développer les compétences et préparer les talents aux métiers du numérique.',
  },
  {
    number: '03',
    title: 'Innovation',
    text: 'Explorer de nouvelles technologies et transformer les idées en solutions.',
  },
  {
    number: '04',
    title: 'Impact',
    text: 'Mettre l’expertise, les ressources et les opportunités au service d’initiatives utiles.',
  },
]

const signals = [
  ['TECH', 'Technologie'],
  ['EDU', 'Transmission'],
  ['IA', 'Intelligence'],
  ['IMPACT', 'Engagement'],
]

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#020817] pt-[72px] text-white">

      {/* =====================================================
          HERO — FUTURISTIC
      ===================================================== */}
      <section className="relative min-h-[780px] overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=90"
            alt="Technologie et réseau numérique"
             fill sizes="100vw"   className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/90 to-[#032965]/55" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        {/* Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#52a234]/20 blur-[140px]" />

        <div className="container-custom relative z-10">

          <div className="flex min-h-[780px] items-center">

            <div className="w-full max-w-6xl">

              {/* Top metadata */}
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.2em] text-slate-400">

                <span className="text-[#68bd49]">NAYGAL</span>

                <span className="h-px w-12 bg-white/20" />

                <span>About / 001</span>

              </div>

              {/* Main title */}
              <h1 className="mt-10 max-w-6xl text-6xl font-semibold leading-[.92] tracking-[-.07em] sm:text-7xl lg:text-[9rem]">

                WE BUILD

                <span className="block text-white/20">
                  WITH
                </span>

                <span className="block text-[#68bd49]">
                  TECHNOLOGY.
                </span>

              </h1>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px] lg:items-end">

                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  NAYGAL est un écosystème technologique qui associe
                  expertise, innovation, éducation et engagement pour
                  contribuer à construire un avenir numérique plus ambitieux.
                </p>

                <div className="border-l border-[#68bd49] pl-5">

                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#68bd49]">
                    Notre approche
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Comprendre.
                    <br />
                    Concevoir.
                    <br />
                    Transmettre.
                    <br />
                    Transformer.
                  </p>

                </div>

              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/a-propos/notre-histoire"
                  className="group inline-flex items-center justify-center gap-3 bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Découvrir notre histoire

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/a-propos/vision"
                  className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                >
                  Explorer notre vision
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom status */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">

          <div className="container-custom">

            <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">

              {signals.map(([code, label]) => (
                <div
                  key={code}
                  className="px-4 py-5 sm:px-6"
                >

                  <p className="text-[10px] font-bold tracking-[.2em] text-[#68bd49]">
                    {code}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 002 — Who we are
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">
                La technologie
                <span className="block text-slate-500">
                  comme point de départ.
                </span>
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-slate-300">
                Nous croyons que l’avenir numérique ne doit pas simplement
                être consommé. Il doit être compris, construit et partagé.
              </p>

              <p className="mt-7 leading-8 text-slate-400">
                NAYGAL développe une approche qui rapproche les technologies
                des réalités des entreprises, des organisations, des
                établissements éducatifs et des communautés.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Notre ambition est de créer des solutions utiles tout en
                participant au développement des compétences nécessaires pour
                les utiliser, les maintenir et les faire évoluer.
              </p>

              <div className="mt-10 h-px w-full bg-white/10" />

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">

                <span className="h-2 w-2 rounded-full bg-[#52a234]" />

                <span>
                  Technology · Education · Innovation · Impact
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          IMAGE STATEMENT
      ===================================================== */}
      <section className="relative">

        <div className="relative h-[600px] overflow-hidden">

          <Image
            src="/images/a-propos/jad20250430-ass-benin-tecnologies-numerique.avif"
            alt="Collaboration et innovation"
             fill sizes="100vw"   className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-transparent to-[#020817]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          <div className="container-custom relative flex h-full items-center">

            <div className="max-w-4xl">

              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#68bd49]">
                The NAYGAL mindset
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-[-.06em] sm:text-7xl">

                THINK.

                <span className="text-white/40">
                  {' '}
                  BUILD.
                </span>

                <br />

                <span className="text-[#68bd49]">
                  IMPACT.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Chaque projet commence par une question. Chaque solution
                doit répondre à un besoin. Et chaque initiative doit chercher
                à produire un impact réel.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOUR PILLARS
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 003 — Explore NAYGAL
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
              Quatre dimensions.
              <span className="block text-slate-500">
                Une même direction.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">

            {pillars.map((pillar) => (
              <Link
                key={pillar.number}
                href={pillar.href}
                className="group relative min-h-[430px] overflow-hidden bg-[#061226]"
              >

                <Image
                  src={pillar.image}
                  alt={pillar.title}
                   fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-45 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/70 to-transparent" />

                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">

                  <div className="flex items-start justify-between">

                    <span className="text-xs font-bold tracking-[.2em] text-[#68bd49]">
                      {pillar.code}
                    </span>

                    <span className="text-xs text-white/40">
                      {pillar.number}
                    </span>

                  </div>

                  <div>

                    <div className="mb-5 h-px w-10 bg-[#52a234] transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 max-w-lg leading-7 text-slate-300">
                      {pillar.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">

                      Explorer

                      <span className="transition group-hover:translate-x-2">
                        →
                      </span>

                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#061226] py-24 sm:py-32">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-[140px]" />

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 004 — Ecosystem
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
                Plus qu’une
                <span className="block text-[#68bd49]">
                  entreprise tech.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-slate-400">
                NAYGAL cherche à construire un écosystème dans lequel
                technologie, transmission et engagement peuvent se renforcer
                mutuellement.
              </p>

            </div>

            <div className="border-t border-white/10">

              {ecosystem.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[70px_180px_1fr] sm:items-center"
                >

                  <span className="text-xs font-bold text-[#68bd49]">
                    {item.number}
                  </span>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-400 transition group-hover:text-slate-200">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NAYGAL / NAYAC / MOVEMENT
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="mb-14">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 005 — The ecosystem
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Trois forces.
              <span className="text-slate-500">
                {' '}
                Un écosystème.
              </span>
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <Link
              href="/expertises"
              className="group border border-white/10 bg-[#061226] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold tracking-[.2em] text-[#68bd49]">
                NAYGAL
              </span>

              <h3 className="mt-12 text-3xl font-semibold">
                Technology
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Concevoir, déployer et sécuriser les infrastructures
                numériques des organisations.
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-white transition group-hover:translate-x-2">
                Explorer →
              </span>

            </Link>

            <Link
              href="/academy"
              className="group border border-white/10 bg-[#061226] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold tracking-[.2em] text-[#68bd49]">
                NAYAC
              </span>

              <h3 className="mt-12 text-3xl font-semibold">
                Education
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Développer les compétences numériques et préparer les talents
                aux opportunités de demain.
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-white transition group-hover:translate-x-2">
                Explorer →
              </span>

            </Link>

            <Link
              href="/mouvement"
              className="group border border-white/10 bg-[#061226] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold tracking-[.2em] text-[#68bd49]">
                LE MOUVEMENT
              </span>

              <h3 className="mt-12 text-3xl font-semibold">
                Impact
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Mobiliser les idées, les compétences et les ressources autour
                d’initiatives porteuses de sens.
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-white transition group-hover:translate-x-2">
                Explorer →
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#52a234] py-24 sm:py-32">

        <div className="absolute inset-0 opacity-[0.08]">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />

        </div>

        <div className="container-custom relative">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.22em] text-white/70">
                / 006 — Let's build
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-.06em] text-white sm:text-7xl">
                L’avenir numérique
                <span className="block text-white/60">
                  commence maintenant.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
                Une idée, un projet, une collaboration ou simplement une
                envie de contribuer ? NAYGAL est ouvert aux possibilités.
              </p>

            </div>

            <div className="flex flex-col gap-3">

              <Link
                href="/contact"
                className="whitespace-nowrap bg-[#020817] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#061226]"
              >
                Parlons de votre projet →
              </Link>

              <Link
                href="/mouvement"
                className="whitespace-nowrap border border-white/40 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Rejoindre le Mouvement
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
