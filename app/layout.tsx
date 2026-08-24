import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import SectionTransitionLoader from '@/components/SectionTransitionLoader'
import ScrollReveal from '@/components/ScrollReveal'
import { getOrganizationStructuredData } from '@/lib/seo'


import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'NAYGAL - Le numérique de demain',
    template: '%s | NAYGAL',
  },
  description: 'Expert en infrastructures réseaux, cybersécurité, IA, cloud et transformation numérique au Cameroun',
  keywords: ['infrastructure réseau', 'cybersécurité', 'intelligence artificielle', 'cloud', 'transformation numérique', 'Cameroun'],
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    title: 'NAYGAL - Le numérique de demain',
    description: 'Expert en infrastructures réseaux, cybersécurité, IA, cloud et transformation numérique au Cameroun',
    url: SITE,
    siteName: 'NAYGAL',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAYGAL - Le numérique de demain',
    description: 'Expert en infrastructures réseaux, cybersécurité, IA, cloud et transformation numérique au Cameroun',
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
        <link rel="preconnect" href="https://source.unsplash.com" crossOrigin="" />
        <script
          key="ld-org"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationStructuredData()).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <SectionTransitionLoader />
        <ScrollReveal />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
