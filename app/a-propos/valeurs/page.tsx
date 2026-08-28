import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    number: '01',
    title: 'Intégrité',
    short: 'Faire juste.',
    text: "Nous construisons nos relations sur la confiance, la transparence et la responsabilité. Nous préférons une promesse réaliste à une promesse spectaculaire que nous ne pourrions pas tenir.",
    principle: 'La confiance se construit dans la durée.',
  },
  {
    number: '02',
    title: 'Excellence',
    short: 'Faire mieux.',
    text: "Nous cherchons constamment à améliorer la qualité de nos solutions, de nos méthodes et de notre accompagnement. L’excellence n’est pas la perfection : c’est une culture de l’amélioration continue.",
    principle: 'Chaque projet est une occasion de progresser.',
  },
  {
    number: '03',
    title: 'Utilité',
    short: 'Résoudre le vrai problème.',
    text: "La technologie n’est jamais une fin en soi. Nous commençons par comprendre le besoin, le contexte et les contraintes avant de choisir les outils et les architectures les plus pertinents.",
    principle: 'La bonne technologie est celle qui sert réellement son utilisateur.',
  },
  {
    number: '04',
    title: 'Transmission',
    short: 'Partager le savoir.',
    text: "Nous croyons qu’une expertise prend davantage de valeur lorsqu’elle est transmise. Former, expliquer, documenter et accompagner font partie intégrante de notre approche.",
    principle: 'Une compétence partagée devient une capacité collective.',
  },
  {
    number: '05',
    title: 'Innovation',
    short: 'Oser construire autrement.',
    text: "Nous restons curieux des nouvelles technologies et des nouveaux modèles. Nous expérimentons lorsque cela peut créer de la valeur et nous remettons régulièrement nos méthodes en question.",
    principle: 'L’innovation commence souvent par une meilleure question.',
  },
  {
    number: '06',
    title: 'Impact',
    short: 'Créer quelque chose qui compte.',
    text: "Nous voulons que notre travail dépasse la simple livraison d’une solution. Nous cherchons à contribuer au développement des organisations, des compétences et des communautés qui nous entourent.",
    principle: 'La technologie a davantage de sens lorsqu’elle produit un effet positif.',
  },
]

const commitments = [
  'Nous privilégions la transparence dans nos échanges.',
  'Nous cherchons des solutions adaptées avant des solutions complexes.',
  'Nous documentons et transmettons autant que possible notre savoir.',
  'Nous considérons la sécurité comme une responsabilité fondamentale.',
  'Nous valorisons la collaboration plutôt que le travail en silo.',
  'Nous mesurons notre réussite par la valeur réellement créée.',
]

