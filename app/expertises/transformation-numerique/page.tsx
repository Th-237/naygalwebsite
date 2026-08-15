import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Transformation numérique | NAYGAL',
  description: 'Accompagner la transformation numérique des organisations avec une feuille de route pragmatique et des résultats concrets.',
}

const outcomes = [
  {
    title: 'Stratégie opérationnelle',
    description: 'Une feuille de route claire qui relie vos objectifs métiers à des projets numériques concrets.',
  },
  {
    title: 'Expérience modernisée',
    description: 'Des parcours clients et collaborateurs plus fluides, digitaux et orientés valeur.',
  },
  {
    title: 'Performance durable',
    description: 'Un pilotage des coûts, des ressources et des initiatives pour accompagner la croissance.',
  },
]

const pillars = [
  {
    title: 'Conseil pragmatique',
    description: 'Diagnostic, priorisation et accompagnement pour définir des projets à fort impact.',
  },
  {
    title: 'Adoption métier',
    description: 'Formation, accompagnement et gouvernance pour embarquer les équipes dès le départ.',
  },
  {
    title: 'Solutions évolutives',
    description: 'Choix de plateformes et d’architectures faciles à piloter, à sécuriser et à faire évoluer.',
  },
]

export default function TransformationNumeriquePage() {
  return (
    <main className="min-h-screen bg-[#021d47] text-white pt-[72px]">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-naygal-dark opacity-90" />
        <div className="absolute left-0 top-16 h-[380px] w-[380px] rounded-full bg-[#52a234]/10 blur-[140px]" />
        <div className="absolute right-0 bottom-24 h-[340px] w-[340px] rounded-full bg-white/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-slate-200">
                Expertises · Transformation numérique
              </p>
              <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-[-.03em] sm:text-6xl">
                Faire de votre transformation numérique
                <br />
                un levier de performance.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                NAYGAL accompagne les organisations africaines dans l’évolution de leurs services, de leur infrastructure et de leurs usages pour créer une transformation tangible, rentable et adaptée aux réalités locales.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-[#021d47] transition hover:bg-[#438a2c]"
                >
                  Échanger
                </Link>
                <Link
                  href="/expertises"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Retour aux expertises
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#031127]/90 p-6 shadow-naygal-card">
              <div className="relative overflow-hidden rounded-[28px] bg-slate-900 h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                  alt="Réunion de transformation numérique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#021d47]/95 py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Notre approche
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Transformation numérique pragmatique et pilotée.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Nous aidons à structurer votre transformation en programmes simples à piloter, avec des livrables concrets, des étapes vérifiables et un impact visible sur votre business.
              </p>
            </div>

            <div className="grid gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#a4d78f]">Pilier</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Résultats clés
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Une transformation qui produit des gains concrets.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Mise en œuvre rapide, alignement avec vos enjeux métiers, et une capacité accrue à innover avec confiance.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div key={outcome.title} className="rounded-[28px] border border-white/10 bg-[#031127]/90 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                    <h3 className="text-xl font-semibold text-white">{outcome.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#021d47]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 opacity-60 bg-black/30" />
              <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                  alt="Tableau de bord de transformation numérique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-24">
        <div className="container-custom">
          <div className="rounded-[32px] border border-white/10 bg-[#031127]/90 p-10 shadow-naygal-card sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Transformation durable</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                  Une transformation pensée pour durer.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Nous nous attachons à faire évoluer votre organisation sans alourdir vos opérations, avec des processus simples à piloter et une culture numérique renforcée.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Accompagnement</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Accompagnement sur mesure pour accélérer l’adoption et pérenniser les projets.</p>
                </div>
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Résultats</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Des livrables concrets, des indicateurs clairs et des bénéfices mesurables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
