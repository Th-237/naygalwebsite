"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const criteria = [
  {
    number: "01",
    title: "Utilité",
    description:
      "Le projet répond à un besoin réel et identifiable dans une communauté, une organisation, un établissement ou un secteur.",
  },
  {
    number: "02",
    title: "Faisabilité",
    description:
      "L'idée peut être progressivement transformée en une initiative concrète avec des ressources et des compétences réalistes.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Le projet apporte une approche nouvelle, améliore une solution existante ou utilise intelligemment la technologie.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Le projet possède un potentiel de création de valeur pour des personnes, des organisations ou une communauté.",
  },
]

const projectTypes = [
  "Projet technologique",
  "Projet éducatif",
  "Projet communautaire",
  "Projet environnemental",
  "Projet entrepreneurial",
  "Projet de recherche",
]

const steps = [
  {
    number: "01",
    title: "Vous présentez votre idée",
    description:
      "Décrivez simplement votre projet, le problème auquel il répond et ce que vous souhaitez construire.",
  },
  {
    number: "02",
    title: "Nous étudions la proposition",
    description:
      "Notre équipe analyse le projet, son contexte, sa pertinence et les possibilités de collaboration.",
  },
  {
    number: "03",
    title: "Nous échangeons avec vous",
    description:
      "Si le projet correspond à notre champ d'action, nous organisons un échange pour mieux comprendre votre vision.",
  },
  {
    number: "04",
    title: "Nous construisons la suite",
    description:
      "Selon le projet, nous pouvons envisager un accompagnement, un partenariat, une mise en relation ou une expérimentation.",
  },
]

