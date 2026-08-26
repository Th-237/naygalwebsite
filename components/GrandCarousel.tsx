"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = { interval?: number; images?: string[] }

const defaultImages = [
  '/images/academy/Grand caroussel/image1170x530cropped.jpg',
  '/images/academy/Grand caroussel/1-ordi.jpg',
  '/images/academy/Grand caroussel/1.jpg',
  '/images/academy/Grand caroussel/IA-Afrique.webp',
  '/images/academy/Grand caroussel/pexels-kureng-workx-2546437-4314674.jpg',
]

export default function GrandCarousel({ interval = 5000, images }: Props) {
  const slides = images && images.length ? images : defaultImages
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [interval, slides.length])

  if (!slides.length) return null

  const nextIndex = (index + 1) % slides.length

  return (
    <>
      <div className="absolute inset-0 hidden md:block">
        <Image
          key={slides[index]}
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        {slides.length > 1 && (
          <Image
            key={slides[nextIndex]}
            src={slides[nextIndex]}
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            quality={80}
            sizes="100vw"
            className="pointer-events-none object-cover object-center opacity-0"
          />
        )}
      </div>

      <div className="absolute inset-0 block md:hidden">
        <Image
          key={slides[0]}
          src={slides[0]}
          alt="Présentation NAYGAL Academy"
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </>
  )
}
