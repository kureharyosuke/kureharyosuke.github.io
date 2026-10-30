import Link from 'next/link'
import StaggerText from './stagger-text'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/#index', label: 'Index' },
  { href: '/about', label: 'About' },
]

/**
 * Wordmark row. Deliberately a div (not <nav>) — per the
 * Altason review. Underline-only hovers, left aligned.
 */
export default function SiteHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 flex items-baseline justify-between bg-background px-5 py-4 border-b border-ink',
        className,
      )}
      aria-label="Site"
    >
      <Link
        href="/"
        className="font-disp font-medium text-base leading-[1.2] no-underline hover:underline decoration-1 underline-offset-4"
      >
        <StaggerText text="Hex Apply" delayMs={24} />
      </Link>
      <ul className="flex gap-5 text-[13px] text-soft">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="no-underline hover:underline decoration-1 underline-offset-4"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
