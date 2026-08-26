import Link from 'next/link'
import Image from 'next/image'

const solutions = [
  {
    number: '01',
    title: 'Réseaux LAN',
    description:
      'Nous concevons des réseaux locaux fiables et structurés pour connecter vos postes, serveurs, imprimantes, équipements et applications.',
    items: [
      'Câblage réseau',
      'Switches',
      'Adressage IP',
      'Baie réseau',
    ],
  },
  {
    number: '02',
    title: 'Wi-Fi professionnel',
    description:
      'Nous déployons des réseaux Wi-Fi adaptés aux environnements professionnels, scolaires et multi-utilisateurs.',
    items: [
      'Étude de couverture',
      'Points d’accès',
      'Wi-Fi invités',
      'Optimisation',
    ],
  },
  {
    number: '03',
    title: 'Segmentation & VLAN',
    description:
      'Nous séparons les différents usages du réseau afin d’améliorer la sécurité, les performances et le contrôle des communications.',
    items: [
      'VLAN',
      'Réseaux invités',
      'Isolation',
      'Contrôle des flux',
    ],
  },
  {
    number: '04',
    title: 'Interconnexion',
    description:
      'Nous connectons vos différents bureaux, bâtiments ou sites pour permettre aux équipes de travailler sur un environnement cohérent.',
    items: [
      'VPN',
      'Inter-sites',
      'Accès distant',
      'Routage',
    ],
  },
]

const useCases = [
  {
    title: 'Le Wi-Fi ne couvre pas correctement vos locaux',
    text:
      'Certaines salles disposent d’un signal faible, les connexions sont instables ou le réseau devient lent lorsque plusieurs utilisateurs se connectent.',
    solution:
      'NAYGAL analyse la couverture et dimensionne un réseau Wi-Fi professionnel adapté à la configuration réelle de vos espaces.',
  },
  {
    title: 'Votre réseau est devenu difficile à administrer',
    text:
      'Les équipements ont été ajoutés progressivement et personne ne possède une vision claire de l’architecture.',
    solution:
      'Nous cartographions l’existant, restructurons le réseau et documentons les composants essentiels.',
  },
  {
    title: 'Vous devez séparer les utilisateurs',
    text:
      'Employés, visiteurs, étudiants, administration ou équipements connectés ne devraient pas nécessairement partager le même environnement réseau.',
    solution:
      'Nous mettons en place une segmentation adaptée avec VLAN, règles d’accès et réseaux dédiés.',
  },
  {
    title: 'Plusieurs sites doivent communiquer',
    text:
      'Vos bureaux, agences ou établissements doivent accéder à certaines ressources communes.',
    solution:
      'Nous concevons une interconnexion sécurisée permettant aux différents sites de communiquer efficacement.',
  },
]

const method = [
  {
    number: '01',
    title: 'Observer',
    text:
      'Nous analysons vos locaux, vos équipements, vos utilisateurs, vos usages et les problèmes rencontrés.',
  },
  {
    number: '02',
    title: 'Cartographier',
    text:
      'Nous établissons une vision claire de votre architecture réseau et identifions les points de faiblesse.',
  },
  {
    number: '03',
    title: 'Concevoir',
    text:
      'Nous définissons une architecture adaptée à votre environnement, à votre budget et à vos objectifs.',
  },
  {
    number: '04',
    title: 'Déployer',
    text:
      'Nous installons et configurons les équipements en limitant les interruptions de votre activité.',
  },
  {
    number: '05',
    title: 'Optimiser',
    text:
      'Nous vérifions les performances, ajustons la configuration et documentons votre infrastructure.',
  },
]

const benefits = [
  'Une meilleure couverture réseau',
  'Une connectivité plus stable',
  'Une architecture plus lisible',
  'Une meilleure séparation des usages',
  'Une réduction des points de faiblesse',
  'Une infrastructure capable d’évoluer',
]

const networkLayers = [
  {
    title: 'Utilisateurs',
    text:
      'Ordinateurs, smartphones, tablettes et autres équipements utilisés quotidiennement.',
  },
  {
    title: 'Infrastructure',
    text:
      'Switches, points d’accès, routeurs, câblage et équipements réseau.',
  },
  {
    title: 'Services',
    text:
      'Serveurs, NAS, applications, imprimantes et ressources internes.',
  },
  {
    title: 'Sécurité',
    text:
      'Segmentation, contrôle des accès, VPN et filtrage des communications.',
  },
]

