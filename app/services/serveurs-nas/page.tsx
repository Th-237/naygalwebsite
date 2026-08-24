import Link from 'next/link'

const solutions = [
  {
    number: '01',
    title: 'Stockage centralisé',
    description:
      'Regroupez les fichiers importants de votre organisation dans un espace de stockage centralisé, structuré et accessible selon les droits de chaque utilisateur.',
    items: ['Dossiers partagés', 'Organisation des données', 'Gestion des droits', 'Stockage évolutif'],
  },
  {
    number: '02',
    title: 'Sauvegarde des données',
    description:
      'Mettez en place une stratégie de sauvegarde permettant de réduire les risques liés aux suppressions accidentelles, pannes matérielles et incidents.',
    items: ['Backup automatique', 'Versions de fichiers', 'Snapshots', 'Restauration'],
  },
  {
    number: '03',
    title: 'Accès distant',
    description:
      'Permettez à vos collaborateurs autorisés d’accéder à leurs ressources depuis différents sites ou en situation de mobilité.',
    items: ['Accès distant', 'VPN', 'Synchronisation', 'Accès sécurisé'],
  },
  {
    number: '04',
    title: 'Collaboration',
    description:
      'Transformez votre NAS en véritable espace de travail partagé pour faciliter la circulation des documents au sein de vos équipes.',
    items: ['Partage interne', 'Synchronisation', 'Collaboration', 'Gestion documentaire'],
  },
]

const useCases = [
  {
    title: 'Une entreprise veut centraliser ses documents',
    text: 'Les collaborateurs travaillent encore avec des fichiers dispersés sur leurs ordinateurs ou différents disques externes.',
    solution:
      'NAYGAL met en place un espace de stockage centralisé avec une organisation claire des dossiers et des droits d’accès.',
  },
  {
    title: 'Une école veut sécuriser ses ressources pédagogiques',
    text: 'Cours, documents administratifs, projets et ressources numériques sont utilisés par plusieurs personnes.',
    solution:
      'Un NAS peut devenir un espace documentaire partagé avec des comptes utilisateurs et des niveaux d’accès adaptés.',
  },
  {
    title: 'Une PME veut mieux sauvegarder ses données',
    text: 'Les sauvegardes sont réalisées manuellement ou de manière irrégulière.',
    solution:
      'Nous automatisons les sauvegardes et définissons une politique de conservation et de restauration.',
  },
  {
    title: 'Une organisation travaille sur plusieurs sites',
    text: 'Les équipes doivent accéder aux mêmes ressources sans multiplier les copies de fichiers.',
    solution:
      'Nous concevons une architecture permettant une synchronisation ou un accès distant sécurisé.',
  },
]

const method = [
  {
    number: '01',
    title: 'Analyser',
    text: 'Nous identifions vos données, vos utilisateurs, vos volumes de stockage et vos besoins d’accès.',
  },
  {
    number: '02',
    title: 'Dimensionner',
    text: 'Nous sélectionnons une capacité et une architecture adaptées à vos besoins actuels et futurs.',
  },
  {
    number: '03',
    title: 'Configurer',
    text: 'Nous créons les espaces de stockage, les comptes, les permissions et les services nécessaires.',
  },
  {
    number: '04',
    title: 'Sauvegarder',
    text: 'Nous définissons une stratégie de sauvegarde permettant de restaurer vos données en cas d’incident.',
  },
  {
    number: '05',
    title: 'Former',
    text: 'Nous accompagnons les utilisateurs afin que la solution soit réellement adoptée par l’organisation.',
  },
]

const benefits = [
  'Centraliser les fichiers de l’organisation',
  'Réduire la dispersion des données',
  'Automatiser les sauvegardes',
  'Contrôler les droits d’accès',
  'Faciliter le travail collaboratif',
  'Préparer la croissance future des volumes de données',
]

const backupLayers = [
  {
    title: 'Copie locale',
    text: 'Une première couche de protection directement sur votre infrastructure.',
  },
  {
    title: 'Versions',
    text: 'Conserver plusieurs versions permet de revenir à un état antérieur après une erreur.',
  },
  {
    title: 'Sauvegarde externe',
    text: 'Une copie indépendante protège contre certains incidents affectant le site principal.',
  },
]

