import Link from 'next/link'

const logiciels = [
  {
    number: '01',
    title: 'Applications métier',
    description:
      'Des applications conçues autour de vos processus réels pour simplifier la gestion, le suivi des opérations et le travail quotidien.',
    items: [
      'Applications internes',
      'Outils de gestion',
      'Portails métiers',
      'Espaces collaborateurs',
    ],
  },
  {
    number: '02',
    title: 'Plateformes web',
    description:
      'Des plateformes modernes pour vos clients, partenaires, collaborateurs ou communautés.',
    items: [
      'Portails web',
      'Espaces clients',
      'Plateformes collaboratives',
      'Plateformes de services',
    ],
  },
  {
    number: '03',
    title: 'Tableaux de bord',
    description:
      'Centralisez vos informations et transformez vos données en indicateurs simples à comprendre et à piloter.',
    items: [
      'KPI',
      'Reporting',
      'Suivi d’activité',
      'Visualisation des données',
    ],
  },
  {
    number: '04',
    title: 'Outils personnalisés',
    description:
      'Lorsque les solutions existantes ne répondent pas à votre besoin, nous développons l’outil adapté à votre organisation.',
    items: [
      'Solutions sur mesure',
      'Formulaires intelligents',
      'Gestion documentaire',
      'Workflows métiers',
    ],
  },
]

const automatisations = [
  {
    number: '01',
    title: 'Automatisation des tâches',
    description:
      'Réduisez les tâches répétitives liées à la saisie, au traitement de documents, aux notifications ou à la génération de rapports.',
  },
  {
    number: '02',
    title: 'Workflows automatisés',
    description:
      'Transformez une succession d’actions manuelles en processus structurés qui s’exécutent automatiquement.',
  },
  {
    number: '03',
    title: 'Connexion des outils',
    description:
      'Faites communiquer vos logiciels, bases de données, services cloud et outils métiers afin de limiter les doubles saisies.',
  },
  {
    number: '04',
    title: 'Automatisation documentaire',
    description:
      'Classez, extrayez, transformez et transmettez automatiquement les informations contenues dans vos documents.',
  },
]

const iaServices = [
  {
    number: '01',
    title: 'Assistants IA',
    description:
      'Des assistants capables d’accompagner vos équipes dans la recherche, la rédaction, la synthèse et l’exploitation de l’information.',
  },
  {
    number: '02',
    title: 'IA documentaire',
    description:
      'Rendez vos procédures, guides, documents et bases de connaissances accessibles à travers une recherche intelligente.',
  },
  {
    number: '03',
    title: 'Analyse intelligente',
    description:
      'Exploitez l’intelligence artificielle pour analyser de grandes quantités d’informations, identifier des tendances ou détecter des anomalies.',
  },
  {
    number: '04',
    title: 'Agents et workflows IA',
    description:
      'Des systèmes capables d’enchaîner plusieurs actions et d’assister vos collaborateurs dans des processus métier.',
  },
]

const casUsage = [
  {
    title: 'Gestion administrative',
    description:
      'Automatiser la réception d’une demande, sa classification, son attribution et le suivi jusqu’à sa résolution.',
  },
  {
    title: 'Gestion commerciale',
    description:
      'Centraliser les prospects, automatiser les relances et donner aux équipes une vision claire de leur activité.',
  },
  {
    title: 'Gestion documentaire',
    description:
      'Extraire automatiquement les informations importantes de factures, contrats, formulaires ou rapports.',
  },
  {
    title: 'Support interne',
    description:
      'Mettre à disposition un assistant capable de retrouver rapidement les procédures et informations internes.',
  },
]

const approche = [
  ['01', 'Comprendre', 'Identifier votre besoin et comprendre votre fonctionnement actuel.'],
  ['02', 'Concevoir', 'Définir une solution simple, adaptée à vos objectifs et à vos ressources.'],
  ['03', 'Développer', 'Construire ou intégrer les outils nécessaires.'],
  ['04', 'Automatiser', 'Supprimer progressivement les tâches répétitives et les points de friction.'],
  ['05', 'Faire évoluer', 'Améliorer la solution au fur et à mesure que vos besoins évoluent.'],
]

