import { createPageMetadata } from '@/lib/seo'
import PassAcadFlow from './PassAcadFlow'

export const metadata = createPageMetadata(
  '/academy/passacad',
  'PassAcad : rejoindre NAYGAL Community',
  'Choisissez votre profil, découvrez le parcours PassAcad adapté à votre situation et rejoignez NAYGAL Community après validation de votre adhésion.',
)

export default function PassAcadPage() {
  return <PassAcadFlow />
}
