import Link from 'next/link'
import Image from 'next/image'

const team = [
  {
    number: '01',
    name: 'Les éclaireurs',
    role: 'Direction & Stratégie',
    category: 'Vision',
    description:
      'Pilote la vision de NAYGAL, son développement stratégique et la construction de partenariats durables.',
    expertise: ['Stratégie', 'Innovation', 'Développement'],
  },
  {
    number: '02',
    name: 'Les bâtisseurs',
    role: 'Infrastructure & Réseaux',
    category: 'Technologie',
    description:
      'Conçoit et déploie les architectures réseaux, systèmes et infrastructures nécessaires aux organisations.',
    expertise: ['Réseaux', 'Systèmes', 'Infrastructure'],
  },
  {
    number: '03',
    name: 'Les défenseurs',
    role: 'Cybersécurité',
    category: 'Protection',
    description:
      'Accompagne les organisations dans la sécurisation de leurs infrastructures, données et environnements numériques.',
    expertise: ['Cybersecurity', 'Audit', 'Protection'],
  },
  {
    number: '04',
    name: 'Les passeurs',
    role: 'NAYGAL Academy',
    category: 'Transmission',
    description:
      'Contribue au développement des programmes de formation, des ateliers et des initiatives de transmission des compétences.',
    expertise: ['Formation', 'Pédagogie', 'Numérique'],
  },
]

const disciplines = [
  {
    number: '01',
    title: 'Technology',
    text: 'Réseaux, infrastructures, cloud, systèmes et solutions numériques.',
  },
  {
    number: '02',
    title: 'Security',
    text: 'Cybersécurité, protection des données et culture de la sécurité.',
  },
  {
    number: '03',
    title: 'Intelligence',
    text: 'IA, automatisation, analyse et nouveaux usages technologiques.',
  },
  {
    number: '04',
    title: 'Education',
    text: 'Formation, transmission des compétences et développement des talents.',
  },
]

