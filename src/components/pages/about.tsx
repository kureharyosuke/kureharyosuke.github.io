import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import StickerSlapFooter from '@/components/sticker-slap-footer'
import Reveal from '@/components/reveal'
import { switcher, type Dict } from '@/lib/content'

/** About body — shared across the three locales, copy via dictionary. */
export default function AboutPage({ d }: { d: Dict }) {
  return (
    <div lang={d.locale} className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader links={d.header.links} switcher={switcher(d.locale, 'about')} />
      <main className="grow px-5 pt-16 pb-10">
        <Reveal as="h1" size="headline" lines={[d.aboutPage.heading]} />
        <div className="view-rise mt-8 max-w-prose">
          <p className="font-sans t-body text-soft text-left">
            {d.aboutPage.paragraph}
          </p>
        </div>
        <dl className="mt-10 border-t border-b border-ink">
          {d.aboutPage.rows.map((row) => (
            <div
              key={row.label}
              className="view-rise flex items-baseline justify-between border-ink px-1 py-4 [&:not(:last-child)]:border-b"
            >
              <dt className="font-sans t-label text-faint">
                {row.label}
              </dt>
              <dd className="font-sans t-note text-soft">
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline decoration-1 underline-offset-4"
                  >
                    {row.value} ↗
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <Link
          href={d.locale === 'ko' ? '/' : `/${d.locale}`}
          className="view-rise mt-10 inline-block font-sans t-note no-underline hover:underline decoration-1 underline-offset-4"
        >
          {d.aboutPage.back}
        </Link>
      </main>
      <StickerSlapFooter
        wordmark="ryosuke kureha."
        navHref="/"
        navLabel="home"
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
