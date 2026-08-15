'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SectionTransitionLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
  const isLoadingRef = useRef(false)
    const loadingStartedAtRef = useRef(0)
  const currentPathRef = useRef(pathname)
  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const clearTimers = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const finishLoading = () => {
      clearTimers()
      const elapsed = Date.now() - loadingStartedAtRef.current
      const complete = () => {
        setProgress(100)
        timeoutRef.current = window.setTimeout(() => {
          setIsLoading(false)
          isLoadingRef.current = false
          setProgress(0)
        }, 200)
      }

      timeoutRef.current = window.setTimeout(complete, Math.max(0, 600 - elapsed))
    }

    const startLoading = () => {
      if (isLoadingRef.current) {
        return
      }

      isLoadingRef.current = true
      loadingStartedAtRef.current = Date.now()
      setIsLoading(true)
      setProgress(20)

      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }

      intervalRef.current = window.setInterval(() => {
        setProgress((current) => Math.min(90, current + Math.random() * 7 + 2))
      }, 90)
    }

    const scrollToTarget = (target: HTMLElement) => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleAnchorClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const anchor = event.target.closest('a') as HTMLAnchorElement | null
      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href) {
        return
      }

      const url = new URL(href, window.location.href)
      const sameOrigin = url.origin === window.location.origin
      if (!sameOrigin) {
        return
      }

      if (href.startsWith('#')) {
        const sectionId = href.slice(1)
        const target = document.getElementById(sectionId)
        if (!target) {
          return
        }

        event.preventDefault()
        startLoading()
        scrollToTarget(target)
        window.history.replaceState(null, '', `#${sectionId}`)

        if (observerRef.current) {
          observerRef.current.disconnect()
        }

        observerRef.current = new IntersectionObserver(
          (entries) => {
            const visible = entries.some((entry) => entry.isIntersecting)
            if (visible) {
              finishLoading()
              observerRef.current?.disconnect()
            }
          },
          { threshold: 0.2 }
        )

        observerRef.current.observe(target)
        timeoutRef.current = window.setTimeout(finishLoading, 1400)
        return
      }

      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        startLoading()
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimers()
    }
  }, [])

  useEffect(() => {
    if (currentPathRef.current === pathname) {
      return
    }

    currentPathRef.current = pathname
    if (!isLoadingRef.current) {
      loadingStartedAtRef.current = Date.now()
    }
    isLoadingRef.current = true
    setIsLoading(true)
    setProgress(70)

    timeoutRef.current = window.setTimeout(() => {
      setProgress(100)
      timeoutRef.current = window.setTimeout(() => {
        setIsLoading(false)
        isLoadingRef.current = false
        setProgress(0)
      }, 200)
    }, Math.max(0, 600 - (Date.now() - loadingStartedAtRef.current)))
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#021d47]/10 backdrop-blur-[2px] transition-opacity duration-200 ${
        isLoading ? 'opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/90 shadow-[0_16px_60px_rgba(2,29,71,0.2)]">
        <div className="absolute inset-3 animate-spin rounded-full border-[3px] border-[#52a234]/20 border-t-[#52a234]" />
        <div className="absolute inset-5 rounded-full border border-[#021d47]/10" />
        <span className="relative text-sm font-bold tracking-[0.2em] text-[#021d47]">NAYGAL</span>
      </div>
    </div>
  )
}
