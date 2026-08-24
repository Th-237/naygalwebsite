import Link from 'next/link'

const attackCases = [
  {
    id: '01',
    severity: 'CRITIQUE',
    title: 'Ransomware',
    subtitle: 'Quand l’activité peut être paralysée en quelques heures.',
    image: '/images/services/cybersecurite/ransomware.jpg',
    vector: 'Phishing, logiciel malveillant ou compte compromis',
    impact: 'Chiffrement de données, interruption des services et indisponibilité des postes.',
    naygal:
      'Détection des comportements suspects, isolation des équipements concernés et accompagnement de la réponse à incident.',
  },
  {
    id: '02',
    severity: 'ÉLEVÉ',
    title: 'Phishing',
    subtitle: 'Une attaque qui commence parfois par un simple e-mail.',
    image: '/images/services/cybersecurite/phishing.jpeg',
    vector: 'E-mail frauduleux, faux portail ou usurpation d’identité',
    impact: 'Vol d’identifiants, compromission de comptes et accès à des ressources internes.',
    naygal:
      'Sensibilisation, protection de la messagerie, surveillance des connexions et renforcement de l’authentification.',
  },
  {
    id: '03',
    severity: 'ÉLEVÉ',
    title: 'Compte compromis',
    subtitle: 'Un identifiant peut devenir une porte d’entrée.',
    image: '/images/services/cybersecurite/comptecompromis.png',
    vector: 'Mot de passe exposé, réutilisé ou compte insuffisamment protégé',
    impact: 'Accès non autorisé aux applications, fichiers ou infrastructures.',
    naygal:
      'Surveillance des authentifications, contrôle des privilèges et réaction rapide en cas d’activité inhabituelle.',
  },
  {
    id: '04',
    severity: 'ÉLEVÉ',
    title: 'Intrusion réseau',
    subtitle: 'Une infrastructure mal segmentée augmente le risque de propagation.',
    image: '/images/services/cybersecurite/intrusion.png',
    vector: 'Service exposé, équipement vulnérable ou mauvaise configuration',
    impact: 'Intrusion, mouvement latéral et accès à d’autres ressources.',
    naygal:
      'Segmentation, durcissement, supervision des flux et analyse des événements réseau.',
  },
  {
    id: '05',
    severity: 'CRITIQUE',
    title: 'Fuite de données',
    subtitle: 'Les données sensibles doivent rester sous contrôle.',
    image: '/images/services/cybersecurite/fuite de donnees.webp',
    vector: 'Compte compromis, mauvaise configuration ou accès excessif',
    impact: 'Exposition de documents, informations clients ou données internes.',
    naygal:
      'Contrôle des accès, surveillance des activités sensibles et renforcement de la protection des données.',
  },
  {
    id: '06',
    severity: 'MOYEN',
    title: 'Ingénierie sociale',
    subtitle: 'L’humain reste une composante majeure de la cybersécurité.',
    image: '/images/services/cybersecurite/ingenierie sociale.png',
    vector: 'Manipulation d’un collaborateur ou usurpation',
    impact: 'Divulgation d’informations ou exécution d’une action non autorisée.',
    naygal:
      'Sensibilisation, procédures de vérification et culture de sécurité au sein des équipes.',
  },
]

const socSteps = [
  {
    number: '01',
    title: 'Surveiller',
    description:
      'Collecter et observer les événements importants provenant des postes, serveurs, réseaux et services.',
  },
  {
    number: '02',
    title: 'Détecter',
    description:
      'Identifier les comportements inhabituels, signaux faibles et événements pouvant indiquer une menace.',
  },
  {
    number: '03',
    title: 'Qualifier',
    description:
      'Analyser le contexte pour distinguer une anomalie bénigne d’un véritable incident de sécurité.',
  },
  {
    number: '04',
    title: 'Répondre',
    description:
      'Contenir l’incident et coordonner les actions nécessaires pour limiter son impact.',
  },
  {
    number: '05',
    title: 'Améliorer',
    description:
      'Capitaliser sur chaque événement pour renforcer progressivement la posture de sécurité.',
  },
]

