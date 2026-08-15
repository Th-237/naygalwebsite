"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Slide = {
  src: string
  alt?: string
}

export default function ImageCarousel({ slides = [], interval = 4000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!slides.length || prefersReducedMotion) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [slides.length, interval, prefersReducedMotion])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleEnter = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
    const handleLeave = () => {
      if (!prefersReducedMotion && !timerRef.current) {
        timerRef.current = window.setInterval(() => {
          setIndex((i) => (i + 1) % slides.length)
        }, interval)
      }
    }
    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [slides.length, interval, prefersReducedMotion])

  // Basic swipe handling
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let startX = 0
    let deltaX = 0
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }
    const onTouchMove = (e: TouchEvent) => {
      deltaX = e.touches[0].clientX - startX
    }
    const onTouchEnd = () => {
      if (Math.abs(deltaX) > 60) {
        if (deltaX > 0) {
          setIndex((i) => (i - 1 + slides.length) % slides.length)
        } else {
          setIndex((i) => (i + 1) % slides.length)
        }
      }
      startX = 0
      deltaX = 0
    }
    el.addEventListener('touchstart', onTouchStart)
    el.addEventListener('touchmove', onTouchMove)
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [slides.length])

  if (!slides.length) return null

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-[1.5rem]">
      <div className="flex transition-transform duration-700 will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="min-w-full">
            <div className="relative h-[430px] w-full">
              <Image src={s.src} alt={s.alt || ''} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-4 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Aller au slide ${i + 1}`}
            className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-[#52a234]' : 'bg-white/40'} `}
          />
        ))}
      </div>

      <div className="absolute right-4 top-4 flex items-center gap-2">
        <button
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          aria-label="Précédent"
          className="rounded-full bg-white/30 p-2 text-sm"
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          aria-label="Suivant"
          className="rounded-full bg-white/30 p-2 text-sm"
        >
          ›
        </button>
      </div>
    </div>
  )
}
