import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import FeaturedWork from '@/components/featured-work'
import Process from '@/components/process'
import TechStack from '@/components/tech-stack'
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
        {/* HERO */}
        <section className="px-5 pt-16 pb-10">
          <Reveal as="h1" size="display-sm" lines={d.hero.headingLines} stagger />
          <div className="mt-8 flex max-w-3xl flex-col gap-6">
            <p className="font-sans text-[15px] leading-[1.6] font-medium text-ink text-left">
              {d.hero.lead}
            </p>
            <ScrollWordReveal
              className="font-sans text-[15px] leading-[1.6] text-soft text-left"
              text={d.hero.body}
            />
            <div className="mt-2 flex gap-6 font-sans text-[13px] text-ink">
              <Link
                href={d.locale === 'ko' ? '/#work' : `/${d.locale}/#work`}
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {d.hero.ctaWork}
              </Link>
              <Link
                href={d.locale === 'ko' ? '/#contact' : `/${d.locale}/#contact`}
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {d.hero.ctaContact}
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT — the three principles */}
        <section id="about">
          <div className="scroll-mt-16 border-t border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.about.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.about.sub}</p>
            <div className="mt-8 max-w-prose">
              {d.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="font-sans text-[15px] leading-[1.65] text-soft text-left">
                  {p}
                </p>
              ))}
            </div>
            <ol className="mt-12 grid grid-cols-1 gap-px border border-ink bg-ink md:grid-cols-3">
              {d.about.principles.map((p) => (
                <li key={p.n} className="view-rise bg-background p-5">
                  <span className="font-sans text-[13px] text-faint tabular-nums">{p.n}</span>
                  <h3 className="mt-3 font-disp font-medium text-[clamp(20px,2.4vw,32px)] leading-[0.9] tracking-tight text-left">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-sans text-[13px] leading-[1.65] text-soft text-left">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHAT I DO */}
        <section id="services">
          <div className="scroll-mt-16 border-t border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.services.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.services.sub}</p>
            <ul className="mt-10 grid grid-cols-1 gap-px bg-ink md:grid-cols-2">
              {d.services.items.map((s, i) => (
                <li key={s.title} className="view-rise bg-background p-5">
                  <h3 className="font-disp font-medium text-[clamp(20px,2.4vw,32px)] leading-[0.9] tracking-tight text-left">
                    <span className="mr-3 font-sans text-[13px] text-faint tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-prose font-sans text-[13px] leading-[1.65] text-soft text-left">
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="scroll-mt-16">
          <header className="px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.work.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.work.sub}</p>
          </header>
          <FeaturedWork work={d.work.items} />
        </section>

        {/* HOW I WORK */}
        <Process d={d.process} />

        {/* TECH STACK */}
        <TechStack d={d.stack} />

        {/* CURRENTLY EXPLORING */}
        <section id="exploring">
          <div className="scroll-mt-16 border-y border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.exploring.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.exploring.intro}</p>
            <ul className="mt-8 max-w-prose font-sans text-[15px] leading-[1.7] text-soft">
              {d.exploring.bullets.map((b) => (
                <li key={b} className="view-rise flex gap-3 border-b border-ink/30 py-3">
                  <span aria-hidden="true" className="text-faint">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT band */}
        <section id="contact" className="scroll-mt-16 px-5 py-16">
          <Reveal as="h2" size="headline" lines={[d.contact.heading]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-sans text-[15px] leading-[1.6] font-medium text-ink text-left">
              {d.contact.lead}
            </p>
            <p className="mt-4 max-w-prose font-sans text-[15px] leading-[1.65] text-soft text-left">
              {d.contact.sub}
            </p>
            <p className="mt-10 font-disp font-medium text-[clamp(40px,8vw,96px)] leading-[0.85] tracking-tight text-ink text-left">
              {d.contact.outro}
            </p>
            <div className="mt-8 flex flex-wrap items-baseline gap-6 font-sans text-[13px] text-ink">
              {d.contact.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-1 underline-offset-4"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            <p className="mt-6 font-sans text-[13px] text-faint">{d.contact.note}</p>
          </div>
        </section>

        <DriftBand down={d.drift.down} up={d.drift.up} />
      </main>

      <StickerSlapFooter
        wordmark="ryosuke kureha."
        navHref={d.locale === 'ko' ? '/#work' : `/${d.locale}/#work`}
        jobs={[
          { title: 'product engineering' },
          { title: 'AI automation' },
        ]}
        address={['bcrossb.inc', 'tokyo, japan']}
        note="*github is the inbox — issues are the quicker way in."
        credits={[
          { role: 'design & code', name: 'ryosuke kureha' },
          { role: 'at', name: 'bcrossb.inc, tokyo' },
          { role: 'type', name: 'inter tight + felt-tip script' },
        ]}
      />
    </div>
  )
}
