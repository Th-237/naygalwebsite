import Link from 'next/link'

const solutions = [
  {
    number: '01',
    title: 'Architecture informatique',
    description:
      'Nous concevons une architecture cohérente entre vos utilisateurs, vos applications, vos serveurs, vos données et vos équipements.',
    items: [
      'Analyse de l’existant',
      'Schéma d’architecture',
      'Dimensionnement',
      'Évolution future',
    ],
  },
  {
    number: '02',
    title: 'Serveurs & virtualisation',
    description:
      'Nous mettons en place des environnements serveurs adaptés à vos applications et à vos contraintes opérationnelles.',
    items: [
      'Serveurs physiques',
      'Virtualisation',
      'Services réseau',
      'Environnements applicatifs',
    ],
  },
  {
    number: '03',
    title: 'Stockage & données',
    description:
      'Nous organisons vos données pour les rendre accessibles, disponibles et protégées.',
    items: [
      'Stockage centralisé',
      'NAS',
      'Partage de fichiers',
      'Stratégies de sauvegarde',
    ],
  },
  {
    number: '04',
    title: 'Continuité & résilience',
    description:
      'Nous anticipons les incidents pour limiter leur impact sur votre activité.',
    items: [
      'Redondance',
      'Sauvegardes',
      'Plan de restauration',
      'Continuité de service',
    ],
  },
]

const situations = [
  {
    title: 'Votre infrastructure est devenue trop complexe',
    text: 'Plusieurs équipements, systèmes ou logiciels se sont accumulés au fil du temps sans architecture globale.',
    solution:
      'NAYGAL réalise un état des lieux et vous aide à remettre de la cohérence dans votre environnement.',
  },
  {
    title: 'Votre organisation grandit',
    text: 'De nouveaux collaborateurs, bureaux, équipements et applications apparaissent.',
    solution:
      'Nous dimensionnons une infrastructure capable d’accompagner votre croissance sans reconstruire tout le système.',
  },
  {
    title: 'Vos données sont dispersées',
    text: 'Les fichiers sont stockés sur plusieurs ordinateurs, disques externes ou services différents.',
    solution:
      'Nous centralisons et structurons les données avec une stratégie de stockage et de sauvegarde adaptée.',
  },
  {
    title: 'Une panne peut bloquer votre activité',
    text: 'Un serveur défaillant ou une perte de données pourrait fortement perturber vos opérations.',
    solution:
      'Nous introduisons des mécanismes de sauvegarde, de redondance et de restauration.',
  },
]

const method = [
  {
    number: '01',
    title: 'Diagnostiquer',
    text: 'Nous analysons votre infrastructure actuelle, vos usages, vos contraintes et vos points de fragilité.',
  },
  {
    number: '02',
    title: 'Architecturer',
    text: 'Nous définissons une architecture cible claire, documentée et adaptée à votre réalité.',
  },
  {
    number: '03',
    title: 'Déployer',
    text: 'Nous installons et configurons les composants nécessaires en limitant les perturbations.',
  },
  {
    number: '04',
    title: 'Sécuriser',
    text: 'Nous intégrons les contrôles d’accès, la sauvegarde et les bonnes pratiques de sécurité.',
  },
  {
    number: '05',
    title: 'Faire évoluer',
    text: 'Nous vous accompagnons lorsque votre activité, vos utilisateurs ou vos besoins technologiques évoluent.',
  },
]

const benefits = [
  'Une infrastructure mieux structurée',
  'Une meilleure disponibilité des services',
  'Des données mieux organisées',
  'Une réduction des risques liés aux pannes',
  'Une meilleure visibilité sur votre système informatique',
  'Une architecture capable d’évoluer avec votre organisation',
]

