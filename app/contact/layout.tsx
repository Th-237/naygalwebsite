import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/contact',
  'Contacter NAYGAL',
  'Contactez NAYGAL au Cameroun pour vos besoins en informatique, cybersécurité, cloud, formation et transformation numérique.',
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
