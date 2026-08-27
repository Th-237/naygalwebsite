import Link from 'next/link'
import Image from 'next/image'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata = {
  title: 'Services IT pour entreprises au Cameroun | NAYGAL',
  description:
    'Besoin d’infrastructure, réseaux, cybersécurité, cloud ou automatisation IA pour votre entreprise ? NAYGAL conçoit des solutions IT fiables et sur mesure.',
  alternates: {
    canonical: `${SITE}/services`,
  },
  openGraph: {
    title: 'Services IT pour entreprises au Cameroun | NAYGAL',
    description:
      'Besoin d’infrastructure, réseaux, cybersécurité, cloud ou automatisation IA pour votre entreprise ? NAYGAL conçoit des solutions IT fiables et sur mesure.',
    url: `${SITE}/services`,
    images: ['/images/home/NAYTECHROOM.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services IT pour entreprises au Cameroun | NAYGAL',
    description:
      'Besoin d’infrastructure, réseaux, cybersécurité, cloud ou automatisation IA pour votre entreprise ? NAYGAL conçoit des solutions IT fiables et sur mesure.',
    images: ['/images/home/NAYTECHROOM.png'],
  },
}

const services = [
  {
    number: '01',
    title: 'Infrastructure',
    description:
      'Concevoir une base informatique fiable pour vos utilisateurs, vos applications et vos données.',
    details: ['Serveurs', 'Virtualisation', 'Stockage', 'Sauvegarde'],
    href: '/services/infrastructure',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '02',
    title: 'Serveurs NAS',
    description:
      'Centraliser, organiser et protéger les données de votre organisation dans un environnement maîtrisé.',
    details: ['Stockage centralisé', 'Partage de fichiers', 'Backup', 'Accès distant'],
    href: '/services/serveurs-nas',
    image:
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '03',
    title: 'Réseaux',
    description:
      'Mettre en place des réseaux performants pour connecter vos collaborateurs, vos équipements et vos sites.',
    details: ['LAN', 'Wi-Fi professionnel', 'VLAN', 'Routage & Firewall'],
    href: '/services/reseaux',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '04',
    title: 'Maintenance',
    description:
      'Maintenir votre environnement informatique opérationnel et réduire les interruptions de service.',
    details: ['Prévention', 'Dépannage', 'Supervision', 'Support'],
    href: '/services/maintenance',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '05',
    title: 'Cybersécurité',
    description:
      'Protéger vos systèmes, vos utilisateurs et vos données contre les risques numériques.',
    details: ['Audit', 'Protection', 'Sécurité réseau', 'Sauvegarde'],
    href: '/services/cybersecurite',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '06',
    title: 'Cloud',
    description:
      'Exploiter les technologies cloud pour gagner en mobilité, collaboration, disponibilité et flexibilité.',
    details: ['Migration', 'Hébergement', 'Collaboration', 'Cloud Backup'],
    href: '/services/cloud',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '07',
    title: 'Automatisation IA',
    description:
      'Automatiser les tâches répétitives et intégrer l’intelligence artificielle dans vos processus.',
    details: ['Automatisation', 'Assistants IA', 'Documents', 'Processus métier'],
    href: '/services/automatisation-ia',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85',
  },
]

const approach = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Nous analysons votre organisation, vos usages, vos contraintes et vos objectifs.',
  },
  {
    number: '02',
    title: 'Concevoir',
    text: 'Nous définissons une architecture cohérente avec vos besoins et votre budget.',
  },
  {
    number: '03',
    title: 'Déployer',
    text: 'Nous installons, configurons et intégrons les solutions dans votre environnement.',
  },
  {
    number: '04',
    title: 'Sécuriser',
    text: 'Nous intégrons la sécurité dans les systèmes, les accès et les données.',
  },
  {
    number: '05',
    title: 'Maintenir',
    text: 'Nous vous accompagnons dans la durée pour maintenir et faire évoluer votre infrastructure.',
  },
]

const audiences = [
  {
    number: '01',
    title: 'TPE / Startups',
    text: 'Une infrastructure professionnelle, simple à exploiter et capable d’accompagner votre croissance.',
  },
  {
    number: '02',
    title: 'PME',
    text: 'Structurer, moderniser et sécuriser votre environnement numérique sans complexité inutile.',
  },
  {
    number: '03',
    title: 'Établissements',
    text: 'Écoles, centres de formation et institutions : équipements, réseaux, sécurité et accompagnement.',
  },
  {
    number: '04',
    title: 'Associations',
    text: 'Des solutions pragmatiques adaptées à vos ressources, vos équipes et vos missions.',
  },
  {
    number: '05',
    title: 'Organisations multi-sites',
    text: 'Connecter les équipes, centraliser les données et superviser plusieurs environnements.',
  },
]

const interventions = [
  {
    problem: 'Votre réseau est lent ou instable ?',
    solution:
      'Nous analysons l’architecture réseau, identifions les points de saturation et proposons une optimisation.',
  },
  {
    problem: 'Vos fichiers sont dispersés ?',
    solution:
      'Nous pouvons mettre en place un serveur NAS, organiser les espaces de stockage et automatiser les sauvegardes.',
  },
  {
    problem: 'Vous craignez de perdre vos données ?',
    solution:
      'Nous construisons une stratégie de sauvegarde et de restauration adaptée à vos données critiques.',
  },
  {
    problem: 'Vos collaborateurs font trop de tâches répétitives ?',
    solution:
      'Nous identifions les processus automatisables et étudions les possibilités offertes par l’IA.',
  },
  {
    problem: 'Votre entreprise grandit ?',
    solution:
      'Nous faisons évoluer votre infrastructure pour accompagner les nouveaux utilisateurs, équipements et sites.',
  },
]