export default function InfrastructurePage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#021f50] text-white">

        <img
          src="/images/services/infrastructure/1.jpg"
          alt="Infrastructure informatique et serveurs"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
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
              Infrastructure
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl lg:text-[78px]">
              Construire une infrastructure
              <br />
              <span className="text-[#72bd4f]">
                fiable, cohérente et évolutive.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Une infrastructure informatique solide constitue le socle de
              votre activité. NAYGAL vous accompagne dans sa conception,
              son déploiement, sa sécurisation et son évolution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#diagnostic"
                className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Évaluer mon infrastructure
              </a>

              <Link
                href="/contact"
                className="inline-flex justify-center border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Parler à un expert
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section id="diagnostic" className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Le socle de votre système
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Votre informatique commence par une bonne architecture.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-slate-600">
                Ordinateurs, serveurs, applications, stockage, réseaux,
                sauvegardes et utilisateurs forment un ensemble connecté.
                Lorsqu’ils sont conçus séparément, les problèmes finissent
                généralement par apparaître.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Notre rôle est de transformer cet ensemble en une
                infrastructure cohérente, documentée et capable de soutenir
                votre activité dans le temps.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">

                <div className="border-l-2 border-[#52a234] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold text-[#032965]">
                    Fiable
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Pour réduire les interruptions.
                  </p>
                </div>

                <div className="border-l-2 border-[#276f91] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold text-[#032965]">
                    Sécurisée
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Pour mieux protéger vos ressources.
                  </p>
                </div>

                <div className="border-l-2 border-[#df8b18] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold text-[#032965]">
                    Évolutive
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Pour accompagner votre croissance.
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

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos solutions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
              Nous construisons le socle.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              De l’architecture globale au stockage des données, nous
              intervenons sur les composants essentiels de votre
              environnement informatique.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {solutions.map((solution) => (

              <article
                key={solution.number}
                className="group bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                <div className="flex items-start justify-between gap-5">

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    {solution.number}
                  </span>

                  <span className="text-3xl font-light text-slate-200">
                    +
                  </span>

                </div>

                <h3 className="mt-9 text-2xl font-semibold text-[#032965] sm:text-3xl">
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
          IMAGE / ARCHITECTURE
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid overflow-hidden bg-[#032965] lg:grid-cols-2">

            <div className="relative min-h-[400px]">

              <img
                src="/images/services/infrastructure/2.jpg"
                alt="Technologie et infrastructure"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/20 to-[#032965]/80" />

              <div className="absolute bottom-7 left-7 right-7">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Architecture
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold text-white">
                  Penser l’infrastructure comme un système, pas comme une
                  accumulation d’équipements.
                </p>

              </div>

            </div>

            <div className="p-8 text-white sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Notre philosophie
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Chaque composant doit avoir une raison d’être.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Nous évitons les architectures inutilement complexes.
                L’objectif est de trouver le bon équilibre entre
                performance, sécurité, coût, simplicité d’exploitation et
                capacité d’évolution.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Architecture documentée',
                  'Technologies adaptées aux besoins',
                  'Sécurité intégrée dès la conception',
                  'Possibilité d’évolution progressive',
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#52a234] text-xs">
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
          PROBLÈMES → SOLUTIONS
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Problème → Solution
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Quand votre infrastructure devient un frein.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {situations.map((situation, index) => (

              <article
                key={situation.title}
                className="bg-white p-7 sm:p-8"
              >

                <span className="text-xs font-bold text-[#52a234]">
                  SITUATION {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-[#032965] sm:text-2xl">
                  {situation.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {situation.text}
                </p>

                <div className="my-6 h-px bg-slate-100" />

                <p className="text-sm font-semibold leading-7 text-[#276f91]">
                  {situation.solution}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          MÉTHODE
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Comment nous intervenons
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Du diagnostic
                <br />
                à l’évolution.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-600">
                Une infrastructure ne se résume pas à son installation.
                Nous vous accompagnons tout au long de son cycle de vie.
              </p>

            </div>

            <div className="border-t border-slate-200">

              {method.map((step) => (

                <div
                  key={step.number}
                  className="grid gap-5 border-b border-slate-200 py-8 sm:grid-cols-[70px_200px_1fr] sm:items-start"
                >

                  <span className="text-sm font-bold text-[#52a234]">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
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

      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Ce que vous gagnez
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Une infrastructure qui soutient réellement votre activité.
              </h2>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit, index) => (

                <div
                  key={benefit}
                  className="border border-white/10 p-6 transition hover:border-[#52a234]"
                >

                  <span className="text-xs font-bold text-[#72bd4f]">
                    0{index + 1}
                  </span>

                  <p className="mt-7 text-base font-semibold leading-7 text-white">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

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
              Prochaine étape
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-6xl">
              Votre infrastructure peut-elle accompagner les prochaines
              années de votre organisation ?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Parlons de votre environnement actuel, de vos difficultés et
              de vos objectifs. Nous commencerons par comprendre avant de
              proposer une solution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Demander un diagnostic →
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
