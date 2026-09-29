import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/academy/dans-votre-ecole',
  'NAYGAL Academy dans votre école',
  'Ateliers et accompagnement numérique pour les écoles, collèges et lycées au Cameroun avec NAYGAL Academy.',
)

export default function AcademySchoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
