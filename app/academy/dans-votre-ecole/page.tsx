'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const schoolTypes = [
  {
    id: 'primaire',
    number: '01',
    title: 'École primaire',
    subtitle: 'Publique ou privée',
    description: 'Éveiller la curiosité et découvrir le numérique par des activités concrètes, ludiques et adaptées à l’âge des apprenants.',
    accent: 'from-amber-400 to-orange-500',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="M7 20.5 24 8l17 12.5v20H7v-20Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M18 40V27h12v13M16 20h.01M24 20h.01M32 20h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    steps: [
      ['Échange avec l’école', 'Identifier les classes concernées, les objectifs pédagogiques et les ressources déjà disponibles.'],
      ['Découverte du numérique', 'Présenter le programme aux équipes éducatives et proposer une première expérience aux élèves.'],
      ['Ateliers adaptés', 'Lancer des activités pratiques progressives, pensées pour l’âge et le rythme des enfants.'],
      ['Suivi et évolution', 'Faire le point avec l’établissement et ajuster les ateliers au fil de l’année.'],
    ],
  },
  {
    id: 'secondaire',
    number: '02',
    title: 'Collège ou lycée',
    subtitle: 'Enseignement secondaire',
    description: 'Construire des compétences numériques solides grâce à des ateliers pratiques, des projets et un accompagnement régulier.',
    accent: 'from-sky-400 to-blue-600',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="M8 40V13l16-6 16 6v27H8Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M17 19h4m6 0h4m-14 8h4m6 0h4m-14 13V33h12v7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    steps: [
      ['Cadrage du partenariat', 'Échanger avec la direction et les enseignants pour préciser les objectifs, les niveaux et le calendrier.'],
      ['Sensibilisation et lancement', 'Faire découvrir les parcours aux élèves et organiser les premières séances pratiques.'],
      ['Parcours par niveaux', 'Déployer des ateliers adaptés aux acquis et aux centres d’intérêt des collégiens et lycéens.'],
      ['Projets et accompagnement', 'Suivre les progrès, valoriser les réalisations et faire évoluer le programme avec l’établissement.'],
    ],
  },
  {
    id: 'superieur',
    number: '03',
    title: 'Université ou centre de formation',
    subtitle: 'Enseignement supérieur et professionnel',
    description: 'Relier les apprentissages aux filières et aux métiers grâce à des parcours spécialisés et des mises en pratique.',
    accent: 'from-emerald-400 to-teal-600',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-8 w-8">
        <path d="m4 18 20-10 20 10-20 10L4 18Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M12 22v11c7 6 17 6 24 0V22M44 18v14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    steps: [
      ['Analyse des besoins', 'Définir avec l’équipe pédagogique les filières, compétences visées et profils des apprenants.'],
      ['Conception du parcours', 'Construire un programme cohérent avec les objectifs de formation et les contraintes de l’établissement.'],
      ['Déploiement des formations', 'Animer des séances orientées pratique, études de cas et projets en lien avec les domaines choisis.'],
      ['Évaluation et passerelles', 'Évaluer les acquis et identifier les suites possibles : spécialisation, certification ou partenariat.'],
    ],
  },
]

const academicPartners = [
  { name: 'IUT', logo: '/images/partners/iut.png' },
  { name: 'ISTAG', logo: '/images/partners/istag.png' },
  { name: 'ISGA' },
  { name: 'MPT' },
  { name: 'KAVENOR', logo: '/images/partners/kavenor.png' },
  { name: 'ST Digital', logo: '/images/partners/ST DIGITAL.png' },
  { name: 'Cloudstore Africa', logo: '/images/partners/logo_cloudstore_africa.jpg' },
]

const learningPlatforms = [
  { name: 'Cisco Networking Academy', logo: '/images/platforms/img.png' },
  { name: 'Fortinet Training Institute', logo: '/images/platforms/fortinet.png' },
  { name: 'OpenClassrooms', logo: '/images/platforms/openclassrooms.png' },
  { name: 'Google for Education', logo: '/images/platforms/google-for-ed.png' },
  { name: 'edX', logo: '/images/platforms/edx.png' },
]

