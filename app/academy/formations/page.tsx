import Link from 'next/link'

const techFormations = [
  {
    title: 'Fondamentaux du numérique',
    category: 'NAYAC START',
    description:
      'Construisez une base solide pour comprendre les outils, les usages et les environnements numériques.',
    level: 'Débutant',
    duration: '4 à 6 semaines',
    image:
      'https://www.avvenire.it/_ipx/f_webp%26s_1536x864/https%3A/avv-naxos-prod-cdn.azureedge.net/avvenire/stories/2026/06/01/1920x1080/8995fd72-5907-4de3-a937-398d3259649d.jpeg%3Fv%3D1780330646',
    topics: ['Culture numérique', 'Informatique', 'Internet'],
  },
  {
    title: 'Réseaux & Infrastructures',
    category: 'NAYAC TECH',
    description:
      'Apprenez à concevoir, déployer et administrer des réseaux, serveurs et infrastructures modernes.',
    level: 'Intermédiaire',
    duration: '6 à 10 semaines',
    image:
      'https://www.funtech.pro/assets/img/about-us.jpg',
    topics: ['TCP/IP', 'Routage', 'Linux', 'Serveurs'],
  },
  {
    title: 'Cybersécurité',
    category: 'NAYAC TECH',
    description:
      'Développez les compétences nécessaires pour comprendre les menaces et protéger les systèmes numériques.',
    level: 'Intermédiaire',
    duration: '6 à 10 semaines',
    image:
      'https://assets.weforum.org/article/image/i-kPC-iIiB5-BPzxR7OgWbPrJ0i5bn20yOAjgJZbJEA.jpg',
    topics: ['Sécurité réseau', 'Linux', 'Menaces', 'Protection'],
  },
  {
    title: 'Intelligence artificielle',
    category: 'NAYAC AI',
    description:
      'Découvrez l’IA générative et apprenez à créer des solutions concrètes pour apprendre, travailler et automatiser.',
    level: 'Débutant → Intermédiaire',
    duration: '4 à 8 semaines',
    image:
      'https://uploads-ssl.webflow.com/642bdec5539cff71f59d0459/644ce03dffa152af429ddc9d_Lake%20Hub_017%20%282%29.jpg',
    topics: ['IA générative', 'Prompt', 'Automatisation'],
  },
  {
    title: 'Développement & automatisation',
    category: 'NAYAC TECH',
    description:
      'Transformez des idées et des besoins métiers en applications et solutions numériques.',
    level: 'Débutant → Intermédiaire',
    duration: '6 à 10 semaines',
    image:
      'https://www.brookings.edu/wp-content/uploads/2022/08/girls-STEM-education-Nigeria.jpg?quality=75',
    topics: ['Web', 'APIs', 'Automatisation', 'Bases de données'],
  },
  {
    title: 'Cloud & systèmes',
    category: 'NAYAC TECH',
    description:
      'Comprenez les architectures cloud et apprenez à administrer des environnements modernes.',
    level: 'Intermédiaire',
    duration: '6 à 10 semaines',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    topics: ['Cloud', 'Virtualisation', 'Linux', 'Infrastructure'],
  },
]

const proFormations = [
  {
    title: 'IA pour les professionnels',
    description:
      'Utilisez l’intelligence artificielle pour gagner du temps, produire plus efficacement et automatiser certaines tâches de votre métier.',
    image:
      'https://uploads-ssl.webflow.com/642bdec5539cff71f59d0459/644ce03dffa152af429ddc9d_Lake%20Hub_017%20%282%29.jpg',
    tags: ['IA', 'Productivité', 'Automatisation'],
  },
  {
    title: 'Data & tableaux de bord',
    description:
      'Transformez vos données en informations utiles pour mieux comprendre votre activité et prendre de meilleures décisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    tags: ['Excel', 'Data', 'Power BI'],
  },
  {
    title: 'Marketing digital',
    description:
      'Développez votre présence numérique, votre communication et votre capacité à atteindre vos clients en ligne.',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85',
    tags: ['Marketing', 'Réseaux sociaux', 'Contenu'],
  },
  {
    title: 'Gestion de projet numérique',
    description:
      'Apprenez à organiser, piloter et suivre efficacement des projets dans un environnement numérique.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    tags: ['Projet', 'Agile', 'Collaboration'],
  },
  {
    title: 'Cybersécurité pour les professionnels',
    description:
      'Adoptez les bons réflexes pour protéger vos comptes, vos appareils, vos données et votre organisation.',
    image:
      'https://assets.weforum.org/article/image/i-kPC-iIiB5-BPzxR7OgWbPrJ0i5bn20yOAjgJZbJEA.jpg',
    tags: ['Sécurité', 'Données', 'Sensibilisation'],
  },
  {
    title: 'Productivité numérique',
    description:
      'Maîtrisez les outils collaboratifs et les méthodes numériques qui permettent de mieux travailler au quotidien.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    tags: ['Organisation', 'Collaboration', 'Outils'],
  },
  {
    title: 'Numérique pour les enseignants',
    description:
      'Découvrez comment intégrer les outils numériques et l’IA dans la préparation, l’enseignement et le suivi pédagogique.',
    image:
      'https://www.unicef.org/cameroon/sites/unicef.org.cameroon/files/styles/hero_tablet/public/UNICEF_CMR_2024_0.jpg.webp',
    tags: ['Éducation', 'IA', 'Pédagogie'],
  },
  {
    title: 'Numérique pour les entrepreneurs',
    description:
      'Utilisez les outils numériques pour structurer votre activité, communiquer, vendre et automatiser.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    tags: ['Entrepreneuriat', 'Digital', 'Business'],
  },
]

