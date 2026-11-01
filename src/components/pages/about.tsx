import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import StickerSlapFooter from '@/components/sticker-slap-footer'
import Reveal from '@/components/reveal'
import { switcher, type Dict } from '@/lib/content'

/** About body — shared across the three locales, copy via dictionary. */
export default function AboutPage({ d }: { d: Dict }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader links={d.header.links} switcher={switcher(d.locale, 'about')} />
      <main className="grow px-5 pt-16 pb-10">
        <Reveal as="h1" size="headline" lines={[d.about.heading]} />
        <div className="view-rise mt-8 max-w-prose">
          <p className="font-sans text-[15px] leading-[1.6] text-soft text-left">
            {d.about.paragraph}
          </p>
        </div>
        <dl className="mt-10 border-t border-b border-ink">
          {d.about.rows.map((row, i) => (
            <div
              key={row.label}
              className={
                'flex items-baseline justify-between border-ink px-1 py-4 view-rise' +
                (i < d.about.rows.length - 1 ? ' border-b' : '')
              }
            >
              <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">
                {row.label}
              </dt>
              <dd className="font-sans text-[13px] text-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <Link
          href={d.locale === 'ko' ? '/' : `/${d.locale}`}
          className="view-rise mt-10 inline-block font-sans text-[13px] no-underline hover:underline decoration-1 underline-offset-4"
        >
          {d.about.back}
        </Link>
      </main>
      <StickerSlapFooter />
    </div>
  )
}
