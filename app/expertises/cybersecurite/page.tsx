import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Cybersécurité | NAYGAL',
  description: 'Protection des systèmes, des données et des utilisateurs avec une cybersécurité adaptée aux besoins africains.',
}

const pillars = [
  {
    title: 'Détection et réponse',
    description: 'Surveillance continue, analyse des incidents et réponse rapide pour limiter les impacts.',
  },
  {
    title: 'Sécurité des accès',
    description: 'Gestion des identités, contrôles d’accès et surveillance des connexions pour sécuriser les points d’entrée.',
  },
  {
    title: 'Protection des données',
    description: 'Chiffrement, sauvegarde et gouvernance pour assurer la confidentialité et l’intégrité des informations.',
  },
]

const focusAreas = [
  {
    title: 'Audit & conformité',
    description: 'Évaluation des risques, conformité aux bonnes pratiques et identification des priorités de sécurité.',
  },
  {
    title: 'Sécurisation des infrastructures',
    description: 'Pare-feu, segmentation, VPN et protection des environnements hybrides cloud / on-premise.',
  },
  {
    title: 'Sensibilisation & gouvernance',
    description: 'Formation des équipes et mise en place de processus pour limiter les erreurs humaines et maintenir un niveau de sécurité durable.',
  },
]

export default function CybersecuritePage() {
  return (
    <main className="min-h-screen bg-[#021d47] text-white pt-[72px]">
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/expertises/cybersecurite/1.jpg"
          alt="Cybersécurité et protection des systèmes"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-naygal-dark opacity-60" />
        <div className="absolute left-0 top-12 h-[420px] w-[420px] rounded-full bg-[#ff5c4b]/15 blur-[140px]" />
        <div className="absolute right-0 bottom-24 h-[340px] w-[340px] rounded-full bg-white/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ff5c4b]/30 bg-[#ff5c4b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-[#ffb8aa]">
              <span className="h-2 w-2 rounded-full bg-[#ff5c4b]" />
              Défense active · Cybersécurité
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-[-.03em] sm:text-6xl">
              Bloquer les attaques
              <br />
              avant qu’elles ne frappent.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              NAYGAL crée un bouclier cyber capable de détecter, isoler et neutraliser les menaces en temps réel. Une cybersécurité offensive, pensée pour les contextes exigeants et les environnements africains.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#ff5c4b] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#ff3f2f]"
              >
                Évaluer ma sécurité
              </Link>
              <Link
                href="/expertises"
                className="inline-flex items-center justify-center rounded-full border border-[#ff5c4b]/30 bg-[#ffffff]/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#ff5c4b] hover:bg-[#ff5c4b]/10"
              >
                Retour aux expertises
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#021d47]/95 py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Nos piliers
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Une cybersécurité qui allie protection et pragmatisme.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Nous proposons une démarche claire pour réduire les risques, renforcer les défenses et accompagner votre transformation numérique en toute confiance.
              </p>
            </div>

            <div className="grid gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[28px] border-l-4 border-[#ff5c4b] bg-[#021d47]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                  <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#ffb8aa]">Pilier</p>
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
            <div className="rounded-[32px] border border-white/10 bg-[#021d47]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="relative overflow-hidden rounded-[28px] bg-slate-900 h-[440px]">
                <Image
                  src="/images/expertises/cybersecurite/2.jpg"
                  alt="Experts en cybersécurité en réunion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Terrain africain
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Une sécurité adaptée aux contextes locaux.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Dans des environnements où la disponibilité et la confiance sont clés, nous construisons des dispositifs sécurisés qui tiennent compte des infrastructures, des usages et des contraintes spécifiques de vos sites.
              </p>
              <ul className="mt-8 space-y-4 text-slate-200">
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ff5c4b]" />
                  Protection adaptée aux réseaux hybrides et aux usages mobiles.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ff5c4b]" />
                  Priorité à la continuité de service et à la résilience.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#ff5c4b]" />
                  Accompagnement pour vos équipes et vos processus métiers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-24">
        <div className="container-custom">
          <div className="rounded-[32px] border border-white/10 bg-[#031127]/90 p-10 shadow-naygal-card sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                  Ce que vous gagnez
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                  Une cybersécurité simple à comprendre et facile à déployer.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Nous privilégions des solutions opérationnelles et un accompagnement sur mesure qui vous permettent de piloter la sécurité au quotidien.
                </p>
              </div>
              <div className="grid gap-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                    <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">{area.title}</p>
                    <p className="mt-4 text-base leading-7 text-slate-300">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
