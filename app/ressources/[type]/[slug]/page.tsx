import Link from 'next/link'
import { notFound } from 'next/navigation'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { findResourceBySlug } from '../../../../lib/resources'

// ✅ Définir SITE à l'extérieur, au niveau du module
const SITE = (process.env.SITE_URL || 'https://naygal.cm').replace(/\/+$/, '')

type Props = { params: Promise<{ type: string; slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { type, slug } = await params
  const resource = findResourceBySlug(slug)

  if (!resource || resource.category.toLowerCase() !== type) {
    return {
      title: 'Ressource introuvable | NAYGAL',
      description: 'Cette ressource n’existe pas ou n’est plus disponible.',
    }
  }

  return {
    title: { absolute: `${resource.title} | NAYGAL` },
    description: resource.description,
    alternates: {
      canonical: `${SITE}/ressources/${resource.category.toLowerCase()}/${resource.slug}`,
    },
    openGraph: {
      title: `${resource.title} | NAYGAL`,
      description: resource.description,
      url: `${SITE}/ressources/${resource.category.toLowerCase()}/${resource.slug}`,
    },
  }
}

export default async function ResourceDetailPage({ params }: Props) {
  const { type, slug } = await params
  const resource = findResourceBySlug(slug)
  if (!resource) return notFound()

  // Optional: ensure category matches the URL type
  if (resource.category.toLowerCase() !== type) {
    // if mismatch, show notFound to avoid category/slug collisions
    return notFound()
  }

  const htmlPath = 'htmlPath' in resource ? resource.htmlPath : null
  const articleHtml = htmlPath
    ? await readFile(path.join(process.cwd(), 'public/documents/ressources/articles', path.basename(htmlPath)), 'utf8')
    : null
  const articleStyles = articleHtml?.match(/<style\b[^>]*>[\s\S]*?<\/style>/gi)?.join('') || ''
  const articleBody = articleHtml?.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || articleHtml
  const renderedArticle = articleBody ? `${articleStyles}${articleBody}` : null

  return (
    <main className="container-custom py-16">
      {/* Structured data for resource */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            resource.type === 'Article'
                  ? {
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: resource.title,
                  description: resource.description,
                  url: `${SITE}/ressources/${resource.category.toLowerCase()}/${resource.slug}`,
                }
              : { '@context': 'https://schema.org', '@type': 'CreativeWork', name: resource.title, description: resource.description }
          ).replace(/</g, '\\u003c'),
        }}
      />
      <div className="max-w-5xl">
        {renderedArticle ? (
          <article className="article-document overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div
              // The source is a versioned article stored in this repository.
              dangerouslySetInnerHTML={{ __html: renderedArticle }}
            />
          </article>
        ) : resource.href && resource.href.endsWith('.pdf') ? (
          <>
            <p className="text-sm font-bold uppercase tracking-[.12em] text-[#438a2c]">{resource.type}</p>
            <h1 className="mt-4 text-3xl font-semibold">{resource.title}</h1>
            <p className="mt-4 text-sm text-slate-600">{resource.description}</p>
            <div className="mt-8 flex gap-4">
              <a href={resource.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#021d47] px-4 py-2 text-sm font-bold text-white">Ouvrir le PDF</a>
              <a href={resource.href} download className="rounded-full border px-4 py-2 text-sm font-semibold">Télécharger</a>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-bold uppercase tracking-[.12em] text-[#438a2c]">{resource.type}</p>
            <h1 className="mt-4 text-3xl font-semibold">{resource.title}</h1>
            <p className="mt-4 text-sm text-slate-600">{resource.description}</p>
            <div className="mt-8 text-sm text-slate-600">Contenu détaillé disponible prochainement.</div>
          </>
        )}

        <div className="mt-12">
          <Link href="/ressources" className="text-sm font-semibold text-slate-600">← Retour à la bibliothèque</Link>
        </div>
      </div>
    </main>
  )
}