export default function ValeursPage() {
  return (
    <main className="overflow-hidden bg-[#020817] pt-[72px] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[720px] overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=90"
            alt="Collaboration et communauté"
             fill sizes="100vw"   className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020817]/85" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#020817]/80 to-[#032965]/50" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '75px 75px',
          }}
        />

        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#52a234]/20 blur-[160px]" />

        <div className="container-custom relative z-10">

          <div className="flex min-h-[720px] items-center">

            <div className="max-w-6xl">

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.22em] text-slate-400">

                <span className="text-[#68bd49]">
                  NAYGAL
                </span>

                <span className="h-px w-12 bg-white/20" />

                <span>
                  About / 003 / Values
                </span>

              </div>

              <h1 className="mt-10 text-6xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl lg:text-[8rem]">

                CE QUE

                <span className="block text-white/20">
                  NOUS
                </span>

                <span className="block text-[#68bd49]">
                  DÉFENDONS.
                </span>

              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Nos valeurs ne sont pas des mots affichés sur un mur.
                Elles servent de repères pour choisir, construire,
                collaborer et évoluer.
              </p>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">

          <div className="container-custom flex items-center justify-between py-5">

            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              Our principles
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
                / 01 — Our philosophy
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">
                La manière de faire
                <span className="block text-slate-500">
                  compte autant que le résultat.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-300">
                Une organisation technologique peut disposer des meilleurs
                outils du marché et pourtant produire peu de valeur si elle
                ne possède pas les bons réflexes, les bonnes méthodes et la
                bonne culture.
              </p>

              <p className="mt-7 leading-8 text-slate-400">
                Chez NAYGAL, nous voulons construire une relation différente
                avec la technologie : plus responsable, plus pédagogique et
                davantage orientée vers les résultats concrets.
              </p>

              <div className="mt-10 border-l-2 border-[#52a234] pl-6">

                <p className="text-lg font-medium leading-8 text-white">
                  « Construire avec exigence. Expliquer avec simplicité.
                  Agir avec responsabilité. »
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES GRID
      ===================================================== */}
      <section className="bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 02 — Our values
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Six principes.
              <span className="text-slate-500">
                {' '}Une même direction.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Ces valeurs structurent notre façon de travailler avec nos
              clients, nos partenaires, nos apprenants et les communautés
              auxquelles nous contribuons.
            </p>

          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

            {values.map((value) => (

              <article
                key={value.number}
                className="group flex min-h-[420px] flex-col bg-[#020817] p-8 transition duration-300 hover:bg-[#08172d] sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs font-bold text-[#68bd49]">
                    {value.number}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-600 transition group-hover:text-[#68bd49]">
                    NAYGAL / VALUE
                  </span>

                </div>

                <div className="mt-auto">

                  <p className="text-sm font-semibold text-[#68bd49]">
                    {value.short}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {value.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {value.text}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">

                    <p className="text-xs uppercase tracking-[.15em] text-slate-600">
                      Notre principe
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-slate-300">
                      {value.principle}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUE IN ACTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#032965] py-24 sm:py-32">

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90"
            alt="Équipe travaillant ensemble"
             fill sizes="100vw"   className="h-full w-full object-cover opacity-15"
          />

          <div className="absolute inset-0 bg-[#032965]/90" />

        </div>

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a4d78f]">
                / 03 — Values in action
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                Des valeurs
                <span className="block text-[#68bd49]">
                  qui se voient.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-blue-100/70">
                Une valeur n’a de sens que lorsqu’elle influence une
                décision, une méthode de travail ou une relation.
              </p>

            </div>

            <div className="border border-white/15 bg-black/20 backdrop-blur-md">

              {commitments.map((commitment, index) => (

                <div
                  key={commitment}
                  className="flex gap-5 border-b border-white/10 p-6 last:border-b-0 sm:p-7"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#52a234] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="leading-7 text-blue-50">
                    {commitment}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RESPONSIBILITY
      ===================================================== */}
      <section className="bg-[#020817] py-24 sm:py-32">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
                / 04 — Responsibility
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-6xl">

                La technologie
                <span className="text-slate-500">
                  {' '}implique une responsabilité.
                </span>

              </h2>

              <p className="mt-7 max-w-2xl leading-8 text-slate-400">
                Plus nos sociétés dépendent du numérique, plus les décisions
                technologiques ont des conséquences importantes. Sécurité,
                confidentialité, accessibilité, durabilité et transmission
                des compétences doivent donc faire partie de la réflexion
                dès le départ.
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                C’est pourquoi nous cherchons à développer une culture
                technologique qui ne sépare pas la performance de la
                responsabilité.
              </p>

            </div>

            <div className="relative h-[480px] overflow-hidden border border-white/10">

              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=90"
                alt="Technologie et réseau numérique"
                 fill sizes="(max-width: 1024px) 100vw, 50vw"   className="absolute inset-0 h-full w-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#68bd49]">
                  NAYGAL / RESPONSIBILITY
                </p>

                <p className="mt-3 text-xl font-semibold">
                  Performance + responsabilité.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CULTURE
      ===================================================== */}
      <section className="bg-[#061226] py-24 sm:py-32">

        <div className="container-custom">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#68bd49]">
              / 05 — Culture
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Ce que nous voulons
              <span className="text-slate-500">
                {' '}cultiver.
              </span>
            </h2>

          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ['Curiosité', 'Toujours chercher à comprendre.'],
              ['Courage', 'Oser expérimenter et remettre en question.'],
              ['Collaboration', 'Construire avec les autres.'],
              ['Responsabilité', 'Assumer l’impact de nos décisions.'],
            ].map(([title, text], index) => (

              <div
                key={title}
                className="border border-white/10 bg-[#020817] p-7"
              >

                <span className="text-xs font-bold text-[#68bd49]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#52a234] py-24 sm:py-32">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-white/10 blur-[100px]" />

        <div className="container-custom relative">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">
                / 06 — Next
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[.95] tracking-[-.06em] text-white sm:text-7xl">
                Les valeurs définissent
                <span className="block text-[#d9f2cc]">
                  notre manière d’avancer.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
                Maintenant, découvrez les personnes qui donnent vie à cette
                vision et à cette culture.
              </p>

            </div>

            <Link
              href="/a-propos/equipe"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#020817] px-8 py-4 font-semibold text-white transition hover:bg-[#061226]"
            >
              Découvrir notre équipe
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}