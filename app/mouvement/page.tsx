import Image from "next/image"
import Link from "next/link"

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata = {
  title: 'Le Mouvement NAYGAL | Innovation, éducation et impact numérique',
  description: 'Le Mouvement NAYGAL réunit entreprises, institutions et talents autour de solutions utiles et durables pour le numérique en Afrique.',
  alternates: {
    canonical: `${SITE}/mouvement`,
  },
  openGraph: {
    title: 'Le Mouvement NAYGAL | Innovation, éducation et impact numérique',
    description: 'Le Mouvement NAYGAL réunit entreprises, institutions et talents autour de solutions utiles et durables pour le numérique en Afrique.',
    url: `${SITE}/mouvement`,
  },
}

const participation = [
  {
    number: "01",
    title: "Devenir partenaire",
    description:
      "Entreprises, établissements, associations ou acteurs technologiques : construisons ensemble des initiatives utiles et durables.",
    href: "/mouvement/devenir-partenaire",
    image: "/images/mouvement/devenir-partenaire/part.jpg",
  },
  {
    number: "02",
    title: "Proposer un projet",
    description:
      "Vous avez une idée, une problématique ou une initiative ? Présentez-nous votre projet et explorons ensemble ce qu'il est possible de construire.",
    href: "/mouvement/proposer-un-projet",
    image: "/images/mouvement/proposer-un-projet/proj.jpg",
  },
  {
    number: "03",
    title: "Soutenir le mouvement",
    description:
      "Contribuez à nos initiatives par un financement, du matériel, votre expertise, votre réseau ou simplement votre temps.",
    href: "/mouvement/soutenir-nos-initiatives",
    image: "/images/mouvement/soutenir-nos-initiatives/sout.jpg",
  },
]

const pillars = [
  {
    number: "01",
    title: "Éduquer",
    text: "Donner à davantage de personnes les moyens de comprendre et de maîtriser les technologies numériques.",
  },
  {
    number: "02",
    title: "Expérimenter",
    text: "Passer de la théorie à la pratique à travers des ateliers, des projets et des expériences concrètes.",
  },
  {
    number: "03",
    title: "Connecter",
    text: "Créer des passerelles entre les talents, les organisations, les établissements et les opportunités.",
  },
  {
    number: "04",
    title: "Construire",
    text: "Transformer les compétences et les idées en solutions qui répondent à des besoins réels.",
  },
]

