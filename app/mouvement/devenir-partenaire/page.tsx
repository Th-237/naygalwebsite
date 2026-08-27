import Image from "next/image"
import Link from "next/link"

const partnershipTypes = [
  {
    number: "01",
    title: "Partenaire institutionnel",
    description:
      "Établissements scolaires, universités, associations, collectivités ou organisations souhaitant contribuer au développement des compétences et des initiatives numériques.",
    examples: [
      "Programmes éducatifs",
      "Ateliers et événements",
      "Sensibilisation au numérique",
      "Projets communautaires",
    ],
  },
  {
    number: "02",
    title: "Partenaire technologique",
    description:
      "Entreprises technologiques, éditeurs, intégrateurs ou professionnels souhaitant mettre leur expertise et leurs solutions au service de projets à impact.",
    examples: [
      "Mise à disposition de technologies",
      "Expertise technique",
      "Mentorat",
      "Projets pilotes",
    ],
  },
  {
    number: "03",
    title: "Partenaire entreprise",
    description:
      "Entreprises souhaitant soutenir des initiatives numériques tout en créant des opportunités de collaboration, d'innovation et de développement de compétences.",
    examples: [
      "Soutien à un programme",
      "Formation des équipes",
      "Mécénat de compétences",
      "Projets communs",
    ],
  },
  {
    number: "04",
    title: "Partenaire de terrain",
    description:
      "Professionnels, experts, enseignants, formateurs et acteurs locaux souhaitant partager leur expérience et contribuer directement aux initiatives NAYGAL.",
    examples: [
      "Mentorat",
      "Formation",
      "Accompagnement",
      "Transmission d'expérience",
    ],
  },
]

const contributions = [
  {
    title: "Expertise",
    text: "Apportez votre expérience, vos compétences et votre savoir-faire à des projets concrets.",
  },
  {
    title: "Technologie",
    text: "Mettez à disposition des outils, infrastructures, logiciels ou ressources technologiques.",
  },
  {
    title: "Formation",
    text: "Participez à la transmission de compétences à travers des ateliers, formations ou conférences.",
  },
  {
    title: "Ressources",
    text: "Soutenez financièrement ou matériellement une initiative qui correspond à vos valeurs.",
  },
]

