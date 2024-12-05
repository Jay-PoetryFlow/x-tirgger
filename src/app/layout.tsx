import { Metadata } from 'next'
import { Pretendard } from 'next/font/local'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const pretendard = Pretendard({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'X-trigger - 한국형 마케팅 자동화 플랫폼',
  description: '퍼널, 이메일, SMS, 카카오톡을 아우르는 올인원 마케팅 자동화 솔루션',
  keywords: '마케팅 자동화, 이메일 마케팅, SMS 마케팅, 카카오톡 마케팅, 퍼널 빌더',
  authors: [{ name: '엑스 트리거' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://x-trigger.net',
    title: 'X-trigger - 한국형 마케팅 자동화 플랫폼',
    description: '퍼널, 이메일, SMS, 카카오톡을 아우르는 올인원 마케팅 자동화 솔루션',
    images: [
      {
        url: 'https://x-trigger.net/og-image.png',
        width: 1200,
        height: 630,
        alt: 'X-trigger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-trigger - 한국형 마케팅 자동화 플랫폼',
    description: '퍼널, 이메일, SMS, 카카오톡을 아우르는 올인원 마케팅 자동화 솔루션',
    images: ['https://x-trigger.net/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}