export default function MouvementPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#032965]">

        <Image
          src="/images/mouvement/img1.jpg"
          alt="Jeunes africains apprenant et travaillant ensemble"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/75 to-[#032965]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[720px] items-end pb-20 pt-32">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#77bb43]" />
              LE MOUVEMENT NAYGAL
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Le numérique est plus puissant{" "}
              <span className="text-[#77bb43]">
                lorsqu&apos;il est partagé.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-blue-50 sm:text-xl sm:leading-8">
              NAYGAL ne veut pas seulement créer des solutions technologiques.
              Nous voulons contribuer à créer un environnement où les
              compétences, les idées, les ressources et les personnes peuvent
              se rencontrer pour faire émerger des projets utiles.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/mouvement/devenir-partenaire"
                className="inline-flex w-full items-center justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c] sm:w-auto"
              >
                Devenir partenaire
              </Link>

              <Link
                href="/mouvement/proposer-un-projet"
                className="inline-flex w-full items-center justify-center border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Proposer un projet
              </Link>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/60 lg:block">
          Éducation · Technologie · Collaboration · Impact
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Pourquoi le Mouvement ?
              </p>

              <h2 className="mt-3 text-[#032965]">
                Une technologie qui crée des possibilités.
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">

              <p>
                La transformation numérique ne se résume pas à installer des
                équipements, déployer des logiciels ou connecter des
                infrastructures.
              </p>

              <p>
                Elle repose aussi sur les personnes capables de comprendre ces
                technologies, de les utiliser, de les transmettre et surtout
                de les adapter à leurs réalités.
              </p>

              <p className="font-semibold text-[#032965]">
                C&apos;est cette dynamique que nous voulons encourager avec le
                Mouvement NAYGAL.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE STORY
      ===================================================== */}
      <section className="pb-20">

        <div className="container-custom">

          <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">

              <Image
                src="/images/mouvement/renc.jpg"
                alt="Équipe africaine travaillant sur un projet"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white sm:p-10">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
                  Une communauté
                </p>

                <p className="mt-3 max-w-xl text-2xl font-semibold sm:text-3xl">
                  Les grandes transformations commencent souvent par une
                  rencontre.
                </p>

              </div>

            </div>


            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">

              <Image
                src="/images/academy/Grand caroussel/img5.jpg"
                alt="Professionnel africain connecté à une technologie numérique"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />

              <div className="absolute inset-0 bg-[#032965]/25" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <p className="text-sm font-bold uppercase tracking-[0.18em]">
                  Technologie
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  Comprendre.
                  <br />
                  Expérimenter.
                  <br />
                  Construire.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NOTRE RAISON D'ÊTRE
      ===================================================== */}
      <section className="border-y border-slate-200 bg-[#f4f8fd] py-20">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Notre raison d&apos;être
            </p>

            <h2 className="mt-3 text-[#032965]">
              Faire circuler les compétences, les idées et les opportunités.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nous croyons que l&apos;accès à la technologie doit aller de pair
              avec l&apos;accès à la connaissance, à l&apos;accompagnement et
              aux opportunités.
            </p>

          </div>


          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {pillars.map((pillar) => (

              <div
                key={pillar.number}
                className="border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#52a234]">
                  {pillar.number}
                </span>

                <h3 className="mt-10 text-2xl text-[#032965]">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {pillar.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NAYGAL ACADEMY
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid overflow-hidden rounded-[2rem] bg-[#032965] lg:grid-cols-2">

            <div className="relative min-h-[480px]">

              <Image
                src="/images/home/NAYACONLINE.jpg"
                alt="Jeunes africains en apprentissage numérique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>


            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
                Une première initiative
              </p>

              <h2 className="mt-4 text-white">
                NAYGAL Academy
                <span className="block text-[#77bb43]">
                  NAYAC
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Le Mouvement commence par la transmission. À travers NAYAC,
                nous voulons rendre les compétences numériques plus
                accessibles, plus concrètes et davantage orientées vers la
                pratique.
              </p>

              <div className="mt-8">

                <Link
                  href="/academy"
                  className="inline-flex items-center font-semibold text-white transition hover:text-[#a4d78f]"
                >
                  Découvrir NAYAC
                  <span className="ml-2">→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMENT PARTICIPER
      ===================================================== */}
      <section className="section-padding bg-[#f8fbff]">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Participer
            </p>

            <h2 className="mt-3 text-[#032965]">
              Vous pouvez contribuer de plusieurs façons.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Le Mouvement NAYGAL est ouvert aux personnes et organisations qui
              souhaitent contribuer à leur manière à la construction de projets
              numériques utiles.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {participation.map((item) => (

              <Link
                key={item.number}
                href={item.href}
                className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/80 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-6 text-sm font-bold text-white">
                    {item.number}
                  </span>

                </div>


                <div className="p-7">

                  <h3 className="text-2xl text-[#032965]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex font-semibold text-[#276f91] transition group-hover:translate-x-1 group-hover:text-[#438a2c]">
                    En savoir plus →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CITATION / MANIFESTE
      ===================================================== */}
      <section className="relative min-h-[560px] overflow-hidden">

        <Image
          src="/images/a-propos/jad20250430-ass-benin-tecnologies-numerique.avif"
          alt="Personnes africaines collaborant autour d'un projet"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#032965]/80" />

        <div className="container-custom relative z-10 flex min-h-[560px] items-center justify-center text-center">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a4d78f]">
              Notre conviction
            </p>

            <blockquote className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              « La technologie devient une force de transformation lorsqu&apos;elle
              est comprise, partagée et mise au service des personnes. »
            </blockquote>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section className="py-20 text-center sm:py-28">

        <div className="container-custom">

          <p className="eyebrow text-[#438a2c]">
            Rejoindre le mouvement
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-[#032965]">
            Une idée, une compétence, une ressource ou simplement l&apos;envie
            de contribuer ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Le Mouvement NAYGAL est appelé à grandir avec les personnes et les
            organisations qui souhaitent construire avec nous.
          </p>


          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/mouvement/devenir-partenaire"
              className="inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Devenir partenaire
            </Link>

            <Link
              href="/mouvement/proposer-un-projet"
              className="inline-flex items-center justify-center border border-[#032965]/20 px-8 py-4 font-semibold text-[#032965] transition hover:bg-[#f4f8fd]"
            >
              Proposer un projet
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
