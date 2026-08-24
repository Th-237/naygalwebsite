import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Maintenance préventive',
    description:
      'Nous intervenons avant que les incidents ne deviennent des interruptions. Contrôles, mises à jour, vérifications et optimisation permettent de réduire les risques.',
    items: [
      'Contrôles réguliers',
      'Mises à jour',
      'Nettoyage système',
      'Optimisation',
    ],
  },
  {
    number: '02',
    title: 'Maintenance corrective',
    description:
      'Lorsqu’un équipement ou un service rencontre un problème, nous diagnostiquons la cause et mettons en œuvre une solution adaptée.',
    items: [
      'Diagnostic',
      'Dépannage',
      'Réparation',
      'Remise en service',
    ],
  },
  {
    number: '03',
    title: 'Supervision',
    description:
      'Nous pouvons mettre en place une surveillance des composants critiques afin de détecter certains problèmes avant qu’ils ne deviennent bloquants.',
    items: [
      'Monitoring',
      'Alertes',
      'Disponibilité',
      'Suivi des ressources',
    ],
  },
  {
    number: '04',
    title: 'Support informatique',
    description:
      'Vos collaborateurs peuvent bénéficier d’un accompagnement technique pour résoudre rapidement les difficultés rencontrées au quotidien.',
    items: [
      'Assistance',
      'Diagnostic à distance',
      'Accompagnement',
      'Support utilisateurs',
    ],
  },
]

const environments = [
  {
    title: 'Postes de travail',
    description:
      'Ordinateurs professionnels, périphériques, logiciels et configurations utilisateurs.',
  },
  {
    title: 'Serveurs',
    description:
      'Serveurs physiques ou virtuels, services réseau, stockage et applications internes.',
  },
  {
    title: 'Réseaux',
    description:
      'Switches, routeurs, points d’accès, câblage et équipements de connectivité.',
  },
  {
    title: 'Équipements',
    description:
      'Imprimantes, systèmes de stockage, équipements spécialisés et périphériques.',
  },
]

const interventions = [
  {
    title: 'Les ordinateurs deviennent progressivement lents',
    text:
      'Les postes de travail accumulent des logiciels, fichiers temporaires, mises à jour en attente ou configurations qui peuvent dégrader leur fonctionnement.',
    solution:
      'Nous réalisons un diagnostic, identifions les causes et appliquons les optimisations nécessaires.',
  },
  {
    title: 'Les incidents se répètent',
    text:
      'Un même problème revient régulièrement sans qu’une cause structurelle soit identifiée.',
    solution:
      'Nous cherchons la cause racine plutôt que de simplement corriger le symptôme à chaque apparition.',
  },
  {
    title: 'Les équipements vieillissent',
    text:
      'Certains composants deviennent moins fiables ou ne répondent plus aux besoins actuels de l’organisation.',
    solution:
      'Nous évaluons leur état et proposons une stratégie de remplacement ou d’évolution progressive.',
  },
  {
    title: 'Personne ne sait vraiment ce qui est installé',
    text:
      'L’organisation a grandi mais la documentation de son infrastructure n’a pas suivi.',
    solution:
      'Nous pouvons inventorier les équipements, documenter l’environnement et établir une base technique exploitable.',
  },
]

const method = [
  {
    number: '01',
    title: 'Diagnostiquer',
    text:
      'Nous identifions les équipements, les symptômes, les contraintes et les causes possibles.',
  },
  {
    number: '02',
    title: 'Prioriser',
    text:
      'Tous les problèmes ne présentent pas le même niveau de risque. Nous distinguons les urgences des actions d’amélioration.',
  },
  {
    number: '03',
    title: 'Intervenir',
    text:
      'Nous réalisons les opérations nécessaires en cherchant à limiter l’impact sur votre activité.',
  },
  {
    number: '04',
    title: 'Documenter',
    text:
      'Les interventions importantes sont documentées afin de faciliter le suivi et les futures opérations.',
  },
  {
    number: '05',
    title: 'Prévenir',
    text:
      'Nous identifions les actions permettant de réduire la probabilité de réapparition des incidents.',
  },
]

