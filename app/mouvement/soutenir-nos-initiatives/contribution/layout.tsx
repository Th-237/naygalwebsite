import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/mouvement/soutenir-nos-initiatives/contribution',
  'Contribuer aux initiatives NAYGAL',
  'Choisissez une contribution pour soutenir les projets et initiatives de NAYGAL.',
  { noIndex: true },
)

export default function ContributionLayout({ children }: { children: React.ReactNode }) {
  return children
}
