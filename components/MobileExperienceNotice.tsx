'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'naygal-mobile-experience-notice-dismissed'

export default function MobileExperienceNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(STORAGE_KEY) !== 'true')
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside className="fixed left-3 right-3 top-[4.75rem] z-50 flex items-start gap-3 rounded-xl border border-[#b8dfa7] bg-[#edf7e7] px-4 py-3 text-[#021d47] shadow-lg shadow-[#021d47]/10 sm:hidden" role="status">
      <p className="flex-1 text-xs font-medium leading-5">
        Pour une expérience plus immersive, consultez le site sur ordinateur ou tablette.
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded-md p-1 text-lg leading-none text-[#276f91] transition hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#52a234]"
        aria-label="Fermer le message"
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  )
}