const benefits = [
  'Réduire les interruptions de service',
  'Détecter plus tôt certains problèmes',
  'Prolonger la durée de vie des équipements',
  'Améliorer la stabilité du système informatique',
  'Mieux maîtriser les coûts de dépannage',
  'Donner de la visibilité sur l’état du parc',
]

const contracts = [
  {
    title: 'Intervention ponctuelle',
    text:
      'Pour un besoin précis, un incident ou une opération technique identifiée.',
    tag: 'À la demande',
  },
  {
    title: 'Maintenance préventive',
    text:
      'Pour les organisations souhaitant planifier régulièrement les contrôles et opérations techniques.',
    tag: 'Prévention',
  },
  {
    title: 'Accompagnement continu',
    text:
      'Pour bénéficier d’un suivi régulier de l’environnement informatique et d’un interlocuteur technique.',
    tag: 'Suivi',
  },
]

export default function MaintenancePage() {
  return (
    <main className="overflow-hidden bg-white text-[#032965]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#021f50] text-white">

        <img
          src="/images/services/maintenance/1.jpg"
          alt="Maintenance et intervention informatique"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01152f] via-[#021f50]/90 to-[#021f50]/40" />

        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />
        </div>

        <div className="container-custom relative flex min-h-[700px] items-center">

          <div className="max-w-5xl">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              ← Services NAYGAL
            </Link>

            <p className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-[#a4d78f]">
              <span className="h-px w-10 bg-[#52a234]" />
              Maintenance informatique
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-7xl lg:text-[78px]">
              Ne pas attendre
              <br />
              <span className="text-[#72bd4f]">
                la panne.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Nous assurons la maintenance, le suivi et l’optimisation de
              votre environnement informatique afin que vos équipes puissent
              rester concentrées sur leur activité.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#solutions"
                className="inline-flex justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Découvrir notre approche
              </a>

              <Link
                href="/contact"
                className="inline-flex justify-center border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Demander une intervention
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Maintenance proactive
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Une bonne maintenance commence avant l’incident.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-slate-600">
                Une panne informatique ne coûte pas uniquement le prix de la
                réparation. Elle peut également provoquer une interruption
                de travail, une perte de productivité ou un retard dans vos
                opérations.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                NAYGAL adopte donc une approche qui combine intervention,
                prévention, supervision et accompagnement pour maintenir un
                environnement informatique aussi stable que possible.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">

                <div className="border-l-2 border-[#52a234] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Prévenir
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Identifier les risques avant la panne.
                  </p>
                </div>

                <div className="border-l-2 border-[#276f91] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Corriger
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Restaurer rapidement les services.
                  </p>
                </div>

                <div className="border-l-2 border-[#df8b18] bg-[#f5f8fc] p-5">
                  <p className="text-2xl font-bold">
                    Optimiser
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Faire évoluer votre environnement.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="solutions"
        className="bg-[#f5f8fc] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos interventions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
              Une maintenance adaptée à votre réalité.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Chaque organisation n’a pas les mêmes contraintes. Nous adaptons
              nos interventions à votre infrastructure, votre activité et vos
              priorités.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {services.map((service) => (

              <article
                key={service.number}
                className="bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="flex h-12 w-12 items-center justify-center bg-[#edf7e7] text-sm font-bold text-[#52a234]">
                    {service.number}
                  </span>

                  <span className="text-3xl font-light text-slate-200">
                    +
                  </span>

                </div>

                <h3 className="mt-9 text-2xl font-semibold sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-2">

                  {service.items.map((item) => (

                    <div
                      key={item}
                      className="bg-[#f5f8fc] px-4 py-3 text-xs font-semibold text-[#276f91]"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISUAL
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid overflow-hidden bg-[#032965] lg:grid-cols-2">

            <div className="relative min-h-[430px]">

              <img
                src="/images/services/maintenance/2.jpg"
                alt="Équipe travaillant sur un environnement informatique"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#032965]/10 to-[#032965]/90" />

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Support · Maintenance · Continuité
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold text-white">
                  La technologie doit soutenir votre activité, pas la
                  ralentir.
                </p>

              </div>

            </div>

            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                NAYGAL Maintenance
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Garder votre environnement sous contrôle.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                La maintenance ne doit pas se limiter à réparer les
                ordinateurs. Elle doit permettre de comprendre l’état du
                système informatique et d’anticiper ses évolutions.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Inventaire des équipements',
                  'Suivi des mises à jour',
                  'Contrôle de l’état des systèmes',
                  'Diagnostic des incidents',
                  'Recommandations d’évolution',
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#52a234] text-xs text-white">
                      ✓
                    </span>

                    <span className="text-sm text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ENVIRONNEMENTS
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
                Ce que nous pouvons maintenir
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                Un accompagnement qui couvre votre environnement.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Notre approche peut couvrir différents niveaux de votre
                infrastructure informatique, selon les besoins de votre
                organisation.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {environments.map((environment, index) => (

                <article
                  key={environment.title}
                  className="bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <span className="text-xs font-bold text-[#52a234]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">
                    {environment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {environment.description}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROBLEME -> SOLUTION
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Problème → Solution
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Transformer les incidents en actions d’amélioration.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {interventions.map((item, index) => (

              <article
                key={item.title}
                className="border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
              >

                <span className="text-xs font-bold text-[#52a234]">
                  SITUATION {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

                <div className="my-6 h-px bg-slate-100" />

                <p className="text-sm font-semibold leading-7 text-[#276f91]">
                  {item.solution}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          MAINTENANCE PREVENTIVE
      ====================================================== */}

      <section className="bg-[#032965] py-20 text-white sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                Prévenir plutôt que subir
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">
                La maintenance préventive change la logique.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-300">
                Au lieu d’attendre qu’un équipement tombe en panne, nous
                pouvons planifier certaines opérations afin de réduire les
                risques et mieux maîtriser les interventions.
              </p>

            </div>

            <div className="border-t border-white/10">

              {method.map((step) => (

                <div
                  key={step.number}
                  className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                >

                  <span className="text-sm font-bold text-[#72bd4f]">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FORMULES
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Nos modes d’intervention
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Une formule adaptée à votre niveau de besoin.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Toutes les organisations n’ont pas besoin du même niveau
              d’accompagnement. Nous pouvons intervenir ponctuellement ou
              construire une relation de suivi dans le temps.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {contracts.map((contract, index) => (

              <article
                key={contract.title}
                className="border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#52a234] hover:shadow-xl"
              >

                <span className="inline-flex bg-[#edf7e7] px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#438a2c]">
                  {contract.tag}
                </span>

                <p className="mt-8 text-xs font-bold text-[#276f91]">
                  0{index + 1}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {contract.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {contract.text}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex font-semibold text-[#032965] transition hover:text-[#52a234]"
                >
                  En discuter →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFICES
      ====================================================== */}

      <section className="bg-[#f5f8fc] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#52a234]">
              Les bénéfices
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Une informatique plus prévisible.
            </h2>

          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => (

              <div
                key={benefit}
                className="border-l-2 border-[#52a234] bg-white p-6"
              >

                <span className="text-xs font-bold text-[#276f91]">
                  0{index + 1}
                </span>

                <p className="mt-7 font-semibold leading-7 text-[#032965]">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#edf7e7] py-20 sm:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-3xl" />

        <div className="container-custom relative">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Maintenance NAYGAL
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em] text-[#032965] sm:text-6xl">
              Et si votre prochaine panne était évitée avant même de se produire ?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Parlons de votre parc informatique, de vos incidents récurrents
              et de vos priorités. Nous pouvons commencer par un diagnostic
              de votre environnement actuel.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Demander un diagnostic →
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center border border-[#032965]/20 px-8 py-4 font-semibold text-[#032965] transition hover:bg-white"
              >
                Voir tous les services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
