import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/mouvement/proposer-un-projet',
  'Proposer un projet numérique à NAYGAL',
  'Présentez une idée de projet à NAYGAL et échangez avec notre équipe sur sa faisabilité, son utilité et son impact.',
)

export default function ProposeProjectLayout({ children }: { children: React.ReactNode }) {
  return children
}
