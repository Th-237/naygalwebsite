"use client"

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored as 'dark' | 'light')
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      try {
        localStorage.setItem('theme', 'dark')
      } catch {}
    } else {
      root.classList.remove('dark')
      try {
        localStorage.setItem('theme', 'light')
      } catch {}
    }
  }, [theme, mounted])

  return (
    <button
      type="button"
      aria-label="Basculer le thème"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="ml-3 inline-flex items-center justify-center rounded-md p-2 text-sm text-slate-600 dark:text-slate-200 hover:bg-white/5"
    >
      {mounted ? (
        theme === 'dark' ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3v2m0 14v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      ) : (
        // Render a neutral placeholder to avoid SSR/client mismatch
        <span className="h-5 w-5" aria-hidden />
      )}
    </button>
  )
}