const socCapabilities = [
  {
    number: '01',
    title: 'Monitoring',
    description:
      'Surveillance continue des événements de sécurité et des activités inhabituelles.',
  },
  {
    number: '02',
    title: 'Threat Detection',
    description:
      'Identification des comportements et signaux pouvant indiquer une compromission.',
  },
  {
    number: '03',
    title: 'Incident Response',
    description:
      'Accompagnement dans la qualification, le containment et la réponse aux incidents.',
  },
  {
    number: '04',
    title: 'Threat Intelligence',
    description:
      'Mise en contexte des menaces et suivi des tendances pouvant affecter votre environnement.',
  },
  {
    number: '05',
    title: 'Reporting',
    description:
      'Synthèse des événements, risques identifiés et recommandations d’amélioration.',
  },
  {
    number: '06',
    title: 'Security Awareness',
    description:
      'Transformation des incidents observés en actions concrètes de sensibilisation.',
  },
]

const defenseLayers = [
  {
    number: '01',
    title: 'Identité',
    text: 'Comptes, privilèges, authentification et contrôle des accès.',
  },
  {
    number: '02',
    title: 'Postes',
    text: 'Protection des équipements utilisés quotidiennement par les collaborateurs.',
  },
  {
    number: '03',
    title: 'Réseaux',
    text: 'Segmentation, filtrage, contrôle des flux et sécurisation des infrastructures.',
  },
  {
    number: '04',
    title: 'Serveurs',
    text: 'Durcissement, supervision et protection des systèmes critiques.',
  },
  {
    number: '05',
    title: 'Données',
    text: 'Sauvegarde, contrôle des accès et protection des informations sensibles.',
  },
  {
    number: '06',
    title: 'Humain',
    text: 'Sensibilisation et développement d’une véritable culture de sécurité.',
  },
]

const services = [
  'Audit de sécurité',
  'Analyse des risques',
  'Sécurisation réseau',
  'Protection des postes',
  'Gestion des accès',
  'Sauvegardes',
  'SOC & supervision',
  'Réponse à incident',
  'Sensibilisation',
]

