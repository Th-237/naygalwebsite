"use client"

import Link from "next/link"
import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"

const OFFRES = {
  acces: {
    montant: 5000,
    titre: "Faciliter l'accès",
    description:
      "Votre contribution peut participer à l'accès à des ressources pédagogiques, supports d'apprentissage ou consommables nécessaires à une activité.",
  },

  ressources: {
    montant: 10000,
    titre: "Préparer les ressources",
    description:
      "Votre soutien peut contribuer à la préparation de supports de formation, de ressources numériques ou de matériel pédagogique.",
  },

  atelier: {
    montant: 25000,
    titre: "Faire fonctionner un atelier",
    description:
      "Une contribution qui peut participer à l'acquisition de consommables et de petits équipements nécessaires à une session pratique.",
  },

  equipement: {
    montant: 50000,
    titre: "Équiper pour apprendre",
    description:
      "Votre contribution peut participer à l'acquisition, la remise en état ou la mise à disposition d'un équipement informatique destiné à l'apprentissage.",
  },

  education: {
    montant: 100000,
    titre: "Déployer une activité éducative",
    description:
      "Votre soutien peut contribuer à la mise en place d'un atelier, d'une session de sensibilisation ou d'une activité éducative auprès de bénéficiaires.",
  },

  initiative: {
    montant: 250000,
    titre: "Faire grandir une initiative",
    description:
      "Une contribution à plus grande échelle pouvant participer au déploiement d'une initiative auprès d'un établissement, d'une communauté ou d'un groupe de bénéficiaires.",
  },
} as const

type OffreId = keyof typeof OFFRES

type PaymentMethod = "mtn" | "orange" | "card" | "bank"

const PAYMENT_METHODS = [
  {
    id: "mtn" as PaymentMethod,
    name: "MTN Mobile Money",
    description:
      "Paiement depuis votre compte MTN Mobile Money.",
    icon: "M",
    color: "bg-[#ffcc00]",
    textColor: "text-black",
  },
  {
    id: "orange" as PaymentMethod,
    name: "Orange Money",
    description:
      "Effectuez votre contribution avec Orange Money.",
    icon: "O",
    color: "bg-[#ff7900]",
    textColor: "text-white",
  },
  {
    id: "card" as PaymentMethod,
    name: "Carte bancaire",
    description:
      "Visa, Mastercard et autres cartes compatibles.",
    icon: "◆",
    color: "bg-[#032965]",
    textColor: "text-white",
  },
  {
    id: "bank" as PaymentMethod,
    name: "Virement bancaire",
    description:
      "Recevez nos coordonnées bancaires pour effectuer votre contribution.",
    icon: "₿",
    color: "bg-[#edf7e7]",
    textColor: "text-[#032965]",
  },
]

