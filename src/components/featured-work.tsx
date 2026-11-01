import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type Work = {
  n: string
  title: string
  year: string
  field: string
  href: string
  blurb: string
  plate: 'lines' | 'dots' | 'hatch'
}

/* Monochrome pattern plates — CSS patterns, no bitmaps (static export). */
const PLATES = {
  lines: 'bg-[image:repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_14px)]',
  dots: 'bg-[image:radial-gradient(circle,var(--color-ink)_1.2px,transparent_1.3px)]',
  hatch: 'bg-[image:repeating-linear-gradient(45deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_10px)]',
} as const

/**
 * Featured work — stacking cards. Pattern adapted from 21st.dev
 * "Stacking Cards" (danielpetho) as CSS sticky stacking: each card
 * pins below the header at a stepped offset, the next card rides
 * over it. view-rise fades each deck in on scroll.
 */
export default function FeaturedWork({
  work,
  className,
}: {
  work: Work[]
  className?: string
}) {
  return (
    <ul className={cn('grid grid-cols-1 border-t border-ink', className)}>
      {work.map((item, i) => (
        <li
          key={item.n}
          className="view-rise border-b border-ink bg-background"
          style={{ position: 'sticky', top: `${56 + i * 12}px`, zIndex: i + 1 } as React.CSSProperties}
        >
          <Card className="group/card rounded-none border-x-0 border-t-0 border-b border-b-ink bg-background p-5 shadow-none">
            <CardContent className="flex flex-col gap-5 p-0 md:flex-row md:items-stretch md:gap-10">
              <div
                aria-hidden="true"
                className={cn(
                  'w-full shrink-0 bg-background bg-[size:14px_14px] transition-[background-position] duration-700 md:h-[34vh] md:w-1/3 group-hover/card:bg-[position:14px_14px]',
                  PLATES[item.plate],
                )}
              />
              <div className="flex min-w-0 grow flex-col items-start justify-center gap-4">
                <div className="flex gap-4 font-sans text-[11px] uppercase tracking-[0.08em] text-faint">
                  <Badge variant="outline" className="rounded-none border-ink/40 bg-transparent px-2 py-0.5 text-[11px] text-faint">
                    {item.n}
                  </Badge>
                  <span className="leading-[1.2]">{item.field}</span>
                  <span className="leading-[1.2]">{item.year}</span>
                </div>
                <Link
                  href={item.href}
                  className="font-disp font-medium leading-[1.2] text-[clamp(28px,3.4vw,56px)] no-underline hover:underline decoration-1 underline-offset-4 text-left"
                >
                  {item.title}
                </Link>
                <p className="max-w-prose font-sans text-[13px] leading-[1.6] text-soft text-left">
                  {item.blurb}
                </p>
                <span className="font-sans text-[13px] text-faint">View on GitHub ↗</span>
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  )
}
