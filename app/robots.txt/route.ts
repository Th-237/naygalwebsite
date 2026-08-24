import { NextResponse } from 'next/server'

export async function GET() {
  const base = process.env.SITE_URL || 'https://naygal.cm'
  const content = `User-agent: *
Disallow:

Sitemap: ${base}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
