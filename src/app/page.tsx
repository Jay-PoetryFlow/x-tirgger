import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Play, Users, BarChart3, MessageSquare } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light pt-32 pb-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              마케팅 자동화로<br />비즈니스 성장을 가속화하세요
            </h1>
            <p className="mb-8 text-xl opacity-90">
              AI 기반 마케팅 자동화와 퍼널 시스템으로<br />
              더 많은 고객과 매출을 확보하세요
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">무료로 시작하기</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/demo" className="flex items-center gap-2">
                  <Play className="h-4 w-4" /> 데모 영상 보기
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> 설치 불필요
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> 신용카드 없이 시작
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> 언제든 해지 가능
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/patterns/hero.svg')] bg-center opacity-10"></div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              비즈니스 성장을 위한 모든 도구
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              직관적인 인터페이스로 복잡한 마케팅 자동화를 쉽게 구현하세요
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group rounded-lg border bg-background p-8 transition-all hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">퍼널 빌더</h3>
              <p className="mb-4 text-gray-600">
                드래그 앤 드롭으로 쉽게 만드는 고성과 마케팅 퍼널
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  템플릿 기반 빠른 시작
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  실시간 미리보기
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  모바일 최적화
                </li>
              </ul>
              <Link
                href="/features/funnel-builder"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                자세히 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="group rounded-lg border bg-background p-8 transition-all hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">마케팅 자동화</h3>
              <p className="mb-4 text-gray-600">
                AI 기반 마케팅 자동화로 업무 효율 극대화
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  행동 기반 트리거
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  AI 메시지 최적화
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  멀티채널 자동화
                </li>
              </ul>
              <Link
                href="/features/automation"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                자세히 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="group rounded-lg border bg-background p-8 transition-all hover:border-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">실시간 분석</h3>
              <p className="mb-4 text-gray-600">
                실시간 데이터로 마케팅 성과 최적화
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  실시간 대시보드
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  고급 세그먼테이션
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  맞춤형 리포트
                </li>
              </ul>
              <Link
                href="/features/analytics"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                자세히 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 작동 방식 섹션 */}
      <section className="border-y bg-accent py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              복잡한 마케팅도 쉽고 간단하게
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              드래그 앤 드롭으로 퍼널을 만들고, AI가 최적의 메시지를 제안합니다
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-4 text-xl font-bold">퍼널 생성</h3>
              <p className="text-gray-600">
                드래그 앤 드롭으로 퍼널을 만들고<br />
                고객 여정을 설계하세요
              </p>
              <Image
                src="/screenshots/funnel-builder.png"
                alt="퍼널 빌더 스크린샷"
                width={320}
                height={240}
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-4 text-xl font-bold">자동화 설정</h3>
              <p className="text-gray-600">
                트리거와 조건을 설정하여<br />
                마케팅 자동화를 구성하세요
              </p>
              <Image
                src="/screenshots/automation.png"
                alt="자동화 설정 스크린샷"
                width={320}
                height={240}
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-4 text-xl font-bold">성과 분석</h3>
              <p className="text-gray-600">
                실시간 데이터로 성과를 분석하고<br />
                최적화를 진행하세요
              </p>
              <Image
                src="/screenshots/analytics.png"
                alt="분석 대시보드 스크린샷"
                width={320}
                height={240}
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-4xl font-bold">
            지금 바로 시작하세요
          </h2>
          <p className="mb-8 text-xl opacity-90">
            30일 무료 체험으로 엑스 트리거의 모든 기능을 경험해보세요
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">무료로 시작하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
              <Link href="/pricing">요금제 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}