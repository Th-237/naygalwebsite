import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Disallow:

Sitemap: ${process.env.SITE_URL || 'https://naygal.com'}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
