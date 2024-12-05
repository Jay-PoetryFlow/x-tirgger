import { Feed } from 'feed'

export async function GET() {
  const feed = new Feed({
    title: "X-trigger 블로그",
    description: "마케팅 자동화와 비즈니스 성장을 위한 인사이트",
    id: "https://x-trigger.net/",
    link: "https://x-trigger.net/",
    language: "ko",
    favicon: "https://x-trigger.net/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}, X-trigger`,
    author: {
      name: "X-trigger Team",
      email: "team@x-trigger.net",
      link: "https://x-trigger.net/about"
    }
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}