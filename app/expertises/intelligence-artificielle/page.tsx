import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'IA & Automatisation | NAYGAL',
  description: 'Valoriser l’intelligence artificielle et l’automatisation pour accélérer votre transformation numérique.',
}

const features = [
  {
    title: 'Assistants métiers',
    description: 'Automatisez les conversations et guidez les utilisateurs dans leurs tâches quotidiennes.',
  },
  {
    title: 'Analyse intelligente',
    description: 'Transformez vos données en recommandations opérationnelles et décisions plus rapides.',
  },
  {
    title: 'Automatisation de flux',
    description: 'Orchestrez les processus récurrents et libérez vos équipes des tâches manuelles.',
  },
]

const cards = [
  {
    label: 'Produit',
    title: 'Agents IA pour vos opérations',
    description: 'Développez des assistants personnalisés qui fluidifient les interactions internes et externes.',
    image: '/images/expertises/intelligence-artificielle/agentia.png',
  },
  {
    label: 'Recherche',
    title: 'Génération de contenu',
    description: 'Créez des textes, résumés et scripts adaptés à vos besoins métiers en quelques secondes.',
    image: '/images/expertises/intelligence-artificielle/iagenerative.jpg',
  },
  {
    label: 'Impact',
    title: 'Décisions augmentées',
    description: 'Exposez vos équipes à des insights concrets pour mieux piloter leurs activités.',
    image: '/images/expertises/intelligence-artificielle/impact.webp',
  },
]

const educationResources = [
  {
    title: 'OpenAI',
    description: 'Inspiration produit pour l’IA en éducation, les assistants et l’automatisation intelligente.',
    href: 'https://openai.com/',
    image: '/images/expertises/intelligence-artificielle/openai.jpg',
  },
  {
    title: 'Khan Academy',
    description: 'Exemple d’apprentissage personnalisé et de contenus pédagogiques accessibles.',
    href: 'https://www.khanacademy.org/',
    image: '/images/expertises/intelligence-artificielle/khan academy.png',
  },
  {
    title: 'edX',
    description: 'Ressources éducatives en ligne et parcours adaptatifs pour monter en compétences.',
    href: 'https://www.edx.org/',
    image: '/images/expertises/intelligence-artificielle/edx.png',
  },
]

const africaCases = [
  {
    title: 'Éducation augmentée',
    description: 'Tutoriels IA et parcours adaptatifs pour campus et écoles en Afrique.',
    image: '/images/expertises/intelligence-artificielle/Éducation augmentée.jpg',
  },
  {
    title: 'Monitoreo intelligent',
    description: 'Tableaux de bord de performance pour suivre l’apprentissage et l’engagement.',
    image: '/images/expertises/intelligence-artificielle/Monitoreo intelligent.jpeg',
  },
  {
    title: 'Workflow automatisé',
    description: 'Automatisation des tâches administratives pour les établissements et les formateurs.',
    image: '/images/expertises/intelligence-artificielle/Workflow automatisé.png',
  },
]

export default function IntelligenceArtificiellePage() {
  return (
    <main className="min-h-screen bg-[#021d47] text-white pt-[72px]">
      <section className="relative min-h-[700px] overflow-hidden border-b border-white/10 py-24">
        <Image
          src="/images/expertises/intelligence-artificielle/ia&automatisation.png"
          alt="Interface d’intelligence artificielle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-naygal-dark opacity-60" />
        <div className="absolute left-0 top-16 h-[380px] w-[380px] rounded-full bg-[#52a234]/10 blur-[140px]" />
        <div className="absolute right-0 bottom-24 h-[340px] w-[340px] rounded-full bg-white/10 blur-[120px]" />

        <div className="container-custom relative z-10 flex min-h-[700px] items-center">
          <div className="max-w-2xl -translate-y-8 sm:-translate-y-12">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-slate-200">
                Expertises · IA & Automatisation
              </p>
              <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-[-.03em] sm:text-6xl">
                L’IA qui transforme vos process en avantage concurrentiel.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                NAYGAL conçoit des solutions d’IA et d’automatisation pour des organisations africaines, avec une approche pragmatique, sécurisée et orientée business.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-[#021d47] transition hover:bg-[#438a2c]"
                >
                  Parler IA
                </Link>
                <Link
                  href="/expertises"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir les expertises
                </Link>
              </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[32px] border border-white/10 bg-[#031127]/85 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Stories</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Des cas concrets pour montrer l’impact.
              </h2>
            </div>
            <Link href="/expertises" className="text-sm font-semibold text-[#52a234] transition hover:text-[#77bb43]">
              Voir tout
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[32px] border border-white/10 bg-[#031127]/90 shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">{card.label}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[.95fr_.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                IA for education
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                L’IA pour l’éducation, le pilotage et la réussite.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Nous mettons l’intelligence artificielle au service des établissements, des apprenants et des formateurs pour rendre l’éducation plus accessible, plus personnalisée et plus efficace.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#031127]/90 p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <h3 className="text-xl font-semibold">Parcours personnalisés</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Des recommandations de contenu et d’exercices adaptés au niveau de chaque apprenant.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#031127]/90 p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <h3 className="text-xl font-semibold">Suivi intelligent</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Des tableaux de bord qui identifient les points de blocage et les progrès en temps réel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
              Réalisations en Afrique
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
              Cas d’usage IA pour les établissements africains.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Exemples concrets de solutions IA qui améliorent la formation, le pilotage et les opérations sur le terrain.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {africaCases.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[#031127]/90 shadow-[0_30px_80px_rgba(0,0,0,0.16)] transition hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Ressources</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Sites à consulter pour s’inspirer.
              </h2>
            </div>
            <p className="text-sm text-slate-300 lg:max-w-md">
              Des exemples concrets et des plateformes reconnues pour guider votre réflexion IA et éducation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {educationResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#031127]/90 shadow-[0_30px_80px_rgba(0,0,0,0.16)] transition hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Ressource</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{resource.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{resource.description}</p>
                  <p className="mt-6 text-sm font-semibold text-[#52a234]">Visiter le site →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="rounded-[32px] border border-white/10 bg-[#021d47] p-10 text-white shadow-[0_30px_80px_rgba(2,29,71,.25)] sm:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">Approche</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Une approche IA claire et opérationnelle.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Nous développons des solutions IA qui répondent à des besoins réels, tout en restant simples à piloter et à faire évoluer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#031127]/90 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Rapide</p>
                <p className="mt-4 text-lg font-semibold">Prototype en quelques semaines</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#031127]/90 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Fiable</p>
                <p className="mt-4 text-lg font-semibold">Sécurité intégrée</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
