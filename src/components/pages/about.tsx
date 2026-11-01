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
        <Reveal as="h1" size="headline" lines={[d.aboutPage.heading]} />
        <div className="view-rise mt-8 max-w-prose">
          <p className="font-sans text-[15px] leading-[1.65] text-soft text-left">
            {d.aboutPage.paragraph}
          </p>
        </div>
        <dl className="mt-10 border-t border-b border-ink">
          {d.aboutPage.rows.map((row) => (
            <div
              key={row.label}
              className="view-rise flex items-baseline justify-between border-ink px-1 py-4 [&:not(:last-child)]:border-b"
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
          {d.aboutPage.back}
        </Link>
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
