import Link from 'next/link'
import Image from 'next/image'

const providers = [
  {
    code: 'AFR-01',
    name: 'CloudStore Africa',
    group: 'CLOUD AFRICAIN',
    accent: 'cyan',
    description:
      "Une option privilégiée lorsque la proximité africaine, la souveraineté des données, la simplicité d'exploitation et le paiement en FCFA sont des critères importants.",
    services: [
      'Hébergement web',
      'VPS',
      'Stockage & sauvegarde',
      'Services cloud',
      'Email professionnel',
      'Domaines',
    ],
    ideal: 'Sites, applications, PME, associations, sauvegardes et projets locaux.',
  },
  {
    code: 'AFR-02',
    name: 'ST DIGITAL',
    group: 'INFRASTRUCTURE & CLOUD',
    accent: 'green',
    description:
      "Une infrastructure panafricaine orientée entreprises, avec des capacités IaaS, SaaS et de colocation opérées dans des datacenters Tier 3.",
    services: [
      'IaaS',
      'SaaS',
      'Colocation',
      'Datacenter',
      'Cybersécurité',
      'Transformation digitale',
    ],
    ideal:
      'Entreprises, organisations, infrastructures critiques et projets nécessitant une architecture professionnelle.',
  },
  {
    code: 'GCP-01',
    name: 'Google Cloud',
    group: 'CLOUD GLOBAL',
    accent: 'blue',
    description:
      "Une plateforme globale pour les applications modernes, l'analyse de données, les environnements conteneurisés, l'IA et les architectures à grande échelle.",
    services: [
      'Compute Engine',
      'Cloud Storage',
      'Cloud Run',
      'Google Kubernetes Engine',
      'Cloud SQL',
      'BigQuery & IA',
    ],
    ideal:
      "Applications web, plateformes numériques, data, IA, API et projets nécessitant une forte capacité d'évolution.",
  },
]

const clientOffers = [
  {
    number: '01',
    title: 'Cloud Starter',
    subtitle: 'Pour démarrer proprement',
    description:
      'Une infrastructure cloud simple et maîtrisée pour une petite organisation, un site web, une application ou un premier projet numérique.',
    includes: [
      'Analyse du besoin',
      'Choix du fournisseur',
      'Configuration initiale',
      'Sécurisation des accès',
      'Mise en production',
      'Documentation',
    ],
  },
  {
    number: '02',
    title: 'Cloud Business',
    subtitle: 'Pour les organisations en croissance',
    description:
      'Une architecture plus robuste pour héberger plusieurs services, centraliser les données et accompagner la croissance de votre organisation.',
    includes: [
      'Architecture cloud',
      'VPS / VM',
      'Stockage & sauvegarde',
      'Réseau sécurisé',
      'Gestion des utilisateurs',
      'Supervision',
    ],
  },
  {
    number: '03',
    title: 'Cloud Enterprise',
    subtitle: 'Pour les environnements critiques',
    description:
      "Une architecture conçue autour de la disponibilité, de la sécurité, de la continuité d'activité et de l'évolutivité.",
    includes: [
      'Architecture multi-services',
      'Segmentation réseau',
      'Haute disponibilité',
      'Plan de sauvegarde',
      'Monitoring',
      'Accompagnement continu',
    ],
  },
  {
    number: '04',
    title: 'Cloud Data & IA',
    subtitle: 'Pour exploiter vos données',
    description:
      "Des infrastructures adaptées aux projets de données, d'analyse, d'automatisation et d'intelligence artificielle.",
    includes: [
      'Stockage de données',
      'Pipelines data',
      'Environnements IA',
      'APIs',
      'Automatisation',
      'Optimisation des coûts',
    ],
  },
]

