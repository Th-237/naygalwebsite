import type { Metadata } from 'next'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Articles, guides et outils pour accompagner votre transformation numérique.',
  alternates: {
    canonical: `${SITE}/ressources`,
  },
  openGraph: {
    title: 'Ressources · NAYGAL',
    description: 'Articles, guides et outils pour accompagner votre transformation numérique.',
    url: `${SITE}/ressources`,
  },
}

export default function RessourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
