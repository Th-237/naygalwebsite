import Image from "next/image"
import Link from "next/link"

const contributionTypes = [
  {
    number: "01",
    icon: "₣",
    title: "Soutenir financièrement",
    description:
      "Contribuez au financement de nos formations, ateliers, équipements et initiatives.",
    detail: "À partir de 5 000 FCFA",
  },
  {
    number: "02",
    icon: "▣",
    title: "Donner du matériel",
    description:
      "Un ordinateur, un écran, un serveur ou un équipement inutilisé peut devenir une ressource précieuse.",
    detail: "Informatique · Réseau · Électronique",
  },
  {
    number: "03",
    icon: "＋",
    title: "Devenir bénévole",
    description:
      "Donnez de votre temps pour participer à nos événements, ateliers et actions de terrain.",
    detail: "Quelques heures peuvent suffire",
  },
  {
    number: "04",
    icon: "✦",
    title: "Partager votre expertise",
    description:
      "Transmettez vos compétences à travers le mentorat, la formation, le conseil ou l'accompagnement.",
    detail: "Mécénat de compétences",
  },
  {
    number: "05",
    icon: "↗",
    title: "Mettre votre réseau à disposition",
    description:
      "Une mise en relation peut parfois ouvrir une porte qu'une jeune initiative ne pourrait pas ouvrir seule.",
    detail: "Contacts · Opportunités · Partenariats",
  },
]

const contributions = [
  {
    amount: 5000,
    display: "5 000 FCFA",
    title: "Faciliter l'accès",
    description:
      "Votre contribution peut participer à l'accès à des ressources pédagogiques, supports d'apprentissage ou consommables nécessaires à une activité.",
    icon: "📚",
  },
  {
    amount: 10000,
    display: "10 000 FCFA",
    title: "Préparer les ressources",
    description:
      "Votre soutien peut contribuer à la préparation de supports de formation, de ressources numériques ou de matériel pédagogique.",
    icon: "🧰",
  },
  {
    amount: 25000,
    display: "25 000 FCFA",
    title: "Faire fonctionner un atelier",
    description:
      "Une contribution qui peut participer à l'acquisition de consommables et de petits équipements nécessaires à une session pratique.",
    icon: "🛠️",
  },
  {
    amount: 50000,
    display: "50 000 FCFA",
    title: "Équiper pour apprendre",
    description:
      "Votre contribution peut participer à l'acquisition, la remise en état ou la mise à disposition d'un équipement informatique destiné aux activités de NAYGAL.",
    icon: "💻",
    featured: true,
  },
  {
    amount: 100000,
    display: "100 000 FCFA",
    title: "Déployer une activité éducative",
    description:
      "Votre soutien peut contribuer à la mise en place d'un atelier, d'une session de sensibilisation ou d'une activité éducative sur le terrain.",
    icon: "🏫",
  },
  {
    amount: 250000,
    display: "250 000 FCFA+",
    title: "Faire grandir une initiative",
    description:
      "Une contribution à plus grande échelle pouvant participer au déploiement d'une initiative auprès d'un établissement, d'une communauté ou d'un groupe de bénéficiaires.",
    icon: "🚀",
    dark: true,
  },
]

const materialExamples = [
  "Ordinateurs portables ou de bureau",
  "Serveurs et équipements NAS",
  "Switches, routeurs et points d'accès",
  "Écrans et périphériques",
  "Composants informatiques",
  "Kits électroniques et robotiques",
  "Matériel audiovisuel",
  "Mobilier destiné aux espaces numériques",
]

const expertiseExamples = [
  "Réseaux & infrastructures",
  "Cybersécurité",
  "Développement logiciel",
  "Intelligence artificielle",
  "Cloud & systèmes",
  "Design & communication",
  "Gestion de projet",
  "Formation & mentorat",
]

