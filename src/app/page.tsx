import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import Ticker from '@/components/ticker'
import FeaturedWork from '@/components/featured-work'
import IndexList from '@/components/index-list'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'hex apply — portfolio',
  description: 'Design engineer portfolio — monochrome broadsheet.',
}

/**
 * Altason-style landing — monochrome broadsheet.
 * Full-bleed 3 columns, 1px black rules, Inter Tight 500 display
 * (lh 0.85, no 700), left-aligned everywhere. Hover changes the
 * underline, never a color.
 */
export default function HomePage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="grow">
        <section className="px-5 pt-16 pb-10">
          <Reveal as="h1" lines={['Kureha', 'Ryosuke —']} />
          <div className="mt-8 flex flex-wrap justify-between gap-4 font-sans text-[13px] leading-[1.2] text-soft">
            <p className="text-left">
              Design engineer. Frontend systems, editorial grids,
              <br />
              static-first tooling.
            </p>
            <p className="text-faint">Selected works 2018–2026</p>
          </div>
        </section>

        <Ticker items={['Frontend Systems', 'Type Specimens', 'Static Tooling', 'Editorial Grids', 'Monochrome UI']} />

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
          <h2 className="px-0 pb-5 font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-left">
            Index
          </h2>
          <IndexList />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
