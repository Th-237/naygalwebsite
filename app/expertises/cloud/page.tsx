import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Cloud & Données | NAYGAL',
  description: 'Déployer des solutions cloud et data sécurisées pour accélérer votre transformation numérique.',
}

const pillars = [
  {
    title: 'Cloud hybride maîtrisé',
    description: 'Une architecture qui combine le meilleur du cloud public, privé et des ressources sur site.',
  },
  {
    title: 'Données gouvernées',
    description: 'Mise en place d’une gouvernance claire pour sécuriser, structurer et exploiter vos données.',
  },
  {
    title: 'Coûts optimisés',
    description: 'Pilotage des dépenses cloud avec des pratiques de right-sizing et contrôle des usages.',
  },
]

const advantages = [
  {
    title: 'Agilité renforcée',
    description: 'Déploiement rapide de services et évolutivité automatique selon les besoins du terrain.',
  },
  {
    title: 'Résilience simplifiée',
    description: 'Redondance, sauvegarde et reprise d’activité pour garantir la continuité.',
  },
  {
    title: 'Insights opérationnels',
    description: 'Des données structurées pour mieux piloter les projets, les ressources et les performances.',
  },
]

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-[#021d47] text-white pt-[72px]">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-naygal-dark opacity-90" />
        <div className="absolute left-0 top-16 h-[360px] w-[360px] rounded-full bg-[#52a234]/10 blur-[140px]" />
        <div className="absolute right-0 bottom-24 h-[320px] w-[320px] rounded-full bg-white/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-slate-200">
                Expertises · Cloud & Données
              </p>
              <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-[-.03em] sm:text-6xl">
                Moderniser votre cloud,
                <br />
                maîtriser vos données.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                NAYGAL construit des architectures cloud sécurisées, évolutives et alignées sur les enjeux africains, afin de transformer vos données en leviers concrets de performance.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-[#021d47] transition hover:bg-[#438a2c]"
                >
                  Discuter cloud
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
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"
                  alt="Vue d’une architecture cloud moderne"
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
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Ce que nous apportons</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Du cloud pragmatique pour vos projets métiers.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Nous accompagnons la définition de votre stratégie cloud, la migration des applications, et la valorisation de vos données dans un cadre sécurisé et performant.
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
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#021d47]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 opacity-60 bg-black/30" />
              <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
                  alt="Tableau de bord cloud et données"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Contexte africain</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Un cloud conçu pour la réalité du terrain.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Nous tenons compte des contraintes locales et des besoins de souveraineté, tout en permettant des usages modernes et collaboratifs pour vos équipes.
              </p>
              <ul className="mt-8 space-y-4 text-slate-200">
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Connectivité optimisée et redondance pour assurer la disponibilité.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Maîtrise des coûts cloud avec des architectures adaptées.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Données structurées pour faciliter l’analyse et le pilotage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-slate-100 shadow-[0_18px_60px_rgba(2,29,71,.16)]">
                <p className="text-lg font-semibold text-white">{advantage.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-24">
        <div className="container-custom">
          <div className="rounded-[32px] border border-white/10 bg-[#031127]/90 p-10 shadow-naygal-card sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Notre méthode</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                  Cloud & données en mode pragmatique.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Nous mettons en place des solutions simples à gérer, faciles à faire évoluer et parfaitement alignées sur les enjeux métiers de votre organisation.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Stratégie cloud</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Audit, choix d’architecture et plan de migration adapté à votre maturité.</p>
                </div>
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Exécution</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Déploiement, automatisation et sécurisation pour des opérations fiables et fluides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
