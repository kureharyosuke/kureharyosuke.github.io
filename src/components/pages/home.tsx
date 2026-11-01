import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import Approach from '@/components/approach'
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
                href={d.locale === 'ko' ? '/#about' : `/${d.locale}/#about`}
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {d.hero.ctaAbout}
              </Link>
              <a
                href={d.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {d.hero.ctaGithub} ↗
              </a>
              <Link
                href={d.locale === 'ko' ? '/#contact' : `/${d.locale}/#contact`}
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {d.hero.ctaContact}
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about">
          <div className="scroll-mt-16 border-t border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.about.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.about.sub}</p>
            <div className="mt-8 max-w-prose">
              {d.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="view-rise font-sans text-[15px] leading-[1.65] text-soft text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise">
          <div className="scroll-mt-16 border-t border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.expertise.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.expertise.sub}</p>
            <ul className="mt-10 border-t border-ink">
              {d.expertise.items.map((s) => (
                <li
                  key={s.n}
                  className="view-rise grid grid-cols-1 gap-2 border-b border-ink py-6 sm:grid-cols-[64px_1fr] sm:gap-6"
                >
                  <span className="font-sans text-[13px] text-faint tabular-nums sm:pt-1">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-disp font-medium text-[clamp(20px,2.6vw,36px)] leading-[0.9] tracking-tight text-left">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-prose font-sans text-[13px] leading-[1.65] text-soft text-left">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MY APPROACH */}
        <Approach d={d.approach} />

        {/* TECHNICAL SKILLS */}
        <TechStack d={d.stack} />

        {/* PHILOSOPHY band */}
        <section id="philosophy">
          <div className="scroll-mt-16 border-t border-ink bg-background px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.philosophy.heading]} />
            <div className="mt-8 max-w-3xl">
              {d.philosophy.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="view-rise font-sans text-[clamp(17px,2vw,22px)] leading-[1.7] text-soft text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CURRENT INTERESTS */}
        <section id="interests">
          <div className="scroll-mt-16 border-y border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.interests.heading]} />
            <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.interests.intro}</p>
            <ul className="mt-8 max-w-prose font-sans text-[15px] leading-[1.7] text-soft">
              {d.interests.bullets.map((b) => (
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
            <p className="max-w-prose font-sans text-[15px] leading-[1.65] text-soft text-left">
              {d.contact.sub}
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
            <p className="mt-10 font-sans text-[13px] text-faint">{d.contact.note}</p>
          </div>
        </section>

        <DriftBand down={d.drift.down} up={d.drift.up} />
      </main>

      <StickerSlapFooter
        wordmark="ryosuke kureha."
        navHref={d.locale === 'ko' ? '/#about' : `/${d.locale}/#about`}
        navLabel="about"
        jobs={[
          { title: 'product engineering' },
          { title: 'software architecture' },
        ]}
        address={[]}
        note="*github is the inbox — issues are the quicker way in."
        credits={[
          { role: 'design & code', name: 'ryosuke kureha' },
          { role: 'type', name: 'inter tight + felt-tip script' },
        ]}
      />
    </div>
  )
}
