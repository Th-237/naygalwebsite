import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Technologie utile',
    text: "Nous croyons à une technologie qui répond à des problèmes réels. Nos solutions doivent être accessibles, pertinentes, évolutives et capables de produire une valeur mesurable.",
  },
  {
    number: '02',
    title: 'Compétences locales',
    text: "Une transformation numérique durable ne repose pas uniquement sur les infrastructures. Elle repose sur des femmes et des hommes capables de comprendre, développer, sécuriser et faire évoluer ces technologies.",
  },
  {
    number: '03',
    title: 'Innovation africaine',
    text: "Nous voulons contribuer à faire émerger des solutions pensées depuis l'Afrique, pour répondre aux réalités africaines, tout en restant ouvertes sur les standards et les opportunités internationales.",
  },
  {
    number: '04',
    title: 'Impact collectif',
    text: "NAYGAL ambitionne de créer un écosystème où entreprises, établissements, étudiants, professionnels, partenaires et porteurs de projets peuvent progresser ensemble.",
  },
]

const horizons = [
  {
    number: '01',
    title: 'Connecter',
    text: 'Développer des infrastructures numériques capables de rapprocher les personnes, les organisations et les opportunités.',
  },
  {
    number: '02',
    title: 'Former',
    text: 'Donner à davantage de personnes les compétences nécessaires pour participer pleinement à l’économie numérique.',
  },
  {
    number: '03',
    title: 'Innover',
    text: 'Encourager la création de produits, services et projets technologiques répondant à des besoins concrets.',
  },
  {
    number: '04',
    title: 'Transformer',
    text: 'Accompagner les organisations dans leur évolution vers des modèles plus numériques, agiles et résilients.',
  },
]

