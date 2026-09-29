import { createPageMetadata } from '@/lib/seo'


export const metadata = createPageMetadata('/actualites', 'Actualités numériques NAYGAL', 'Suivez les actualités, événements et initiatives de NAYGAL autour du numérique, de la formation, du cloud et de la cybersécurité.')

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return children
}
