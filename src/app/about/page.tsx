import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import Reveal from '@/components/reveal'

export const metadata: Metadata = {
  title: 'hex apply — about',
  description: 'About Yunseok Oh — design engineer.',
}

/**
 * About — Altason broadsheet colophon page.
 */
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="grow px-5 pt-16 pb-10">
        <Reveal as="h1" size="headline" lines={['About']} />
        <div className="mt-8 max-w-prose">
          <p className="font-sans text-[13px] leading-[1.6] text-soft">
            Yunseok Oh is a design engineer working on frontend systems,
            editorial grids and static-first tooling, under the studio name
            Hex&nbsp;Apply.
          </p>
        </div>
        <dl className="mt-10 border-t border-b border-ink">
          <div className="flex items-baseline justify-between border-b border-ink px-1 py-4 last:border-b-0">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Studio</dt>
            <dd className="font-sans text-[13px] text-soft">Hex Apply</dd>
          </div>
          <div className="flex items-baseline justify-between border-b border-ink px-1 py-4 last:border-b-0">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Focus</dt>
            <dd className="font-sans text-[13px] text-soft">Frontend / systems / editorial</dd>
          </div>
          <div className="flex items-baseline justify-between px-1 py-4">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Base</dt>
            <dd className="font-sans text-[13px] text-soft">Tokyo / Remote</dd>
          </div>
        </dl>
        <Link
          href="/"
          className="mt-10 inline-block font-sans text-[13px] no-underline hover:underline decoration-1 underline-offset-4"
        >
          → Back to the landing sheet
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
