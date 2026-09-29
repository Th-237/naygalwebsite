import { createPageMetadata } from '@/lib/seo'

const SITE = process.env.SITE_URL || 'https://naygal.cm'

export const metadata = createPageMetadata('/ressources', 'Ressources numériques NAYGAL', 'Consultez les articles, guides et conseils NAYGAL sur la cybersécurité, le cloud, les réseaux, l’intelligence artificielle et la transformation numérique.')

export default function RessourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
