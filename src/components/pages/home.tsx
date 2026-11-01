import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import Reveal from '@/components/reveal'
import Approach from '@/components/approach'
import TechStack from '@/components/tech-stack'
import StickerSlapFooter from '@/components/sticker-slap-footer'
import ScrollWordReveal from '@/components/scroll-word-reveal'
import { switcher, localePath, type Dict } from '@/lib/content'

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
  const rootPrefix = localePath(d.locale) === '/' ? '' : localePath(d.locale)
  return (
    <div id="top" lang={d.locale} className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader links={d.header.links} switcher={switcher(d.locale)} />

      <main className="grow">
        {/* HERO */}
        <section className="px-5 pt-16 pb-10">
          <Reveal as="h1" size="display-sm" lines={d.hero.headingLines} stagger />
          <div className="mt-8 flex max-w-3xl flex-col gap-6">
            <p className="font-sans t-lead text-ink text-left">
              {d.hero.lead}
            </p>
            <ScrollWordReveal
              className="font-sans t-body text-soft text-left max-w-prose"
              text={d.hero.body}
            />
            <div className="mt-2 flex gap-6 font-sans t-note text-ink">
              <Link
                href={`${rootPrefix}/#about`}
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
                href={`${rootPrefix}/#contact`}
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
            <p className="mt-4 font-sans t-note text-faint text-left">{d.about.sub}</p>
            <div className="mt-8 max-w-prose space-y-5">
              {d.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="view-rise font-sans t-body text-soft text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE — 21st.dev "Bento Feature Grid" (@ln-dev7 bento-01),
            reprinted in Altason monochrome: full-bleed hairline cell grid,
            01 as the full-width lead tile. */}
        <section id="expertise">
          <div className="scroll-mt-16 border-t border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.expertise.heading]} />
            <p className="mt-4 font-sans t-note text-faint text-left">{d.expertise.sub}</p>
            <ul className="mt-10 -mx-5 grid grid-cols-1 gap-px border-y border-ink bg-ink sm:grid-cols-2">
              {d.expertise.items.map((s, i) => (
                <li
                  key={s.n}
                  className={
                    'view-rise bg-background px-5 py-8 sm:px-7 sm:py-10' +
                    (i === 0 ? ' sm:col-span-2' : '')
                  }
                >
                  <span className="font-sans t-label text-faint tabular-nums">{s.n}</span>
                  <h3 className={'t-row mt-2 text-left' + (i === 0 ? ' sm:max-w-xl' : '')}>
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-prose font-sans t-body text-soft text-left">
                    {s.body}
                  </p>
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
            <div className="mt-8 max-w-3xl space-y-5">
              {d.philosophy.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="view-rise font-sans t-prose-lg text-soft text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CURRENT INTERESTS — 21st.dev badge/tag family, reprinted as
            radius-0 outline chips; replaces the ruled bullet list. */}
        <section id="interests">
          <div className="scroll-mt-16 border-y border-ink px-5 py-14">
            <Reveal as="h2" size="headline" lines={[d.interests.heading]} />
            <p className="mt-4 font-sans t-note text-faint text-left">{d.interests.intro}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {d.interests.bullets.map((b) => (
                <li
                  key={b}
                  className="view-rise border border-ink bg-background px-4 py-2.5 font-sans t-note text-soft"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT — 21st.dev "Call to Action" family (@brijr cta-1),
            reprinted as a full-bleed ink band with an oversized
            underline-on-hover link + sliding arrow. Paper drift band
            follows, so ink/paper alternate down the page. */}
        <section id="contact" className="scroll-mt-16 bg-ink text-paper">
          <div className="px-5 py-20">
            <Reveal as="h2" size="headline" lines={[d.contact.heading]} className="text-paper" />
            <p className="mt-6 max-w-prose font-sans t-body text-left text-paper/70">
              {d.contact.sub}
            </p>
            {d.contact.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-baseline gap-4 no-underline hover:underline decoration-1 underline-offset-8 font-disp font-medium text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[-0.02em] text-paper"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                >
                  ↗
                </span>
              </a>
            ))}
            <p className="mt-10 font-sans t-note text-paper/50">{d.contact.note}</p>
          </div>
        </section>

        <DriftBand down={d.drift.down} up={d.drift.up} />
      </main>

      <StickerSlapFooter
        wordmark="ryosuke kureha."
        navHref={`${rootPrefix}/#about`}
        navLabel="about"
        jobs={[
          { title: 'product engineering' },
          { title: 'software architecture' },
        ]}
        address={[]}
        note="*github is the inbox — issues are the quicker way in."
        credits={[
          { role: 'design & code', name: 'ryosuke kureha' },
          { role: 'company', name: 'BCROSSB Inc.', href: 'https://bcrossb.com' },
          { role: 'type', name: 'inter tight + felt-tip script' },
        ]}
      />
    </div>
  )
}
