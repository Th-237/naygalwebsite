import Link from "next/link"

const expertises = [
  {
    number: "01",
    title: "Infrastructure & Réseaux",
    description:
      "Concevoir des infrastructures fiables, performantes et adaptées aux réalités de votre organisation.",
    items: ["Réseaux", "Serveurs", "Stockage", "Virtualisation"],
  },
  {
    number: "02",
    title: "Cybersécurité",
    description:
      "Protéger vos systèmes, vos données et vos collaborateurs face aux risques numériques.",
    items: ["Audit", "Sécurité", "Sauvegarde", "Sensibilisation"],
  },
  {
    number: "03",
    title: "Cloud & Données",
    description:
      "Construire des environnements de stockage et de cloud maîtrisés, sécurisés et évolutifs.",
    items: ["Cloud privé", "Cloud hybride", "NAS", "Gestion des données"],
  },
  {
    number: "04",
    title: "IA & Automatisation",
    description:
      "Automatiser les tâches répétitives et exploiter l'intelligence artificielle pour gagner en efficacité.",
    items: ["Automatisation", "IA générative", "Agents IA", "Productivité"],
  },
  {
    number: "05",
    title: "Transformation numérique",
    description:
      "Accompagner les organisations dans leur modernisation avec une approche pragmatique et progressive.",
    items: ["Conseil", "Digitalisation", "Optimisation", "Accompagnement"],
  },
]

const problems = [
  {
    title: "Vos données sont dispersées ?",
    description:
      "Centralisez, structurez et sécurisez vos données pour retrouver le contrôle de votre information.",
  },
  {
    title: "Trop de tâches manuelles ?",
    description:
      "Identifions ce qui peut être automatisé pour permettre à vos équipes de se concentrer sur l'essentiel.",
  },
  {
    title: "Votre infrastructure vous limite ?",
    description:
      "Faites évoluer votre environnement informatique sans investir inutilement dans des solutions disproportionnées.",
  },
  {
    title: "Vous ne savez pas par où commencer ?",
    description:
      "NAYGAL vous accompagne dans l'identification des priorités et la construction d'une feuille de route réaliste.",
  },
]

const principles = [
  "Des solutions adaptées à votre réalité",
  "Une approche orientée résultats",
  "La sécurité intégrée dès la conception",
  "La transmission des compétences",
]


