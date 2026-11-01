import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import Ticker from '@/components/ticker'
import FeaturedWork from '@/components/featured-work'
import Practice from '@/components/practice'
import IndexList from '@/components/index-list'
import StickerSlapFooter from '@/components/sticker-slap-footer'
import ScrollWordReveal from '@/components/scroll-word-reveal'
import { switcher, type Dict } from '@/lib/content'

/**
 * Scroll-scrubbed drift band — 21st.dev "Scroll Velocity Text"
 * direction, implemented with CSS scroll timelines: the two lines
 * drift apart as the page scrolls. Fallback: static headline.
 */
function DriftBand({ down, up }: { down: string; up: string }) {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink py-4">
      <p className="drift-down font-disp font-medium text-[clamp(48px,10vw,144px)] leading-[0.9] tracking-tight whitespace-nowrap [--drift:-10vw]">
        {down}
      </p>
      <p className="drift-up text-outline font-disp font-medium text-[clamp(48px,10vw,144px)] leading-[0.9] tracking-tight whitespace-nowrap [--drift:10vw]">
        {up}
      </p>
    </div>
  )
}

/** Home body — shared across the three locales, copy via dictionary. */
export default function HomePage({ d }: { d: Dict }) {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader links={d.header.links} switcher={switcher(d.locale)} />
      <main className="grow">
        <section className="px-5 pt-16 pb-10">
          <Reveal as="h1" lines={d.hero.lines} stagger />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <ScrollWordReveal
              className="max-w-prose font-sans text-[15px] leading-[1.6] text-soft text-left"
              text={d.hero.paragraph}
            />
            <p className="font-sans text-[13px] text-faint">{d.hero.tick}</p>
          </div>
        </section>

        <Ticker items={d.ticker} />

        <section id="work" className="scroll-mt-16">
          <header className="flex items-baseline justify-between px-5 py-4">
            <h2 className="font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-left">
              {d.featured.heading}
            </h2>
            <Link
              href={d.locale === 'ko' ? '/#index' : `/${d.locale}/#index`}
              className="text-[13px] text-soft no-underline hover:underline decoration-1 underline-offset-4"
            >
              {d.featured.more}
            </Link>
          </header>
          <FeaturedWork work={d.featured.work} />
        </section>

        <Practice d={d.practice} />

        <section id="index" className="scroll-mt-16 px-5 pt-10 pb-10">
          <h2 className="pb-5 font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-left">
            {d.index.heading}
          </h2>
          <IndexList entries={d.index.entries} />
        </section>

        <DriftBand down={d.drift.down} up={d.drift.up} />
      </main>
      <StickerSlapFooter />
    </div>
  )
}