export default function EquipePage() {
  return (
    <main className="overflow-hidden bg-[#020817] pt-[72px] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[720px] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90"
            alt="Équipe travaillant ensemble"
             fill sizes="100vw"   className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/85" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817]/85 to-[#032965]/60" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '75px 75px',
          }}
        />

        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#52a234]/20 blur-[160px]" />

        <div className="container-custom relative z-10">

          <div className="flex min-h-[720px] items-center">

            <div className="max-w-6xl">

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.22em] text-slate-400">

                <span className="text-[#68bd49]">
                  NAYGAL
                </span>

                <span className="h-px w-12 bg-white/20" />

                <span>
                  About / 004 / Team
                </span>

              </div>

              <h1 className="mt-10 text-6xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-[8rem]">

                DES
                <span className="block text-white/20">
                  TALENTS
                </span>

                <span className="block text-[#68bd49]">
                  EN ACTION.
                </span>

              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                NAYGAL est avant tout une équipe de personnes curieuses,
                engagées et passionnées par la technologie, la transmission
                et la création d’un impact concret.
              </p>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">

          <div className="container-custom flex items-center justify-between py-5">

            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              The people behind NAYGAL
            </span>

            <span className="text-xs text-slate-500">
              Scroll to discover ↓
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
                / 01 — The team
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">

                Une équipe.
                <span className="block text-slate-500">
                  Plusieurs expertises.
                </span>

              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-300">
                Les projets numériques deviennent rarement excellents grâce
                à une seule compétence. Ils nécessitent des regards
                complémentaires : technique, stratégique, pédagogique,
                créatif et opérationnel.
              </p>

              <p className="mt-7 leading-8 text-slate-400">
                NAYGAL rassemble progressivement ces expertises autour
                d’une même ambition : mettre la technologie au service
                des organisations, des talents et des communautés.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}
      <section className="bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 02 — People
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">

              Le collectif
              <span className="text-slate-500">
                {' '}derrière NAYGAL.
              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              NAYGAL rassemble des profils complémentaires sans exposer
              les identités individuelles. Ce sont les expertises, les
              responsabilités et les projets qui parlent avant tout.
            </p>

          </div>

          <div className="mt-16 border-t border-white/15">

            {team.map((member) => (

              <article
                key={member.number}
                className="group relative grid gap-8 border-b border-white/15 py-10 transition duration-500 hover:bg-white/[0.025] sm:py-12 lg:grid-cols-[120px_1.1fr_1fr] lg:items-center lg:gap-12"
              >

                <div className="relative overflow-hidden">

                  <span className="text-7xl font-semibold leading-none tracking-[-.1em] text-white/[0.08] transition duration-500 group-hover:text-[#68bd49]/30 sm:text-8xl">
                    {member.number}
                  </span>

                  <span className="absolute left-1 top-1/2 h-px w-16 bg-[#68bd49] opacity-0 transition duration-500 group-hover:opacity-100" />

                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#68bd49]">
                    {member.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {member.role}
                  </p>

                </div>

                <div>

                  <p className="max-w-xl leading-7 text-slate-400">
                    {member.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">

                    {member.expertise.map((item) => (

                      <span
                        key={item}
                        className="text-xs uppercase tracking-[.12em] text-slate-500 transition-colors group-hover:text-slate-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DISCIPLINES
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 03 — Expertise
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">

                Une culture
                <span className="block text-slate-500">
                  multidisciplinaire.
                </span>

              </h2>

            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">

              {disciplines.map((discipline) => (

                <div
                  key={discipline.number}
                  className="bg-[#061226] p-7 transition hover:bg-[#0a1b33]"
                >

                  <span className="text-xs font-bold text-[#68bd49]">
                    {discipline.number}
                  </span>

                  <h3 className="mt-10 text-2xl font-semibold">
                    {discipline.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {discipline.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          COLLABORATION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#032965] py-24 sm:py-32">

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90"
            alt="Collaboration professionnelle"
             fill sizes="100vw"   className="h-full w-full object-cover opacity-15"
          />

          <div className="absolute inset-0 bg-[#032965]/90" />

        </div>

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a4d78f]">
                / 04 — Collaboration
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">

                NAYGAL ne se
                <span className="block text-[#68bd49]">
                  construit pas seul.
                </span>

              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-blue-50/80">
                Notre équipe travaille avec des experts, des enseignants,
                des entreprises, des institutions, des associations,
                des étudiants et des passionnés du numérique.
              </p>

              <p className="mt-6 text-lg leading-8 text-blue-50/60">
                Cette ouverture nous permet de croiser les expériences,
                de faire émerger de nouvelles idées et de construire
                des solutions réellement adaptées aux réalités du terrain.
              </p>

              <Link
                href="/mouvement/devenir-partenaire"
                className="mt-8 inline-flex bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Collaborer avec NAYGAL →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          JOIN THE MOVEMENT
      ===================================================== */}
      <section className="bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="border border-white/10 bg-[#020817] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                  / 05 — Join us
                </p>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">

                  Vous avez quelque chose
                  <span className="text-slate-500">
                    {' '}à construire avec nous ?
                  </span>

                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                  NAYGAL est ouvert aux collaborations avec les personnes
                  et organisations qui souhaitent contribuer à un écosystème
                  numérique plus compétent, plus sécurisé et plus accessible.
                </p>

              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white px-8 py-4 font-semibold text-[#032965] transition hover:bg-[#d9f2cc]"
              >
                Prendre contact →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#52a234] py-24 sm:py-32">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-white/10 blur-[100px]" />

        <div className="container-custom relative">

          <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
            / 06 — About NAYGAL
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.95] tracking-[-.06em] text-white sm:text-7xl">

            Une vision.
            <span className="block text-[#d9f2cc]">
              Une équipe.
            </span>
            <span className="block">
              Un mouvement.
            </span>

          </h2>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center bg-[#020817] px-7 py-4 font-semibold text-white transition hover:bg-[#061226]"
            >
              Découvrir NAYGAL
            </Link>

            <Link
              href="/mouvement"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Rejoindre le mouvement
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}