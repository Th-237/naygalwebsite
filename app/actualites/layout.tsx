import type { Metadata } from 'next'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  title: 'Actualités tech et transformation numérique | NAYGAL',
  description:
    'Suivez les dernières tendances en cybersécurité, cloud, IA, infrastructure et transformation numérique avec NAYGAL au Cameroun.',
  alternates: {
    canonical: `${SITE}/actualites`,
  },
  openGraph: {
    title: 'Actualités tech et transformation numérique | NAYGAL',
    description:
      'Suivez les dernières tendances en cybersécurité, cloud, IA, infrastructure et transformation numérique avec NAYGAL au Cameroun.',
    url: `${SITE}/actualites`,
    images: ['/images/home/NAYTECHROOM.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Actualités tech et transformation numérique | NAYGAL',
    description:
      'Suivez les dernières tendances en cybersécurité, cloud, IA, infrastructure et transformation numérique avec NAYGAL au Cameroun.',
    images: ['/images/home/NAYTECHROOM.png'],
  },
}

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return children
}
