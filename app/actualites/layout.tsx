import type { Metadata } from 'next'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités, événements et articles de NAYGAL.',
  alternates: {
    canonical: `${SITE}/actualites`,
  },
  openGraph: {
    title: 'Actualités · NAYGAL',
    description: 'Les dernières actualités, événements et articles de NAYGAL.',
    url: `${SITE}/actualites`,
  },
}

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return children
}
