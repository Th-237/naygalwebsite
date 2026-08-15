'use client'

import { useEffect, useMemo, useState } from 'react'

type Preferences = {
  language: 'fr' | 'en'
  theme: 'light' | 'dark'
  interest: 'expertises' | 'academy' | 'mouvement' | 'contact'
}

const STORAGE_KEY = 'naygalPreferences'
const defaultPreferences: Preferences = {
  language: 'fr',
  theme: 'dark',
  interest: 'expertises',
}

const interests = [
  { id: 'expertises', label: 'Expertises' },
  { id: 'academy', label: 'Academy' },
  { id: 'mouvement', label: 'Mouvement' },
  { id: 'contact', label: 'Contact' },
] as const

export default function PreferencesGate() {
  const [ready, setReady] = useState(false)
  const [storedPreferences, setStoredPreferences] = useState<Preferences | null>(null)
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences)
  const [stage, setStage] = useState<'loading' | 'form'>('form')
  const [progress, setProgress] = useState(0)

  const isVisible = !ready

  const interestLabel = useMemo(
    () => interests.find((item) => item.id === preferences.interest)?.label || 'Expertises',
    [preferences.interest]
  )

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Preferences
        setStoredPreferences(parsed)
        setPreferences(parsed)
        document.documentElement.classList.toggle('dark', parsed.theme === 'dark')
        setReady(true)
        return
      } catch {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    }

    document.documentElement.classList.toggle('dark', preferences.theme === 'dark')
  }, [])

  useEffect(() => {
    if (stage !== 'loading') {
      return
    }

    let current = 0
    const interval = window.setInterval(() => {
      current += Math.random() * 15 + 10
      setProgress((value) => Math.min(100, Math.max(value, value + current / 10)))
    }, 180)

    const timeout = window.setTimeout(() => {
      window.clearInterval(interval)
      setProgress(100)
      window.setTimeout(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
        document.documentElement.classList.toggle('dark', preferences.theme === 'dark')
        setReady(true)
      }, 400)
    }, 2600)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [stage, preferences])

  const handleSubmit = () => {
    setStage('loading')
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 px-6 py-10 text-white backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#081023]/95 shadow-2xl shadow-black/40">
        <div className="bg-[#031327] px-8 py-5 text-sm uppercase tracking-[0.22em] text-slate-400">
          Bienvenue sur NAYGAL
        </div>

        <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-[#68bd49]">Préférences de visite</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Choisissez un style, un thème et ce qui vous intéresse.
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Langue</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {['fr', 'en'].map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setPreferences((current) => ({ ...current, language: lang as Preferences['language'] }))}
                        className={`rounded-full border px-4 py-2 text-sm transition ${preferences.language === lang ? 'border-[#68bd49] bg-[#68bd49]/15 text-white' : 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'}`}
                      >
                        {lang === 'fr' ? 'Français' : 'English'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Thème</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {['light', 'dark'].map((theme) => (
                      <button
                        key={theme}
                        type="button"
                        onClick={() => setPreferences((current) => ({ ...current, theme: theme as Preferences['theme'] }))}
                        className={`rounded-full border px-4 py-2 text-sm transition ${preferences.theme === theme ? 'border-[#68bd49] bg-[#68bd49]/15 text-white' : 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'}`}
                      >
                        {theme === 'light' ? 'Clair' : 'Sombre'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Centres d’intérêt</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {interests.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPreferences((current) => ({ ...current, interest: item.id }))}
                        className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${preferences.interest === item.id ? 'border-[#68bd49] bg-[#68bd49]/10 text-white' : 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'}`}
                      >
                        <span className="block font-semibold text-white">{item.label}</span>
                        <span className="text-xs text-slate-400">Préféré</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0f1a2e]/95 p-6 text-slate-300">
              <p className="text-sm text-slate-400">Prévisions</p>
              <p className="mt-3 leading-7">Nous adapterons légèrement l’expérience de navigation à votre thème et à vos centres d’intérêt.</p>
              <p className="mt-3 text-sm text-slate-500">Vous pourrez revenir sur ces choix à tout moment depuis le site.</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0c1727]/90 p-8 text-white shadow-xl shadow-black/30 ring-1 ring-white/10">
            {stage === 'form' ? (
              <>
                <p className="text-sm uppercase tracking-[0.18em] text-[#68bd49]">Confirmation</p>
                <h3 className="mt-6 text-3xl font-semibold">Prêt ?</h3>
                <p className="mt-4 leading-7 text-slate-300">Vous choisirez votre style et nous préparons le site pour vous. Ensuite, vous accéderez à l’expérience NAYGAL propre et rapide.</p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Langue</p>
                    <p className="mt-2 text-xl font-semibold text-white">{preferences.language === 'fr' ? 'Français' : 'English'}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Thème</p>
                    <p className="mt-2 text-xl font-semibold text-white">{preferences.theme === 'dark' ? 'Sombre' : 'Clair'}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Centre d’intérêt</p>
                    <p className="mt-2 text-xl font-semibold text-white">{interestLabel}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-10 inline-flex w-full items-center justify-center rounded-3xl bg-[#68bd49] px-6 py-4 text-base font-semibold text-[#021317] transition hover:bg-[#84d66b]"
                >
                  Valider mes préférences
                </button>
              </>
            ) : (
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#68bd49]">Chargement en cours</p>
                <h3 className="text-3xl font-semibold">Veuillez patienter...</h3>
                <p className="leading-7 text-slate-300">Nous préparons votre expérience NAYGAL sur mesure. Cela arrive dans quelques instants.</p>
                <div className="overflow-hidden rounded-3xl bg-white/10 p-1">
                  <div className="h-3 rounded-full bg-[#68bd49] transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#68bd49]" />
                  <span>Chargement des préférences...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