export default function AutomatisationIAPage() {
  return (
    <main className="overflow-hidden bg-white pt-[72px] text-[#032965]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f4f8fd] pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d7ebc9]/60 blur-3xl" />
        <div className="absolute bottom-0 left-[-100px] h-[300px] w-[300px] rounded-full bg-[#d9ebf7] blur-3xl" />

        <div className="container-custom relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#438a2c] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#52a234]" />
                Solutions numériques
              </p>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-.045em] text-[#032965] sm:text-6xl lg:text-7xl">
                Des outils numériques qui
                <span className="text-[#52a234]"> simplifient votre travail.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Nous concevons des logiciels, connectons vos outils,
                automatisons vos processus et intégrons l’intelligence
                artificielle lorsque celle-ci apporte une réelle valeur.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Parler de votre projet
                </Link>

                <a
                  href="#solutions"
                  className="inline-flex justify-center border border-[#032965] px-7 py-4 font-semibold text-[#032965] transition hover:bg-white"
                >
                  Découvrir nos solutions
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-500">
                <span>Logiciels</span>
                <span>Automatisation</span>
                <span>Intégration</span>
                <span>Intelligence artificielle</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#b8d7f1]" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#d7ebc9]" />

              <div className="relative overflow-hidden rounded-[2rem] bg-[#032965] shadow-[0_30px_80px_rgba(3,41,101,.22)]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85"
                  alt="Équipe travaillant sur des solutions numériques"
                  className="h-80 w-full object-cover opacity-80"
                />

                <div className="p-7">
                  <p className="text-sm font-semibold text-blue-100">
                    De l’idée à la solution
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      ['01', 'Logiciel'],
                      ['02', 'Données'],
                      ['03', 'Automatisation'],
                      ['04', 'IA'],
                    ].map(([number, title]) => (
                      <div
                        key={number}
                        className="rounded-2xl bg-white/10 p-5 text-white"
                      >
                        <span className="text-xs font-bold text-[#a4d78f]">
                          {number}
                        </span>
                        <p className="mt-4 font-semibold">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#cfe1ef] bg-[#e8f3ff] py-8">
        <div className="container-custom">
          <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <p className="font-semibold text-[#032965]">
              Notre principe
            </p>

            <p className="leading-7 text-slate-600">
              Nous ne commençons pas systématiquement par l’intelligence
              artificielle. Nous commençons par comprendre votre problème,
              puis nous choisissons la technologie la plus pertinente.
            </p>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>
              <p className="eyebrow text-[#438a2c]">
                Notre approche
              </p>

              <h2 className="mt-3 text-[#032965]">
                Du besoin métier à une solution réellement utile.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Notre rôle n’est pas simplement de produire du code.
                Nous cherchons à comprendre comment votre organisation
                fonctionne afin de construire une solution cohérente,
                exploitable et évolutive.
              </p>
            </div>

            <div className="grid gap-3">
              {approche.map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-5 border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[60px_170px_1fr] sm:items-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f3ff] text-sm font-bold text-[#276f91]">
                    {number}
                  </span>

                  <h3 className="font-semibold text-[#032965]">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* LOGICIELS */}
      <section
        id="solutions"
        className="border-y border-slate-100 bg-[#f4f8fd] py-20 sm:py-24"
      >
        <div className="container-custom">

          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">
              01 · Solutions logicielles
            </p>

            <h2 className="mt-3 text-[#032965]">
              Avant d’automatiser, construisons les bons outils.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Une organisation bien outillée gagne déjà énormément en
              efficacité. Nous développons ou intégrons les solutions
              nécessaires à votre activité.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {logiciels.map((service) => (
              <article
                key={service.title}
                className="group bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f3ff] text-sm font-bold text-[#276f91]">
                    {service.number}
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">
                    Solution
                  </span>
                </div>

                <h3 className="mt-9 text-2xl font-semibold text-[#032965]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-[#52a234] bg-[#f7faf5] px-4 py-3"
                    >
                      <p className="text-sm font-medium text-[#032965]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGE / SOFTWARE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid overflow-hidden bg-[#032965] lg:grid-cols-2">

            <div className="min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
                alt="Développement et utilisation d'une plateforme numérique"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Software & Data
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Faire passer vos processus du papier au numérique.
                </h2>

                <p className="mt-5 leading-8 text-blue-100">
                  Fichiers Excel dispersés, formulaires papier, informations
                  difficiles à retrouver ou logiciels qui ne communiquent pas :
                  nous pouvons transformer progressivement ces situations en
                  outils numériques structurés.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#032965]"
                >
                  Discuter de votre besoin →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AUTOMATISATION */}
      <section className="border-y border-slate-100 bg-[#f4f8fd] py-20 sm:py-24">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

            <div>
              <p className="eyebrow text-[#438a2c]">
                02 · Automatisation
              </p>

              <h2 className="mt-3 text-[#032965]">
                Moins de tâches répétitives. Plus de temps pour l’essentiel.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Lorsque vos processus sont structurés, nous pouvons automatiser
              les opérations répétitives et faire communiquer vos différents
              outils.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {automatisations.map((service) => (
              <article
                key={service.title}
                className="border border-[#d9e5ec] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#52a234]">
                  {service.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-[#032965]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* SCHEMA */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="eyebrow text-[#438a2c]">
                Exemple de workflow
              </p>

              <h2 className="mt-3 text-[#032965]">
                Un événement peut déclencher toute une chaîne d’actions.
              </h2>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-5">
              {[
                ['01', 'Demande', 'Un client ou collaborateur transmet une demande.'],
                ['02', 'Détection', 'Le système identifie automatiquement le type de demande.'],
                ['03', 'Traitement', 'Les informations sont enregistrées et traitées.'],
                ['04', 'Action', 'Les personnes concernées sont automatiquement informées.'],
                ['05', 'Suivi', 'Le dossier est suivi jusqu’à sa résolution.'],
              ].map(([number, title, description], index) => (
                <div
                  key={title}
                  className="relative border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="text-xs font-bold text-[#276f91]">
                    {number}
                  </span>

                  <h3 className="mt-5 font-semibold text-[#032965]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>

                  {index < 4 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-[#52a234] md:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* IA */}
      <section className="border-y border-[#d5e2d0] bg-[#edf7e7] py-20 sm:py-24">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-center">

            <div>
              <p className="eyebrow text-[#438a2c]">
                03 · Intelligence artificielle
              </p>

              <h2 className="mt-3 text-[#032965]">
                Et lorsque c’est pertinent, nous ajoutons l’intelligence.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                L’intelligence artificielle devient particulièrement
                intéressante lorsqu’elle est connectée à vos données,
                vos outils et vos processus.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nous privilégions des usages concrets : assister les équipes,
                retrouver rapidement une information, analyser des documents
                ou automatiser certaines décisions et opérations.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-semibold text-[#032965]">
                  Notre logique
                </p>

                <p className="mt-3 text-slate-600">
                  Problème métier → données → processus → automatisation → IA
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85"
                alt="Intelligence artificielle et technologies numériques"
                className="h-72 w-full object-cover"
              />

              <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
                {iaServices.map((service) => (
                  <div
                    key={service.title}
                    className="bg-white p-6"
                  >
                    <span className="text-xs font-bold text-[#52a234]">
                      {service.number}
                    </span>

                    <h3 className="mt-4 font-semibold text-[#032965]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">
              Cas d’usage
            </p>

            <h2 className="mt-3 text-[#032965]">
              Des solutions pensées autour des réalités du terrain.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Les technologies deviennent utiles lorsqu’elles répondent à
              un problème concret. Voici quelques exemples de situations
              que nous pouvons traiter.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {casUsage.map((cas, index) => (
              <article
                key={cas.title}
                className="border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f3ff] text-sm font-bold text-[#276f91]">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-semibold text-[#032965]">
                    {cas.title}
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {cas.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* IMAGE IMMERSION */}
      <section className="section-padding bg-[#f4f8fd]">
        <div className="container-custom">

          <div className="relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=85"
              alt="Technologie numérique"
              className="h-[430px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/90 via-[#032965]/60 to-transparent" />

            <div className="absolute inset-0 flex items-center p-8 sm:p-14">
              <div className="max-w-2xl text-white">

                <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Une transformation progressive
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                  Pas besoin de tout transformer en une seule fois.
                </h2>

                <p className="mt-5 text-lg leading-8 text-blue-100">
                  Nous pouvons commencer par un seul processus, une seule
                  application ou un seul besoin. Puis faire évoluer
                  progressivement votre environnement numérique.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* POUR QUI */}
      <section className="border-y border-slate-100 bg-white py-20 sm:py-24">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <p className="eyebrow text-[#438a2c]">
                Pour qui ?
              </p>

              <h2 className="mt-3 text-[#032965]">
                Des solutions pour les organisations qui veulent avancer.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                'TPE & startups',
                'PME',
                'Établissements',
                'Associations',
                'Organisations multi-sites',
                'Projets entrepreneuriaux',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border border-slate-200 p-5"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  <span className="font-semibold text-[#032965]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#032965] py-20 text-white sm:py-24">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Construisons votre solution
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Vous avez un processus qui pourrait être plus simple ?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Présentez-nous votre besoin. Nous vous aiderons à déterminer
                s’il faut développer un logiciel, automatiser un processus,
                connecter vos outils ou intégrer l’intelligence artificielle.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Parlons de votre projet →
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}