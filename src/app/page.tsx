import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import Ticker from '@/components/ticker'
import FeaturedWork from '@/components/featured-work'
import IndexList from '@/components/index-list'
import StickerSlapFooter from '@/components/sticker-slap-footer'
import ScrollWordReveal from '@/components/scroll-word-reveal'

export const metadata: Metadata = {
  title: 'Yunseok Oh — portfolio',
  description:
    'Yunseok Oh — design & AI engineer at BCROSSB.inc. Agent systems, agent memory, skills and tooling.',
}

/*
 * Scroll-scrubbed drift band — 21st.dev "Scroll Velocity Text"
 * direction, implemented with CSS scroll timelines: the two lines
 * drift apart as the page scrolls. Fallback: static headline.
 */
function DriftBand() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink py-4">
      <p className="drift-down font-disp font-medium text-[clamp(48px,10vw,144px)] leading-[0.9] tracking-tight whitespace-nowrap [--drift:-10vw]">
        Agent systems — Agent memory — Skills — Tooling —
      </p>
      <p className="drift-up text-outline font-disp font-medium text-[clamp(48px,10vw,144px)] leading-[0.9] tracking-tight whitespace-nowrap [--drift:10vw]">
        Open source — Agent networks — Legal data — Video pipelines —
      </p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="grow">
        <section className="px-5 pt-16 pb-10">
          <Reveal as="h1" lines={['Yunseok', 'Oh —']} stagger />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <ScrollWordReveal
              className="max-w-prose font-sans text-[15px] leading-[1.6] text-soft text-left"
              text="Design engineer and AI engineer at BCROSSB.inc. Building agent systems from Tokyo: persistent memory, agent networks, legal data infrastructure — all shipped as open source."
            />
            <p className="font-sans text-[13px] text-faint">Selected works 2026</p>
          </div>
        </section>

        <Ticker
          items={[
            'Agent Systems',
            'Agent Memory',
            'Open Source',
            'Legal Data',
            'Video Pipelines',
            'Engineering DX',
          ]}
        />

        <section id="work" className="scroll-mt-16">
          <header className="flex items-baseline justify-between px-5 py-4">
            <h2 className="font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-left">
              Featured
            </h2>
            <Link
              href="/#index"
              className="text-[13px] text-soft no-underline hover:underline decoration-1 underline-offset-4"
            >
              Full index ↓
            </Link>
          </header>
          <FeaturedWork />
        </section>

        <section id="index" className="scroll-mt-16 px-5 pt-10 pb-10">
          <h2 className="pb-5 font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-left">
            Index
          </h2>
          <IndexList />
        </section>

        <DriftBand />
      </main>
      <StickerSlapFooter />
    </div>
  )
}