export default function VisionPage() {
  return (
    <main className="overflow-hidden bg-[#020817] pt-[72px] text-white">

      {/* =====================================================
          HERO — MANIFESTE
      ===================================================== */}
      <section className="relative min-h-[760px] overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=90"
            alt="Technologie et monde connecté"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/80" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817]/80 to-[#032965]/50" />
        </div>

        {/* Grille futuriste */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-[#52a234]/20 blur-[160px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#276f91]/20 blur-[140px]" />

        <div className="container-custom relative z-10">

          <div className="flex min-h-[760px] items-center">

            <div className="max-w-6xl">

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.22em] text-slate-400">

                <span className="text-[#68bd49]">
                  NAYGAL
                </span>

                <span className="h-px w-12 bg-white/20" />

                <span>
                  About / 002 / Vision
                </span>

              </div>

              <h1 className="mt-10 text-6xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-[8rem]">

                IMAGINER

                <span className="block text-white/20">
                  LE
                </span>

                <span className="block text-[#68bd49]">
                  POSSIBLE.
                </span>

              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Notre vision est celle d’un écosystème numérique africain
                plus capable, plus connecté et plus innovant — où la
                technologie devient un véritable levier de développement.
              </p>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">

          <div className="container-custom flex items-center justify-between py-5">

            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              Our vision
            </span>

            <span className="text-xs text-slate-500">
              The future is built ↓
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          VISION CENTRALE
      ===================================================== */}
      <section className="bg-[#020817] py-28 sm:py-36">

        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 01 — Our vision
              </p>

              <div className="mt-8 h-px w-20 bg-[#52a234]" />

            </div>

            <div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">

                Construire un avenir où

                <span className="text-[#68bd49]">
                  {' '}la technologie
                </span>

                <span className="text-slate-500">
                  {' '}crée des possibilités.
                </span>

              </h2>

              <p className="mt-8 text-xl leading-9 text-slate-300">
                Nous voulons contribuer à un environnement dans lequel les
                technologies numériques ne sont pas simplement consommées,
                mais comprises, maîtrisées et transformées en opportunités.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                Pour NAYGAL, la transformation numérique ne se limite donc
                pas à installer des équipements, déployer des logiciels ou
                adopter de nouveaux outils. Elle consiste à développer les
                capacités qui permettent aux organisations et aux individus
                de devenir acteurs de cette transformation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MANIFESTE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#061226] py-24 sm:py-32">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-custom relative">

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 02 — Manifesto
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                Nous ne voulons pas
                <span className="block text-slate-500">
                  simplement suivre.
                </span>
              </h2>

            </div>

            <div className="border-l border-white/10 pl-7 sm:pl-12">

              <p className="text-2xl font-medium leading-10 text-white sm:text-3xl">
                Nous voulons comprendre les transformations qui arrivent,
                anticiper leurs conséquences et contribuer à construire les
                solutions qui permettront de les accompagner.
              </p>

              <p className="mt-8 leading-8 text-slate-400">
                Intelligence artificielle, cloud, cybersécurité, robotique,
                automatisation, connectivité : les technologies évoluent
                rapidement. Notre rôle est de transformer cette complexité
                en possibilités compréhensibles et exploitables.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PILIERS
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 03 — Strategic pillars
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Quatre convictions
              <span className="text-slate-500">
                {' '}pour construire la suite.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">

            {pillars.map((pillar) => (

              <article
                key={pillar.number}
                className="group bg-[#020817] p-8 transition hover:bg-[#061226] sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs font-bold text-[#68bd49]">
                    {pillar.number}
                  </span>

                  <span className="text-xs text-slate-600 transition group-hover:text-[#68bd49]">
                    NAYGAL / PILLAR
                  </span>

                </div>

                <h3 className="mt-14 text-2xl font-semibold sm:text-3xl">
                  {pillar.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-slate-400">
                  {pillar.text}
                </p>

                <div className="mt-8 h-px w-10 bg-[#52a234] transition-all duration-500 group-hover:w-20" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          AFRIQUE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#032965] py-24 sm:py-32">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2200&q=90"
            alt="Communauté et innovation"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#032965]/80" />

        </div>

        <div className="container-custom relative">

          <div className="grid gap-16 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a4d78f]">
                / 04 — Africa
              </p>

              <h2 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl">

                Pensé depuis

                <span className="block text-[#68bd49]">
                  l’Afrique.
                </span>

                Ouvert sur
                <span className="text-white/40">
                  {' '}le monde.
                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80">
                L’Afrique possède ses propres réalités, ses contraintes, ses
                talents et ses opportunités. Notre ambition est de contribuer
                à des solutions qui tiennent compte de cette réalité tout en
                restant connectées aux standards technologiques mondiaux.
              </p>

            </div>

            <div className="border border-white/15 bg-black/20 p-8 backdrop-blur-md sm:p-10">

              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Notre position
              </p>

              <div className="mt-8 space-y-7">

                <div>
                  <p className="text-3xl font-semibold">
                    Local
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-100/60">
                    Comprendre les réalités du terrain.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-3xl font-semibold">
                    Régional
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-100/60">
                    Créer des solutions capables de changer d’échelle.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-3xl font-semibold">
                    International
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-100/60">
                    S’inspirer des standards et contribuer aux échanges.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          HORIZONS
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 05 — Horizon
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                Notre vision
                <span className="block text-slate-500">
                  devient action.
                </span>
              </h2>

            </div>

            <div className="border-t border-white/10">

              {horizons.map((item) => (

                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[70px_190px_1fr] sm:items-center"
                >

                  <span className="text-xs font-bold text-[#68bd49]">
                    {item.number}
                  </span>

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NAYGAL ECOSYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 06 — Ecosystem
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Une vision.
              <span className="text-slate-500">
                {' '}Plusieurs leviers.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              NAYGAL structure son action autour de plusieurs dimensions
              complémentaires qui permettent de passer de la technologie
              à la compétence, puis de la compétence à l’impact.
            </p>

          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">

            <Link
              href="/expertises"
              className="group border border-white/10 bg-[#020817] p-8 transition hover:-translate-y-1 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold text-[#68bd49]">
                01 / TECHNOLOGY
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                NAYGAL
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Concevoir, déployer et accompagner les transformations
                technologiques.
              </p>

              <span className="mt-8 block text-sm font-semibold text-[#68bd49]">
                Découvrir nos expertises →
              </span>

            </Link>

            <Link
              href="/academy"
              className="group border border-white/10 bg-[#020817] p-8 transition hover:-translate-y-1 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold text-[#68bd49]">
                02 / EDUCATION
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                NAYAC
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Développer les compétences numériques et préparer les talents
                de demain.
              </p>

              <span className="mt-8 block text-sm font-semibold text-[#68bd49]">
                Découvrir NAYAC →
              </span>

            </Link>

            <Link
              href="/mouvement"
              className="group border border-white/10 bg-[#020817] p-8 transition hover:-translate-y-1 hover:border-[#52a234]/50"
            >

              <span className="text-xs font-bold text-[#68bd49]">
                03 / IMPACT
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                LE MOUVEMENT
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Mobiliser les personnes et les organisations autour
                d’initiatives à impact.
              </p>

              <span className="mt-8 block text-sm font-semibold text-[#68bd49]">
                Rejoindre le Mouvement →
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#52a234] py-24 sm:py-32">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-white/10 blur-[100px]" />

        <div className="container-custom relative">

          <div className="max-w-5xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
              / 07 — The future
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[.95] tracking-[-.06em] text-white sm:text-7xl">
              Le futur n’est pas
              <span className="block text-[#d9f2cc]">
                quelque chose que
              </span>
              nous attendons.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              C’est quelque chose que nous contribuons à construire,
              progressivement, avec les technologies, les compétences,
              les idées et les personnes qui nous entourent.
            </p>

          </div>

          <div className="mt-12">

            <Link
              href="/a-propos/valeurs"
              className="inline-flex items-center gap-3 bg-[#020817] px-8 py-4 font-semibold text-white transition hover:bg-[#061226]"
            >
              Découvrir nos valeurs
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}