const reasons = [
  {
    number: '01',
    title: 'Approche sur mesure',
    text: 'Nous partons de votre réalité et non d’un catalogue de solutions prédéfini.',
  },
  {
    number: '02',
    title: 'Sécurité',
    text: 'La protection des systèmes et des données est intégrée dès la conception.',
  },
  {
    number: '03',
    title: 'Accompagnement',
    text: 'Nous ne nous arrêtons pas au déploiement. Nous restons disponibles pour faire évoluer votre environnement.',
  },
  {
    number: '04',
    title: 'Évolutivité',
    text: 'Nos architectures sont pensées pour pouvoir évoluer avec votre organisation.',
  },
]

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#021f50] text-white">

        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=90"
          alt="Infrastructure informatique"
           fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02152f] via-[#021f50]/90 to-[#021f50]/40" />

        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />
        </div>

        <div className="container-custom relative flex min-h-[680px] items-center">

          <div className="max-w-5xl">

            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-[#9bd47f]">
              <span className="h-px w-10 bg-[#52a234]" />
              NAYGAL · SERVICES
            </p>

            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl lg:text-[82px]">
              Des solutions
              <br />
              technologiques
              <br />
              <span className="text-[#72bd4f]">qui travaillent pour vous.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              NAYGAL conçoit, déploie, sécurise et maintient les
              environnements numériques dont les organisations ont besoin
              pour fonctionner, évoluer et innover.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Découvrir nos services
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
          NOTRE APPROCHE
      ====================================================== */}

      <section className="border-b border-slate-100 py-20 sm:py-24">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Notre approche
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Une méthode simple.
                <br />
                Des solutions solides.
              </h2>

            </div>

            <div>

              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Nous ne commençons pas par le matériel ou la technologie.
                Nous commençons par comprendre votre organisation et vos
                besoins.
              </p>

              <div className="mt-10 border-t border-slate-200">

                {approach.map((step) => (

                  <div
                    key={step.number}
                    className="grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[70px_190px_1fr] sm:items-center"
                  >

                    <span className="text-sm font-bold text-[#52a234]">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-semibold text-[#032965]">
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

        </div>

      </section>

      {/* =====================================================
          NOS SERVICES
      ====================================================== */}

      <section
        id="services"
        className="bg-[#f5f8fc] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
              De l’infrastructure
              <br />
              à l’intelligence artificielle.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Un ensemble de services complémentaires pour construire un
              environnement numérique cohérent, sécurisé et évolutif.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <Link
                key={service.title}
                href={service.href}
                className={`group overflow-hidden bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >

                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? 'h-72'
                      : 'h-56'
                  }`}
                >

                  <Image
                    src={service.image}
                    alt={service.title}
                     fill sizes="100vw"   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#021f50]/80 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white text-xs font-bold text-[#032965]">
                    {service.number}
                  </span>

                  <h3 className="absolute bottom-5 left-6 text-2xl font-semibold text-white sm:text-3xl">
                    {service.title}
                  </h3>

                </div>

                <div className="p-7">

                  <p className="text-base leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {service.details.map((detail) => (

                      <span
                        key={detail}
                        className="bg-[#f0f5fa] px-3 py-1.5 text-xs font-semibold text-[#276f91]"
                      >
                        {detail}
                      </span>

                    ))}

                  </div>

                  <div className="mt-6 font-semibold text-[#52a234] transition group-hover:translate-x-1">
                    Découvrir →
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          POUR QUI ?
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Pour qui ?
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                La technologie
                <br />
                adaptée au terrain.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
                Chaque organisation possède ses propres contraintes.
                NAYGAL adapte ses solutions à votre taille, vos ressources
                et vos objectifs.
              </p>

            </div>

            <div className="border-t border-slate-200">

              {audiences.map((audience) => (

                <div
                  key={audience.number}
                  className="grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[70px_230px_1fr] sm:items-center"
                >

                  <span className="text-sm font-bold text-[#52a234]">
                    {audience.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {audience.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {audience.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NOS INTERVENTIONS
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos interventions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Vous avez un problème.
              <br />
              Nous cherchons la bonne solution.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {interventions.map((item, index) => (

              <div
                key={item.problem}
                className="group bg-white p-7 transition hover:shadow-xl"
              >

                <div className="flex items-start gap-5">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold text-[#032965]">
                      {item.problem}
                    </h3>

                    <div className="my-5 h-px bg-slate-100" />

                    <p className="text-sm leading-7 text-slate-600">
                      {item.solution}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          POURQUOI NAYGAL ?
      ====================================================== */}

      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Pourquoi NAYGAL ?
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                La technologie,
                <br />
                mais avec du sens.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
                Nous croyons qu’une bonne solution informatique doit être
                utile aujourd’hui et suffisamment solide pour accompagner
                demain.
              </p>

            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">

              {reasons.map((reason) => (

                <div
                  key={reason.number}
                  className="bg-[#032965] p-7 transition hover:bg-[#062a60]"
                >

                  <span className="text-sm font-bold text-[#72bd4f]">
                    {reason.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {reason.text}
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

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#52a234]/10 blur-3xl" />

        <div className="container-custom relative">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
                Votre infrastructure
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-6xl">
                Parlons de ce que votre organisation veut construire.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Un nouveau réseau, un serveur, une migration cloud, une
                stratégie de cybersécurité ou un projet d’automatisation :
                commençons par votre besoin.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex h-fit justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Parlons de votre infrastructure →
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}