'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const topImages = [
  {
    src: '/images/academy/evenements/jtech/annonce.jpg',
    alt: 'Annonce de la journée technologique JTECH à l’IUT partenaire',
  },
  {
    src: '/images/academy/evenements/jtech/atelier1.jpg',
    alt: 'Atelier pratique lors de l’événement JTECH',
  },
  {
    src: '/images/academy/evenements/jtech/atelier2.jpg',
    alt: 'Démonstration et projets étudiants à JTECH',
  },
  {
    src: '/images/academy/evenements/jtech/IMG-20260528-WA0010.jpg',
    alt: 'Participants de la journée technologique JTECH à l’IUT',
  },
]

const bottomImages = [
  {
    src: '/images/academy/evenements/jtech/IMG-20260618-WA0063.jpg',
    alt: 'Discussion et échanges entre apprenants lors de JTECH',
  },
  {
    src: '/images/academy/evenements/jtech/IMG-20260618-WA0088.jpg',
    alt: 'Stand et démonstration technique sur la journée JTECH',
  },
  {
    src: '/images/academy/evenements/jtech/IMG-20260618-WA0090.jpg',
    alt: 'Équipe présentant un projet numérique pendant JTECH',
  },
]

export default function AcademyEvenementsPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % topImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="overflow-hidden bg-[#f8fbff] text-[#032965]">
      <section className="relative bg-[#eff7ff] py-20 sm:py-28">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#438a2c]">NAYGAL Academy</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">JTECH : la journée technologique de l’IUT partenaire</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Une journée dédiée à l’innovation, aux projets étudiants et aux démonstrations techniques. L’événement a réuni des apprenants, des enseignants et des partenaires autour de la transformation numérique et des usages concrets du numérique.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#438a2c]">
                  Parler de votre événement
                </Link>
                <Link href="/academy/dans-votre-ecole" className="inline-flex items-center justify-center rounded-full border border-[#032965] bg-white px-6 py-3.5 text-sm font-semibold text-[#032965] transition hover:bg-slate-50">
                  En savoir plus sur NAYAC
                </Link>
              </div>
            </div>

              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(3,41,101,.12)]">
              <div className="relative h-[520px] w-full">
                <Image src={topImages[activeSlide].src} alt={topImages[activeSlide].alt} fill className="object-cover transition duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">JTECH</p>
                <p className="mt-2 text-lg font-semibold">{topImages[activeSlide].alt}</p>
              </div>
              <button type="button" onClick={() => setActiveSlide((activeSlide + topImages.length - 1) % topImages.length)} className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#032965] shadow-lg transition hover:bg-white">
                ‹
              </button>
              <button type="button" onClick={() => setActiveSlide((activeSlide + 1) % topImages.length)} className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#032965] shadow-lg transition hover:bg-white">
                ›
              </button>
              <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
                {topImages.map((_, index) => (
                  <button key={index} type="button" onClick={() => setActiveSlide(index)} className={`h-2.5 w-10 rounded-full transition ${index === activeSlide ? 'bg-white' : 'bg-white/40 hover:bg-white'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-[#438a2c]">Événement académique</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">JTECH à l’IUT : innovation, projets et montée en compétences</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Cette journée technologique a permis aux étudiants et aux partenaires de présenter des projets concrets en IA, cybersécurité, réseaux et développement. Elle a aussi été l’occasion de découvrir les métiers du numérique et les parcours NAYAC disponibles en partenariat avec l’IUT.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#438a2c]">Points forts</p>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-4"><span className="mt-1 h-2 w-2 rounded-full bg-[#52a234]" /> Ateliers pratiques autour des technologies numériques.</li>
              <li className="flex gap-4"><span className="mt-1 h-2 w-2 rounded-full bg-[#52a234]" /> Présentations de projets d’étudiants et retours d’expérience.</li>
              <li className="flex gap-4"><span className="mt-1 h-2 w-2 rounded-full bg-[#52a234]" /> Opportunités de mentorat, stages et collaboration avec nos partenaires.</li>
              <li className="flex gap-4"><span className="mt-1 h-2 w-2 rounded-full bg-[#52a234]" /> Une journée pour inspirer les futurs talents du numérique.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#276f91]">Organisé avec l’IUT</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#032965]">Un partenariat concret pour les écoles</h3>
              <p className="mt-4 text-slate-600">Nous accompagnons les établissements partenaires pour bâtir des événements pédagogiques qui valorisent les compétences des étudiants et rapprochent la formation des besoins des entreprises.</p>
            </div>
            <div className="rounded-[2rem] bg-[#f4f8fd] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#438a2c]">Galerie de l’événement</p>
              <p className="mt-4 text-slate-600">Voici d’autres images prises pendant la journée JTECH.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {bottomImages.map((image) => (
                  <div key={image.src} className="relative h-48 w-full rounded-[1.5rem] overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 sm:py-20">
        <div className="rounded-[2rem] bg-[#032965] px-8 py-12 text-white sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Intégrer JTECH et d’autres événements dans votre école</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200">Nous pouvons mettre en place des journées technologiques, des ateliers projet et des démonstrations pratiques directement dans votre établissement.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#52a234] px-6 py-3.5 font-semibold text-[#032965] transition hover:bg-[#7ecb6b]">Nous contacter pour un partenariat</Link>
        </div>
      </section>
    </main>
  )
}
