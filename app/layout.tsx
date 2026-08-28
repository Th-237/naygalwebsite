import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import SectionTransitionLoader from '@/components/SectionTransitionLoader'
import ScrollReveal from '@/components/ScrollReveal'
import MobileExperienceNotice from '@/components/MobileExperienceNotice'
import { getOrganizationStructuredData, getWebsiteStructuredData } from '@/lib/seo'

// 1. IMPORTATION CORRECTE DE VERCEL ANALYTICS ICI :
import { Analytics } from "@vercel/analytics/next"

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'NAYGAL | Expert IT, cybersécurité, formation et IA au Cameroun',
    template: '%s | NAYGAL',
  },
  description:
    'NAYGAL accompagne les organisations au Cameroun dans leur infrastructure IT, cybersécurité, cloud, intelligence artificielle, la formation et transformation numérique.',
  keywords: [
    'NAYGAL',
    'infrastructure réseau Cameroun',
    'cybersécurité Cameroun',
    'cloud entreprise Cameroun',
    'education technologique Cameroun',
    'numerique',
    'intelligence artificielle Cameroun',
    'transformation numérique Cameroun',
    'technologie Africa',
    'solutions IT Cameroun',
  ],
  alternates: {
    canonical: SITE,
  },
  icons: {
    icon: '/images/favico.ico',
    shortcut: '/images/favico.ico',
  },
  openGraph: {
    title: 'NAYGAL | Expert IT, cybersécurité, formation et IA au Cameroun',
    description:
      'NAYGAL accompagne les organisations au Cameroun dans leur infrastructure IT, cybersécurité, cloud, intelligence artificielle, la formation et transformation numérique.',
    url: SITE,
    siteName: 'NAYGAL',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/home/NAYTECHROOM.png',
        width: 1200,
        height: 630,
        alt: 'NAYGAL - solutions numériques et transformation digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAYGAL | Expert IT, cybersécurité, formation et IA au Cameroun',
    description:
      'NAYGAL accompagne les organisations au Cameroun dans leur infrastructure IT, cybersécurité, cloud, intelligence artificielle, la formation et transformation numérique.',
    images: ['/images/home/NAYTECHROOM.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="" />
        <script
          key="ld-org"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationStructuredData()).replace(/</g, '\\u003c') }}
        />
        <script
          key="ld-website"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteStructuredData()).replace(/</g, '\u003c') }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <SectionTransitionLoader />
        <ScrollReveal />
        <MobileExperienceNotice />
        
        <main className="min-h-screen">{children}</main>
        
        <Footer />
        <Chatbot />

        {/* 2. LE COMPOSANT ANALYTICS EST PLACÉ PROPREMENT ICI AVANT LA FERMETURE DU BODY : */}
        <Analytics />
        
      </body>
    </html>
  )
}
