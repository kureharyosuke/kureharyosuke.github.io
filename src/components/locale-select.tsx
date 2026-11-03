'use client'

import * as React from 'react'

export type SwitcherItem = { href: string; label: string; current: boolean }

/** GitHub Pages canonicalises directory URLs with a trailing slash. */
const internalHref = (href: string) =>
  href === '/' ? '/' : `${href.replace(/\/+$/, '')}/`

/**
 * LocaleSelect — the i18n switcher as a native select box, restyled
 * to the monochrome broadsheet: radius 0, ink hairline, system chevron
 * suppressed in favor of a drawn one. Navigates with the app router
 * (client push, no full reload); the <noscript> fallback keeps the
 * links working without JavaScript.
 */
export default function LocaleSelect({ items, className }: { items: SwitcherItem[]; className?: string }) {
  const current = internalHref(items.find((i) => i.current)?.href ?? '/')
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.assign(e.target.value)
  }
  return (
    <>
      <label className={className}>
        <span className="sr-only">Language</span>
        <span className="relative inline-flex items-baseline">
          <select
            value={current}
            onChange={onChange}
            className="appearance-none rounded-none border border-ink bg-background py-0.5 pl-2 pr-5 font-sans t-note text-soft outline-none focus-visible:outline focus-visible:outline-[2.5px] focus-visible:outline-offset-2 focus-visible:outline-ink/60"
          >
            {items.map((item) => (
              <option key={item.href} value={internalHref(item.href)}>
                {item.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 8 6"
            className="pointer-events-none absolute right-1 top-1/2 h-[6px] w-2 -translate-y-[2px]"
          >
            <path d="M1 1.5L4 4.5L7 1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </label>
      <noscript>
        <span className="flex gap-3">
          {items
            .filter((i) => !i.current)
            .map((i) => (
              <a key={i.href} href={internalHref(i.href)} className="no-underline hover:underline decoration-1 underline-offset-4">
                {i.label}
              </a>
            ))}
        </span>
      </noscript>
    </>
  )
}
