"use client"

import { useEffect, useRef, useState } from "react"

type Country = {
  code: string
  name: string
  dial: string
  flag: string
}

const COUNTRIES: Country[] = [
  { code: "CM", name: "Cameroon", dial: "+237", flag: "🇨🇲" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
]

type Props = {
  value?: string
  onChange?: (full: string) => void
}

export default function PhoneSelect({ value = "", onChange }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Country>(COUNTRIES[0])
  const [localNumber, setLocalNumber] = useState("")
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("click", handle)
    return () => window.removeEventListener("click", handle)
  }, [])

  useEffect(() => {
    if (!value) return
    // If value starts with +, try to parse dial code
    const m = value.match(/^(\+\d{1,3})\s*(.*)$/)
    if (m) {
      const dial = m[1]
      const rest = m[2]
      const found = COUNTRIES.find((c) => c.dial === dial)
      if (found) setSelected(found)
      setLocalNumber(rest)
    } else {
      setLocalNumber(value)
    }
  }, [value])

  const onChangeRef = useRef(onChange)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    const full = localNumber ? `${selected.dial} ${localNumber}` : ""
    onChangeRef.current?.(full)
  }, [selected, localNumber])

  const filtered = COUNTRIES.filter((c) => {
    if (!query) return true
    const q = query.toLowerCase()
    return c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.code.toLowerCase().includes(q)
  })

  return (
    <div className="relative" ref={ref}>
      <div className="flex">
          <button type="button" onClick={() => setOpen((s) => !s)} className="inline-flex items-center gap-3 rounded-l-xl border border-white/10 bg-[#071321] px-4 py-3 text-sm text-white">
          <span className="text-lg">{selected.flag}</span>
          <span className="text-sm font-medium">{selected.dial}</span>
            <svg className="ml-2 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

          <input
            type="tel"
            value={localNumber}
            onChange={(e) => setLocalNumber(e.target.value)}
            className="flex-1 w-full px-4 py-3 border border-white/10 rounded-r-xl bg-[#071321] text-white placeholder:text-slate-600 outline-none transition focus:border-[#52a234] focus:ring-4 focus:ring-[#52a234]/10"
            placeholder="Numéro de téléphone"
          />
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full max-w-[90vw] sm:w-80 rounded-xl border border-white/10 bg-[#0b1c2d] text-white shadow-lg">
          <div className="p-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              placeholder="Rechercher un pays ou indicatif..."
              className="w-full px-3 py-2 rounded-md border border-white/10 bg-[#071321] text-white placeholder:text-slate-600 outline-none focus:ring-4 focus:ring-[#52a234]/10"
            />
          </div>
          <div className="max-h-64 overflow-auto px-2 pb-2">
            {filtered.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setSelected(c)
                  setOpen(false)
                }}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-[#0d2736]"
              >
                <span className="text-lg">{c.flag}</span>
                <div>
                  <div className="text-sm font-medium text-white">{c.name}</div>
                  <div className="text-xs text-slate-400">{c.dial}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
