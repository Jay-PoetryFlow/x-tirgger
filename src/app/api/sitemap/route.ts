import { db } from '@/lib/db'

export async function GET() {
  const baseUrl = 'https://x-trigger.net'
  
  // 정적 페이지 목록
  const staticPages = [
    '',
    '/features',
    '/solutions',
    '/templates',
    '/pricing',
    '/blog',
    '/docs',
    '/about',
    '/careers',
    '/partners',
    '/contact',
    '/terms',
    '/privacy',
    '/security',
    '/cookies',
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}