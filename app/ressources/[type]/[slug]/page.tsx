import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findResourceBySlug } from '../../../../lib/resources'

type Props = { params: { type: string; slug: string } }

export default function ResourceDetailPage({ params }: Props) {
  const { type, slug } = params
  const resource = findResourceBySlug(slug)
  if (!resource) return notFound()

  // Optional: ensure category matches the URL type
  if (resource.category.toLowerCase() !== type) {
    // if mismatch, show notFound to avoid category/slug collisions
    return notFound()
  }

  return (
    <main className="container-custom py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[.12em] text-[#438a2c]">{resource.type}</p>
        <h1 className="mt-4 text-3xl font-semibold">{resource.title}</h1>
        <p className="mt-4 text-sm text-slate-600">{resource.description}</p>

        {resource.href && resource.href.endsWith('.pdf') ? (
          <div className="mt-8 flex gap-4">
            <a href={resource.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#021d47] px-4 py-2 text-sm font-bold text-white">Ouvrir le PDF</a>
            <a href={resource.href} download className="rounded-full border px-4 py-2 text-sm font-semibold">Télécharger</a>
          </div>
        ) : (
          <div className="mt-8 text-sm text-slate-600">Contenu détaillé disponible prochainement.</div>
        )}

        <div className="mt-12">
          <Link href="/ressources" className="text-sm font-semibold text-slate-600">← Retour à la bibliothèque</Link>
        </div>
      </div>
    </main>
  )
}