export default function ProposerProjetPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    title: "",
    problem: "",
    solution: "",
    support: "",
  })
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setStatus("idle")
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const whatsappMessage = [
      "Bonjour NAYGAL, je souhaite présenter un projet.",
      "",
      `Nom complet: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organisation: ${formData.organization || "Non renseignée"}`,
      `Type de projet: ${formData.type}`,
      `Nom du projet: ${formData.title}`,
      "",
      `Problème à résoudre:\n${formData.problem}`,
      "",
      `Idée / solution:\n${formData.solution}`,
      "",
      `Besoin d'accompagnement:\n${formData.support}`,
    ].join("\n")

    const whatsappUrl = `https://wa.me/237655002493?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setStatus("sent")
  }

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#032965]">

        <Image
          src="/images/mouvement/proposer-un-projet/proj2.jpg"
          alt="Équipe africaine travaillant sur une idée de projet"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021d47]/95 via-[#032965]/75 to-[#032965]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#021d47]/80 via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[680px] items-end pb-20 pt-32">

          <div className="max-w-5xl">

            <span className="inline-flex items-center border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              LE MOUVEMENT NAYGAL
            </span>

            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Vous avez une idée ?
              <span className="block text-[#77bb43]">
                Construisons-la.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl">
              Vous avez un projet technologique, éducatif, entrepreneurial ou
              communautaire ? Présentez-nous votre idée. Elle n'a pas besoin
              d'être parfaite pour commencer la conversation.
            </p>

            <a
              href="#proposer"
              className="mt-9 inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Présenter mon projet
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Une idée peut être le début
              </p>

              <h2 className="mt-3 text-[#032965]">
                Toutes les bonnes idées ne commencent pas avec un business plan.
              </h2>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">

              <p>
                Certaines commencent par un problème observé dans une école.
                D'autres naissent d'une difficulté rencontrée dans une
                entreprise, d'une idée développée par un étudiant ou d'une
                technologie qui pourrait résoudre un besoin local.
              </p>

              <p>
                Nous voulons créer un espace où ces idées peuvent être
                exprimées, discutées et, lorsque les conditions sont réunies,
                transformées en projets concrets.
              </p>

              <p className="font-semibold text-[#032965]">
                Vous n'avez pas besoin d'avoir toutes les réponses. Commencez
                simplement par nous expliquer ce que vous voulez changer.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TYPES DE PROJETS
      ===================================================== */}
      <section className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Quel type de projet ?
            </p>

            <h2 className="mt-3 text-[#032965]">
              Nous sommes ouverts aux idées qui utilisent la technologie
              comme levier.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Votre projet peut appartenir à plusieurs domaines. L'essentiel
              est qu'il réponde à un besoin réel et possède une logique
              d'impact.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {projectTypes.map((type, index) => (

              <div
                key={type}
                className="group bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <span className="text-sm font-bold text-[#52a234]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-xl text-[#032965]">
                  {type}
                </h3>

                <div className="mt-6 h-1 w-8 bg-[#52a234] transition-all group-hover:w-16" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CRITERES
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="eyebrow text-[#438a2c]">
                Ce que nous recherchons
              </p>

              <h2 className="mt-3 text-[#032965]">
                Une bonne idée commence par un problème réel.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nous ne cherchons pas uniquement des projets technologiquement
                impressionnants. Nous cherchons surtout des projets utiles,
                compréhensibles et capables de produire une valeur concrète.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {criteria.map((criterion) => (

                <div
                  key={criterion.number}
                  className="border border-slate-200 p-7 transition hover:border-[#52a234]"
                >

                  <span className="text-sm font-bold text-[#52a234]">
                    {criterion.number}
                  </span>

                  <h3 className="mt-8 text-xl text-[#032965]">
                    {criterion.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {criterion.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE / MANIFESTE
      ===================================================== */}
      <section className="relative min-h-[560px] overflow-hidden">

        <Image
          src="/images/mouvement/proposer-un-projet/idee.jpg"
          alt="Équipe collaborant sur une idée"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#032965]/80" />

        <div className="container-custom relative z-10 flex min-h-[560px] items-center">

          <div className="max-w-4xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
              Notre philosophie
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nous ne voulons pas seulement financer des idées.
              <span className="block text-[#77bb43]">
                Nous voulons les aider à grandir.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
              Selon la nature du projet, NAYGAL peut contribuer par son
              expertise technique, son réseau, ses compétences, ses
              infrastructures, ses programmes de formation ou la mise en
              relation avec d'autres acteurs.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESSUS
      ===================================================== */}
      <section className="border-y border-slate-200 bg-[#f4f8fd] py-20 sm:py-24">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="eyebrow text-[#438a2c]">
              Le processus
            </p>

            <h2 className="mt-3 text-[#032965]">
              De votre idée à la première conversation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nous avons volontairement conçu un processus simple. Le premier
              objectif n'est pas de sélectionner un gagnant, mais de comprendre
              votre projet.
            </p>

          </div>


          <div className="mt-14 grid gap-0 md:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.number}
                className="border-b border-slate-200 bg-white p-7 md:border-b-0 md:border-r last:md:border-r-0"
              >

                <span className="text-sm font-bold text-[#52a234]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl text-[#032965]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FORMULAIRE
      ===================================================== */}
      <section
        id="proposer"
        className="section-padding"
      >

        <div className="container-custom">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            {/* INTRO FORM */}

            <div>

              <p className="eyebrow text-[#438a2c]">
                Présenter un projet
              </p>

              <h2 className="mt-3 text-[#032965]">
                Parlez-nous de votre idée.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Prenez quelques minutes pour nous présenter votre projet.
                Soyez simple et précis. Vous pourrez toujours approfondir
                votre proposition lors d'un échange avec notre équipe.
              </p>


              <div className="mt-10 space-y-5">

                <div className="border-l-2 border-[#52a234] pl-5">
                  <p className="font-semibold text-[#032965]">
                    Pas besoin d'un projet parfait.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Une idée claire et un problème bien identifié constituent
                    déjà un excellent point de départ.
                  </p>
                </div>


                <div className="border-l-2 border-[#52a234] pl-5">
                  <p className="font-semibold text-[#032965]">
                    Nous étudions chaque proposition.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Toutes les propositions ne pourront pas être accompagnées,
                    mais chacune mérite d'être comprise.
                  </p>
                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

              <form className="space-y-7" onSubmit={handleSubmit}>

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Nom complet
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      required
                      placeholder="Votre nom"
                      className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Adresse email
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      required
                      placeholder="vous@example.com"
                      className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                    />

                  </div>

                </div>


                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="organization"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Organisation
                    </label>

                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(event) => updateField("organization", event.target.value)}
                      placeholder="Entreprise, école, association..."
                      className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="type"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Type de projet
                    </label>

                    <select
                      id="type"
                      value={formData.type}
                      onChange={(event) => updateField("type", event.target.value)}
                      required
                      className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                    >

                      <option value="" disabled>
                        Sélectionner
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>


                <div>

                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-semibold text-[#032965]"
                  >
                    Nom du projet
                  </label>

                  <input
                    id="title"
                    type="text"
                      value={formData.title}
                      onChange={(event) => updateField("title", event.target.value)}
                      required
                    placeholder="Comment s'appelle votre projet ?"
                    className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                  />

                </div>


                <div>

                  <label
                    htmlFor="problem"
                    className="mb-2 block text-sm font-semibold text-[#032965]"
                  >
                    Quel problème souhaitez-vous résoudre ?
                  </label>

                  <textarea
                    id="problem"
                    rows={5}
                    value={formData.problem}
                    onChange={(event) => updateField("problem", event.target.value)}
                    required
                    placeholder="Expliquez le problème ou le besoin auquel votre projet répond..."
                    className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                  />

                </div>


                <div>

                  <label
                    htmlFor="solution"
                    className="mb-2 block text-sm font-semibold text-[#032965]"
                  >
                    Quelle est votre idée ?
                  </label>

                  <textarea
                    id="solution"
                    rows={5}
                    value={formData.solution}
                    onChange={(event) => updateField("solution", event.target.value)}
                    required
                    placeholder="Décrivez votre solution, votre approche ou votre vision..."
                    className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                  />

                </div>


                <div>

                  <label
                    htmlFor="support"
                    className="mb-2 block text-sm font-semibold text-[#032965]"
                  >
                    De quoi avez-vous besoin ?
                  </label>

                  <textarea
                    id="support"
                    rows={4}
                    value={formData.support}
                    onChange={(event) => updateField("support", event.target.value)}
                    required
                    placeholder="Expertise, technologie, accompagnement, financement, réseau..."
                    className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#52a234] focus:ring-2 focus:ring-[#52a234]/10"
                  />

                </div>


                <div className="border-t border-slate-200 pt-6">

                  <button
                    type="submit"
                    className="w-full bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
                  >
                    Envoyer ma proposition →
                  </button>

                  {status === "sent" && (
                    <p className="mt-4 text-center text-sm font-semibold text-[#438a2c]" role="status">
                      Votre proposition a été préparée dans WhatsApp.
                    </p>
                  )}

                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    En envoyant cette proposition, vous acceptez que NAYGAL
                    utilise les informations transmises uniquement dans le
                    cadre de l'étude de votre projet et d'un éventuel échange
                    avec vous.
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#032965] py-20 text-white sm:py-24">

        <div className="container-custom text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a4d78f]">
            Une autre façon de participer
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-white">
            Vous n'avez pas encore de projet ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Vous pouvez aussi rejoindre le Mouvement comme partenaire,
            partager votre expertise ou soutenir une initiative existante.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/mouvement/partenaire"
              className="inline-flex items-center justify-center bg-[#52a234] px-8 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Devenir partenaire
            </Link>

            <Link
              href="/mouvement"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Retour au Mouvement
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