function ContributionContent() {
  const searchParams = useSearchParams()

  const offreParam = searchParams.get("offre") as OffreId | null

  const offre =
    offreParam && OFFRES[offreParam]
      ? OFFRES[offreParam]
      : null

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("mtn")

  const [anonymous, setAnonymous] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  /*
   * Aucune offre sélectionnée
   */

  if (!offre) {
    return (
      <main className="min-h-screen bg-[#f6f9fc]">

        <header className="border-b border-slate-200 bg-white">

          <div className="container-custom flex h-20 items-center justify-between">

            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center bg-[#032965] text-sm font-bold text-white">
                N
              </div>

              <div>
                <p className="text-lg font-bold text-[#032965]">
                  NAYGAL
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#52a234]">
                  Le Mouvement
                </p>
              </div>

            </Link>

            <Link
              href="/mouvement/soutenir"
              className="text-sm font-semibold text-slate-600 transition hover:text-[#032965]"
            >
              ← Retour
            </Link>

          </div>

        </header>


        <div className="container-custom flex min-h-[calc(100vh-80px)] items-center justify-center py-16">

          <div className="w-full max-w-lg bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-500">
              !
            </div>

            <h1 className="mt-6 text-2xl font-bold text-[#032965]">
              Aucune contribution sélectionnée
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Veuillez sélectionner une initiative de soutien avant
              d'accéder à la page de contribution.
            </p>

            <Link
              href="/mouvement/soutenir"
              className="mt-8 inline-flex bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Voir les initiatives
            </Link>

          </div>

        </div>

      </main>
    )
  }

  const montantFormate =
    offre.montant.toLocaleString("fr-FR")

  const selectedPayment =
    PAYMENT_METHODS.find(
      (method) => method.id === paymentMethod
    )

  /*
   * Démonstration du bouton de paiement.
   *
   * Plus tard, cette fonction appellera notre backend
   * / API de paiement.
   */

  function handlePayment() {
    setSubmitted(true)
  }

  /*
   * Confirmation visuelle temporaire
   */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f6f9fc]">

        <header className="border-b border-slate-200 bg-white">

          <div className="container-custom flex h-20 items-center">

            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center bg-[#032965] text-sm font-bold text-white">
                N
              </div>

              <div>
                <p className="text-lg font-bold text-[#032965]">
                  NAYGAL
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#52a234]">
                  Le Mouvement
                </p>
              </div>

            </Link>

          </div>

        </header>


        <section className="container-custom flex min-h-[calc(100vh-80px)] items-center justify-center py-16">

          <div className="w-full max-w-xl bg-white p-10 text-center shadow-sm sm:p-14">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#edf7e7] text-3xl text-[#52a234]">
              ✓
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Contribution préparée
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#032965]">
              Votre contribution est prête
            </h1>

            <p className="mt-5 leading-7 text-slate-600">
              Vous avez sélectionné une contribution de{" "}
              <strong className="text-[#032965]">
                {montantFormate} FCFA
              </strong>{" "}
              pour soutenir l'initiative :
            </p>

            <div className="mt-6 border border-[#d9e8d2] bg-[#f5faf2] p-5">

              <p className="font-bold text-[#032965]">
                {offre.titre}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Moyen de paiement :{" "}
                <strong>
                  {selectedPayment?.name}
                </strong>
              </p>

            </div>

            <div className="mt-8 bg-[#fff8e8] p-4 text-left text-sm leading-6 text-slate-600">
              <strong className="text-[#032965]">
                Prochaine étape :
              </strong>{" "}
              le système de paiement sécurisé sera connecté à cette
              interface afin de permettre la finalisation réelle de
              votre contribution.
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/mouvement/soutenir"
                className="flex-1 border border-[#032965] px-6 py-4 font-semibold text-[#032965] transition hover:bg-[#032965] hover:text-white"
              >
                Retour aux initiatives
              </Link>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="flex-1 bg-[#52a234] px-6 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
              >
                Modifier
              </button>

            </div>

          </div>

        </section>

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f6f9fc]">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="border-b border-slate-200 bg-white">

        <div className="container-custom flex h-20 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center bg-[#032965] text-sm font-bold text-white">
              N
            </div>

            <div>

              <p className="text-lg font-bold text-[#032965]">
                NAYGAL
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#52a234]">
                Le Mouvement
              </p>

            </div>

          </Link>

          <Link
            href="/mouvement/soutenir"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#032965]"
          >
            ← Retour
          </Link>

        </div>

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-white py-12 sm:py-16">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#438a2c]">
              Contribution NAYGAL
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#032965] sm:text-5xl">
              Confirmez votre contribution
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Vous avez choisi de soutenir une initiative précise.
              Vérifiez les informations ci-dessous avant de continuer.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTENU PRINCIPAL
      ========================================================= */}

      <section className="pb-16 sm:pb-24">

        <div className="container-custom">

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_.7fr]">


            {/* =====================================================
                COLONNE PRINCIPALE
            ===================================================== */}

            <div className="bg-white p-6 shadow-sm sm:p-9">


              {/* =================================================
                  OFFRE SÉLECTIONNÉE
              ================================================= */}

              <div className="border border-[#52a234] bg-[#f5faf2] p-6">

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#438a2c]">
                      Offre sélectionnée
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#032965]">
                      {offre.titre}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {offre.description}
                    </p>

                  </div>


                  <div className="shrink-0 sm:text-right">

                    <p className="text-3xl font-bold text-[#032965]">
                      {montantFormate}
                    </p>

                    <p className="text-xs font-semibold text-slate-500">
                      FCFA
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  MONTANT VERROUILLÉ
              ================================================= */}

              <div className="mt-7">

                <label className="mb-2 block text-sm font-semibold text-[#032965]">
                  Montant de votre contribution
                </label>

                <div className="flex flex-col gap-4 border border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-2xl font-bold text-[#032965]">
                      {montantFormate} FCFA
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Montant associé à l'offre sélectionnée
                    </p>

                  </div>


                  <div className="flex items-center gap-2 text-xs font-semibold text-[#438a2c]">

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf7e7]">
                      🔒
                    </span>

                    Montant verrouillé

                  </div>

                </div>

              </div>


              <div className="my-9 border-t border-slate-100" />


              {/* =================================================
                  ÉTAPE 1 — PAIEMENT
              ================================================= */}

              <div>

                <div className="flex items-start gap-4">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#032965] text-sm font-bold text-white">
                    1
                  </span>

                  <div>

                    <h2 className="text-xl font-bold text-[#032965]">
                      Moyen de paiement
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Choisissez comment vous souhaitez effectuer votre contribution.
                    </p>

                  </div>

                </div>


                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {PAYMENT_METHODS.map((method) => {

                    const isSelected =
                      paymentMethod === method.id

                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() =>
                          setPaymentMethod(method.id)
                        }
                        className={`relative flex items-start gap-4 border p-5 text-left transition ${
                          isSelected
                            ? "border-[#52a234] bg-[#f7fbf5] ring-1 ring-[#52a234]"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                        }`}
                      >

                        {isSelected && (
                          <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#52a234] text-xs font-bold text-white">
                            ✓
                          </span>
                        )}

                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${method.color} ${method.textColor} font-bold`}
                        >
                          {method.icon}
                        </span>

                        <span className="pr-5">

                          <span className="block font-bold text-[#032965]">
                            {method.name}
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-slate-500">
                            {method.description}
                          </span>

                        </span>

                      </button>
                    )
                  })}

                </div>

              </div>


              <div className="my-9 border-t border-slate-100" />


              {/* =================================================
                  ÉTAPE 2 — INFORMATIONS
              ================================================= */}

              <div>

                <div className="flex items-start gap-4">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#032965] text-sm font-bold text-white">
                    2
                  </span>

                  <div>

                    <h2 className="text-xl font-bold text-[#032965]">
                      Vos informations
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Ces informations permettent d'assurer le suivi de votre contribution.
                    </p>

                  </div>

                </div>


                <div className="mt-6 grid gap-5 sm:grid-cols-2">


                  {/* NOM */}

                  <div>

                    <label
                      htmlFor="nom"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Nom complet
                    </label>

                    <input
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#52a234] focus:ring-1 focus:ring-[#52a234]"
                    />

                  </div>


                  {/* TÉLÉPHONE */}

                  <div>

                    <label
                      htmlFor="telephone"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Téléphone
                    </label>

                    <input
                      id="telephone"
                      type="tel"
                      placeholder="+237 6XX XXX XXX"
                      className="w-full border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#52a234] focus:ring-1 focus:ring-[#52a234]"
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#032965]"
                    >
                      Adresse e-mail

                      <span className="ml-2 font-normal text-slate-400">
                        facultatif
                      </span>

                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="vous@exemple.com"
                      className="w-full border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#52a234] focus:ring-1 focus:ring-[#52a234]"
                    />

                  </div>

                </div>


                {/* ANONYME */}

                <label className="mt-6 flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={(event) =>
                      setAnonymous(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#52a234]"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    Je souhaite que ma contribution soit enregistrée{" "}
                    <strong className="text-[#032965]">
                      anonymement
                    </strong>
                    .
                  </span>

                </label>

              </div>


              <div className="my-9 border-t border-slate-100" />


              {/* =================================================
                  RÉSUMÉ AVANT PAIEMENT
              ================================================= */}

              <div>

                <div className="flex items-start gap-4">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#032965] text-sm font-bold text-white">
                    3
                  </span>

                  <div>

                    <h2 className="text-xl font-bold text-[#032965]">
                      Vérification
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Vérifiez les éléments de votre contribution avant de continuer.
                    </p>

                  </div>

                </div>


                <div className="mt-6 border border-slate-200">

                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                    <span className="text-sm text-slate-500">
                      Initiative
                    </span>

                    <span className="text-right text-sm font-semibold text-[#032965]">
                      {offre.titre}
                    </span>

                  </div>


                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                    <span className="text-sm text-slate-500">
                      Moyen de paiement
                    </span>

                    <span className="text-right text-sm font-semibold text-[#032965]">
                      {selectedPayment?.name}
                    </span>

                  </div>


                  <div className="flex items-center justify-between bg-[#f7fbf5] px-5 py-5">

                    <span className="font-semibold text-[#032965]">
                      Total
                    </span>

                    <span className="text-xl font-bold text-[#032965]">
                      {montantFormate} FCFA
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BOUTON
              ================================================= */}

              <button
                type="button"
                onClick={handlePayment}
                className="mt-9 flex w-full items-center justify-center gap-3 bg-[#52a234] px-6 py-4 font-bold text-white transition hover:bg-[#438a2c] hover:shadow-lg"
              >

                Continuer vers le paiement

                <span className="text-lg">
                  →
                </span>

              </button>


              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Vous serez redirigé vers un environnement sécurisé
                pour finaliser votre contribution.
              </p>


              {/* SÉCURITÉ */}

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">

                <span>
                  🔒
                </span>

                <span>
                  Vos informations sont traitées de manière sécurisée.
                </span>

              </div>

            </div>


            {/* =====================================================
                COLONNE DROITE — RÉCAPITULATIF
            ===================================================== */}

            <aside className="h-fit lg:sticky lg:top-6">


              {/* RÉCAP */}

              <div className="bg-[#032965] p-7 text-white sm:p-8">

                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a4d78f]">
                  Récapitulatif
                </p>


                <div className="mt-6">

                  <p className="text-4xl font-bold tracking-tight">

                    {montantFormate}

                    <span className="ml-2 text-lg font-medium text-blue-200">
                      FCFA
                    </span>

                  </p>

                  <p className="mt-2 text-sm text-blue-100">
                    Contribution NAYGAL
                  </p>

                </div>


                <div className="my-7 border-t border-white/15" />


                <div>

                  <p className="text-xs uppercase tracking-wider text-blue-200">
                    Initiative
                  </p>

                  <p className="mt-1 font-semibold">
                    {offre.titre}
                  </p>

                </div>


                <div className="mt-5">

                  <p className="text-xs uppercase tracking-wider text-blue-200">
                    Paiement
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedPayment?.name}
                  </p>

                </div>


                <div className="mt-7 bg-white/10 p-5">

                  <div className="flex gap-3">

                    <span className="text-lg">
                      🔒
                    </span>

                    <p className="text-sm leading-6 text-blue-100">
                      Votre transaction sera traitée dans un
                      environnement sécurisé lors de l'activation
                      du système de paiement.
                    </p>

                  </div>

                </div>

              </div>


              {/* IMPACT */}

              <div className="mt-4 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf7e7]">
                    🌱
                  </div>

                  <div>

                    <p className="font-bold text-[#032965]">
                      Une contribution concrète
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Votre soutien est associé à une initiative
                      précise afin de donner davantage de visibilité
                      à l'impact recherché.
                    </p>

                  </div>

                </div>


                <Link
                  href="/mouvement/soutenir"
                  className="mt-5 inline-block text-sm font-bold text-[#438a2c] transition hover:underline"
                >
                  Voir les autres possibilités →
                </Link>

              </div>


              {/* BESOIN D'AIDE */}

              <div className="mt-4 border border-slate-200 bg-white p-6">

                <p className="text-sm font-bold uppercase tracking-wider text-[#438a2c]">
                  Besoin d'aide ?
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#032965]">
                  Une question avant de contribuer ?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Notre équipe peut vous accompagner dans le choix
                  d'une initiative ou d'un mode de contribution.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-block text-sm font-bold text-[#032965] hover:text-[#438a2c]"
                >
                  Nous contacter →
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER SIMPLE
      ========================================================= */}

      <footer className="border-t border-slate-200 bg-white py-8">

        <div className="container-custom">

          <div className="flex flex-col gap-3 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p>
              © {new Date().getFullYear()} NAYGAL. Tous droits réservés.
            </p>

            <div className="flex justify-center gap-5 sm:justify-end">

              <Link
                href="/"
                className="hover:text-[#032965]"
              >
                Accueil
              </Link>

              <Link
                href="/mouvement"
                className="hover:text-[#032965]"
              >
                Le Mouvement
              </Link>

              <Link
                href="/contact"
                className="hover:text-[#032965]"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}


/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
|
| Suspense est utilisé autour de useSearchParams()
| pour être compatible avec le rendu Next.js.
|
*/

export default function ContributionPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f6f9fc]">

          <div className="text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#52a234]" />

            <p className="mt-4 text-sm text-slate-500">
              Chargement de votre contribution...
            </p>

          </div>

        </main>
      }
    >
      <ContributionContent />
    </Suspense>
  )
}