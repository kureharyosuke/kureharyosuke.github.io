import Link from 'next/link'
import { cn } from '@/lib/utils'
import ScriptWordmark from './script-wordmark'

export type HeaderLink = { href: string; label: string }
export type SwitcherItem = { href: string; label: string; current: boolean }

/**
 * Wordmark row. Deliberately a div (not <nav>) — per the
 * Altason review. The felt-tip ScriptWordmark replaces the text
 * logo (same single-stroke alphabet as the favicon and the
 * sticker footer). The hairline under it is a scroll progress
 * bar (21st.dev "Scroll Progress", ibelick) scrubbed by the
 * root scroll timeline, CSS-only.
 */
export default function SiteHeader({
  links,
  switcher: switcherItems,
  className,
}: {
  links: HeaderLink[]
  switcher: SwitcherItem[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative sticky top-0 z-10 flex items-baseline justify-between bg-background px-5 py-4 border-b border-ink',
        className,
      )}
      aria-label="Site"
    >
      <Link
        href="/"
        className="text-ink no-underline"
        aria-label="Yunseok Oh — home"
      >
        <ScriptWordmark text="yunseok oh." />
      </Link>
      <ul className="flex items-baseline gap-5 text-[13px] text-soft">
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
        {switcherItems.map((item) => (
          <li key={item.href} className="tabular-nums">
            {item.current ? (
              <span className="text-ink underline decoration-1 underline-offset-4">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="no-underline hover:underline decoration-1 underline-offset-4"
                hrefLang={item.label === '한국어' ? 'ko' : item.label === 'English' ? 'en' : 'ja'}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px]"
      >
        <div className="scroll-progress h-full bg-ink" />
      </div>
    </div>
  )
}
