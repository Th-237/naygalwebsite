import type { Metadata } from 'next'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  title: 'Ressources IA, cloud, cybersécurité et transformation numérique | NAYGAL',
  description:
    'Accédez à des guides, articles et conseils pratiques sur l’IA, le cloud, la cybersécurité, les réseaux et la transformation numérique.',
  alternates: {
    canonical: `${SITE}/ressources`,
  },
  openGraph: {
    title: 'Ressources IA, cloud, cybersécurité et transformation numérique | NAYGAL',
    description:
      'Accédez à des guides, articles et conseils pratiques sur l’IA, le cloud, la cybersécurité, les réseaux et la transformation numérique.',
    url: `${SITE}/ressources`,
    images: ['/images/home/NAYTECHROOM.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ressources IA, cloud, cybersécurité et transformation numérique | NAYGAL',
    description:
      'Accédez à des guides, articles et conseils pratiques sur l’IA, le cloud, la cybersécurité, les réseaux et la transformation numérique.',
    images: ['/images/home/NAYTECHROOM.png'],
  },
}

export default function RessourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
