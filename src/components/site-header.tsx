import Link from 'next/link'
import { cn } from '@/lib/utils'
import ScriptWordmark from './script-wordmark'
import LocaleSelect from './locale-select'
import type { SwitcherItem } from './locale-select'

export type HeaderLink = { href: string; label: string }
export type { SwitcherItem }

/**
 * Wordmark row as a banner landmark with a primary navigation
 * list, so crawlers and assistive tech can tell the links apart
 * from the wordmark. The felt-tip ScriptWordmark replaces the text
 * logo (same single-stroke alphabet as the favicon and the
 * sticker footer). Language switching is a native select box.
 * The hairline under it is a scroll progress bar (21st.dev
 * "Scroll Progress", ibelick) scrubbed by the root scroll
 * timeline, CSS-only.
 */
export default function SiteHeader({
  links,
  switcher: switcherItems,
  homeHref = '/',
  className,
}: {
  links: HeaderLink[]
  switcher: SwitcherItem[]
  homeHref?: string
  className?: string
}) {
  return (
    <header
      className={cn(
        'relative sticky top-0 z-10 flex items-baseline justify-between gap-4 bg-background px-5 py-4 border-b border-ink',
        className,
      )}
    >
      <Link
        href={homeHref}
        className="text-ink no-underline"
        aria-label="Ryosuke Kureha — home"
      >
        <ScriptWordmark text="ryosuke kureha." />
      </Link>
      <nav aria-label="Primary" className="flex items-baseline">
        <ul className="flex items-baseline gap-5 text-soft t-note">
          {links.map((link) => (
            <li key={link.href} className="hidden sm:block">
              <Link
                href={link.href}
                className="no-underline hover:underline decoration-1 underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <LocaleSelect items={switcherItems} />
          </li>
        </ul>
      </nav>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px]"
      >
        <div className="scroll-progress h-full bg-ink" />
      </div>
    </header>
  )
}