export default function PartnerPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#032965]">

        <Image
          src="/images/mouvement/devenir-partenaire/devp.jpg"
          alt="Partenaires africains réunis autour d'un projet"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/75 to-[#032965]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[680px] items-end pb-20 pt-32">

          <div className="max-w-5xl">

            <span className="inline-flex items-center border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              LE MOUVEMENT NAYGAL
            </span>

            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Devenir{" "}
              <span className="text-[#77bb43]">
                partenaire.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              Parce que les grandes transformations ne se construisent jamais
              seul. Rejoignez NAYGAL et contribuons ensemble à créer des
              opportunités, développer des compétences et faire émerger des
              solutions numériques utiles.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#partenariats"
                className="inline-flex items-center justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Découvrir les partenariats
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Nous contacter
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Pourquoi nous rejoindre ?
              </p>

              <h2 className="mt-3 text-[#032965]">
                Une collaboration qui va au-delà d'un simple partenariat.
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">

              <p>
                NAYGAL construit progressivement un écosystème réunissant
                technologie, compétences, entreprises, établissements
                d'enseignement et communautés.
              </p>

              <p>
                Devenir partenaire, c'est contribuer à cet écosystème et
                participer à des initiatives qui peuvent prendre des formes
                différentes : une formation, un atelier, un projet
                technologique, un accompagnement, un événement ou une
                initiative locale.
              </p>

              <p className="font-semibold text-[#032965]">
                Il n'existe pas un modèle unique de partenariat. Nous
                construisons la collaboration en fonction de vos compétences,
                de vos ressources et de vos objectifs.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PARTNERSHIP TYPES
      ===================================================== */}
      <section
        id="partenariats"
        className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Nos modèles de collaboration
            </p>

            <h2 className="mt-3 text-[#032965]">
              Plusieurs façons de contribuer au Mouvement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Que vous soyez une organisation, une entreprise, un expert ou
              une institution, il existe plusieurs manières de construire
              quelque chose avec NAYGAL.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {partnershipTypes.map((partnership) => (

              <article
                key={partnership.number}
                className="group bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#032965] text-sm font-bold text-white">
                    {partnership.number}
                  </span>

                  <span className="h-px w-20 bg-slate-200" />

                </div>

                <h3 className="mt-10 text-2xl text-[#032965]">
                  {partnership.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {partnership.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-6">

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#438a2c]">
                    Exemples
                  </p>

                  <ul className="mt-4 space-y-3">

                    {partnership.examples.map((example) => (

                      <li
                        key={example}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#52a234]" />
                        {example}
                      </li>

                    ))}

                  </ul>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + MESSAGE
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">

              <Image
                src="https://images.pexels.com/photos/5940713/pexels-photo-5940713.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Personnes collaborant sur un projet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white sm:p-10">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
                  Construire ensemble
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold">
                  Une bonne idée devient plus forte lorsqu'elle rencontre les
                  bonnes personnes.
                </p>

              </div>

            </div>


            <div>

              <p className="eyebrow text-[#438a2c]">
                Une logique simple
              </p>

              <h2 className="mt-3 text-[#032965]">
                Votre contribution peut devenir une opportunité pour quelqu'un
                d'autre.
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">

                <p>
                  Une entreprise peut partager son expertise avec des
                  étudiants.
                </p>

                <p>
                  Un professionnel peut accompagner un jeune dans son
                  parcours.
                </p>

                <p>
                  Une organisation peut mettre une infrastructure ou une
                  technologie à disposition d'un projet.
                </p>

                <p>
                  Une institution peut ouvrir l'accès à un espace, une
                  communauté ou un réseau.
                </p>

                <p className="font-semibold text-[#032965]">
                  C'est cette logique de mise en commun que nous voulons
                  développer avec le Mouvement NAYGAL.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTRIBUTIONS
      ===================================================== */}
      <section className="bg-[#032965] py-20 text-white sm:py-24">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
              Votre contribution
            </p>

            <h2 className="mt-3 text-white">
              Vous pouvez contribuer de différentes manières.
            </h2>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {contributions.map((item, index) => (

              <div
                key={item.title}
                className="border border-white/15 p-7 transition hover:border-[#77bb43] hover:bg-white/5"
              >

                <span className="text-sm font-bold text-[#a4d78f]">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p className="eyebrow text-[#438a2c]">
              Une relation gagnant-gagnant
            </p>

            <h2 className="mt-3 text-[#032965]">
              Un partenariat doit créer de la valeur pour les deux parties.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nous souhaitons construire des collaborations utiles, réalistes
              et transparentes, dans lesquelles chaque partenaire sait ce
              qu'il apporte et ce qu'il peut construire avec nous.
            </p>

          </div>


          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">

            <div className="border border-slate-200 p-7">

              <div className="text-3xl">↗</div>

              <h3 className="mt-7 text-xl text-[#032965]">
                Visibilité
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Associez votre organisation à des initiatives technologiques,
                éducatives et communautaires.
              </p>

            </div>


            <div className="border border-slate-200 p-7">

              <div className="text-3xl">◎</div>

              <h3 className="mt-7 text-xl text-[#032965]">
                Impact
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Transformez vos ressources, compétences ou expertises en
                opportunités concrètes.
              </p>

            </div>


            <div className="border border-slate-200 p-7">

              <div className="text-3xl">+</div>

              <h3 className="mt-7 text-xl text-[#032965]">
                Réseau
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Rencontrez d'autres acteurs partageant une vision commune du
                numérique et de l'innovation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Comment ça fonctionne ?
            </p>

            <h2 className="mt-3 text-[#032965]">
              Commencer une collaboration est simple.
            </h2>

          </div>


          <div className="mt-14 grid gap-0 md:grid-cols-4">

            {[
              [
                "01",
                "Échange",
                "Nous discutons de votre organisation, de vos objectifs et de vos possibilités de contribution.",
              ],
              [
                "02",
                "Exploration",
                "Nous identifions ensemble les initiatives ou projets correspondant à vos intérêts.",
              ],
              [
                "03",
                "Construction",
                "Nous définissons un cadre de collaboration clair et réaliste.",
              ],
              [
                "04",
                "Action",
                "Nous lançons la collaboration et suivons ensemble les résultats.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="border-b border-slate-200 bg-white p-7 md:border-b-0 md:border-r last:md:border-r-0"
              >

                <span className="text-sm font-bold text-[#52a234]">
                  {number}
                </span>

                <h3 className="mt-8 text-xl text-[#032965]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="mx-auto max-w-4xl text-center">

            <p className="eyebrow text-[#438a2c]">
              Notre manière de travailler
            </p>

            <h2 className="mt-3 text-[#032965]">
              Nous privilégions les collaborations qui ont du sens.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              NAYGAL est encore une organisation en développement. Nous
              préférons construire progressivement des partenariats solides
              plutôt que multiplier les collaborations sans objectif clair.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">

              <div className="bg-[#f4f8fd] p-6">
                <p className="font-bold text-[#032965]">
                  Transparence
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Des objectifs et responsabilités clairement définis.
                </p>
              </div>

              <div className="bg-[#edf7e7] p-6">
                <p className="font-bold text-[#032965]">
                  Progressivité
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Commencer simplement avant de construire plus grand.
                </p>
              </div>

              <div className="bg-[#fff4df] p-6">
                <p className="font-bold text-[#032965]">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mesurer ce que la collaboration permet réellement de créer.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#032965] py-24 text-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#52a234]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="container-custom relative z-10">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
              Rejoindre le Mouvement
            </p>

            <h2 className="mt-5 text-white">
              Et si nous construisions quelque chose ensemble ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Parlez-nous de votre organisation, de vos compétences ou de
              l'idée que vous souhaitez développer. Nous prendrons le temps
              d'explorer les possibilités avec vous.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Devenir partenaire
              </Link>

              <Link
                href="/mouvement"
                className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir le Mouvement
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
