'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Slide = {
  src: string
  alt: string
}

type HeroCarouselProps = {
  slides: Slide[]
  interval?: number
}

export default function HeroCarousel({ slides, interval = 5000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval, slides.length])

  if (!slides.length) return null

  const nextIndex = (index + 1) % slides.length

  return (
    <div className="absolute inset-0">
      <Image
        key={slides[index].src}
        src={slides[index].src}
        alt={slides[index].alt}
        fill
        preload
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      {slides.length > 1 && (
        <Image
          key={slides[nextIndex].src}
          src={slides[nextIndex].src}
          alt=""
          aria-hidden="true"
          fill
          loading="lazy"
          quality={75}
          sizes="100vw"
          className="pointer-events-none object-cover opacity-0"
        />
      )}
    </div>
  )
}
