import Link from 'next/link'
import Image from 'next/image'
import GrandCarousel from '../../components/GrandCarousel'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata = {
  title: 'NAYGAL Academy | Formations, ateliers et événements numériques',
  description: 'NAYGAL Academy accompagne les élèves, étudiants, professionnels et organisations avec des formations, ateliers et événements sur le numérique.',
  alternates: {
    canonical: `${SITE}/academy`,
  },
  openGraph: {
    title: 'NAYGAL Academy | Formations, ateliers et événements numériques',
    description: 'NAYGAL Academy accompagne les élèves, étudiants, professionnels et organisations avec des formations, ateliers et événements sur le numérique.',
    url: `${SITE}/academy`,
  },
}

const programmes = [
  {
    number: '01',
    title: 'Formations',
    eyebrow: 'APPRENDRE',
    description:
      'Des parcours structurés pour acquérir des compétences numériques recherchées et construire un véritable savoir-faire.',
    href: '/academy/formations',
    image:
      '/images/academy/NOS-PROGRAMMES-1.png',
    accent: 'bg-[#276f91]',
  },
  {
    number: '02',
    title: 'Ateliers',
    eyebrow: 'EXPÉRIMENTER',
    description:
      'Des expériences courtes et pratiques pour manipuler, créer, résoudre des problèmes et apprendre autrement.',
    href: '/academy/ateliers',
    image:
      '/images/academy/NOS-PROGRAMMES-2.webp',
    accent: 'bg-[#52a234]',
  },
  {
    number: '03',
    title: 'Événements',
    eyebrow: 'CONNECTER',
    description:
      'Des rencontres, conférences et initiatives pour rapprocher les apprenants, les professionnels et l’écosystème.',
    href: '/academy/evenements',
    image:
      '/images/academy/NOS-PROGRAMMES-3.png',
    accent: 'bg-[#df8b18]',
  },
]

const audiences = [
  {
    number: '01',
    title: 'Élèves & étudiants',
    description:
      'Construisez vos premières compétences numériques, découvrez les métiers de la technologie et préparez votre avenir.',
    image: '/images/academy/POUR-CHAQUE-PARCOUR-1.jpg',
  },
  {
    number: '02',
    title: 'Professionnels',
    description:
      'Développez des compétences directement utiles pour évoluer, gagner en productivité et mieux utiliser le numérique.',
    image: '/images/academy/POUR-CHAQUE-PARCOUR-2.jpeg',
  },
  {
    number: '03',
    title: 'Organisations',
    description:
      'Faites progresser vos équipes grâce à des formations et ateliers construits autour de vos outils et de vos enjeux.',
    image: '/images/academy/POUR-CHAQUE-PARCOUR-3.jpg',
  },
]

const competences = [
  {
    number: '01',
    title: 'Réseaux',
    description: 'Connecter les personnes, les systèmes et les infrastructures.',
  },
  {
    number: '02',
    title: 'Cybersécurité',
    description: 'Comprendre les menaces et développer les bons réflexes.',
  },
  {
    number: '03',
    title: 'Intelligence artificielle',
    description: 'Découvrir et exploiter les nouvelles possibilités de l’IA.',
  },
  {
    number: '04',
    title: 'Développement',
    description: 'Transformer une idée en solution numérique.',
  },
  {
    number: '05',
    title: 'Robotique & électronique',
    description: 'Apprendre en construisant et en expérimentant.',
  },
]

const values = [
  ['ACCESSIBLE', 'Rendre les compétences numériques accessibles au plus grand nombre.'],
  ['PRATIQUE', 'Passer de la théorie à la réalisation concrète.'],
  ['LOCAL', 'Construire des compétences adaptées aux réalités de nos territoires.'],
  ['AMBITION', 'Préparer les talents aux opportunités numériques de demain.'],
]

