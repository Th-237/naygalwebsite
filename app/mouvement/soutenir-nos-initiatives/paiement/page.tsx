"use client"

import Link from "next/link"
import PaymentSummary from "./PaymentSummary"

export default function PaiementPage() {
  return (
    <main className="bg-[#f8fbff] min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        <Link
          href="/mouvement/soutenir-nos-initiatives"
          className="inline-flex items-center text-[#032965] font-semibold hover:text-[#438a2c]"
        >
          ← Retour
        </Link>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#438a2c]">
            Paiement de contribution
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-[#032965] sm:text-4xl">
            Finaliser votre soutien
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Cette étape prépare la collecte de votre contribution. Le paiement sera bientôt intégré à cette page.
          </p>

          <PaymentSummary />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@naygal.cm"
              className="inline-flex items-center justify-center bg-[#52a234] px-7 py-4 font-semibold text-white transition hover:bg-[#438a2c]"
            >
              Contacter l’équipe
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#032965] px-7 py-4 font-semibold text-[#032965] transition hover:bg-[#032965] hover:text-white"
            >
              Demander un accompagnement
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
