import Link from 'next/link'
import Image from 'next/image'

const milestones = [
  {
    number: '01',
    label: 'ORIGINE',
    title: 'Une conviction avant une entreprise.',
    text: "NAYGAL naît d'une conviction : le numérique peut devenir un puissant levier de transformation lorsqu'il est pensé à partir des réalités du terrain.",
    image: '/images/a-propos/notre-histoire/time-line/1.jpg',
  },
  {
    number: '02',
    label: 'CONSTRUCTION',
    title: 'Transformer une idée en projet.',
    text: "La vision prend progressivement forme autour d'un objectif concret : réunir expertise technologique, accompagnement et transmission des compétences au sein d'un même écosystème.",
    image: '/images/a-propos/notre-histoire/time-line/2.jpg',
  },
  {
    number: '03',
    label: 'EXPERTISE',
    title: 'Construire des capacités technologiques.',
    text: "Réseaux, infrastructures, cybersécurité, cloud, intelligence artificielle et transformation numérique deviennent les piliers de l'expertise technologique de NAYGAL.",
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90',
  },
  {
    number: '04',
    label: 'TRANSMISSION',
    title: 'Parce que la technologie a besoin de talents.',
    text: "Avec NAYGAL Academy, l'ambition s'étend au-delà des solutions : développer les compétences, favoriser l'apprentissage pratique et préparer davantage de personnes aux opportunités numériques.",
    image: '/images/a-propos/notre-histoire/time-line/4.jpg',
  },
  {
    number: '05',
    label: 'IMPACT',
    title: 'Mettre l’écosystème en mouvement.',
    text: "Le Mouvement ouvre une nouvelle dimension : permettre aux personnes, organisations et partenaires de contribuer à des initiatives capables de produire un impact concret.",
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=90',
  },
]

const principles = [
  {
    number: '01',
    title: 'Partir du réel',
    text: 'Comprendre les besoins avant de proposer la technologie.',
  },
  {
    number: '02',
    title: 'Construire utile',
    text: 'Privilégier les solutions concrètes, durables et adaptées.',
  },
  {
    number: '03',
    title: 'Transmettre',
    text: 'Faire circuler les connaissances et développer les compétences.',
  },
  {
    number: '04',
    title: 'Créer ensemble',
    text: 'Faire de la collaboration un moteur d’innovation et d’impact.',
  },
]