export default function AcademyPage() {
  return (
    <main className="overflow-hidden bg-white pt-[72px] text-[#032965]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section data-reveal className="relative min-h-[720px] overflow-hidden bg-[#032965] text-white">

        <GrandCarousel />
        <div className="absolute inset-0 bg-[#032965]/10 sm:bg-[#032965]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/70 via-[#032965]/45 to-[#032965]/25 sm:from-[#032965]/50 sm:via-[#032965]/25 sm:to-[#032965]/10" />

        <div className="container-custom relative z-10">
          <div className="grid min-h-[720px] items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">

            <div className="py-20">

              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#68bd49]" />
                <span className="text-xs font-bold uppercase tracking-[.18em]">
                  NAYGAL Academy · Progamme digital
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl lg:text-7xl">
                Les compétences qui
                <span className="block text-[#68bd49]">
                  construisent l’avenir.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-blue-100 sm:text-xl md:text-lg md:leading-8">
                NAYAGAL ACADEMY rend les compétences numériques accessibles, concrètes
                et utiles. Pour apprendre, expérimenter, évoluer et construire
                des solutions qui répondent aux réalités de notre monde.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/academy/formations"
                  className="inline-flex justify-center rounded-md bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Découvrir les formations
                </Link>

                <Link
                  href="/academy/ateliers"
                  className="inline-flex justify-center rounded-md border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Explorer les ateliers
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#68bd49]" />
                  Apprentissage pratique
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#68bd49]" />
                  Jeunes & professionnels
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#68bd49]" />
                  Formation & innovation
                </span>
              </div>

            </div>

            {/* HERO CARD removed — grand carousel takes full hero */}

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / MANIFESTO
      ========================================================= */}
      <section data-reveal className="relative bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Notre ambition
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#032965] sm:text-5xl">
                Le numérique ne doit pas être réservé à quelques-uns.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-slate-600">
                NAYGAL ACADEMY est né d’une conviction simple : les compétences
                numériques peuvent ouvrir des portes, créer des opportunités
                et transformer des parcours.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                Nous voulons contribuer à construire une génération capable
                non seulement d’utiliser la technologie, mais aussi de la
                comprendre, de la créer et de l’adapter à ses propres besoins.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROGRAMMES
      ========================================================= */}
      <section data-reveal className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
                Nos programmes
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#032965]">
                Un même écosystème.
                <span className="block text-[#52a234]">
                  Trois façons d’apprendre.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600">
              Formation longue, expérience pratique ou événement ponctuel :
              chacun peut trouver son propre chemin avec NAYGAL ACADEMY.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {programmes.map((programme) => (
              <Link
                key={programme.title}
                href={programme.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/90 via-[#032965]/20 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${programme.accent} text-sm font-bold text-white shadow-lg`}
                    >
                      {programme.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-bold tracking-[.18em] text-white/70">
                      {programme.eyebrow}
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      {programme.title}
                    </h3>
                  </div>

                </div>

                <div className="p-7">

                  <p className="leading-7 text-slate-600">
                    {programme.description}
                  </p>

                  <span className="mt-7 inline-flex font-semibold text-[#032965] transition group-hover:translate-x-2 group-hover:text-[#52a234]">
                    Découvrir →
                  </span>

                </div>

              </Link>
            ))}

          </div>                              

        </div>
      </section>

      {/* =========================================================
          NAYGAL ACADEMY DANS VOTRE ECOLE
      ========================================================= */}
      <section data-reveal className="border-y border-[#cfe1ef] bg-[#e8f3ff] py-10">

        <div className="container-custom">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-5">

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm sm:flex">
                🎓
              </div>

              <div>
                <p className="font-bold text-[#032965]">
                  Vous représentez un établissement scolaire ?
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                  Déployez progressivement NAYGAL ACADEMY dans votre établissement et
                  donnez à vos apprenants un accès concret aux compétences
                  numériques.
                </p>
              </div>

            </div>

            <Link
              href="/academy/dans-votre-ecole"
              className="shrink-0 font-semibold text-[#276f91] transition hover:text-[#438a2c]"
            >
              Découvrir NAYAGAL ACADEMY dans votre école →
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          COMPETENCES
      ========================================================= */}
      <section data-reveal className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
                Un socle de compétences
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#032965]">
                Apprendre les technologies qui façonnent le monde.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Des fondamentaux jusqu’aux technologies émergentes, NAYGAL ACADEMY
                construit des parcours permettant de comprendre, pratiquer et
                progresser.
              </p>

              <Link
                href="/academy/formations"
                className="mt-7 inline-flex font-semibold text-[#032965] hover:text-[#52a234]"
              >
                Voir toutes les formations →
              </Link>

            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

              {competences.map((competence) => (
                <div
                  key={competence.number}
                  className="group border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >

                  <span className="text-xs font-bold text-[#276f91]">
                    {competence.number}
                  </span>

                  <div className="mt-12 h-1 w-8 bg-[#52a234] transition-all group-hover:w-14" />

                  <p className="mt-5 font-bold text-[#032965]">
                    {competence.title}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {competence.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          AUDIENCES / IMAGES
      ========================================================= */}
      <section data-reveal className="bg-[#f4f8fd] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Pour chaque parcours
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#032965] sm:text-5xl">
              Une Academie pensée pour des profils différents.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Parce qu’un étudiant, un professionnel et une organisation
              n’abordent pas le numérique de la même manière.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/80 to-transparent" />

                  <span className="absolute bottom-5 left-5 text-sm font-bold text-[#a4d78f]">
                    {audience.number}
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-semibold text-[#032965]">
                    {audience.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {audience.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section data-reveal className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                L’esprit NAYGAL
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Plus qu’une formation.
                <span className="block text-[#68bd49]">
                  Une culture.
                </span>
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {values.map(([title, description]) => (
                <div
                  key={title}
                  className="border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10"
                >

                  <p className="text-xs font-bold tracking-[.18em] text-[#a4d78f]">
                    {title}
                  </p>

                  <p className="mt-5 leading-7 text-blue-100">
                    {description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          VISION IMAGE
      ========================================================= */}
      <section data-reveal className="bg-white py-20 sm:py-28">

        <div className="container-custom">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#032965]">

            <Image
              src="/images/academy/NOTRE-VISION.webp"
              alt="Jeunes et professionnels collaborant autour de la technologie"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032965] via-[#032965]/90 to-transparent" />

            <div className="relative max-w-3xl px-8 py-20 sm:px-14 sm:py-28">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Notre vision
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Donner à chacun les moyens de devenir acteur de la
                transformation numérique.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Nous croyons qu’une transformation numérique durable ne se
                construit pas uniquement avec des infrastructures et des
                technologies. Elle se construit surtout avec des personnes
                capables de les comprendre et de les utiliser.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section data-reveal className="bg-[#f4f8fd] py-20 sm:py-28">

        <div className="container-custom">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#032965] px-7 py-16 text-center sm:px-12 sm:py-24">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#52a234]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#276f91]/30 blur-3xl" />

            <div className="relative">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Commencer maintenant
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Et si votre prochain apprentissage changeait votre parcours ?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Explorez les formations, participez à un atelier ou
                construisons ensemble un programme adapté à votre organisation.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/academy/formations"
                  className="rounded-md bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Explorer les formations
                </Link>

                <Link
                  href="/contact"
                  className="rounded-md border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Parler à NAYAGAL
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