export default function CybersecuritePage() {
  return (
    <main className="overflow-hidden bg-[#020706] text-[#d9eee2]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-[820px] overflow-hidden border-b border-[#17372a]">

        <img
          src="/images/services/cybersecurite/NAYGALSOC.png"
          alt="Opérateur dans un environnement de cybersécurité"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#020706]/80" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(82,162,52,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(82,162,52,.5) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(82,162,52,.22),transparent_28%)]" />

        <div className="container-custom relative flex min-h-[820px] items-center">

          <div className="grid w-full gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

            <div>

              <Link
                href="/services"
                className="font-mono text-sm text-[#678474] transition hover:text-[#72bd4f]"
              >
                ← /services
              </Link>

              <div className="mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-[#52a234]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#52a234] shadow-[0_0_18px_#52a234]" />
                NAYGAL CYBER DEFENSE
              </div>

              <h1 className="mt-6 max-w-4xl font-mono text-5xl font-bold leading-[.98] tracking-[-.05em] text-white sm:text-7xl">
                Défendre votre
                <br />
                <span className="text-[#52a234]">
                  environnement numérique.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9bb3a5] sm:text-xl">
                Une approche de cybersécurité pensée pour protéger vos
                infrastructures, vos collaborateurs et vos données — de la
                prévention à la réponse aux incidents.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#soc"
                  className="border border-[#52a234] bg-[#52a234] px-7 py-4 text-center font-mono text-sm font-bold text-[#020706] transition hover:bg-[#79c656]"
                >
                  [ DÉCOUVRIR NOTRE SOC ]
                </a>

                <Link
                  href="/contact"
                  className="border border-[#315242] px-7 py-4 text-center font-mono text-sm font-semibold text-[#b8d9c5] transition hover:border-[#52a234]"
                >
                  Évaluer mon environnement
                </Link>

              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs text-[#648170]">

                <span>01 / PRÉVENTION</span>
                <span>02 / DÉTECTION</span>
                <span>03 / RÉPONSE</span>

              </div>

            </div>

            {/* SOC TERMINAL */}

            <div className="relative">

              <div className="absolute -inset-12 rounded-full bg-[#52a234]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-xl border border-[#27563b] bg-[#06100c]/95 shadow-[0_0_100px_rgba(82,162,52,.15)] backdrop-blur">

                <div className="flex items-center justify-between border-b border-[#17372a] bg-[#08150f] px-5 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-3 w-3 rounded-full bg-[#405749]" />
                    <span className="h-3 w-3 rounded-full bg-[#405749]" />
                    <span className="h-3 w-3 rounded-full bg-[#405749]" />

                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#527564]">
                    NAYGAL SOC / LIVE
                  </span>

                </div>

                <div className="p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="font-mono text-xs text-[#5d806b]">
                        SECURITY OPERATIONS
                      </p>

                      <p className="mt-2 font-mono text-2xl font-bold text-white">
                        CENTER
                      </p>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#52a234]/40 bg-[#52a234]/10">
                      <span className="h-3 w-3 animate-pulse rounded-full bg-[#72bd4f] shadow-[0_0_20px_#72bd4f]" />
                    </div>

                  </div>

                  <div className="mt-8 space-y-3">

                    <div className="border border-[#17372a] bg-[#08150f] p-4">

                      <div className="flex items-center justify-between font-mono text-[10px]">

                        <span className="text-[#527564]">
                          NETWORK
                        </span>

                        <span className="text-[#72bd4f]">
                          MONITORED
                        </span>

                      </div>

                    </div>

                    <div className="border border-[#17372a] bg-[#08150f] p-4">

                      <div className="flex items-center justify-between font-mono text-[10px]">

                        <span className="text-[#527564]">
                          IDENTITIES
                        </span>

                        <span className="text-[#72bd4f]">
                          PROTECTED
                        </span>

                      </div>

                    </div>

                    <div className="border border-[#17372a] bg-[#08150f] p-4">

                      <div className="flex items-center justify-between font-mono text-[10px]">

                        <span className="text-[#527564]">
                          THREAT LEVEL
                        </span>

                        <span className="text-[#dca95c]">
                          MONITORING
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">

                    <div className="border border-[#17372a] p-3 text-center">
                      <p className="font-mono text-lg font-bold text-[#72bd4f]">
                        24/7
                      </p>
                      <p className="mt-1 font-mono text-[9px] text-[#527564]">
                        MONITORING
                      </p>
                    </div>

                    <div className="border border-[#17372a] p-3 text-center">
                      <p className="font-mono text-lg font-bold text-white">
                        SIEM
                      </p>
                      <p className="mt-1 font-mono text-[9px] text-[#527564]">
                        ANALYSIS
                      </p>
                    </div>

                    <div className="border border-[#17372a] p-3 text-center">
                      <p className="font-mono text-lg font-bold text-white">
                        IR
                      </p>
                      <p className="mt-1 font-mono text-[9px] text-[#527564]">
                        RESPONSE
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="border-b border-[#17372a] bg-[#030a07] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
                // CYBERSECURITY
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold leading-tight text-white sm:text-5xl">
                La sécurité commence avant l’attaque.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#91aa9c]">
                Une infrastructure sécurisée ne repose pas sur un seul outil.
                Elle repose sur une combinaison cohérente de technologies,
                de procédures et de compétences.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#91aa9c]">
                NAYGAL intervient sur l’ensemble de cette chaîne : réduire
                l’exposition, renforcer les systèmes, surveiller les
                événements et préparer la réponse lorsqu’un incident survient.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SOC
      ========================================================== */}

      <section
        id="soc"
        className="relative overflow-hidden border-b border-[#17372a] bg-[#020706] py-20 sm:py-28"
      >

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#52a234]/10 blur-[130px]" />

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">

            <div>

              <div className="relative overflow-hidden border border-[#27563b]">

                <img
                  src="/images/services/cybersecurite/SOC_STATUS: READY.webp"
                  alt="Centre de supervision et opérations de sécurité"
                  className="h-[460px] w-full object-cover opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020706] via-transparent to-[#020706]/20" />

                <div className="absolute bottom-6 left-6">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#72bd4f] shadow-[0_0_15px_#72bd4f]" />

                    <span className="font-mono text-xs uppercase tracking-[.2em] text-[#72bd4f]">
                      SOC OPERATIONAL
                    </span>

                  </div>

                  <p className="mt-3 font-mono text-2xl font-bold text-white">
                    Security Operations Center
                  </p>

                </div>

              </div>

            </div>

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
                // NAYGAL SOC
              </p>

              <h2 className="mt-5 font-mono text-4xl font-bold leading-tight text-white sm:text-6xl">
                Voir ce qui se passe.
                <br />
                <span className="text-[#52a234]">
                  Comprendre. Réagir.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#91aa9c]">
                Le SOC NAYGAL constitue une capacité de surveillance et
                d’analyse dédiée à votre environnement numérique.
              </p>

              <p className="mt-5 leading-7 text-[#819b8b]">
                L’objectif n’est pas simplement d’accumuler des alertes.
                Il s’agit de transformer les événements techniques en
                informations exploitables afin d’identifier les incidents
                pertinents et d’aider votre organisation à prendre les bonnes
                décisions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                <div className="border border-[#214b35] bg-[#06100c] p-5">
                  <p className="font-mono text-xs text-[#52a234]">
                    MONITORING
                  </p>
                  <p className="mt-3 text-sm text-[#b4c9bc]">
                    Événements et activités à surveiller.
                  </p>
                </div>

                <div className="border border-[#214b35] bg-[#06100c] p-5">
                  <p className="font-mono text-xs text-[#52a234]">
                    RESPONSE
                  </p>
                  <p className="mt-3 text-sm text-[#b4c9bc]">
                    Qualification et accompagnement incident.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* SOC PROCESS */}

          <div className="mt-20">

            <div className="max-w-3xl">

              <p className="font-mono text-xs text-[#527564]">
                SOC_WORKFLOW
              </p>

              <h3 className="mt-4 font-mono text-2xl font-bold text-white sm:text-4xl">
                Du signal à l’action.
              </h3>

            </div>

            <div className="mt-10 grid border-l border-t border-[#17372a] md:grid-cols-5">

              {socSteps.map((step) => (

                <div
                  key={step.number}
                  className="border-b border-r border-[#17372a] bg-[#06100c] p-6"
                >

                  <span className="font-mono text-xs text-[#52a234]">
                    {step.number}
                  </span>

                  <h4 className="mt-8 font-mono text-xl font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-[#819b8b]">
                    {step.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SOC CAPABILITIES
      ========================================================== */}

      <section className="border-b border-[#17372a] bg-[#030a07] py-20 sm:py-28">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
                // SOC CAPABILITIES
              </p>

              <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">
                Une capacité de défense, pas seulement un tableau de bord.
              </h2>

              <p className="mt-6 leading-8 text-[#819b8b]">
                Le SOC prend sa valeur lorsqu’il permet à l’organisation de
                mieux comprendre ses risques et d’agir plus rapidement.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {socCapabilities.map((capability) => (

                <div
                  key={capability.number}
                  className="group border border-[#17372a] bg-[#06100c] p-6 transition hover:border-[#52a234]"
                >

                  <span className="font-mono text-xs text-[#52a234]">
                    {capability.number}
                  </span>

                  <h3 className="mt-7 font-mono text-xl font-bold text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#819b8b]">
                    {capability.description}
                  </p>

                  <div className="mt-5 h-px w-7 bg-[#315242] transition-all group-hover:w-full group-hover:bg-[#52a234]" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ATTACK CASES
      ========================================================== */}

      <section
        id="attaques"
        className="border-b border-[#17372a] bg-[#020706] py-20 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
              // THREAT SCENARIOS
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-6xl">
              Les menaces que nous cherchons à détecter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#819b8b]">
              Quelques scénarios permettant de comprendre concrètement
              pourquoi la prévention, la surveillance et la préparation sont
              essentielles.
            </p>

          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {attackCases.map((attack) => (

              <article
                key={attack.id}
                className="group overflow-hidden border border-[#17372a] bg-[#06100c] transition duration-300 hover:border-[#52a234]"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={attack.image}
                    alt={attack.title}
                    className="h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-[#06100c]/30 to-transparent" />

                  <div className="absolute left-6 top-6 flex gap-2">

                    <span className="border border-[#52a234]/50 bg-[#020706]/80 px-3 py-1 font-mono text-[10px] text-[#72bd4f]">
                      CASE_{attack.id}
                    </span>

                    <span className="border border-[#dca95c]/40 bg-[#020706]/80 px-3 py-1 font-mono text-[10px] text-[#dca95c]">
                      {attack.severity}
                    </span>

                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <h3 className="font-mono text-3xl font-bold text-white">
                      {attack.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#a7bdaf]">
                      {attack.subtitle}
                    </p>

                  </div>

                </div>

                <div className="space-y-3 p-7">

                  <div className="border-l-2 border-[#dca95c] bg-[#08150f] p-4">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#527564]">
                      VECTOR
                    </p>

                    <p className="mt-2 text-sm text-[#b4c9bc]">
                      {attack.vector}
                    </p>

                  </div>

                  <div className="border-l-2 border-[#b85a5a] bg-[#08150f] p-4">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#527564]">
                      IMPACT
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#b4c9bc]">
                      {attack.impact}
                    </p>

                  </div>

                  <div className="border-l-2 border-[#52a234] bg-[#08150f] p-4">

                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#527564]">
                      NAYGAL
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#b4c9bc]">
                      {attack.naygal}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          DEFENSE IN DEPTH
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-[#17372a] py-20 sm:py-28">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=90"
          alt="Infrastructure technologique"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-[#020706]/90" />

        <div className="container-custom relative">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
                // DEFENSE IN DEPTH
              </p>

              <h2 className="mt-5 font-mono text-4xl font-bold text-white sm:text-6xl">
                Une défense multicouche.
              </h2>

              <p className="mt-6 leading-8 text-[#819b8b]">
                Si une couche échoue, les suivantes doivent limiter la
                propagation et réduire l’impact.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {defenseLayers.map((layer) => (

                <div
                  key={layer.number}
                  className="border border-[#214b35] bg-[#06100c]/90 p-6 backdrop-blur"
                >

                  <span className="font-mono text-xs text-[#52a234]">
                    LAYER_{layer.number}
                  </span>

                  <h3 className="mt-6 font-mono text-xl font-bold text-white">
                    {layer.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#819b8b]">
                    {layer.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section className="border-b border-[#17372a] bg-[#020706] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
              // NAYGAL SERVICES
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">
              Une couverture de sécurité de bout en bout.
            </h2>

          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <div
                key={service}
                className="group border border-[#17372a] bg-[#06100c] p-6 transition hover:border-[#52a234] hover:bg-[#08150f]"
              >

                <span className="font-mono text-xs text-[#52a234]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="mt-8 font-mono font-bold text-white">
                  {service}
                </p>

                <div className="mt-5 h-px w-8 bg-[#315242] transition-all group-hover:w-full group-hover:bg-[#52a234]" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          BEFORE / AFTER
      ========================================================== */}

      <section className="border-b border-[#17372a] bg-[#030a07] py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
              // SECURITY MATURITY
            </p>

            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">
              Passer de la réaction à la préparation.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">

            <div className="border border-[#5a302f] bg-[#100807] p-8">

              <p className="font-mono text-xs text-[#d26b68]">
                BEFORE // EXPOSITION
              </p>

              <ul className="mt-8 space-y-4">

                {[
                  'Peu de visibilité sur les événements',
                  'Accès administrateurs mal maîtrisés',
                  'Sauvegardes non vérifiées',
                  'Réseau insuffisamment segmenté',
                  'Réaction improvisée lors d’un incident',
                ].map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[#b99a98]"
                  >
                    <span className="font-mono text-[#d26b68]">
                      ×
                    </span>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="border border-[#214b35] bg-[#06100c] p-8">

              <p className="font-mono text-xs text-[#72bd4f]">
                AFTER // DEFENSE
              </p>

              <ul className="mt-8 space-y-4">

                {[
                  'Événements mieux surveillés',
                  'Accès et privilèges mieux contrôlés',
                  'Sauvegardes structurées et vérifiées',
                  'Infrastructure segmentée',
                  'Procédures de réponse préparées',
                ].map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[#b2cabb]"
                  >
                    <span className="font-mono text-[#72bd4f]">
                      ✓
                    </span>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#020706] py-24 sm:py-32">

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(82,162,52,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(82,162,52,.5) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />

        <div className="container-custom relative">

          <div className="mx-auto max-w-6xl overflow-hidden border border-[#214b35] bg-[#06100c]">

            <div className="grid lg:grid-cols-[.85fr_1.15fr]">

              <div className="relative min-h-[380px]">

                <img
                  src="/images/services/cybersecurite/NAYGALSOC.png"
                  alt="Opérations de cybersécurité"
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#06100c]/20 via-[#06100c]/30 to-[#06100c]" />

                <div className="absolute bottom-8 left-8">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#72bd4f] shadow-[0_0_15px_#72bd4f]" />

                    <span className="font-mono text-xs text-[#72bd4f]">
                      SOC_STATUS: READY
                    </span>

                  </div>

                </div>

              </div>

              <div className="p-8 sm:p-14">

                <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#52a234]">
                  CONNECTION_REQUEST
                </p>

                <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-5xl">
                  Votre organisation est-elle prête ?
                </h2>

                <p className="mt-6 leading-8 text-[#819b8b]">
                  Parlons de votre infrastructure, de vos contraintes et des
                  risques que vous souhaitez réduire.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/contact"
                    className="border border-[#52a234] bg-[#52a234] px-7 py-4 text-center font-mono text-sm font-bold text-[#020706] transition hover:bg-[#72bd4f]"
                  >
                    [ PARLER À NAYGAL ]
                  </Link>

                  <Link
                    href="/services"
                    className="border border-[#315242] px-7 py-4 text-center font-mono text-sm text-[#b8d9c5] transition hover:border-[#52a234]"
                  >
                    Retour aux services
                  </Link>

                </div>

                <p className="mt-7 font-mono text-xs text-[#405d4c]">
                  status: waiting_for_connection...
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
