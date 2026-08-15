"use client"

import { useEffect, useState } from "react"

type PaymentSummaryProps = {
  initialAmount?: string
}

export default function PaymentSummary({ initialAmount }: PaymentSummaryProps) {
  const [amount, setAmount] = useState<string>(initialAmount || "")

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const q = params.get("amount")
      if (q) setAmount(q)
    } catch (e) {
      // ignore
    }
  }, [])

  return (
    <div className="mt-8 rounded-2xl border border-[#dce8f3] bg-[#f4f8fd] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#438a2c]">
        Montant sélectionné
      </p>
      <p className="mt-3 text-3xl font-bold text-[#032965]">
        {amount ? `${Number(amount).toLocaleString("fr-FR")} FCFA` : "Montant libre"}
      </p>
    </div>
  )
}
