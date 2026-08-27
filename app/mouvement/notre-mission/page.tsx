import Image from "next/image"
import Link from "next/link"

const commitments = [
  {
    number: "01",
    title: "Rendre le numérique concret",
    description:
      "Nous privilégions l'apprentissage par la pratique, les projets réels et les expériences qui permettent de comprendre comment la technologie fonctionne et comment elle peut répondre à des besoins concrets.",
  },
  {
    number: "02",
    title: "Développer les compétences",
    description:
      "Nous voulons contribuer à faire émerger des profils capables de comprendre, déployer, maintenir et faire évoluer les technologies qui construisent les organisations de demain.",
  },
  {
    number: "03",
    title: "Construire localement",
    description:
      "Nous croyons aux solutions pensées à partir des réalités locales, avec les ressources disponibles, les compétences du terrain et une vision capable de dépasser les frontières.",
  },
  {
    number: "04",
    title: "Partager les connaissances",
    description:
      "Une compétence qui reste isolée crée peu d'impact. Nous voulons encourager la transmission, le mentorat, la documentation et le partage d'expérience.",
  },
]

const areas = [
  {
    title: "Éducation numérique",
    description:
      "Créer des opportunités d'apprentissage et d'expérimentation pour les jeunes, les étudiants et les professionnels.",
    image:
      "https://images.pexels.com/photos/11025058/pexels-photo-11025058.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Technologies & infrastructures",
    description:
      "Contribuer à la mise en place d'infrastructures numériques fiables, sécurisées et adaptées aux besoins des organisations.",
    image:
      "/images/mouvement/notre-mission/inf.webp",
  },
  {
    title: "Innovation & IA",
    description:
      "Explorer les nouvelles technologies et identifier les usages capables d'améliorer concrètement les processus et les services.",
    image: "/images/mouvement/notre-mission/ia.jpg",
  },
  {
    title: "Collaboration",
    description:
      "Créer des passerelles entre entreprises, établissements, experts, associations et communautés autour de projets communs.",
    image:
      "/images/mouvement/notre-mission/colla.jpg",
  },
]

