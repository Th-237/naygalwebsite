"use client"
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

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => {
        const uri = encodeURI(src)
        return (
          <img
            key={src}
            src={uri}
            alt={`Slide ${i + 1}`}
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement
              t.style.display = 'none'
              // eslint-disable-next-line no-console
              console.warn('GrandCarousel: failed to load', uri)
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        )
      })}
    </div>
  )
}
