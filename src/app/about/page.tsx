import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import Reveal from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Yunseok Oh — about',
  description: 'About Yunseok Oh — design & AI engineer at BCROSSB.inc, Tokyo.',
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
          <p className="font-sans text-[15px] leading-[1.6] text-soft text-left">
            Yunseok Oh is a design &amp; AI engineer based in Tokyo, working at
            BCROSSB.inc. He ships agent systems as open source: persistent
            memory for coding agents, agent networks built on Claude Code and
            Codex, legal data infrastructure for Korean statutes, and skills
            frameworks that make agents think like the laziest senior dev in
            the room.
          </p>
        </div>
        <dl className="mt-10 border-t border-b border-ink">
          <div className="flex items-baseline justify-between border-b border-ink px-1 py-4">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Company</dt>
            <dd className="font-sans text-[13px] text-soft">BCROSSB.inc</dd>
          </div>
          <div className="flex items-baseline justify-between border-b border-ink px-1 py-4">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Focus</dt>
            <dd className="font-sans text-[13px] text-soft">Agent systems · AI tooling · Editorial design</dd>
          </div>
          <div className="flex items-baseline justify-between px-1 py-4">
            <dt className="font-sans text-[11px] uppercase tracking-[0.08em] text-faint">Base</dt>
            <dd className="font-sans text-[13px] text-soft">Tokyo, Japan</dd>
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