const benefits = [
  {
    number: '01',
    title: 'Des compétences directement utiles',
    text: 'Nous privilégions les connaissances que les apprenants peuvent réellement utiliser dans leurs études, leur métier ou leurs projets.',
  },
  {
    number: '02',
    title: 'Des cas pratiques',
    text: 'Les formations s’appuient sur des exercices, scénarios et projets inspirés de situations concrètes.',
  },
  {
    number: '03',
    title: 'Une approche progressive',
    text: 'Les parcours sont pensés pour permettre une progression logique, du niveau débutant jusqu’à des compétences plus avancées.',
  },
  {
    number: '04',
    title: 'Un accompagnement humain',
    text: 'La technologie reste un outil. L’échange, le suivi et l’accompagnement des apprenants restent essentiels.',
  },
]

const audiences = [
  'Élèves & étudiants',
  'Professionnels',
  'Entrepreneurs',
  'Enseignants',
  'Organisations',
  'Associations & ONG',
]

export default function FormationsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#032965] text-white">
        <div className="absolute inset-0">
          <img
            src="https://assets.weforum.org/article/image/i-kPC-iIiB5-BPzxR7OgWbPrJ0i5bn20yOAjgJZbJEA.jpg"
            alt="Apprenants africains utilisant les technologies numériques"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#032965] via-[#032965]/95 to-[#032965]/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid min-h-[680px] items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

            <div className="py-24">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#52a234]" />
                <span className="text-sm font-semibold">
                  NAYGAL ACADEMY · NAYAC
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Apprendre le numérique.
                <span className="block text-[#68bd49]">
                  Développer son métier.
                </span>
                <span className="block">
                  Construire son avenir.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                Des formations conçues pour celles et ceux qui veulent
                développer des compétences numériques concrètes — qu’ils
                souhaitent entrer dans la technologie ou simplement mieux
                utiliser le numérique dans leur métier.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#tech"
                  className="rounded-md bg-[#52a234] px-7 py-4 text-center font-semibold transition hover:bg-[#438a2c]"
                >
                  Découvrir NAYAC TECH
                </a>

                <a
                  href="#pro"
                  className="rounded-md border border-white/30 px-7 py-4 text-center font-semibold transition hover:bg-white/10"
                >
                  Découvrir NAYAC PRO
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-green-300">
                  Votre parcours
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  Deux chemins. Une même ambition.
                </h2>

                <div className="mt-7 space-y-4">

                  <a
                    href="#tech"
                    className="block rounded-xl bg-white p-5 text-[#032965] transition hover:translate-x-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#52a234]">
                        NAYAC TECH
                      </span>
                      <span>→</span>
                    </div>

                    <p className="mt-3 text-xl font-bold">
                      Je veux apprendre la technologie
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Réseaux, cybersécurité, IA, développement, cloud...
                    </p>
                  </a>

                  <a
                    href="#pro"
                    className="block rounded-xl border border-white/20 bg-white/5 p-5 transition hover:translate-x-1 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-300">
                        NAYAC PRO
                      </span>
                      <span>→</span>
                    </div>

                    <p className="mt-3 text-xl font-bold">
                      Je veux mieux utiliser le numérique
                    </p>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      IA, data, marketing, productivité, gestion de projet...
                    </p>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">

            <div>
              <p className="text-3xl font-bold text-[#032965]">TECH</p>
              <p className="mt-2 font-semibold text-[#032965]">
                Devenir acteur de la technologie
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#52a234]">PRO</p>
              <p className="mt-2 font-semibold text-[#032965]">
                Transformer son métier grâce au numérique
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#276f91]">LAB</p>
              <p className="mt-2 font-semibold text-[#032965]">
                Mettre les compétences en pratique
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NAYAC TECH */}
      <section id="tech" className="scroll-mt-20 bg-[#f5f8fc] py-20 sm:py-28">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                NAYAC TECH
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#032965] sm:text-4xl">
                Entrez dans le monde de la technologie.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Des parcours pour développer des compétences techniques,
              comprendre les technologies modernes et apprendre à construire
              des solutions numériques.
            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {techFormations.map((formation) => (
              <article
                key={formation.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-52 overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/80 to-transparent" />

                  <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#032965]">
                    {formation.category}
                  </span>
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#032965]">
                    {formation.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {formation.description}
                  </p>

                  <div className="mt-5 flex gap-5 border-y border-slate-100 py-4 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">Niveau</p>
                      <p className="mt-1 font-semibold text-[#032965]">
                        {formation.level}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Durée</p>
                      <p className="mt-1 font-semibold text-[#032965]">
                        {formation.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {formation.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex font-semibold text-[#032965] transition group-hover:text-[#52a234]"
                  >
                    Découvrir la formation →
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* NAYAC PRO */}
      <section id="pro" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                NAYAC PRO
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#032965] sm:text-4xl">
                Le numérique au service de votre métier.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Vous n’avez pas besoin de devenir développeur pour tirer
                profit du numérique.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                NAYAC PRO accompagne les professionnels dans l’adoption des
                outils numériques, de l’intelligence artificielle, de la data
                et des nouvelles méthodes de travail.
              </p>

              <div className="mt-8 border-l-4 border-[#52a234] bg-[#f3f8f0] p-5">
                <p className="font-semibold text-[#032965]">
                  Une question simple :
                </p>

                <p className="mt-1 text-slate-600">
                  Comment le numérique peut-il vous permettre de mieux faire
                  votre métier ?
                </p>
              </div>

            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Professionnels africains collaborant autour d'un projet"
                className="h-[420px] w-full object-cover"
              />
            </div>

          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {proFormations.map((formation) => (
              <article
                key={formation.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#032965]/70 to-transparent" />
                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold text-[#032965]">
                    {formation.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {formation.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {formation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#edf7e7] px-2.5 py-1 text-xs font-medium text-[#438a2c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex text-sm font-bold text-[#032965] transition group-hover:text-[#52a234]"
                  >
                    En savoir plus →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* FORMATIONS SUR MESURE */}
      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#91d273]">
                Pour les organisations
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Une formation adaptée à votre organisation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Une entreprise, une école, une association ou une ONG n’a pas
                toujours les mêmes besoins. NAYAC peut construire des
                programmes personnalisés autour de vos outils, vos métiers,
                votre niveau et vos objectifs.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-md bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Concevoir une formation sur mesure →
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                'Formation en entreprise',
                'Formation pour établissements',
                'Ateliers d’équipe',
                'Sensibilisation cybersécurité',
                'IA & transformation numérique',
                'Accompagnement au changement',
              ].map((item, index) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-xs font-bold text-[#91d273]">
                    0{index + 1}
                  </span>

                  <p className="mt-5 font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* MÉTHODE */}
      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Notre méthode
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#032965] sm:text-4xl">
              De la connaissance à la compétence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NAYAC cherche à réduire l’écart entre ce que l’on apprend et ce
              que l’on est capable de réaliser.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-[#52a234]">
                  {benefit.number}
                </span>

                <h3 className="mt-8 text-xl font-bold text-[#032965]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PUBLIC */}
      <section className="bg-white py-20">

        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Pour qui ?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#032965]">
                NAYAC s’adresse à toute personne qui veut progresser.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 border border-slate-200 p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    ✓
                  </span>

                  <span className="font-semibold text-[#032965]">
                    {audience}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#f5f8fc] py-20 sm:py-24">

        <div className="container-custom">

          <div className="overflow-hidden rounded-2xl bg-[#032965] px-7 py-14 text-center sm:px-12 sm:py-20">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#91d273]">
              Commencer
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Prêt à développer vos compétences numériques ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Que vous souhaitiez apprendre la technologie ou simplement
              mieux l’utiliser dans votre métier, NAYAC peut vous accompagner.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="rounded-md bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Parler à NAYAC
              </Link>

              <Link
                href="/academy"
                className="rounded-md border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir NAYAC
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}