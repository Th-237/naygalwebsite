import Image from 'next/image'
import Link from 'next/link'

const expertises = [
  {
    number: '01',
    title: 'Infrastructure & Réseaux',
    description:
      'Concevoir des infrastructures fiables, performantes et adaptées à vos besoins métiers.',
    href: '/expertises/reseaux-infrastructures',
    items: ['Réseaux', 'Serveurs', 'Stockage', 'Virtualisation'],
  },
  {
    number: '02',
    title: 'Cybersécurité',
    description:
      'Protéger vos systèmes, vos données et vos collaborateurs contre les risques numériques.',
    href: '/expertises/cybersecurite',
    items: ['Audit', 'Sécurité', 'Sauvegarde', 'Sensibilisation'],
  },
  {
    number: '03',
    title: 'Cloud & Données',
    description:
      'Déployer des environnements cloud, stocker vos données et rationaliser vos usages.',
    href: '/expertises/cloud',
    items: ['Cloud hybride', 'Cloud privé', 'SAN / NAS', 'Gouvernance'],
  },
  {
    number: '04',
    title: 'IA & Automatisation',
    description:
      'Automatiser les tâches et valoriser l’intelligence artificielle au service de l’efficacité.',
    href: '/expertises/intelligence-artificielle',
    items: ['IA générative', 'Agents IA', 'Automatisation', 'Productivité'],
  },
  {
    number: '05',
    title: 'Transformation numérique',
    description:
      'Accompagner votre organisation dans sa modernisation avec une feuille de route pragmatique.',
    href: '/expertises/transformation-numerique',
    items: ['Conseil', 'Digitalisation', 'Roadmaps', 'Adoption'],
  },
]

const challenges = [
  {
    title: 'Une infrastructure qui freine vos ambitions',
    description:
      'Nous remettons votre IT en cohérence pour plus de performance, de disponibilité et de sécurité.',
  },
  {
    title: 'La cybersécurité n’est pas maîtrisée',
    description:
      'Nous déployons des protections pragmatiques, des bonnes pratiques et une veille continue.',
  },
  {
    title: 'Vos données sont éclatées entre plusieurs silos',
    description:
      'Nous structurons vos données, vos accès et votre gouvernance pour retrouver du contrôle.',
  },
  {
    title: 'Vous manquez de temps pour innover',
    description:
      'Nous automatisons les tâches récurrentes pour libérer vos équipes et accélérer vos projets.',
  },
]

const africanProjects = [
  {
    title: 'IA pour l’éducation',
    description: 'Solutions adaptatives pour écoles, universités et organismes de formation en Afrique.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pilotage de la formation',
    description: 'Tableaux de bord intelligents pour suivre l’engagement et la progression des apprenants.',
    image: 'https://images.unsplash.com/photo-1529068755536-a5ade5d5f8d1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automatisation des parcours',
    description: 'Des workflows IA qui réduisent la charge opérationnelle des équipes pédagogiques.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function ExpertisesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965] pt-[72px]">
      <section className="relative overflow-hidden bg-[#021d47] pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '90px 90px',
            }}
          />
        </div>
        <div className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-[#52a234]/10 blur-[120px]" />
        <div className="absolute left-4 top-24 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-slate-200">
                Nos expertises · Solutions métiers
              </p>
              <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.03em] sm:text-6xl">
                Une expertise technologique
                <br />
                pour soutenir votre transformation.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                NAYGAL rassemble les expertises IT, cloud, cybersécurité et data pour accompagner les organisations dans leur transition numérique.
                Nous concevons des solutions robustes, responsables et conçues pour durer.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#438a2c]"
                >
                  Parler à un expert
                </Link>
                <Link
                  href="#expertises"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Découvrir nos domaines
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[420px] lg:block">
              <div className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-full border border-[#52a234]/20" />
              <div className="absolute left-8 top-24 h-[260px] w-[260px] rounded-full border border-cyan-300/20" />
              <div className="relative z-10 rounded-[32px] border border-white/10 bg-[#071d3d]/95 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[.18em] text-slate-400">
                      Expertise NAYGAL
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Architecture & Services
                    </p>
                  </div>
                  <span className="rounded-full bg-[#52a234]/10 px-3 py-1 text-xs text-[#a4d78f]">
                    Aligné
                  </span>
                </div>
                <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#031027] p-5">
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#52a234]/40 bg-[#52a234]/10 shadow-[0_0_45px_rgba(82,162,52,.12)]">
                    <div className="flex h-full items-center justify-center text-2xl text-white">N</div>
                  </div>
                  <div className="absolute left-10 top-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                    <p className="font-semibold text-white">Sécurité</p>
                    <p className="mt-1 text-slate-400">Protégée</p>
                  </div>
                  <div className="absolute right-8 top-10 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                    <p className="font-semibold text-white">Cloud</p>
                    <p className="mt-1 text-[#a4d78f]">Évolutif</p>
                  </div>
                  <div className="absolute bottom-10 left-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                    <p className="font-semibold text-white">Données</p>
                    <p className="mt-1 text-slate-400">Maîtrisées</p>
                  </div>
                  <div className="absolute bottom-12 right-14 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                    <p className="font-semibold text-white">Automatisation</p>
                    <p className="mt-1 text-slate-400">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertises" className="container-custom py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#52a234]">
            Domaines d’expertise
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-[#032965] sm:text-5xl">
            Des offres ciblées pour chaque enjeu IT.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Nous aidons les organisations à sécuriser, moderniser et automatiser leurs infrastructures avec une approche pragmatique et centrée sur les résultats.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {expertises.map((expertise) => (
            <article key={expertise.number} className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#021d47] text-lg font-semibold text-white">
                  {expertise.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#032965]">
                    {expertise.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {expertise.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {expertise.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={expertise.href}
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#021d47] transition hover:text-[#52a234]"
              >
                En savoir plus →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-custom py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#52a234]">
            Réalisations en Afrique
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-[#032965] sm:text-5xl">
            L’IA au service de la formation, du pilotage et de l’impact local.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Des projets concrets qui montrent comment l’intelligence artificielle renforce les établissements africains et simplifie les parcours pédagogiques.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {africanProjects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#032965]">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-[260px] w-[260px] rounded-full bg-[#52a234]/10 blur-[120px]" />
        <div className="container-custom relative z-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div className="rounded-[32px] bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,.08)]">
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#52a234]">
                Nous répondons à vos défis
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.03em] text-[#032965] sm:text-5xl">
                Des réponses claires aux problèmes plus fréquents.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                NAYGAL accompagne les organisations pour sécuriser, simplifier et piloter leur transformation numérique avec une démarche pragmatique et orientée résultats.
              </p>
            </div>
            <div className="grid gap-6">
              {challenges.map((challenge) => (
                <div key={challenge.title} className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-sm">
                  <p className="text-xl font-semibold text-[#032965]">{challenge.title}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#52a234]">
            Réalisations en Afrique
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-[#032965] sm:text-5xl">
            L’IA au service de la formation, du pilotage et de l’impact local.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Des projets concrets qui montrent comment l’intelligence artificielle renforce les établissements africains et simplifie les parcours pédagogiques.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {africanProjects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#032965]">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom py-20 lg:py-28">
        <div className="rounded-[32px] border border-slate-200/80 bg-[#021d47] p-10 text-white shadow-[0_30px_80px_rgba(2,29,71,.25)] sm:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Prêt à passer à l’action
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Construisons ensemble votre feuille de route numérique.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Nous aidons les entreprises et les établissements à moderniser leur infrastructure, protéger leurs données et automatiser leurs processus dans un cadre sécurisé.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Contactez-nous
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