export default function MissionPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#032965]">

        <Image
          src="https://images.pexels.com/photos/11025060/pexels-photo-11025060.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Personnes africaines collaborant autour d'un projet"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/75 to-[#032965]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[680px] items-end pb-20 pt-32">

          <div className="max-w-5xl">

            <span className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              NOTRE MISSION
            </span>

            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Mettre la technologie{" "}
              <span className="text-[#77bb43]">
                au service des possibilités.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              NAYGAL a pour mission de contribuer à un écosystème numérique
              plus compétent, plus accessible et plus capable de transformer
              les idées en solutions concrètes.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Notre raison d&apos;être
              </p>

              <h2 className="mt-3 text-[#032965]">
                Le numérique ne doit pas seulement être consommé.
                <span className="block text-[#52a234]">
                  Il doit être compris et construit.
                </span>
              </h2>

            </div>


            <div className="space-y-6 text-lg leading-8 text-slate-600">

              <p>
                Nous vivons dans un monde où les infrastructures numériques,
                les données, l'intelligence artificielle, les réseaux et les
                logiciels occupent une place croissante dans presque tous les
                secteurs.
              </p>

              <p>
                Pourtant, l'accès à la technologie ne signifie pas
                automatiquement la maîtrise de la technologie. Entre disposer
                d'un outil et être capable de le comprendre, de le sécuriser,
                de l'adapter et de créer avec lui, il existe un véritable
                enjeu de compétences.
              </p>

              <p className="font-semibold text-[#032965]">
                NAYGAL veut contribuer à réduire cette distance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="mx-auto max-w-5xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a4d78f]">
              Notre conviction
            </p>

            <p className="mt-7 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Nous croyons qu'une transformation numérique durable commence
              par des personnes capables de comprendre la technologie et de
              l'utiliser pour résoudre des problèmes réels.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          LE PROBLÈME
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">

              <Image
                src="https://images.pexels.com/photos/11025058/pexels-photo-11025058.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Jeunes africains participant à une activité collaborative"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
                  Le constat
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold">
                  Les talents existent. Les opportunités doivent aussi exister.
                </p>

              </div>

            </div>


            <div>

              <p className="eyebrow text-[#438a2c]">
                Le défi
              </p>

              <h2 className="mt-3 text-[#032965]">
                L'écart numérique n'est pas uniquement une question
                d'équipement.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  Une organisation peut disposer d'un réseau sans avoir les
                  compétences nécessaires pour l'administrer correctement.
                </p>

                <p>
                  Un étudiant peut avoir accès à Internet sans savoir comment
                  transformer cet accès en compétence professionnelle.
                </p>

                <p>
                  Une entreprise peut utiliser des outils numériques sans
                  toujours disposer de l'infrastructure, de la sécurité ou des
                  processus nécessaires pour en tirer pleinement parti.
                </p>

                <p className="font-semibold text-[#032965]">
                  Notre réponse consiste donc à travailler simultanément sur
                  les compétences, les infrastructures, les usages et les
                  collaborations.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMENT NOUS AGISSONS
      ===================================================== */}
      <section className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Notre approche
            </p>

            <h2 className="mt-3 text-[#032965]">
              Nous ne voulons pas simplement parler de transformation
              numérique.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nous voulons expérimenter, construire, transmettre et documenter
              ce qui fonctionne.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {commitments.map((commitment) => (

              <div
                key={commitment.number}
                className="bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-[#52a234]">
                    {commitment.number}
                  </span>

                  <div className="h-px w-20 bg-[#dce8f3]" />

                </div>

                <h3 className="mt-12 text-2xl text-[#032965]">
                  {commitment.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {commitment.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NOS DOMAINES D'ACTION
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Nos domaines d&apos;action
            </p>

            <h2 className="mt-3 text-[#032965]">
              De l'éducation aux infrastructures, agir là où le numérique
              peut créer de la valeur.
            </h2>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2">

            {areas.map((area) => (

              <article
                key={area.title}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white"
              >

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/70 via-transparent to-transparent" />

                  <h3 className="absolute bottom-6 left-6 text-2xl text-white">
                    {area.title}
                  </h3>

                </div>

                <div className="p-7">

                  <p className="leading-7 text-slate-600">
                    {area.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NAYGAL ACADEMY / TRANSMISSION
      ===================================================== */}
      <section className="bg-[#edf7e7] py-20 sm:py-24">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Transmettre
              </p>

              <h2 className="mt-3 text-[#032965]">
                Notre mission commence par les compétences.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                C'est notamment pour cette raison que NAYGAL Academy, NAYGAL ACADEMY,
                occupe une place importante dans notre vision.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nous voulons proposer des environnements où les apprenants
                peuvent découvrir les technologies, expérimenter, se tromper,
                recommencer et progressivement transformer leurs connaissances
                en compétences.
              </p>

              <Link
                href="/academy"
                className="mt-8 inline-flex items-center font-semibold text-[#032965] transition hover:text-[#438a2c]"
              >
                Découvrir NAYGAL ACADEMY
                <span className="ml-2">→</span>
              </Link>

            </div>


            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem]">

              <Image
                src="/images/mouvement/notre-mission/comp.jpg"
                alt="Étudiants travaillant ensemble"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}
      <section className="relative min-h-[600px] overflow-hidden">

        <Image
          src="/images/mouvement/notre-mission/vis.jpg"
          alt="Environnement professionnel moderne"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#032965]/80" />

        <div className="container-custom relative z-10 flex min-h-[600px] items-center">

          <div className="max-w-4xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a4d78f]">
              Notre vision
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Contribuer à une génération qui ne se contente pas d'utiliser la
              technologie, mais qui sait aussi la comprendre, la créer et la
              faire évoluer.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
              Une génération capable de construire des infrastructures,
              développer des solutions, protéger les données, exploiter
              l'intelligence artificielle et transmettre ses connaissances à
              ceux qui viennent après elle.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGAGEMENT
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="mx-auto max-w-4xl text-center">

            <p className="eyebrow text-[#438a2c]">
              Notre engagement
            </p>

            <h2 className="mt-3 text-[#032965]">
              Grandir avec les personnes qui nous font confiance.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              NAYGAL est encore une structure en construction. Nous ne
              prétendons pas avoir toutes les réponses. Notre engagement est
              justement de progresser avec nos partenaires, nos apprenants,
              nos clients et notre communauté.
            </p>

            <p className="mt-5 text-lg font-semibold leading-8 text-[#032965]">
              Écouter. Expérimenter. Mesurer. Améliorer. Transmettre.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#032965] py-20 sm:py-24">

        <div className="container-custom text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
            Construire ensemble
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-white">
            Vous partagez cette vision ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Rejoignez le Mouvement NAYGAL en devenant partenaire, en proposant
            un projet ou simplement en échangeant avec notre équipe.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/mouvement/devenir-partenaire"
              className="inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Devenir partenaire
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Échanger avec NAYGAL
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
