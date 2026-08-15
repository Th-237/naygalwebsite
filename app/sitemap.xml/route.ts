import { sitePages } from '@/lib/site-map'
import resources from '@/lib/resources'
import { NextResponse } from 'next/server'

function urlEntry(loc: string, lastmod?: string) {
  return `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
}

export async function GET() {
  const base = process.env.SITE_URL || 'https://naygal.com'
  const pages = sitePages.map((p) => `${base}${p.href}`)
  const resourcePages = resources.map((r) => `${base}/ressources/${r.category.toLowerCase()}/${r.slug}`)

  const urls = [...pages, ...resourcePages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => urlEntry(u)).join('\n')}
  </urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