export default function ReseauxPage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#021f50] text-white">

        <Image
          src="/images/services/reseaux/1.jpg"
          alt="Infrastructure réseau informatique"
           fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01152f] via-[#021f50]/90 to-[#021f50]/40" />

        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />
        </div>

        <div className="container-custom relative flex min-h-[700px] items-center">

          <div className="max-w-5xl">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              ← Services NAYGAL
            </Link>

            <p className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-[#a4d78f]">
              <span className="h-px w-10 bg-[#52a234]" />
              Réseaux
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl lg:text-[78px]">
              Connecter vos équipes.
              <br />
              <span className="text-[#72bd4f]">
                Sécuriser vos échanges.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Nous concevons et déployons des infrastructures réseau fiables,
              performantes et sécurisées pour les entreprises, établissements
              et organisations.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#solutions"
                className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Découvrir nos solutions
              </a>

              <Link
                href="/contact"
                className="inline-flex justify-center border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Parler à NAYGAL
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Le réseau comme infrastructure
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Un réseau professionnel doit faire plus que connecter des appareils.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-slate-600">
                Le réseau est le système nerveux de votre organisation.
                Utilisateurs, serveurs, applications, imprimantes, caméras,
                téléphones et équipements connectés doivent pouvoir
                communiquer de manière fiable et contrôlée.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Une bonne architecture réseau permet de gagner en
                performance, en visibilité et en sécurité tout en préparant
                l’organisation aux évolutions futures.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">

                <div className="border-l-2 border-[#52a234] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Connecter
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Les utilisateurs et les ressources.
                  </p>
                </div>

                <div className="border-l-2 border-[#276f91] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Segmenter
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Les différents usages.
                  </p>
                </div>

                <div className="border-l-2 border-[#df8b18] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Sécuriser
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Les communications.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SOLUTIONS
      ====================================================== */}

      <section
        id="solutions"
        className="bg-[#f5f8fc] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos solutions réseau
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
              Une architecture adaptée à vos usages.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              De la connexion des postes à l’interconnexion de plusieurs
              sites, nous construisons des réseaux qui répondent aux besoins
              réels de votre organisation.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {solutions.map((solution) => (

              <article
                key={solution.number}
                className="bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="flex h-12 w-12 items-center justify-center bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    {solution.number}
                  </span>

                  <span className="text-3xl font-light text-slate-200">
                    +
                  </span>

                </div>

                <h3 className="mt-9 text-2xl font-semibold sm:text-3xl">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2">

                  {solution.items.map((item) => (

                    <div
                      key={item}
                      className="bg-[#f5f8fc] px-4 py-3 text-xs font-semibold text-[#276f91]"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISUAL / WIFI
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid overflow-hidden bg-[#032965] lg:grid-cols-2">

            <div className="relative min-h-[430px]">

              <Image
                src="/images/services/reseaux/2.jpg"
                alt="Technologie réseau et connectivité"
                 fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/10 to-[#032965]/90" />

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Wi-Fi · LAN · Sécurité
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold text-white">
                  Une connexion fiable devient invisible lorsque le réseau
                  est bien conçu.
                </p>

              </div>

            </div>

            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Wi-Fi professionnel
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Une couverture pensée pour vos espaces.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Un réseau Wi-Fi professionnel ne consiste pas simplement à
                installer quelques points d’accès. Il faut tenir compte de
                la configuration des bâtiments, du nombre d’utilisateurs,
                des usages et des obstacles physiques.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Analyse de couverture',
                  'Positionnement des points d’accès',
                  'Réseaux internes et invités',
                  'Gestion des utilisateurs',
                  'Optimisation des performances',
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#52a234] text-xs text-white">
                      ✓
                    </span>

                    <span className="text-sm text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Architecture réseau
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Chaque flux mérite sa place.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Un réseau correctement segmenté permet de limiter les
                communications inutiles et de mieux contrôler les accès aux
                ressources sensibles.
              </p>

              <div className="mt-7 border-l-2 border-[#52a234] bg-white p-6">

                <p className="text-sm font-semibold leading-7 text-[#032965]">
                  Nous pensons l’architecture réseau en fonction des
                  utilisateurs, des équipements, des applications et des
                  niveaux de confiance.
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {networkLayers.map((layer, index) => (

                <div
                  key={layer.title}
                  className="flex gap-6 border border-slate-200 bg-white p-6 transition hover:border-[#52a234] hover:shadow-lg"
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    0{index + 1}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {layer.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {layer.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROBLEME SOLUTION
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Problème → Solution
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Lorsque le réseau commence à limiter votre activité.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {useCases.map((item, index) => (

              <article
                key={item.title}
                className="border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
              >

                <span className="text-xs font-bold text-[#52a234]">
                  SITUATION {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

                <div className="my-6 h-px bg-slate-100" />

                <p className="text-sm font-semibold leading-7 text-[#276f91]">
                  {item.solution}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          METHOD
      ====================================================== */}

      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Notre méthode
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Du terrain
                <br />
                à l’architecture.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-300">
                Nous ne configurons pas un réseau à distance à l’aveugle.
                Nous cherchons d’abord à comprendre votre environnement.
              </p>

            </div>

            <div className="border-t border-white/10">

              {method.map((step) => (

                <div
                  key={step.number}
                  className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                >

                  <span className="text-sm font-bold text-[#72bd4f]">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFICES
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Les bénéfices
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Un réseau qui travaille pour vous.
            </h2>

          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => (

              <div
                key={benefit}
                className="border-l-2 border-[#52a234] bg-[#f5f8fc] p-6"
              >

                <span className="text-xs font-bold text-[#276f91]">
                  0{index + 1}
                </span>

                <p className="mt-7 font-semibold leading-7 text-[#032965]">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#edf7e7] py-20 sm:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-3xl" />

        <div className="container-custom relative">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Parlons connectivité
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-6xl">
              Votre réseau ne devrait jamais être le maillon faible de votre organisation.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Que vous construisiez un nouveau réseau, réorganisiez une
              infrastructure existante ou cherchiez à résoudre des problèmes
              de connexion, NAYGAL peut vous accompagner.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Parler de mon réseau →
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center border border-[#032965]/20 px-8 py-4 font-semibold text-[#032965] transition hover:bg-white"
              >
                Voir tous les services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
