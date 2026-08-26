import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Infrastructure & Réseaux | NAYGAL',
  description: "Solutions d'infrastructure, réseaux et virtualisation pour une IT plus résiliente.",
}

const services = [
  {
    title: 'Réseaux hautement disponibles',
    description: 'Conception, déploiement et supervision de réseaux performants pour assurer la continuité de vos activités.',
  },
  {
    title: 'Infrastructure moderne',
    description: 'Serveurs, stockage et virtualisation intégrés pour une infrastructure évolutive et facile à piloter.',
  },
  {
    title: 'Hybridation cloud et on-premise',
    description: 'Des architectures hybrides adaptées pour allier performance, sécurité et maîtrise des coûts.',
  },
]

const benefits = [
  {
    title: 'Performance maîtrisée',
    description: 'Des réseaux et des plateformes dimensionnés pour vos usages réels, pas pour des chiffres sur le papier.',
  },
  {
    title: 'Sécurité intégrée',
    description: 'Des architectures pensées dès la conception pour réduire les risques et durer dans le temps.',
  },
  {
    title: 'Opérationnel rapide',
    description: 'Une mise en œuvre pragmatique qui accélère vos projets sans générer de dette technique inutile.',
  },
]

export default function ReseauxInfrastructuresPage() {
  return (
    <main className="min-h-screen bg-[#021d47] text-white pt-[72px]">
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/expertises/reseaux-infrastructures/1.jpg"
          alt="Infrastructure réseau"
          fill
          priority
          sizes="100vw"
           className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-naygal-dark opacity-60" />
        <div className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-[#52a234]/10 blur-[140px]" />
        <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-slate-200">
              Expertises · Infrastructure & Réseaux
            </p>
            <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-[-.03em] sm:text-6xl">
              Construire des infrastructures réseau
              <br />
              fiables et agiles.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              NAYGAL accompagne la transformation de votre environnement IT en alliant résilience, sécurité et performance. Nous concevons des infrastructures réseau prêtes pour le cloud, l’automatisation et la croissance durable.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-8 py-4 text-sm font-semibold text-[#021d47] transition hover:bg-[#438a2c]"
              >
                Demander un audit
              </Link>
              <Link
                href="/expertises"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
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
                Ce que nous faisons
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Des services sur mesure pour des réseaux maîtrisés.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Nous définissons l’architecture, pilotons le déploiement et accompagnons la montée en compétences de vos équipes pour une infrastructure performante, sécurisée et évolutive.
              </p>
            </div>

            <div className="grid gap-6">
              {services.map((service) => (
                <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#a4d78f]">Service</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#021d47]/80 p-6">
              <div className="absolute inset-0 opacity-60 bg-black/30" />
              <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/expertises/reseaux-infrastructures/2.jpg"
                  alt="Professionnels africains travaillant sur un réseau informatique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                Contexte local
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                Des infrastructures pensées pour l’Afrique d’aujourd’hui.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Nous concevons des réseaux et des architectures qui répondent aux réalités locales : connectivité variable, besoins d’évolutivité et exigences de sécurité accrues.
              </p>
              <ul className="mt-8 space-y-4 text-slate-200">
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Priorité à la résilience et à la continuité de service.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Architecture hybride pour tirer parti du cloud et des ressources locales.
                </li>
                <li className="flex gap-3 text-base leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#52a234]" />
                  Accompagnement opérationnel sur la supervision, la maintenance et la montée en compétence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#021d47] py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-slate-100 shadow-[0_18px_60px_rgba(2,29,71,.16)]">
                <p className="text-lg font-semibold text-white">{benefit.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{benefit.description}</p>
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
                <p className="text-sm font-semibold uppercase tracking-[.24em] text-[#8dd681]">
                  Notre approche
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.03em] text-white sm:text-5xl">
                  Sobriété, rigueur et résultats.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Nous mettons l’efficacité opérationnelle et la simplicité au cœur de nos projets. Chaque infrastructure est pensée pour durer, en s’alignant sur vos usages actuels et vos objectifs de croissance.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Audit et architecture</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Cartographie des infrastructures existantes pour proposer une architecture claire et sécurisée.</p>
                </div>
                <div className="rounded-3xl bg-[#021d47] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[.18em] text-[#8dd681]">Mise en œuvre agile</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Déploiement incrémental pour réduire les risques et garantir une transition maîtrisée.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
