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
  plate: 'lines' | 'dots' | 'hatch'
}

const WORK: Work[] = [
  { n: '01', title: 'Hex Apply', year: '2026', field: 'Frontend', href: '/#index', plate: 'lines' },
  { n: '02', title: 'Broadsheet — Type System', year: '2025', field: 'Identity', href: '/#index', plate: 'dots' },
  { n: '03', title: 'Static Export Toolkit', year: '2024', field: 'Infra', href: '/#index', plate: 'hatch' },
]

/* Monochrome pattern plates — CSS patterns, no bitmaps (static export). */
const PLATES = {
  lines: 'bg-[image:repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_14px)]',
  dots: 'bg-[image:radial-gradient(circle,var(--color-ink)_1.2px,transparent_1.3px)]',
  hatch: 'bg-[image:repeating-linear-gradient(45deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_10px)]',
} as const

/**
 * Featured work — full-bleed 3-column broadsheet grid built on
 * shadcn Card: radius 0, 1px black border, 20px padding.
 * Hover shifts the plate pattern; colors never change.
 */
export default function FeaturedWork({ className }: { className?: string }) {
  return (
    <ul className={cn('grid grid-cols-1 md:grid-cols-3 border-t border-ink', className)}>
      {WORK.map((item, i) => (
        <li key={item.n} className={cn('border-b border-ink md:border-r', i === WORK.length - 1 && 'md:border-r-0')}>
          <Card className="group/card rounded-none border-0 p-5 bg-background shadow-none gap-4">
            <div
              aria-hidden="true"
              className={cn(
                'aspect-4/5 bg-background bg-[size:14px_14px] transition-[background-position] duration-700 motion-safe:group-hover/card:bg-[position:14px_14px]',
                PLATES[item.plate],
              )}
            />
            <CardContent className="flex flex-col items-start gap-2 p-0">
              <div className="flex gap-4 font-sans text-[11px] uppercase tracking-[0.08em] text-faint">
                <Badge variant="outline" className="rounded-none border-ink/40 bg-transparent px-2 py-0.5 text-[11px] text-faint">
                  {item.n}
                </Badge>
                <span className="leading-[1.2]">{item.field}</span>
                <span className="leading-[1.2]">{item.year}</span>
              </div>
              <Link
                href={item.href}
                className="font-disp font-medium leading-[1.2] text-[clamp(20px,1.8vw,28px)] no-underline hover:underline decoration-1 underline-offset-4 text-left"
              >
                {item.title}
              </Link>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  )
}
