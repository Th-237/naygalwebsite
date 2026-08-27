"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = { interval?: number; images?: string[] }

const defaultImages = [
  '/images/academy/Grand caroussel/img1.jpg',
  '/images/academy/Grand caroussel/img2.jpg',
  '/images/academy/Grand caroussel/img3.jpg',
  '/images/academy/Grand caroussel/img4.jpg',
  '/images/academy/Grand caroussel/img5.jpg',
]

export default function GrandCarousel({ interval = 5000, images }: Props) {
  const slides = images && images.length ? images : defaultImages
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || slides.length < 2) return

    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [interval, isPaused, slides.length])

  if (!slides.length) return null

  const goTo = (nextIndex: number) => setIndex((nextIndex + slides.length) % slides.length)

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#032965]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Image
        key={slides[index]}
        src={slides[index]}
        alt={`Slide ${index + 1}`}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="animate-carousel-image object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021d47]/70 via-transparent to-[#021d47]/10" />

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choisir une image">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide}
                type="button"
                onClick={() => goTo(slideIndex)}
                className={`h-1.5 rounded-full transition-all duration-300 ${slideIndex === index ? 'w-9 bg-white' : 'w-1.5 bg-white/55 hover:bg-white/85'}`}
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Afficher l'image ${slideIndex + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-1 text-xs font-semibold tracking-[.18em] text-white/80">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-[#032965]/35 text-white backdrop-blur-sm transition hover:bg-[#032965]/70"
              aria-label="Image précédente"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#032965] transition hover:bg-[#a4d78f]"
              aria-label="Image suivante"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