const managedServices = [
  {
    code: '01',
    title: 'Cloud Assessment',
    text: 'Nous analysons votre infrastructure actuelle et identifions ce qui doit rester local, migrer ou être modernisé.',
  },
  {
    code: '02',
    title: 'Cloud Migration',
    text: 'Nous préparons et exécutons la migration de vos applications, données et services avec une stratégie de réduction des interruptions.',
  },
  {
    code: '03',
    title: 'Cloud Security',
    text: 'Nous sécurisons les identités, les accès, les réseaux, les sauvegardes et les ressources exposées.',
  },
  {
    code: '04',
    title: 'Cloud Monitoring',
    text: 'Nous mettons en place la supervision nécessaire pour détecter les anomalies, suivre les performances et anticiper les incidents.',
  },
  {
    code: '05',
    title: 'Cloud Backup',
    text: 'Nous construisons une stratégie de sauvegarde adaptée à la criticité de vos données et à vos objectifs de reprise.',
  },
  {
    code: '06',
    title: 'Cloud Management',
    text: 'NAYGAL peut assurer le suivi opérationnel de votre environnement et vous accompagner dans ses évolutions.',
  },
]

const architectures = [
  {
    title: 'LOCAL',
    description: 'Serveurs, NAS et applications conservés dans votre organisation.',
  },
  {
    title: 'HYBRIDE',
    description: 'Infrastructure locale connectée à des ressources cloud.',
  },
  {
    title: 'AFRICAIN',
    description: 'Services hébergés auprès de fournisseurs opérant des infrastructures en Afrique.',
  },
  {
    title: 'GLOBAL',
    description: 'Services cloud internationaux pour les besoins nécessitant une forte capacité de calcul, data ou IA.',
  },
]