export default function ServeursNASPage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* HERO */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#021f50] text-white">

        <img
          src="/images/services/serveurs-nas/1.webp"
          alt="Serveurs et stockage informatique"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01152f] via-[#021f50]/90 to-[#021f50]/45" />

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
              Serveurs NAS
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl lg:text-[78px]">
              Vos données,
              <br />
              <span className="text-[#72bd4f]">
                au bon endroit.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Centralisez vos fichiers, automatisez vos sauvegardes et
              facilitez le travail de vos équipes grâce à une infrastructure
              de stockage conçue autour de vos besoins.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#solutions"
                className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Découvrir les solutions
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

      {/* INTRO */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Vos données sont une infrastructure
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Un NAS ne sert pas uniquement à stocker des fichiers.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-slate-600">
                Dans une organisation, les données circulent en permanence :
                documents administratifs, fichiers clients, projets,
                ressources pédagogiques, photos, vidéos, bases de données
                et sauvegardes.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Un serveur NAS permet de transformer ce patrimoine numérique
                dispersé en un environnement centralisé, organisé et
                contrôlé.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">

                <div className="border-l-2 border-[#52a234] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">Centraliser</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Un espace commun pour vos données.
                  </p>
                </div>

                <div className="border-l-2 border-[#276f91] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">Protéger</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Des sauvegardes pensées à l’avance.
                  </p>
                </div>

                <div className="border-l-2 border-[#df8b18] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">Partager</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Les bonnes données aux bonnes personnes.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}

      <section
        id="solutions"
        className="bg-[#f5f8fc] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos prestations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
              Un serveur NAS pensé pour votre organisation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nous ne nous contentons pas d’installer un équipement. Nous
              construisons un environnement de stockage adapté à vos
              utilisateurs, vos données et vos règles de sécurité.
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

      {/* VISUAL */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid overflow-hidden bg-[#032965] lg:grid-cols-2">

            <div className="relative min-h-[430px]">

              <img
                src="/images/services/serveurs-nas/2.png"
                alt="Centre de données et stockage"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/10 to-[#032965]/90" />

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Données · Stockage · Sécurité
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold text-white">
                  Vos données méritent une architecture, pas simplement un
                  disque dur.
                </p>

              </div>

            </div>

            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                NAYGAL NAS
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Centraliser sans perdre le contrôle.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Nous configurons l’environnement de manière à ce que chaque
                utilisateur puisse accéder aux ressources dont il a besoin,
                sans exposer inutilement les données sensibles.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Utilisateurs et groupes',
                  'Droits d’accès par dossier',
                  'Services réseau',
                  'Journalisation et supervision',
                  'Sauvegardes automatisées',
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

      {/* CAS D'USAGE */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Cas d’usage
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Quand un NAS devient réellement utile.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {useCases.map((item, index) => (

              <article
                key={item.title}
                className="bg-white p-7 sm:p-8"
              >

                <span className="text-xs font-bold text-[#52a234]">
                  CAS {String(index + 1).padStart(2, '0')}
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

      {/* SAUVEGARDE */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Stratégie de sauvegarde
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Stocker n’est pas sauvegarder.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Un NAS améliore considérablement la gestion des données,
                mais il ne doit pas être considéré comme l’unique copie de
                vos informations critiques.
              </p>

              <div className="mt-7 border-l-2 border-[#52a234] bg-[#f5f8fc] p-6">

                <p className="text-sm font-semibold leading-7 text-[#032965]">
                  Nous concevons la stratégie de protection autour de vos
                  données, de leur criticité et de votre capacité à restaurer
                  rapidement votre activité.
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {backupLayers.map((layer, index) => (

                <div
                  key={layer.title}
                  className="flex gap-6 border border-slate-200 p-6 transition hover:border-[#52a234] hover:shadow-lg"
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

      {/* MÉTHODE */}

      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Notre méthode
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Un NAS configuré pour votre réalité.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-300">
                Nous adaptons la solution à la taille de votre organisation,
                à vos usages et à la criticité de vos données.
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

      {/* BENEFICES */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Les bénéfices
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Plus de contrôle sur vos données.
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

      {/* CTA */}

      <section className="relative overflow-hidden bg-[#edf7e7] py-20 sm:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-3xl" />

        <div className="container-custom relative">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Vos données
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-6xl">
              Et si vos données étaient enfin organisées comme votre
              organisation ?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Parlons de vos fichiers, de vos sauvegardes, de vos
              utilisateurs et de vos besoins d’accès. Nous pouvons commencer
              par un diagnostic de votre environnement actuel.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Parler de mon projet →
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
