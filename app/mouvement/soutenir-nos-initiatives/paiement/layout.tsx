import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
  '/mouvement/soutenir-nos-initiatives/paiement',
  'Finaliser une contribution NAYGAL',
  'Consultez le récapitulatif et finalisez votre soutien aux initiatives NAYGAL.',
  { noIndex: true },
)

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children
}