export default function CloudPage() {
  return (
    <main className="overflow-hidden bg-[#041019] text-[#dceaf0]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-[850px] overflow-hidden border-b border-[#183747]">

        <Image
          src="/images/services/cloud/1.jpg"
          alt="Infrastructure cloud et réseau numérique"
           fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-[#041019]/55" />

        <div className="absolute left-[-15%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#72b8d8]/10 blur-[130px]" />

        <div className="absolute right-[-10%] bottom-[-15%] h-[650px] w-[650px] rounded-full bg-[#52a234]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(120,190,220,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(120,190,220,.6) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />

        <div className="container-custom relative flex min-h-[850px] items-center">

          <div className="grid w-full gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

            <div>

              <Link
                href="/services"
                className="font-mono text-sm text-[#63808e] transition hover:text-[#79c9e8]"
              >
                ← /services
              </Link>

              <div className="mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-[#72b8d8]">

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#75c7e8] shadow-[0_0_18px_#75c7e8]" />

                NAYGAL CLOUD

              </div>

              <h1 className="mt-6 max-w-4xl font-mono text-5xl font-bold leading-[.98] tracking-[-.05em] text-white sm:text-7xl">

                Le cloud adapté
                <br />

                <span className="text-[#72b8d8]">
                  à votre réalité.
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9db5c0] sm:text-xl">

                NAYGAL vous accompagne dans le choix, le déploiement,
                la sécurisation et l'exploitation de vos infrastructures
                cloud — qu'elles soient africaines, internationales,
                hybrides ou entièrement distribuées.

              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#solutions"
                  className="border border-[#72b8d8] bg-[#72b8d8] px-7 py-4 text-center font-mono text-sm font-bold text-[#041019] transition hover:bg-[#8ed7f0]"
                >
                  [ DÉCOUVRIR NOS SOLUTIONS ]
                </a>

                <Link
                  href="/contact"
                  className="border border-[#315464] px-7 py-4 text-center font-mono text-sm font-semibold text-[#c0d6df] transition hover:border-[#72b8d8]"
                >
                  Demander une étude
                </Link>

              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs text-[#607c89]">

                <span>01 / CHOISIR</span>
                <span>02 / DÉPLOYER</span>
                <span>03 / SÉCURISER</span>
                <span>04 / ADMINISTRER</span>

              </div>

            </div>

            {/* CLOUD CORE */}

            <div className="relative mx-auto w-full max-w-lg">

              <div className="absolute -inset-20 rounded-full bg-[#72b8d8]/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#315464] bg-[#071923]/95 shadow-[0_0_100px_rgba(114,184,216,.14)] backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-[#183747] bg-[#091f2b] px-6 py-4">

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#63808e]">
                    NAYGAL / CLOUD ARCHITECTURE
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[9px] text-[#72bd4f]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#72bd4f]" />
                    ONLINE
                  </span>

                </div>

                <div className="p-7 sm:p-9">

                  <div className="grid gap-3">

                    {[
                      {
                        title: 'LOCAL',
                        subtitle: 'NAS / SERVERS',
                        image: '/images/services/cloud/naygalcloud(local).png',
                        alt: 'NAYGAL Cloud local',
                      },
                      {
                        title: 'AFRICA',
                        subtitle: 'CLOUDSTORE',
                        image: '/images/services/cloud/cloudstoreafrica.jpeg',
                        alt: 'CloudStore Africa',
                      },
                      {
                        title: 'GLOBAL',
                        subtitle: 'GOOGLE CLOUD',
                        image: '/images/services/cloud/google cloud.webp',
                        alt: 'Google Cloud',
                      },
                    ].map((provider) => (

                      <div
                        key={provider.title}
                        className="flex items-center gap-4 border border-[#183747] bg-[#091923] p-3"
                      >

                        <span className="w-14 shrink-0 font-mono text-[9px] font-bold text-[#8ed7f0]">
                          {provider.title}
                        </span>

                        <div
                          className={`relative flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-md bg-white p-2 ${
                            provider.title === 'GLOBAL' ? 'h-20' : 'h-14'
                          }`}
                        >

                          <Image
                            src={provider.image}
                            alt={provider.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-contain p-2"
                          />

                        </div>

                        <p className="w-20 shrink-0 text-right font-mono text-[9px] text-[#8aa3ae]">
                          {provider.subtitle}
                        </p>

                      </div>

                    ))}

                  </div>

                  <div className="my-8 flex items-center gap-3">

                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#315464]" />

                    <span className="font-mono text-[9px] text-[#63808e]">
                      NAYGAL ORCHESTRATION
                    </span>

                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#315464]" />

                  </div>

                  <div className="border border-[#72b8d8]/30 bg-[#72b8d8]/5 p-6 text-center">

                    <p className="font-mono text-xs uppercase tracking-[.2em] text-[#72b8d8]">
                      YOUR CLOUD
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[#a8c0ca]">
                      Une architecture conçue selon vos besoins,
                      votre budget et la criticité de vos données.
                    </p>

                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <div className="border border-[#183747] bg-[#091923] p-4">

                      <p className="font-mono text-[9px] text-[#607c89]">
                        SECURITY
                      </p>

                      <p className="mt-2 font-mono text-sm font-bold text-[#72bd4f]">
                        ACTIVE
                      </p>

                    </div>

                    <div className="border border-[#183747] bg-[#091923] p-4">

                      <p className="font-mono text-[9px] text-[#607c89]">
                        MONITORING
                      </p>

                      <p className="mt-2 font-mono text-sm font-bold text-[#72b8d8]">
                        READY
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          POSITIONNEMENT
      ========================================================== */}

      <section className="border-b border-[#183747] bg-[#06131c] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
                // OUR ROLE
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold leading-tight text-white sm:text-5xl">

                Vous n'achetez pas simplement du cloud.

                <span className="text-[#72b8d8]">
                  {' '}Vous achetez une architecture.
                </span>

              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#9db5c0]">

                NAYGAL se positionne entre votre organisation et les
                infrastructures cloud. Nous étudions votre besoin, comparons
                les options pertinentes et construisons une solution cohérente.

              </p>

              <p className="mt-6 text-lg leading-8 text-[#819da9]">

                Cela peut signifier CloudStore Africa, ST DIGITAL, Google Cloud,
                une architecture hybride ou même le maintien de certains
                services sur vos propres serveurs.

              </p>

              <div className="mt-8 border-l-2 border-[#72b8d8] pl-5">

                <p className="font-mono text-sm leading-7 text-[#b5cbd4]">
                  Notre objectif : ne pas vous vendre « plus de cloud »,
                  mais vous fournir <strong className="text-white">
                  le bon cloud</strong>.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROVIDERS
      ========================================================== */}

      <section
        id="providers"
        className="border-b border-[#183747] bg-[#041019] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
              // CLOUD ECOSYSTEM
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

              Plusieurs fournisseurs.
              <br />

              Une seule interface pour vous : NAYGAL.

            </h2>

            <p className="mt-6 text-lg leading-8 text-[#819da9]">

              Nous sélectionnons la plateforme en fonction du projet.
              L'architecture doit servir votre organisation — et non
              l'inverse.

            </p>

          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">

            {providers.map((provider) => (

              <article
                key={provider.name}
                className="group overflow-hidden border border-[#183747] bg-[#071923] transition duration-300 hover:-translate-y-1 hover:border-[#72b8d8]"
              >

                <div
                  className={`h-1 ${
                    provider.accent === 'green'
                      ? 'bg-[#52a234]'
                      : provider.accent === 'blue'
                        ? 'bg-[#72b8d8]'
                        : 'bg-[#62c7df]'
                  }`}
                />

                <div className="p-7 sm:p-8">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-xs text-[#72b8d8]">
                      {provider.code}
                    </span>

                    <span className="font-mono text-[9px] tracking-[.18em] text-[#526e7a]">
                      {provider.group}
                    </span>

                  </div>

                  <h3 className="mt-9 font-mono text-2xl font-bold text-white">
                    {provider.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#829da8]">
                    {provider.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {provider.services.map((service) => (

                      <span
                        key={service}
                        className="border border-[#183747] bg-[#091923] px-3 py-2 font-mono text-[9px] text-[#8ca7b2]"
                      >
                        {service}
                      </span>

                    ))}

                  </div>

                  <div className="mt-7 border-t border-[#183747] pt-5">

                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#526e7a]">
                      IDEAL POUR
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#a3bac4]">
                      {provider.ideal}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <p className="mt-7 font-mono text-[10px] leading-6 text-[#526e7a]">

            * Les plateformes présentées constituent notre écosystème de
            solutions envisageables. Le choix final dépend de l'étude
            technique, des contraintes du client, de la disponibilité des
            services et des conditions commerciales applicables.

          </p>

        </div>

      </section>

      {/* =========================================================
          OFFRES NAYGAL
      ========================================================== */}

      <section
        id="solutions"
        className="border-b border-[#183747] bg-[#06131c] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
              // NAYGAL CLOUD OFFERS
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

              Ce que nous proposons réellement à nos clients.

            </h2>

            <p className="mt-6 text-lg leading-8 text-[#819da9]">

              Le fournisseur cloud n'est qu'une brique. Notre valeur se situe
              dans l'architecture, l'intégration, la sécurité, la migration
              et l'accompagnement.

            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">

            {clientOffers.map((offer) => (

              <article
                key={offer.number}
                className="border border-[#183747] bg-[#071923] p-7 sm:p-9"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-[#72b8d8]">
                    {offer.number}
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#526e7a]">
                    NAYGAL CLOUD
                  </span>

                </div>

                <h3 className="mt-9 font-mono text-2xl font-bold text-white">
                  {offer.title}
                </h3>

                <p className="mt-2 font-mono text-xs text-[#72bd4f]">
                  {offer.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#829da8]">
                  {offer.description}
                </p>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">

                  {offer.includes.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 border border-[#183747] bg-[#091923] px-4 py-3"
                    >

                      <span className="h-1.5 w-1.5 rounded-full bg-[#72b8d8]" />

                      <span className="font-mono text-[10px] text-[#9db5c0]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          ARCHITECTURES
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-[#183747] bg-[#041019] py-20 sm:py-28">

        <div className="absolute right-[-15%] top-[-20%] h-[650px] w-[650px] rounded-full bg-[#72b8d8]/10 blur-[150px]" />

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
                // ARCHITECTURE OPTIONS
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

                Quatre architectures.
                <br />

                Un choix raisonné.

              </h2>

              <p className="mt-6 leading-8 text-[#819da9]">

                Certains clients ont besoin d'un cloud public. D'autres ont
                besoin d'une infrastructure africaine, d'une architecture
                hybride ou simplement d'une meilleure organisation de leur
                environnement existant.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {architectures.map((architecture, index) => (

                <div
                  key={architecture.title}
                  className="relative border border-[#183747] bg-[#071923] p-7"
                >

                  <span className="font-mono text-[9px] text-[#72b8d8]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 font-mono text-xl font-bold text-white">
                    {architecture.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#829da8]">
                    {architecture.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          MANAGED SERVICES
      ========================================================== */}

      <section className="border-b border-[#183747] bg-[#06131c] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
                // MANAGED CLOUD
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

                Nous pouvons aller
                <br />

                au-delà du déploiement.

              </h2>

              <p className="mt-6 leading-8 text-[#819da9]">

                Une infrastructure cloud nécessite une gouvernance dans
                le temps. NAYGAL peut rester à vos côtés après la mise en
                production.

              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {managedServices.map((service) => (

                <div
                  key={service.code}
                  className="border border-[#183747] bg-[#071923] p-6 transition hover:border-[#72b8d8]"
                >

                  <span className="font-mono text-xs text-[#72b8d8]">
                    {service.code}
                  </span>

                  <h3 className="mt-7 font-mono text-lg font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#829da8]">
                    {service.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CLOUD AFRICA
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-[#183747] py-20 sm:py-28">

        <Image
          src="/images/services/cloud/2.jpg"
          alt="Paysage africain sous un ciel nuageux"
           fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#041019]/80 via-[#061923]/55 to-[#041019]/80" />

        <div className="container-custom relative">

          <div className="mx-auto max-w-4xl text-center">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72bd4f]">
              // AFRICA FIRST
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

              Le cloud africain mérite sa place
              <br />

              <span className="text-[#72bd4f]">
                dans vos architectures.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#a9c0c9]">

              Lorsque la proximité géographique, la souveraineté,
              la latence, les conditions de paiement ou l'accompagnement
              local sont déterminants, nous pouvons orienter le projet vers
              des infrastructures africaines adaptées.

            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">

              {[
                ['01', 'PROXIMITÉ', 'Infrastructure africaine'],
                ['02', 'SOUVERAINETÉ', 'Maîtrise de la localisation'],
                ['03', 'ACCOMPAGNEMENT', 'Expertise de proximité'],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="border border-[#315464] bg-[#061923]/80 p-6 backdrop-blur"
                >

                  <span className="font-mono text-xs text-[#72bd4f]">
                    {number}
                  </span>

                  <p className="mt-5 font-mono text-sm font-bold text-white">
                    {title}
                  </p>

                  <p className="mt-2 text-xs text-[#829da8]">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          GOOGLE CLOUD / DATA / AI
      ========================================================== */}

      <section className="border-b border-[#183747] bg-[#041019] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[1fr_.9fr] lg:items-center">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
                // CLOUD + DATA + AI
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">

                Pour les projets qui ont besoin
                <span className="text-[#72b8d8]">
                  {' '}de plus de puissance.
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-[#819da9]">

                Pour certaines plateformes, notamment les projets data,
                IA, conteneurs ou applications fortement évolutives,
                une plateforme cloud globale peut devenir pertinente.

              </p>

              <p className="mt-5 text-lg leading-8 text-[#819da9]">

                Google Cloud propose notamment Compute Engine, Cloud Storage,
                Cloud Run, Google Kubernetes Engine, Cloud SQL et BigQuery,
                ainsi qu'un large catalogue de services IA et data.

              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  'COMPUTE',
                  'STORAGE',
                  'KUBERNETES',
                  'DATABASE',
                  'DATA',
                  'AI',
                ].map((item) => (

                  <span
                    key={item}
                    className="border border-[#315464] px-4 py-2 font-mono text-[9px] text-[#91abb6]"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

            <div className="border border-[#315464] bg-[#071923] p-7 sm:p-9">

              <div className="font-mono text-[10px] text-[#526e7a]">
                NAYGAL / CLOUD WORKLOAD
              </div>

              <div className="mt-7 space-y-3">

                {[
                  ['APPLICATION', 'Cloud Run / Compute'],
                  ['CONTAINERS', 'Google Kubernetes Engine'],
                  ['DATA', 'Cloud Storage / BigQuery'],
                  ['DATABASE', 'Cloud SQL'],
                  ['AI', 'AI / ML services'],
                ].map(([title, value], index) => (

                  <div
                    key={title}
                    className="flex items-center justify-between border border-[#183747] bg-[#091923] px-5 py-4"
                  >

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[9px] text-[#72b8d8]">
                        0{index + 1}
                      </span>

                      <span className="font-mono text-xs text-white">
                        {title}
                      </span>

                    </div>

                    <span className="font-mono text-[9px] text-[#829da8]">
                      {value}
                    </span>

                  </div>

                ))}

              </div>

              <p className="mt-6 font-mono text-[9px] leading-5 text-[#526e7a]">
                Architecture sélectionnée selon les besoins applicatifs,
                data, sécurité et budget du client.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}

      <section className="border-b border-[#183747] bg-[#06131c] py-20 sm:py-28">

        <div className="container-custom">

          <div className="text-center">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#72b8d8]">
              // NAYGAL METHOD
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-mono text-3xl font-bold text-white sm:text-5xl">

              Du besoin à l'infrastructure opérationnelle.

            </h2>

          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-5">

            {[
              ['01', 'AUDITER', 'Comprendre votre existant'],
              ['02', 'CONCEVOIR', 'Définir l’architecture'],
              ['03', 'CHOISIR', 'Sélectionner le fournisseur'],
              ['04', 'DÉPLOYER', 'Mettre en production'],
              ['05', 'OPÉRER', 'Sécuriser & maintenir'],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="relative border border-[#183747] bg-[#071923] p-6 text-center"
              >

                <span className="font-mono text-xs text-[#72b8d8]">
                  {number}
                </span>

                <h3 className="mt-7 font-mono text-sm font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-[#829da8]">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#041019] py-24 sm:py-32">

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(114,184,216,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(114,184,216,.6) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72b8d8]/10 blur-[140px]" />

        <div className="container-custom relative">

          <div className="mx-auto max-w-5xl border border-[#315464] bg-[#071923]">

            <div className="p-8 text-center sm:p-14">

              <div className="flex items-center justify-center gap-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#72b8d8] shadow-[0_0_15px_#72b8d8]" />

                <span className="font-mono text-xs uppercase tracking-[.2em] text-[#72b8d8]">
                  CLOUD REQUEST / READY
                </span>

              </div>

              <h2 className="mx-auto mt-6 max-w-3xl font-mono text-3xl font-bold text-white sm:text-5xl">

                Parlons de l'infrastructure
                <span className="text-[#72b8d8]">
                  {' '}dont votre organisation a réellement besoin.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#829da8]">

                Que vous partiez de zéro, que vous souhaitiez migrer un
                serveur existant ou que vous cherchiez simplement à mieux
                structurer votre infrastructure, NAYGAL peut vous aider
                à définir la prochaine étape.

              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="border border-[#72b8d8] bg-[#72b8d8] px-8 py-4 font-mono text-sm font-bold text-[#041019] transition hover:bg-[#8ed7f0]"
                >
                  [ DEMANDER UNE ÉTUDE CLOUD ]
                </Link>

                <Link
                  href="/services"
                  className="border border-[#315464] px-8 py-4 font-mono text-sm text-[#b9d1da] transition hover:border-[#72b8d8]"
                >
                  Voir tous les services
                </Link>

              </div>

              <p className="mt-8 font-mono text-[9px] text-[#486573]">
                status: architecture_request_initialized...
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