export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section data-reveal className="relative min-h-[700px] bg-[#021d47] text-white">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-[120px]" />
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="container-custom relative z-10 flex min-h-[700px] items-center py-28 lg:py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            {/* Copy */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-[#52a234] pl-3 text-sm font-semibold text-[#d2ebc6]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#52a234]" />
                Transformation numérique pour les organisations d’Afrique
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.07] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Construire aujourd'hui
                <br />
                le{" "}
                <span className="text-[#52a234]">
                  numérique
                </span>{" "}
                de demain.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                NAYGAL accompagne les entreprises, les établissements et les
                organisations dans leur transformation numérique grâce aux
                infrastructures, à la cybersécurité, au cloud, à
                l'intelligence artificielle et à la formation.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="bg-[#52a234] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#438a2c] hover:shadow-[0_15px_40px_rgba(82,162,52,.2)]"
                >
                  Parlons de votre projet →
                </Link>

                <Link
                  href="/expertises"
                  className="border border-white/35 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Découvrir nos expertises
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 divide-x divide-white/15 sm:grid-cols-4">
                {[['50+', 'projets réalisés'], ['20+', 'partenaires'], ['300+', 'personnes formées'], ['100%', 'engagement']].map(([value, label]) => (
                  <div key={label} className="px-3 first:pl-0">
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden min-h-[470px] lg:block">
              <div className="absolute left-4 top-16 h-[350px] w-[350px] rounded-full border border-cyan-300/10" />
              <div className="absolute left-20 top-32 h-[210px] w-[210px] rounded-full border border-[#52a234]/20" />

              {/* Main panel */}
              <div className="absolute right-0 top-12 w-[430px] border border-white/10 bg-[#071d3d]/85 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[.18em] text-slate-500">
                      NAYGAL
                    </p>
                    <p className="mt-1 font-semibold">Digital Infrastructure</p>
                  </div>

                  <span className="rounded-full bg-[#52a234]/10 px-3 py-1 text-xs text-[#a4d78f]">
                    Operational
                  </span>
                </div>

                {/* Network visualization */}
                <div className="relative h-56 border border-white/10 bg-[#031027]">
                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-[#52a234]/40 bg-[#52a234]/10 shadow-[0_0_45px_rgba(82,162,52,.12)]">
                    <div className="flex h-full items-center justify-center text-2xl">
                      N
                    </div>
                  </div>

                  <div className="absolute left-10 top-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
                    <span className="text-slate-400">Network</span>
                    <p className="mt-1 font-semibold">Connected</p>
                  </div>

                  <div className="absolute right-8 top-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
                    <span className="text-slate-400">Security</span>
                    <p className="mt-1 font-semibold text-[#a4d78f]">
                      Protected
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-16 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
                    <span className="text-slate-400">Storage</span>
                    <p className="mt-1 font-semibold">Centralized</p>
                  </div>

                  <div className="absolute bottom-8 right-12 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
                    <span className="text-slate-400">Automation</span>
                    <p className="mt-1 font-semibold">Active</p>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute left-[29%] top-[42%] h-px w-[22%] bg-[#52a234]/40" />
                  <div className="absolute left-[58%] top-[43%] h-px w-[20%] bg-cyan-300/30" />
                  <div className="absolute bottom-[40%] left-[33%] h-px w-[17%] rotate-[55deg] bg-[#52a234]/30" />
                  <div className="absolute bottom-[39%] right-[29%] h-px w-[18%] -rotate-[55deg] bg-cyan-300/30" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-slate-500">Infrastructure</p>
                    <p className="mt-1 text-sm font-semibold">Reliable</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-slate-500">Data</p>
                    <p className="mt-1 text-sm font-semibold">Controlled</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-slate-500">AI</p>
                    <p className="mt-1 text-sm font-semibold">Useful</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 border border-white/10 bg-[#0b2345]/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xs text-slate-400">Notre approche</p>
                <p className="mt-1 text-sm font-semibold">
                  Technologie + stratégie + transmission
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEMS
      ========================================================= */}
      <section data-reveal className="bg-white py-24">
        <div className="container-custom">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-[#276f91]">
                Vous êtes concerné ?
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#032965] sm:text-5xl">
                La transformation numérique commence par les vrais problèmes.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Nous ne commençons pas par vous vendre une technologie.
                Nous commençons par comprendre votre réalité.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-[#52a234]/40 hover:bg-white hover:shadow-xl"
                >
                  <span className="text-sm font-bold text-[#438a2c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-[#032965]">
                    {problem.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERTISES
      ========================================================= */}
      <section data-reveal className="bg-[#f6f9fc] py-24" id="expertises">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#276f91]">
              Nos expertises
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#032965] sm:text-5xl">
              Une vision globale du numérique.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Infrastructure, sécurité, données, intelligence artificielle et
              compétences : nous réunissons les briques nécessaires à une
              transformation numérique cohérente.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertises.map((expertise, index) => (
              <Link
                href="/expertises"
                key={expertise.number}
                className={`group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-[#438a2c]">
                    {expertise.number}
                  </span>

                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#438a2c]">
                    →
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-bold text-[#032965]">
                  {expertise.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                  {expertise.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {expertise.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROCHE
      ========================================================= */}
      <section data-reveal className="bg-white py-24">
        <div className="container-custom">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-[#276f91]">
                Pourquoi NAYGAL ?
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#032965] sm:text-5xl">
                La technologie doit résoudre un problème, pas en créer un.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nous privilégions des solutions compréhensibles, utiles et
                proportionnées aux besoins de chaque organisation.
              </p>

              <Link
                href="/a-propos"
                className="mt-8 inline-flex rounded-xl bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50]"
              >
                Découvrir notre approche →
              </Link>
            </div>

            <div className="rounded-3xl bg-[#021d47] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#52a234]">
                Nos principes
              </p>

              <div className="mt-8 divide-y divide-white/10">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="flex items-center gap-5 py-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#52a234]/10 text-sm font-bold text-[#a4d78f]">
                      0{index + 1}
                    </span>
                    <span className="font-medium text-slate-200">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT
      ========================================================= */}
      <section data-reveal className="bg-[#f6f9fc] py-24">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#021d47] to-[#276f91] text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[400px] bg-[radial-gradient(circle_at_50%_35%,rgba(25,214,111,.22),transparent_20%),linear-gradient(135deg,#092f55,#020d20)] p-8 sm:p-12">
                <div className="flex h-full items-center justify-center">
                  <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-sm font-semibold">
                        Projet en vedette
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#52a234]" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-10 rounded-lg bg-white/10" />
                      <div className="h-10 rounded-lg bg-white/10" />
                      <div className="h-10 rounded-lg bg-[#52a234]/20" />
                      <div className="h-10 rounded-lg bg-white/10" />
                    </div>

                    <p className="mt-6 text-xs uppercase tracking-[.15em] text-[#a4d78f]">
                      Storage · Network · Security
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:p-16">
                <span className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Nos réalisations
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Des projets concrets, pas seulement des promesses.
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  Découvrez comment nous transformons des problématiques
                  réelles en solutions numériques opérationnelles.
                </p>

                <ul className="mt-7 space-y-3 text-sm text-slate-200">
                  <li>✓ Infrastructure & stockage</li>
                  <li>✓ Maintenance & supervision</li>
                  <li>✓ Sécurisation des systèmes</li>
                  <li>✓ Automatisation des processus</li>
                </ul>

                <Link
                  href="/projets"
                  className="mt-9 inline-flex rounded-xl bg-[#52a234] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#438a2c]"
                >
                  Voir nos projets →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACADEMY
      ========================================================= */}
      <section data-reveal className="bg-white py-24">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#e9f8ff] to-white">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="inline-flex rounded-full border border-[#52a234]/30 bg-[#52a234]/10 px-3 py-1 text-xs font-bold uppercase tracking-[.15em] text-[#438a2c]">
                  NAYGAL Academy · NAYAC
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-[#032965]">
                  Former les talents qui construiront le numérique de demain.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Des formations et ateliers pratiques pour développer les
                  compétences numériques des étudiants, professionnels et
                  organisations.
                </p>

                <Link
                  href="/academy"
                  className="mt-8 inline-flex rounded-xl bg-[#032965] px-6 py-3.5 font-semibold text-white transition hover:bg-[#021f50]"
                >
                  Découvrir NAYGAL Academy →
                </Link>
              </div>

              <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-[#c9efff] to-[#eafdf4]">
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#52a234]/20 blur-3xl" />

                <div className="absolute left-[15%] top-[20%] rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl backdrop-blur">
                  <span className="text-2xl">01</span>
                  <p className="mt-1 text-xs font-semibold text-[#0b3970]">
                    Apprendre
                  </p>
                </div>

                <div className="absolute right-[15%] top-[35%] rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl backdrop-blur">
                  <span className="text-2xl">02</span>
                  <p className="mt-1 text-xs font-semibold text-[#0b3970]">
                    Pratiquer
                  </p>
                </div>

                <div className="absolute bottom-[17%] left-[30%] rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl backdrop-blur">
                  <span className="text-2xl">03</span>
                  <p className="mt-1 text-xs font-semibold text-[#0b3970]">
                    Transmettre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOVEMENT
      ========================================================= */}
      <section data-reveal className="bg-[#f6f9fc] py-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a9f58] to-[#0b4d8b] p-8 text-white sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[.18em] text-white/70">
                Le Mouvement NAYGAL
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Et si nous construisions le numérique ensemble ?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                NAYGAL veut rassembler entreprises, experts, établissements,
                étudiants et partenaires autour d'une même ambition :
                contribuer à une transformation numérique utile et durable.
              </p>

              <Link
                href="/mouvement"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-[#08325d] transition hover:-translate-y-1"
              >
                Devenir partenaire du mouvement →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section data-reveal className="bg-[#021d47] py-24 text-white">
        <div className="container-custom text-center">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
            Votre prochain projet
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Une idée, un problème ou un projet numérique ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Commençons par en parler. Nous verrons ensemble ce qui peut être
            amélioré, automatisé, sécurisé ou construit.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#438a2c] hover:shadow-[0_15px_40px_rgba(82,162,52,.2)]"
          >
            Parlons de votre projet →
          </Link>
        </div>
      </section>
    </main>
  )
}
