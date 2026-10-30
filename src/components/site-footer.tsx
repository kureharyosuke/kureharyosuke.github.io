import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Reveal from './reveal'
import { cn } from '@/lib/utils'

const PROFILE_HREF = 'https://github.com/kureharyosuke'

/**
 * Colophon + large CTA, built on shadcn Button.
 * The oversized closing line borrows the 21st.dev
 * "Motion Footer" idea — staggered reveal, static afterwards.
 */
export default function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn('border-t border-ink px-5 pt-12 pb-6', className)} id="contact">
      <div className="flex flex-wrap justify-between gap-4 pb-6 font-sans text-[11px] uppercase tracking-[0.08em] text-faint">
        <span>Status — Open to opportunities</span>
        <span>Base — Tokyo, Japan</span>
        <span>at BCROSSB.inc</span>
      </div>
      <Reveal as="p" size="headline" lines={['Get in', 'touch —']} className="pb-6" />
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          'h-auto rounded-none border-ink bg-background px-8 py-5 font-disp text-[clamp(24px,3.2vw,48px)] font-medium leading-[1.2]',
          'hover:bg-transparent hover:underline decoration-1 underline-offset-4 text-left',
        )}
      >
        <Link href={PROFILE_HREF}>github.com/kureharyosuke</Link>
      </Button>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-12">
        <Link
          href="/about"
          className="text-[13px] text-soft no-underline hover:underline decoration-1 underline-offset-4"
        >
          About
        </Link>
        <a
          href="#top"
          className="text-[13px] text-soft no-underline hover:underline decoration-1 underline-offset-4"
        >
          Back to top
        </a>
        <span className="text-[13px] text-faint">© 2026 Yunseok Oh</span>
      </div>
    </footer>
  )
}