export default function SoutenirPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#032965]">

        <Image
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2200&q=90"
          alt="Communauté réunie autour d'une initiative"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/80 to-[#032965]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47] via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[700px] items-end pb-20 pt-32">

          <div className="max-w-5xl">

            <span className="inline-flex border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              LE MOUVEMENT NAYGAL
            </span>

            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Il existe mille façons
              <span className="block text-[#77bb43]">
                de faire avancer une idée.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              Donner, transmettre, accompagner, équiper, connecter.
              Le Mouvement NAYGAL rassemble toutes celles et ceux qui
              souhaitent contribuer à construire un avenir numérique plus accessible.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contribuer"
                className="inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Je souhaite contribuer →
              </a>

              <a
                href="#financier"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Soutien financier
              </a>

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
                Plus qu'un don
              </p>

              <h2 className="mt-3 text-[#032965]">
                Votre contribution peut prendre la forme qui vous ressemble.
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">

              <p>
                Nous savons qu'il n'est pas toujours possible de contribuer
                financièrement. Mais une organisation peut avoir du matériel
                inutilisé, un professionnel peut avoir une expertise à transmettre,
                et une personne peut simplement avoir quelques heures à consacrer.
              </p>

              <p>
                Toutes ces contributions ont de la valeur. Notre objectif est
                donc de créer plusieurs portes d'entrée vers le Mouvement NAYGAL.
              </p>

              <p className="font-semibold text-[#032965]">
                Vous pouvez donner de l'argent. Mais vous pouvez aussi donner
                du matériel, du temps, des compétences ou des opportunités.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORMES DE CONTRIBUTION
      ===================================================== */}

      <section
        id="contribuer"
        className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Comment contribuer ?
            </p>

            <h2 className="mt-3 text-[#032965]">
              Choisissez la manière dont vous souhaitez agir.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Il n'existe pas de contribution standard. Nous préférons construire
              avec vous une forme de soutien adaptée à vos moyens et à vos compétences.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {contributionTypes.map((item) => (

              <div
                key={item.number}
                className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">

                  <span className="flex h-11 w-11 items-center justify-center bg-[#e8f3ff] text-xl">
                    {item.icon}
                  </span>

                  <span className="text-xs font-bold text-[#438a2c]">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-8 text-xl text-[#032965]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#438a2c]">
                  {item.detail}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SOUTIEN FINANCIER
      ===================================================== */}

      <section
        id="financier"
        className="section-padding"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Soutien financier
            </p>

            <h2 className="mt-3 text-[#032965]">
              Choisissez une contribution et donnez-lui un objectif concret.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Chaque niveau de contribution correspond à un ordre de grandeur
              permettant de soutenir différents besoins de nos initiatives.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {contributions.map((contribution) => (

              <div
                key={contribution.amount}
                className={`group relative flex flex-col border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  contribution.dark
                    ? "border-[#032965] bg-[#032965] text-white"
                    : contribution.featured
                      ? "border-2 border-[#52a234] bg-white"
                      : "border-slate-200 bg-white"
                }`}
              >

                {contribution.featured && (
                  <span className="absolute right-5 top-5 bg-[#52a234] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Impact
                  </span>
                )}

                <div className="flex items-start justify-between">

                  <span
                    className={`flex h-11 w-11 items-center justify-center text-xl ${
                      contribution.dark
                        ? "bg-white/10"
                        : "bg-[#e8f3ff]"
                    }`}
                  >
                    {contribution.icon}
                  </span>

                  <span
                    className={`text-xs font-bold ${
                      contribution.dark
                        ? "text-[#a4d78f]"
                        : "text-[#438a2c]"
                    }`}
                  >
                    {contribution.amount === 250000
                      ? "06"
                      : String(contributions.indexOf(contribution) + 1).padStart(2, "0")}
                  </span>

                </div>


                <p
                  className={`mt-8 text-3xl font-bold tracking-tight ${
                    contribution.dark
                      ? "text-white"
                      : "text-[#032965]"
                  }`}
                >
                  {contribution.display}
                </p>


                <h3
                  className={`mt-3 text-xl ${
                    contribution.dark
                      ? "text-white"
                      : "text-[#032965]"
                  }`}
                >
                  {contribution.title}
                </h3>


                <p
                  className={`mt-4 flex-1 leading-7 ${
                    contribution.dark
                      ? "text-blue-100"
                      : "text-slate-600"
                  }`}
                >
                  {contribution.description}
                </p>


                {/* REDIRECTION VERS PAIEMENT */}

                <Link
                  href={`/mouvement/soutenir-nos-initiatives/paiement?amount=${contribution.amount}`}
                  className={`mt-7 flex w-full items-center justify-center px-5 py-3 text-center font-semibold transition ${
                    contribution.dark
                      ? "bg-[#52a234] text-white hover:bg-[#438a2c]"
                      : contribution.featured
                        ? "bg-[#52a234] text-white hover:bg-[#438a2c]"
                        : "border border-[#032965] text-[#032965] hover:bg-[#032965] hover:text-white"
                  }`}
                >
                  Choisir ce soutien →
                </Link>

              </div>

            ))}

          </div>


          {/* =====================================================
              CONTRIBUTION LIBRE
          ===================================================== */}

          <div className="mt-8 overflow-hidden bg-[#f4f8fd]">

            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

              <div className="p-8 sm:p-10">

                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#438a2c]">
                  Contribution libre
                </p>

                <h3 className="mt-3 text-2xl text-[#032965]">
                  Vous souhaitez contribuer selon vos propres possibilités ?
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Aucun montant minimum n'est imposé. Chaque contribution compte
                  et peut être intégrée aux besoins prioritaires de nos initiatives.
                </p>

              </div>


              <div className="p-8 sm:p-10">

                <form
                  action="/mouvement/soutenir-nos-initiatives/paiement"
                  method="GET"
                  className="flex flex-col gap-3 sm:flex-row"
                >

                  <input
                    type="number"
                    name="amount"
                    min="1000"
                    step="500"
                    required
                    placeholder="Montant en FCFA"
                    className="w-full border border-slate-300 bg-white px-5 py-3 outline-none transition focus:border-[#52a234] sm:w-56"
                  />

                  <button
                    type="submit"
                    className="bg-[#032965] px-6 py-3 font-semibold text-white transition hover:bg-[#021f50]"
                  >
                    Continuer →
                  </button>

                </form>

              </div>

            </div>

          </div>


          <div className="mx-auto mt-10 max-w-3xl text-center">

            <p className="text-sm leading-6 text-slate-500">

              <strong className="text-[#032965]">
                À propos de l'affectation des contributions :
              </strong>{" "}

              les exemples présentés sont indicatifs. Les contributions sont
              mutualisées et peuvent être affectées en fonction des besoins réels,
              des priorités des initiatives et des ressources disponibles.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DON DE MATÉRIEL
      ===================================================== */}

      <section className="border-y border-slate-100 py-20 sm:py-24">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Donner du matériel
              </p>

              <h2 className="mt-3 text-[#032965]">
                Ce que vous n'utilisez plus peut devenir une ressource pour quelqu'un d'autre.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                De nombreux équipements peuvent retrouver une seconde vie dans
                un espace de formation, un atelier, un laboratoire ou un projet
                communautaire.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nous pouvons étudier les dons de matériel en fonction de leur
                état, de leur utilité et des besoins de nos initiatives.
              </p>

              <Link
                href="#contact-contribution"
                className="mt-8 inline-flex bg-[#032965] px-7 py-4 font-semibold text-white transition hover:bg-[#021f50]"
              >
                Proposer du matériel →
              </Link>

            </div>


            <div className="bg-[#f4f8fd] p-8 sm:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#438a2c]">
                Exemples
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {materialExamples.map((item) => (

                  <div
                    key={item}
                    className="border-l-2 border-[#52a234] bg-white p-4"
                  >
                    <p className="text-sm font-semibold text-[#032965]">
                      {item}
                    </p>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE
      ===================================================== */}

      <section className="relative min-h-[520px] overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=90"
          alt="Équipement informatique utilisé dans un environnement numérique"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#032965]/75" />

        <div className="container-custom relative z-10 flex min-h-[520px] items-center">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
              Donner une seconde vie
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Un ordinateur peut être
              <span className="block text-[#77bb43]">
                une opportunité.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
              Derrière chaque équipement se trouve une possibilité :
              apprendre, expérimenter, développer, réparer, créer ou transmettre.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGAGEMENT
      ===================================================== */}

      <section className="bg-[#032965] py-20 text-white sm:py-24">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
                Notre engagement
              </p>

              <h2 className="mt-4 text-white">
                Soutenir le Mouvement, c'est faire confiance à une vision.
              </h2>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["01", "Transparence", "Nous voulons construire une relation claire et responsable avec celles et ceux qui soutiennent nos initiatives."],
                ["02", "Utilité", "Les ressources mobilisées doivent servir des initiatives concrètes et cohérentes avec notre mission."],
                ["03", "Accessibilité", "Chacun doit pouvoir participer au Mouvement, quels que soient ses moyens."],
                ["04", "Impact", "Notre ambition est de transformer les contributions en opportunités réelles."],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="border border-white/15 p-6"
                >

                  <p className="text-sm font-bold text-[#a4d78f]">
                    {number}
                  </p>

                  <h3 className="mt-7 text-xl text-white">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-blue-100">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT AUTRES CONTRIBUTIONS
      ===================================================== */}

      <section
        id="contact-contribution"
        className="section-padding bg-[#f4f8fd]"
      >

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Parlons-en
              </p>

              <h2 className="mt-3 text-[#032965]">
                Vous souhaitez contribuer autrement ?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Expliquez-nous simplement ce que vous souhaitez apporter.
                Notre équipe pourra ensuite échanger avec vous sur la meilleure
                manière de concrétiser votre contribution.
              </p>

            </div>


            <div className="bg-white p-7 shadow-sm sm:p-10">

              <form className="space-y-6">

                <div className="grid gap-5 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="border border-slate-300 px-5 py-3 outline-none focus:border-[#52a234]"
                  />

                  <input
                    type="email"
                    placeholder="Adresse email"
                    className="border border-slate-300 px-5 py-3 outline-none focus:border-[#52a234]"
                  />

                </div>


                <select
                  className="w-full border border-slate-300 bg-white px-5 py-3 outline-none focus:border-[#52a234]"
                  defaultValue=""
                >

                  <option value="" disabled>
                    Type de contribution
                  </option>

                  <option>Don de matériel</option>
                  <option>Bénévolat</option>
                  <option>Partage d'expertise</option>
                  <option>Mise en relation</option>
                  <option>Autre</option>

                </select>


                <textarea
                  rows={5}
                  placeholder="Décrivez votre proposition..."
                  className="w-full border border-slate-300 px-5 py-3 outline-none focus:border-[#52a234]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#032965] px-7 py-4 font-semibold text-white transition hover:bg-[#021f50]"
                >
                  Envoyer ma proposition →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}