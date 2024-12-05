export async function GET() {
  const baseUrl = 'https://x-trigger.net'
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>X-trigger 블로그</title>
        <link>${baseUrl}</link>
        <description>마케팅 자동화와 고객 여정 최적화를 위한 인사이트</description>
        <language>ko</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      </channel>
    </rss>
  `

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}