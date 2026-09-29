'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'

type Consent = 'all' | 'none' | 'analytics' | 'necessary'

const CONSENT_COOKIE = 'naygal_cookie_consent'
const CONSENT_EVENT = 'naygal:open-cookie-settings'
const MAX_AGE = 60 * 60 * 24 * 180

function readConsent(): Consent | null {
  const value = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
    ?.split('=')[1]

  if (!value?.startsWith('v1-')) return null
  const consent = value.slice(3)
  return ['all', 'none', 'analytics', 'necessary'].includes(consent) ? consent as Consent : null
}

function saveConsent(consent: Consent) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${CONSENT_COOKIE}=v1-${consent}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}
      className="transition-colors hover:text-white"
    >
      Gérer les cookies
    </button>
  )
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const storedConsent = readConsent()
    setConsent(storedConsent)
    setIsVisible(storedConsent === null)
    setAnalyticsEnabled(storedConsent === 'all' || storedConsent === 'analytics')

    const openSettings = () => {
      const currentConsent = readConsent()
      setAnalyticsEnabled(currentConsent === 'all' || currentConsent === 'analytics')
      setIsCustomizing(true)
      setIsVisible(true)
    }

    window.addEventListener(CONSENT_EVENT, openSettings)
    return () => window.removeEventListener(CONSENT_EVENT, openSettings)
  }, [])

  const chooseConsent = (choice: Consent) => {
    saveConsent(choice)
    const wasAnalyticsEnabled = consent === 'all' || consent === 'analytics'
    const willAnalyticsBeEnabled = choice === 'all' || choice === 'analytics'
    if (wasAnalyticsEnabled && !willAnalyticsBeEnabled) {
      window.location.reload()
      return
    }
    setConsent(choice)
    setIsVisible(false)
    setIsCustomizing(false)
  }

  return (
    <>
      {consent === 'all' || consent === 'analytics' ? <Analytics /> : null}

      {isVisible && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-h-[calc(100dvh-1.5rem)] max-w-3xl overflow-y-auto rounded-2xl border border-white/70 bg-white/90 p-4 text-[#032965] shadow-2xl shadow-slate-950/25 backdrop-blur-lg sm:inset-x-6 sm:bottom-6 sm:max-h-[calc(100dvh-3rem)] sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#438a2c]">Vos préférences</p>
              <h2 id="cookie-consent-title" className="mt-2 text-xl font-semibold">Votre confidentialité compte</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Un cookie technique mémorise votre choix. Avec votre accord, nous utilisons la mesure d’audience pour comprendre la fréquentation du site et l’améliorer. Vous pouvez accepter, refuser ou personnaliser ces options.
              </p>
              {isCustomizing && (
                <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
                  <p className="font-semibold">Cookie technique <span className="font-normal text-slate-500">Toujours actif pour enregistrer vos préférences.</span></p>
                  <label className="flex cursor-pointer items-start gap-3 text-slate-700">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                      className="mt-1 accent-[#438a2c]"
                    />
                    <span><strong>Mesure d’audience</strong><br /><span className="text-slate-500">Autoriser la mesure des visites et de l’utilisation du site.</span></span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:min-w-44">
              {isCustomizing ? (
                <>
                  <button type="button" onClick={() => chooseConsent(analyticsEnabled ? 'analytics' : 'necessary')} className="rounded-xl bg-[#032965] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#064080]">Enregistrer mon choix</button>
                  <button type="button" onClick={() => chooseConsent('none')} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Tout refuser</button>
                </>
              ) : (
                <>
                  <button type="button" onClick={() => chooseConsent('all')} className="rounded-xl bg-[#52a234] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#438a2c]">Tout accepter</button>
                  <button type="button" onClick={() => chooseConsent('none')} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Tout refuser</button>
                  <button type="button" onClick={() => setIsCustomizing(true)} className="rounded-xl px-4 py-2 text-sm font-semibold text-[#032965] underline decoration-slate-300 underline-offset-4 hover:decoration-current">Personnaliser</button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
