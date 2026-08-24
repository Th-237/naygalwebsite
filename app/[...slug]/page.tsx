import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sitePages } from '@/lib/site-map'

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const href = `/${slug.join('/')}`
  const page = sitePages.find((item) => item.href === href)

  if (!page) {
    return {
      title: 'Page introuvable | NAYGAL',
      description: 'Cette page n’existe pas ou n’est plus disponible.',
    }
  }

  const SITE = process.env.SITE_URL || 'https://naygal.cm'

  return {
    title: `${page.name} | NAYGAL`,
    description: page.description,
    alternates: {
      canonical: `${SITE}${page.href}`,
    },
    openGraph: {
      title: `${page.name} | NAYGAL`,
      description: page.description,
      url: `${SITE}${page.href}`,
    },
  }
}

export function generateStaticParams() {
  return sitePages.map(({ href }) => ({ slug: href.slice(1).split('/') }))
}

export default async function StructuredPage({ params }: PageProps) {
  const { slug } = await params
  const href = `/${slug.join('/')}`
  const page = sitePages.find((item) => item.href === href)

  if (!page) notFound()

  return (
    <main className="bg-slate-50 pt-[72px]">
      <section className="border-b border-slate-200 bg-[#021d47] py-20 text-white sm:py-24">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">NAYGAL</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{page.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{page.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <p className="text-lg leading-8 text-slate-600">
            Cette page est prête à recevoir son contenu. Nous pouvons maintenant y ajouter vos offres, projets, visuels, témoignages et appels à l’action.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-[#52a234] px-6 py-3.5 font-semibold text-white transition hover:bg-[#438a2c]">
            Échanger avec NAYGAL →
          </Link>
        </div>
      </section>
    </main>
  )
}