export default function AcademyInSchoolPage() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null)
  const programRef = useRef<HTMLElement | null>(null)
  const selected = schoolTypes.find((school) => school.id === selectedSchool)

  return (
    <main className="bg-[#f7faff] pt-[72px] text-[#032965]">
      <section className="relative isolate overflow-hidden bg-[#021d47] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/academy/dans-votre-ecole/nay.jpg"
            alt="Des apprenants réunis autour d’un atelier NAYGAL Academy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#021d47]/95 via-[#021d47]/80 to-[#021d47]/40" />
        <div className="absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#276f91]/40 blur-3xl" />
        <div className="container-custom py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#c5efa9] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#8fd46b]" /> NAYGAL Academy · Dans votre établissement
            </p>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Le numérique prend une nouvelle place <span className="text-[#a4d78f]">dans votre école.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Chaque établissement a ses apprenants, ses objectifs et son rythme. Choisissez votre type d’école pour découvrir comment NAYGAL Academy peut s’y déployer.
            </p>
            <a href="#choisir" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#52a234] px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-950/20 transition hover:-translate-y-0.5 hover:bg-[#438a2c]">
              Choisir mon établissement <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      <section id="choisir" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#438a2c]">Un parcours adapté à votre structure</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#032965] sm:text-4xl">Quel type d’établissement représentez-vous ?</h2>
            <p className="mt-4 leading-7 text-slate-600">Choisissez une carte : son programme détaillé s’affichera et la page vous y conduira directement.</p>
          </div>

          <div className="mt-11 grid gap-5 lg:grid-cols-3">
            {schoolTypes.map((school) => {
              const isSelected = selectedSchool === school.id
              return (
                <button
                  key={school.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    const nextSchool = isSelected ? null : school.id
                    setSelectedSchool(nextSchool)
                    if (nextSchool) {
                      window.setTimeout(() => {
                        programRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 80)
                    }
                  }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 text-left shadow-[0_12px_40px_rgba(3,41,101,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(3,41,101,.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#52a234]/30 sm:p-8 ${isSelected ? 'border-[#52a234] ring-2 ring-[#52a234]/20' : 'border-slate-200/80'}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${school.accent}`} />
                  <span className="flex w-full items-center justify-between">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${school.accent} text-white shadow-lg`}>
                      {school.icon}
                    </span>
                    <span className="text-sm font-bold tracking-[.16em] text-slate-300">{school.number}</span>
                  </span>
                  <span className="mt-7 block text-2xl font-semibold tracking-tight text-[#032965]">{school.title}</span>
                  <span className="mt-1 block text-sm font-semibold text-[#438a2c]">{school.subtitle}</span>
                  <span className="mt-4 block flex-1 text-sm leading-7 text-slate-600">{school.description}</span>
                  <span className={`mt-7 inline-flex items-center gap-2 font-semibold transition ${isSelected ? 'text-[#438a2c]' : 'text-[#276f91] group-hover:text-[#438a2c]'}`}>
                    {isSelected ? 'Parcours sélectionné · Voir les détails' : 'Découvrir le déploiement'}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div id="parcours-etablissement">
          {selected?.id === 'superieur' && (
            <section ref={programRef} key={selected.id} className="mt-10 scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#dce8f2] bg-white shadow-[0_28px_90px_rgba(3,41,101,.12)]" aria-live="polite">
              <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#03183c] via-[#032965] to-[#075073] px-6 py-8 text-white sm:px-10 sm:py-12">
                <div className="absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/25 bg-emerald-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-emerald-100">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" /> NAYGAL Academy · Universités &amp; centres de formation
                    </p>
                    <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">L’accompagnement IT qui fait réussir les étudiants.</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">Propulsez vos étudiants vers l’excellence académique et professionnelle. NAYGAL Academy s’associe aux universités, grandes écoles et centres de formation pour un encadrement technique rapproché, du coaching de projet et un suivi individuel.</p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link href="/contact?subject=formation&message=Demande%20d%27accompagnement%20pour%20nos%20%C3%A9tudiants%20IT#contact-form" className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#438a2c]">
                        Demander un accompagnement pour nos étudiants
                      </Link>
                      <Link href="/contact?subject=partenariat&message=Demande%20pour%20devenir%20Universit%C3%A9%20Partenaire%20NAYGAL%20Academy#contact-form" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/15">
                        Devenir Université Partenaire
                      </Link>
                    </div>
                  </div>
                  <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl sm:min-h-[340px]">
                    <Image src="/images/academy/formations/gproj.jpg" alt="Étudiants en travail collaboratif autour d’un projet numérique" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021638]/90 via-[#021638]/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#03183c]/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur">Pratique · Projet · Insertion</div>
                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#03183c]/65 p-5 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-200">Assistance à 360°</p>
                      <p className="mt-2 text-xl font-semibold text-white">Du premier blocage au premier emploi.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-14 bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_38%)] px-6 py-10 sm:px-10 sm:py-14">
                <section>
                  <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Notre cœur de mission</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Un soutien concret pour chaque étape du parcours IT.</h4>
                    <p className="mt-3 leading-7 text-slate-600">Les filières informatiques exigent une pratique intense et un soutien technique continu. Nous intervenons aux côtés de vos enseignants pour accompagner chaque apprenant vers la maîtrise concrète.</p>
                  </div>
                  <div className="mt-7 grid gap-5 lg:grid-cols-3">
                    <article className="rounded-3xl border border-[#dce8f2] border-t-4 border-t-sky-500 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="text-3xl" aria-hidden="true">🎓</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-sky-700">Projets & mémoires</p>
                      <h5 className="mt-2 text-xl font-semibold text-[#032965]">PFE &amp; mémoires tech</h5>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#032965]">Cadrage :</strong> orienter les sujets vers des enjeux actuels — IA, Cloud, cybersécurité, Mobile.</li>
                        <li><strong className="text-[#032965]">Revue technique :</strong> qualité du code, architecture, bonnes pratiques et sécurité.</li>
                        <li><strong className="text-[#032965]">Soutenance :</strong> coaching de présentation, Live Demo et rédaction académique.</li>
                      </ul>
                    </article>
                    <article className="rounded-3xl border border-[#dce8f2] border-t-4 border-t-emerald-500 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="text-3xl" aria-hidden="true">🧑‍💻</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-emerald-700">Aide & tutorat</p>
                      <h5 className="mt-2 text-xl font-semibold text-[#032965]">Guichet d’assistance IT</h5>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#032965]">Déblocage :</strong> algorithmique, Python, Java, JavaScript, C++, bases de données et réseaux.</li>
                        <li><strong className="text-[#032965]">Help Desk IT :</strong> accès à des tuteurs pour les TP et projets de groupe.</li>
                        <li><strong className="text-[#032965]">Remise à niveau :</strong> modules adaptés aux parcours et aux acquis de chacun.</li>
                      </ul>
                    </article>
                    <article className="rounded-3xl border border-[#dce8f2] border-t-4 border-t-amber-500 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="text-3xl" aria-hidden="true">🚀</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-amber-700">Carrière & réseau</p>
                      <h5 className="mt-2 text-xl font-semibold text-[#032965]">Mentorat & insertion pro</h5>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#032965]">Coaching carrière :</strong> profil GitHub, CV technique et valorisation des réalisations.</li>
                        <li><strong className="text-[#032965]">Entretiens :</strong> entraînement aux Coding Interviews et tests de code.</li>
                        <li><strong className="text-[#032965]">Mise en réseau :</strong> ingénieurs, développeurs séniors et entreprises partenaires.</li>
                      </ul>
                    </article>
                  </div>
                </section>

                <section>
                  <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Filières & spécialités</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Des mentors au plus près des domaines technologiques.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      ['01', 'Génie logiciel & Web/Mobile', 'Full-Stack, Flutter, React Native, microservices et API.'],
                      ['02', 'Intelligence artificielle & Data', 'Machine Learning, traitement de données, IA générative et Big Data.'],
                      ['03', 'Cybersécurité & Réseaux', 'Administration systèmes, sécurité applicative et tests d’intrusion.'],
                      ['04', 'Cloud Computing & DevOps', 'Déploiement, Docker, Kubernetes et intégration continue (CI/CD).'],
                      ['05', 'IoT & systèmes embarqués', 'Électronique programmée, systèmes embarqués et capteurs intelligents.'],
                    ].map(([number, title, description]) => (
                      <article key={number} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:shadow-md">
                        <span className="text-xs font-bold tracking-[.16em] text-emerald-700">{number} / SPÉCIALITÉ</span>
                        <h5 className="mt-3 font-semibold text-[#032965]">{title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Sur votre campus</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Des formats qui s’intègrent à la vie de l’établissement.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {[
                      ['01', 'Hub d’assistance IT', 'Une permanence physique ou en ligne pour soutenir les étudiants tout au long du semestre.'],
                      ['02', 'Bootcamps commando', 'Une à deux semaines de perfectionnement intensif sur des technologies ciblées, avant les projets.'],
                      ['03', 'Hackathons & challenges', 'Des compétitions pédagogiques sur le campus pour stimuler créativité et travail d’équipe.'],
                    ].map(([number, title, description]) => (
                      <article key={number} className="rounded-3xl bg-[#032965] p-6 text-white shadow-md sm:p-7">
                        <span className="text-sm font-bold text-[#a4d78f]">{number} · DISPOSITIF</span>
                        <h5 className="mt-4 text-xl font-semibold">{title}</h5>
                        <p className="mt-3 text-sm leading-7 text-blue-100">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Les bénéfices pour votre établissement</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Des résultats qui profitent aux étudiants comme aux équipes.</h4>
                  </div>
                  <div className="mt-7 grid gap-5 lg:grid-cols-2">
                    <article className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#f1f9ed] to-white p-6 sm:p-8">
                      <h5 className="text-xl font-semibold text-[#032965]">Pour les étudiants</h5>
                      <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#438a2c]">Sérénité & confiance :</strong> moins de stress face aux projets complexes grâce à un accompagnement régulier.</li>
                        <li><strong className="text-[#438a2c]">Portfolio valorisable :</strong> projets réels, fonctionnels et déployés en production.</li>
                        <li><strong className="text-[#438a2c]">Employabilité :</strong> une transition plus fluide vers le marché de l’emploi IT.</li>
                      </ul>
                    </article>
                    <article className="rounded-3xl border border-sky-100 bg-gradient-to-br from-[#f1f7ff] to-white p-6 sm:p-8">
                      <h5 className="text-xl font-semibold text-[#032965]">Pour la Direction &amp; le corps professoral</h5>
                      <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#276f91]">Réussite académique :</strong> prévenir les blocages, l’abandon et les échecs dans les matières IT.</li>
                        <li><strong className="text-[#276f91]">Soutenances renforcées :</strong> élever le niveau technique des mémoires et projets présentés.</li>
                        <li><strong className="text-[#276f91]">Formation valorisée :</strong> renforcer la réputation de l’établissement auprès des recruteurs et des familles.</li>
                      </ul>
                    </article>
                  </div>
                </section>

                <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#03183c] via-[#032965] to-[#075073] p-7 text-white shadow-[0_20px_55px_rgba(3,41,101,.2)] sm:p-10">
                  <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Construisons ensemble</p>
                      <h4 className="mt-3 text-2xl font-semibold sm:text-3xl">La réussite de vos étudiants mérite un accompagnement à la hauteur.</h4>
                      <p className="mt-3 text-sm leading-7 text-blue-100">Définissons la formule d’assistance adaptée à vos effectifs, vos filières et vos programmes.</p>
                      <p className="mt-4 text-sm text-blue-100">+237 674 509 721 <span className="mx-2 text-white/40">·</span> contact@naygal.cm <span className="mx-2 text-white/40">·</span> Yaoundé, Cameroun</p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                      <Link href="/contact?subject=formation&message=Demande%20d%27accompagnement%20pour%20nos%20%C3%A9tudiants%20IT#contact-form" className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#438a2c]">Demander un accompagnement</Link>
                      <Link href="/contact?subject=partenariat&message=Demande%20pour%20devenir%20Universit%C3%A9%20Partenaire%20NAYGAL%20Academy#contact-form" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10">Devenir Université Partenaire</Link>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          )}

          {selected?.id === 'primaire' && (
            <section ref={programRef} className="mt-10 scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#f1dfc8] bg-white shadow-[0_22px_70px_rgba(3,41,101,.08)]" aria-live="polite">
              <div className="relative overflow-hidden bg-[#3b245f] px-7 py-10 text-white sm:px-10 sm:py-14">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
                <div className="relative max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-200">NAYGAL Academy Kids · Édition primaire</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">L’éveil technologique et scientifique dès le primaire</h3>
                  <p className="mt-4 text-lg leading-8 text-violet-100">Transformez la technologie en terrain de jeu, d’expérimentation et de création pour vos élèves à Yaoundé. De la SIL au CM2, nous cultivons leur curiosité scientifique et préparons les innovateurs de demain.</p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contact?subject=formation&message=Demande%20de%20s%C3%A9ance%20d%C3%A9couverte%20gratuite%20NAYGAL%20Academy%20Kids%20(primaire)#contact-form" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 text-center font-semibold text-[#2c2042] transition hover:-translate-y-0.5 hover:bg-amber-300">
                      Demander une séance découverte gratuite
                    </Link>
                    <Link href="/contact?subject=partenariat&message=Demande%20de%20devis%20NAYGAL%20Academy%20Kids%20(primaire)#contact-form" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/15">
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-14 px-6 py-10 sm:px-10 sm:py-14">
                <section>
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Notre approche pédagogique</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Découvrir, manipuler, réaliser.</h4>
                    <p className="mt-3 leading-7 text-slate-600">Une démarche active et ludique qui donne aux enfants le plaisir d’apprendre en faisant.</p>
                  </div>
                  <ol className="mt-7 grid gap-4 md:grid-cols-3">
                    {[
                      ['01', 'Découvrir', 'Comprendre le fonctionnement d’une technologie ou d’un concept scientifique.'],
                      ['02', 'Expérimenter', 'Manipuler le matériel, tester des hypothèses et apprendre par l’erreur.'],
                      ['03', 'Réaliser', 'Concevoir et concrétiser un projet individuel ou collectif.'],
                    ].map(([number, title, description]) => (
                      <li key={number} className="rounded-2xl bg-[#fff8ed] p-6">
                        <span className="text-sm font-bold text-orange-600">{number}</span>
                        <h5 className="mt-4 text-xl font-semibold text-[#032965]">{title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Nos 5 piliers d’apprentissage</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Des sciences, de la création et beaucoup de pratique.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      ['🤖', 'Robotique', 'Construction de robots adaptés à l’âge des enfants et découverte des capteurs.'],
                      ['💻', 'Programmation créative', 'Initiation à la logique de code sur Scratch Junior et jeux algorithmiques.'],
                      ['🔬', 'Découverte scientifique', 'Expériences pratiques, observations et démarche d’investigation.'],
                      ['🎨', 'Créativité numérique', 'Design, illustration numérique et réalisation de films en stop-motion.'],
                      ['🧩', 'Logique & débranchement', 'Puzzles, algorithmes sans écran et jeux de réflexion.'],
                    ].map(([icon, title, description]) => (
                      <article key={title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-orange-200 hover:shadow-md">
                        <span className="text-3xl" aria-hidden="true">{icon}</span>
                        <h5 className="mt-4 font-semibold text-[#032965]">{title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Des parcours adaptés à chaque cycle</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Une progression de la SIL au CM2.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 lg:grid-cols-3">
                    {[
                      ['SIL – CP', 'Déclic & éveil', 'Jeux de logique sans écran, première approche de la robotique ludique et ateliers créatifs.'],
                      ['CE1 – CE2', 'Exploration & code', 'Programmation visuelle sur Scratch Junior et construction de robots simples.'],
                      ['CM1 – CM2', 'Projets & innovation', 'Réalisation de projets technologiques et approfondissement des concepts scientifiques clés.'],
                    ].map(([grades, title, description], index) => (
                      <article key={grades} className="relative overflow-hidden rounded-2xl bg-[#f7f5fb] p-6">
                        <span className="absolute right-5 top-4 text-5xl font-black text-violet-900/5">0{index + 1}</span>
                        <p className="text-xs font-bold uppercase tracking-[.15em] text-violet-700">{grades}</p>
                        <h5 className="mt-3 text-xl font-semibold text-[#032965]">{title}</h5>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Pourquoi intégrer Academy Kids ?</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Grandir en confiance, apprendre en créant.</h4>
                  </div>
                  <div className="mt-7 grid gap-5 lg:grid-cols-2">
                    <article className="rounded-2xl bg-[#f2f7ff] p-6 sm:p-8">
                      <h5 className="text-xl font-semibold text-[#032965]">Pour les élèves</h5>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#032965]">Raisonnement logique :</strong> résoudre des problèmes et renforcer l’esprit critique.</li>
                        <li><strong className="text-[#032965]">Créativité :</strong> concevoir des histoires interactives, des jeux et des objets animés.</li>
                        <li><strong className="text-[#032965]">Coopération & confiance :</strong> travailler en équipe, s’entraider et valoriser les réussites.</li>
                        <li><strong className="text-[#032965]">Citoyenneté numérique :</strong> découvrir les bons usages des outils technologiques.</li>
                      </ul>
                    </article>
                    <article className="rounded-2xl bg-[#f2f8ef] p-6 sm:p-8">
                      <h5 className="text-xl font-semibold text-[#032965]">Pour l’école</h5>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                        <li><strong className="text-[#032965]">Clé en main :</strong> matériel, encadrement et supports pédagogiques pris en charge.</li>
                        <li><strong className="text-[#032965]">Équipe accompagnée :</strong> ressources et accompagnement des enseignants référents.</li>
                        <li><strong className="text-[#032965]">Établissement valorisé :</strong> un programme d’innovation éducative qui renforce son attractivité.</li>
                      </ul>
                    </article>
                  </div>
                </section>

                <section>
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-orange-600">Formats d’intervention</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Du premier atelier à l’année complète.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {[
                      ['Séance découverte', 'Un atelier d’initiation gratuit pour tester le programme dans votre école.'],
                      ['Cycle trimestriel', 'Un programme structuré de 12 séances, à raison d’une séance par semaine.'],
                      ['Parcours annuel', 'Un accompagnement complet tout au long de l’année scolaire.'],
                    ].map(([title, description], index) => (
                      <article key={title} className={`rounded-2xl p-6 ${index === 0 ? 'bg-[#fff8ed]' : 'border border-slate-200 bg-white'}`}>
                        <span className="text-xs font-bold uppercase tracking-[.15em] text-orange-600">Format 0{index + 1}</span>
                        <h5 className="mt-3 text-lg font-semibold text-[#032965]">{title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl bg-[#3b245f] p-7 text-white sm:p-9">
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-200">NAYGAL Academy Kids · Yaoundé</p>
                      <h4 className="mt-3 text-2xl font-semibold sm:text-3xl">Prêt à transformer l’apprentissage numérique ?</h4>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-100">Contactez notre équipe pour planifier une démonstration gratuite ou recevoir une proposition adaptée à votre établissement.</p>
                      <p className="mt-4 text-sm text-violet-100">+237 674 509 721 <span className="mx-2 text-white/40">·</span> contact@naygal.cm</p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <Link href="/contact?subject=formation&message=Demande%20de%20s%C3%A9ance%20d%C3%A9couverte%20gratuite%20NAYGAL%20Academy%20Kids%20(primaire)#contact-form" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#2c2042] transition hover:bg-amber-300">Demander une séance découverte gratuite</Link>
                      <Link href="/contact?subject=partenariat&message=Demande%20de%20devis%20NAYGAL%20Academy%20Kids%20(primaire)#contact-form" className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">Demander un devis</Link>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          )}

          {selected?.id === 'secondaire' && (
            <section ref={programRef} className="mt-10 scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#dce8f2] bg-white shadow-[0_28px_90px_rgba(3,41,101,.12)]" aria-live="polite">
              <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#03183c] via-[#032965] to-[#075073] px-7 py-10 text-white sm:px-10 sm:py-14">
                <div className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-[#52a234]/25 blur-3xl" />
                <div className="absolute inset-0 -z-10 opacity-[.08]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="grid gap-10 lg:grid-cols-[1fr_.62fr] lg:items-center">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-[#a4d78f]/30 bg-[#a4d78f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#c5efa9]">
                      <span className="h-2 w-2 rounded-full bg-[#a4d78f] shadow-[0_0_12px_#a4d78f]" /> Enseignement secondaire · NAYGAL Academy
                    </p>
                    <h3 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Collèges <span className="text-[#a4d78f]">&amp;</span> Lycées</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Transformez votre établissement en un pôle d’excellence numérique structuré, de la 6e à la Terminale.</p>
                  </div>
                  <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl sm:min-h-[350px]">
                    <Image
                      src={encodeURI('/images/academy/dans-votre-ecole/Galerie/Classe locale en pleine activité.jpeg')}
                      alt="Des élèves découvrent les technologies sur ordinateur pendant un atelier encadré"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021638]/90 via-[#021638]/10 to-[#021638]/15" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#03183c]/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[#a4d78f]" /> Apprendre en faisant
                    </div>
                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#03183c]/65 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c5efa9]">Un projet complet</p>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-2xl font-semibold text-white">6e <span className="text-[#a4d78f]">→</span> Terminale</p>
                          <p className="mt-1 text-xs text-blue-100">Des parcours progressifs pour chaque élève</p>
                        </div>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#52a234] text-sm font-bold text-white shadow-lg">04<br />étapes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  {['Diagnostic inclus', 'NAYGAL Technonoly Club (NAYTECH CLUB)', 'IA pédagogique NAYILIE', 'Conforme MINESEC'].map((badge) => (
                    <span key={badge} className="rounded-full border border-white/20 bg-[#061d43]/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur sm:text-sm">{badge}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_42%)] px-6 py-10 sm:px-10 sm:py-14">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Le déroulement du projet</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Un déploiement maîtrisé, étape par étape.</h4>
                    <p className="mt-3 leading-7 text-slate-600">De l’analyse de l’existant au suivi des résultats, chaque étape prépare la suivante.</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce8f2] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#276f91] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#52a234]" /> 01 — 04</span>
                </div>

                <ol className="relative mt-9 grid gap-5 lg:grid-cols-2">
                  <li className="group relative overflow-hidden rounded-3xl border border-[#dbe7f1] border-t-4 border-t-[#3b82b8] bg-white p-6 shadow-[0_10px_35px_rgba(3,41,101,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(3,41,101,.12)] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-2xl shadow-inner" aria-hidden="true">⌕</span>
                      <span className="text-5xl font-black leading-none tracking-[-.08em] text-[#eaf1f8] transition group-hover:text-[#d9e9f5]">01</span>
                    </div>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[.17em] text-[#276f91]">Comprendre avant d’équiper</p>
                    <h5 className="mt-2 text-xl font-semibold leading-snug text-[#032965]">Diagnostic &amp; audit de maturité numérique</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Avant toute installation, nous analysons votre existant pour bâtir une stratégie adaptée à votre réalité.</p>
                    <div className="mt-6 rounded-2xl bg-[#f4f8fc] p-5">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-[#276f91]">Ce que vous recevez</p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Audit des équipements, de la connectivité et de la stabilité électrique.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Cartographie des compétences numériques du corps professoral.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Rapport de Maturité Numérique et feuille de route sur mesure.</span></li>
                      </ul>
                    </div>
                  </li>

                  <li className="group relative overflow-hidden rounded-3xl border border-[#dbe7f1] border-t-4 border-t-[#276f91] bg-white p-6 shadow-[0_10px_35px_rgba(3,41,101,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(3,41,101,.12)] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-sky-100 text-2xl shadow-inner" aria-hidden="true">⌘</span>
                      <span className="text-5xl font-black leading-none tracking-[-.08em] text-[#eaf1f8] transition group-hover:text-[#d9e9f5]">02</span>
                    </div>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[.17em] text-[#276f91]">Créer un environnement opérationnel</p>
                    <h5 className="mt-2 text-xl font-semibold leading-snug text-[#032965]">Déploiement du NAYGAL Technonoly Club (NAYTECH CLUB)</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Un espace d’apprentissage moderne, sécurisé et opérationnel même sans connexion Internet.</p>
                    <div className="mt-6 rounded-2xl bg-[#f4f8fc] p-5">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-[#276f91]">Ce que nous mettons en place</p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Optimisation de l’espace informatique ou aménagement du club.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Serveur local « Offline-First » pour un accès garanti en tout temps.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Configuration de la plateforme NAYGAL Online.</span></li>
                      </ul>
                    </div>
                  </li>

                  <li className="group relative overflow-hidden rounded-3xl border border-[#dbe7f1] border-t-4 border-t-[#52a234] bg-white p-6 shadow-[0_10px_35px_rgba(3,41,101,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(3,41,101,.12)] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-100 to-green-100 text-2xl shadow-inner" aria-hidden="true">✳</span>
                      <span className="text-5xl font-black leading-none tracking-[-.08em] text-[#eaf1f8] transition group-hover:text-[#d9e9f5]">03</span>
                    </div>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[.17em] text-[#438a2c]">Donner les moyens aux équipes</p>
                    <h5 className="mt-2 text-xl font-semibold leading-snug text-[#032965]">Formation des enseignants &amp; lancement des élèves</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Un accompagnement du changement humain pour favoriser l’adoption par toute la communauté éducative.</p>
                    <div className="mt-6 rounded-2xl bg-[#f5f9f2] p-5">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">Ce qui prend vie</p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Formation continue des enseignants aux TICE et à l’IA.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Coaching de 2 à 3 « Champions Numériques » référents.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Parcours progressifs pour les élèves, de la 6e à la Terminale.</span></li>
                      </ul>
                    </div>
                  </li>

                  <li className="group relative overflow-hidden rounded-3xl border border-[#dbe7f1] border-t-4 border-t-[#df8b18] bg-white p-6 shadow-[0_10px_35px_rgba(3,41,101,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(3,41,101,.12)] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-2xl shadow-inner" aria-hidden="true">✦</span>
                      <span className="text-5xl font-black leading-none tracking-[-.08em] text-[#eaf1f8] transition group-hover:text-[#d9e9f5]">04</span>
                    </div>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[.17em] text-[#bd7410]">Mesurer et faire progresser</p>
                    <h5 className="mt-2 text-xl font-semibold leading-snug text-[#032965]">Suivi continu &amp; IA NAYILIE</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Un pilotage dans la durée pour mesurer l’impact du programme et soutenir la réussite scolaire.</p>
                    <div className="mt-6 rounded-2xl bg-[#fff9ef] p-5">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-[#bd7410]">Un suivi dans la durée</p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>NAYILIE aide les enseignants à préparer leurs cours.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Tableau de bord trimestriel à la Direction : usages et progression.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-[#52a234]">✓</span><span>Certification Digital Knowledge (DK) en fin de cycle.</span></li>
                      </ul>
                    </div>
                  </li>
                </ol>

                <div className="mt-14 border-t border-[#e7edf4] pt-11">
                  <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Un impact à chaque niveau</p>
                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">La technologie au service de toute la communauté éducative.</h4>
                  </div>
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    <article className="group rounded-3xl border border-[#dce8f2] bg-gradient-to-br from-[#f3f8ff] to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4efff] text-xl" aria-hidden="true">✦</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-[#276f91]">Vision & confiance</p>
                      <h5 className="mt-2 text-lg font-semibold text-[#032965]">Pour le Proviseur / Directeur</h5>
                      <p className="mt-3 text-sm leading-7 text-slate-600">Un projet clé en main qui valorise la notoriété de l’école et rassure les parents d’élèves.</p>
                    </article>
                    <article className="group rounded-3xl border border-[#dce8f2] bg-gradient-to-br from-[#f3f9ef] to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5df] text-xl" aria-hidden="true">✎</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-[#438a2c]">Des pratiques enrichies</p>
                      <h5 className="mt-2 text-lg font-semibold text-[#032965]">Pour les enseignants</h5>
                      <p className="mt-3 text-sm leading-7 text-slate-600">Des outils modernes pour alléger la préparation des cours et rendre l’enseignement interactif.</p>
                    </article>
                    <article className="group rounded-3xl border border-[#dce8f2] bg-gradient-to-br from-[#fff8eb] to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0d2] text-xl" aria-hidden="true">↗</span>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-[#bd7410]">Compétences & avenir</p>
                      <h5 className="mt-2 text-lg font-semibold text-[#032965]">Pour les élèves</h5>
                      <p className="mt-3 text-sm leading-7 text-slate-600">Des compétences numériques concrètes pour réussir les examens et préparer le Post-Bac.</p>
                    </article>
                  </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#03183c] via-[#032965] to-[#075073] p-7 text-white shadow-[0_20px_55px_rgba(3,41,101,.2)] sm:p-10">
                  <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-[#52a234]/25 blur-3xl" />
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">Prochaine étape</p>
                      <h4 className="mt-3 text-2xl font-semibold sm:text-3xl">Prêt à faire le point sur votre établissement ?</h4>
                      <p className="mt-3 text-sm leading-7 text-blue-100">Planifiez un diagnostic et recevez la plaquette dédiée à l’enseignement secondaire.</p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link href="/contact?subject=partenariat&message=Demande%20de%20diagnostic%20pour%20Coll%C3%A8ge%2FLyc%C3%A9e#contact-form" className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#438a2c]">
                      Planifier le diagnostic de mon établissement
                    </Link>
                    <a href="/documents/ressources/NAYGAL_Academy_Brochure_Premium-1-1.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-[#c5efa9] transition hover:border-white/50 hover:bg-white/10 hover:text-white">
                      Télécharger la plaquette Secondaire (PDF) <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {!selected && (
            <p className="mt-8 text-center text-sm text-slate-500">Vous pourrez ensuite échanger avec notre équipe pour adapter le parcours à votre établissement.</p>
          )}
          </div>

          <section className="mt-16 overflow-hidden rounded-[2rem] border border-[#dce8f2] bg-white px-5 py-9 shadow-[0_18px_55px_rgba(3,41,101,.06)] sm:px-8 sm:py-12" aria-labelledby="academy-network-title">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">Un écosystème pour chaque parcours</p>
              <h3 id="academy-network-title" className="mt-3 text-2xl font-semibold tracking-tight text-[#032965] sm:text-3xl">Partenaires et ressources qui enrichissent NAYGAL Academy.</h3>
              <p className="mt-3 leading-7 text-slate-600">Quel que soit le type d’établissement, nos apprenants bénéficient de passerelles académiques et professionnelles ainsi que de ressources numériques complémentaires.</p>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h4 className="text-sm font-semibold text-[#032965]">Partenaires académiques &amp; professionnels</h4>
                <span className="hidden text-xs text-slate-400 sm:block">Survolez pour mettre en pause</span>
              </div>
              <div className="partner-marquee-shell group rounded-2xl border border-slate-100" aria-label="Défilement des partenaires académiques et professionnels">
                <div className="animate-partner-marquee flex w-max items-center gap-5 px-1 group-hover:[animation-play-state:paused]">
                  {[...academicPartners, ...academicPartners].map((partner, index) => (
                    <div key={`${partner.name}-${index}`} aria-hidden={index >= academicPartners.length} className="partner-logo-card flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white px-7 shadow-sm">
                      {partner.logo ? (
                        <Image src={partner.logo} alt={`Logo ${partner.name}`} width={160} height={80} className="h-14 w-36 object-contain" />
                      ) : (
                        <span className="text-center text-base font-bold tracking-wide text-[#276f91]">{partner.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold text-[#032965]">Plateformes et ressources internationales</h4>
              <div className="partner-marquee-shell group rounded-2xl border border-slate-100" aria-label="Défilement des plateformes de formation internationales">
                <div className="animate-partner-marquee animate-partner-marquee-slower flex w-max items-center gap-5 px-1 group-hover:[animation-play-state:paused]">
                  {[...learningPlatforms, ...learningPlatforms].map((platform, index) => (
                    <div key={`${platform.name}-${index}`} aria-hidden={index >= learningPlatforms.length} className="partner-logo-card flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white px-7 shadow-sm">
                      <Image src={platform.logo} alt={`Logo ${platform.name}`} width={180} height={80} className="h-14 w-40 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-500">Les plateformes complètent les ateliers et accompagnements locaux par des contenus, parcours et ressources complémentaires.</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
