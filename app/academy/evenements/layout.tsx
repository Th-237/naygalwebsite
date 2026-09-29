import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/academy/evenements',
  'Événements numériques NAYGAL Academy',
  'Découvrez les journées technologiques, ateliers et événements organisés par NAYGAL Academy pour les apprenants au Cameroun.',
)

export default function AcademyEventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
