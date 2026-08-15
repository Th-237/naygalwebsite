 'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteNavigation } from '@/lib/site-map'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,.04)] backdrop-blur">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="group flex items-center gap-3" aria-label="NAYGAL — Accueil">
            <Image
              src="/images/logo.png"
              alt="Logo NAYGAL"
              width={56}
              height={56}
              priority
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <span className="leading-none">
              <span className="block text-lg font-bold tracking-[.12em] text-[#032965]">NAYGAL</span>
              <span className="mt-1 block text-[8px] font-semibold tracking-[.2em] text-slate-500">LE NUMÉRIQUE UTILE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Navigation principale">
            <Link href="/" className="rounded-md px-2.5 py-2 text-sm font-semibold text-[#52a234] transition-smooth">Accueil</Link>
            {siteNavigation.map((item) => (
              <div key={item.name} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 transition-smooth hover:bg-slate-50 hover:text-[#52a234]">
                  {item.name}
                  {item.children && <span className="text-xs text-slate-400 transition group-hover:rotate-180">⌄</span>}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <Link href={item.href} className="block border-b border-slate-100 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#276f91] hover:text-[#52a234]">
                      Voir {item.name}
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[#52a234]">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="ml-3 rounded-sm bg-[#52a234] px-4 py-2.5 text-sm font-semibold text-white transition-smooth hover:bg-[#438a2c] focus:outline-none focus:ring-2 focus:ring-[#52a234] focus:ring-offset-2">
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          <Link href="/contact" className="hidden rounded-sm bg-[#52a234] px-4 py-2.5 text-sm font-semibold text-white lg:inline-flex xl:hidden">
            Contact
          </Link>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-[101] rounded-md p-2 text-[#032965] hover:bg-slate-100 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-[105] bg-slate-900/30 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />
            <nav
              id="mobile-navigation"
              className="fixed inset-x-0 top-16 z-[110] max-h-[calc(100vh-4rem)] overflow-auto border-t border-slate-200 bg-white/95 py-3 lg:hidden"
              aria-label="Navigation mobile"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col gap-1 px-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-semibold text-[#52a234]">Accueil</Link>
              {siteNavigation.map((item) => {
                const sectionOpen = openSection === item.name
                return (
                  <div key={item.name} className="rounded-md border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => setOpenSection(sectionOpen ? null : item.name)}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      <span>{item.name}</span>
                      {item.children ? (
                        <span className={`text-xs text-slate-500 transition ${sectionOpen ? 'rotate-180' : ''}`}>
                          ⌄
                        </span>
                      ) : null}
                    </button>
                    {item.children && sectionOpen && (
                      <div className="space-y-1 border-t border-slate-200 bg-slate-50/80 px-3 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setIsOpen(false)
                              setOpenSection(null)
                            }}
                            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-white hover:text-[#52a234]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-sm bg-[#52a234] px-3 py-3 text-center text-sm font-semibold text-white">Contact</Link>
            </div>
          </nav>
          </>
        )}
      </div>
    </header>
  )
}