export default function NotreHistoirePage() {
  return (
    <main className="overflow-hidden bg-[#020817] pt-[72px] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[720px] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=90"
            alt="Technologie et innovation"
             fill sizes="100vw"   className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-[#032965]/40" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#52a234]/20 blur-[150px]" />

        <div className="container-custom relative z-10">

          <div className="flex min-h-[720px] items-center">

            <div className="max-w-5xl">

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.2em] text-slate-400">

                <span className="text-[#68bd49]">
                  NAYGAL
                </span>

                <span className="h-px w-12 bg-white/20" />

                <span>
                  About / 001 / Story
                </span>

              </div>

              <h1 className="mt-10 text-6xl font-semibold leading-[.92] tracking-[-.07em] sm:text-7xl lg:text-[8rem]">

                EVERY
                <span className="text-white/20">
                  {' '}STORY
                </span>

                <span className="block text-[#68bd49]">
                  STARTS
                </span>

                <span className="block">
                  WITH A WHY.
                </span>

              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                L’histoire de NAYGAL est celle d’une idée qui cherche à
                devenir une capacité : comprendre la technologie, la
                construire, la transmettre et l’utiliser pour créer de
                nouvelles possibilités.
              </p>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">

          <div className="container-custom flex items-center justify-between py-5">

            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              Our journey
            </span>

            <span className="text-xs text-slate-500">
              Scroll to explore ↓
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 002 — The beginning
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">
                Avant les solutions,
                <span className="block text-slate-500">
                  il y avait une conviction.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-300">
                Le projet NAYGAL repose sur une idée simple : l’accès à la
                technologie ne devrait pas seulement signifier l’utilisation
                d’outils. Il doit aussi permettre de comprendre, de créer et
                de décider.
              </p>

              <p className="mt-7 leading-8 text-slate-400">
                Dans un environnement où les entreprises se digitalisent,
                où les métiers évoluent rapidement et où les nouvelles
                technologies redéfinissent les usages, nous avons voulu
                construire une approche capable de relier plusieurs
                dimensions qui sont souvent traitées séparément.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">

                <div className="border border-white/10 bg-[#061226] p-5">

                  <p className="text-xs font-bold text-[#68bd49]">
                    01
                  </p>

                  <p className="mt-5 font-semibold">
                    Technologie
                  </p>

                </div>

                <div className="border border-white/10 bg-[#061226] p-5">

                  <p className="text-xs font-bold text-[#68bd49]">
                    02
                  </p>

                  <p className="mt-5 font-semibold">
                    Compétences
                  </p>

                </div>

                <div className="border border-white/10 bg-[#061226] p-5">

                  <p className="text-xs font-bold text-[#68bd49]">
                    03
                  </p>

                  <p className="mt-5 font-semibold">
                    Impact
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}
      <section className="relative bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="mb-20 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 003 — Timeline
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Une histoire
              <span className="text-slate-500">
                {' '}en construction.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              NAYGAL n’est pas pensé comme un projet figé. Son histoire
              s’écrit à travers les projets, les personnes, les compétences
              et les initiatives qui viennent progressivement enrichir son
              écosystème.
            </p>

          </div>

          <div className="relative">

            {/* Timeline line */}
            <div className="absolute bottom-0 left-[20px] top-0 hidden w-px bg-gradient-to-b from-[#52a234] via-white/10 to-transparent md:block" />

            <div className="space-y-16 md:space-y-24">

              {milestones.map((milestone, index) => (

                <article
                  key={milestone.number}
                  className="relative grid gap-8 md:grid-cols-[90px_1fr] lg:grid-cols-[110px_1fr]"
                >

                  {/* Number */}
                  <div className="relative z-10 hidden md:block">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#52a234] bg-[#061226] text-xs font-bold text-[#68bd49]">
                      {milestone.number}
                    </div>

                  </div>

                  {/* Content */}
                  <div className="overflow-hidden border border-white/10 bg-[#020817]">

                    <div className="grid lg:grid-cols-2">

                      <div className="relative min-h-[350px] overflow-hidden">

                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                           fill sizes="100vw"   className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

                        <div className="absolute left-6 top-6">

                          <span className="border border-white/20 bg-[#020817]/70 px-3 py-2 text-[10px] font-bold tracking-[.2em] text-[#68bd49] backdrop-blur-md">
                            {milestone.label}
                          </span>

                        </div>

                      </div>

                      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                        <span className="text-xs font-bold text-[#68bd49]">
                          {milestone.number} / 05
                        </span>

                        <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                          {milestone.title}
                        </h3>

                        <p className="mt-5 leading-8 text-slate-400">
                          {milestone.text}
                        </p>

                        <div className="mt-8 h-px w-12 bg-[#52a234]" />

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 004 — What drives us
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                Notre histoire
                <span className="block text-slate-500">
                  nous apprend à avancer.
                </span>
              </h2>

            </div>

            <div className="border-t border-white/10">

              {principles.map((principle) => (

                <div
                  key={principle.number}
                  className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[60px_200px_1fr] sm:items-center"
                >

                  <span className="text-xs font-bold text-[#68bd49]">
                    {principle.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {principle.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {principle.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FUTURE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#032965] py-24 sm:py-32">

        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#52a234]/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#276f91]/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="container-custom relative">

          <div className="max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a4d78f]">
              / 005 — What comes next
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-[-.06em] sm:text-7xl">

              L’histoire
              <span className="text-white/40">
                {' '}continue.
              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
              Les prochaines étapes de NAYGAL seront définies par les projets
              que nous construirons, les personnes que nous accompagnerons et
              les initiatives que nous réussirons à mettre en mouvement.
            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="border border-white/15 bg-white/5 p-7 backdrop-blur-md">

              <p className="text-xs font-bold text-[#a4d78f]">
                NEXT / 01
              </p>

              <p className="mt-8 text-2xl font-semibold">
                Développer
              </p>

              <p className="mt-3 leading-7 text-blue-100/70">
                Renforcer notre capacité à concevoir et déployer des
                solutions technologiques adaptées.
              </p>

            </div>

            <div className="border border-white/15 bg-white/5 p-7 backdrop-blur-md">

              <p className="text-xs font-bold text-[#a4d78f]">
                NEXT / 02
              </p>

              <p className="mt-8 text-2xl font-semibold">
                Transmettre
              </p>

              <p className="mt-3 leading-7 text-blue-100/70">
                Étendre les possibilités d’apprentissage à travers NAYGAL
                Academy.
              </p>

            </div>

            <div className="border border-white/15 bg-white/5 p-7 backdrop-blur-md">

              <p className="text-xs font-bold text-[#a4d78f]">
                NEXT / 03
              </p>

              <p className="mt-8 text-2xl font-semibold">
                Mobiliser
              </p>

              <p className="mt-3 leading-7 text-blue-100/70">
                Faire grandir Le Mouvement autour de projets capables de
                produire un impact concret.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#52a234] py-20 sm:py-24">

        <div className="container-custom">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
                Continue exploring
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl">
                L’histoire explique d’où nous venons.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Notre vision explique maintenant où nous voulons aller.
              </p>

            </div>

            <Link
              href="/a-propos/vision"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#020817] px-8 py-4 font-semibold text-white transition hover:bg-[#061226]"
            >
              Découvrir notre vision
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
