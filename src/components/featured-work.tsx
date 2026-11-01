import type { WorkItem } from '@/lib/content'
import { cn } from '@/lib/utils'

/* Monochrome pattern plates — CSS patterns, no bitmaps (static export). */
const PLATES = {
  lines: 'bg-[image:repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_14px)]',
  dots: 'bg-[image:radial-gradient(circle,var(--color-ink)_1.2px,transparent_1.3px)]',
  hatch: 'bg-[image:repeating-linear-gradient(45deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_10px)]',
} as const

/**
 * Featured work — Selected Work as sticky stacking cards. Pattern
 * adapted from 21st.dev "Stacking Cards" (danielpetho) as CSS sticky
 * stacking: each card pins below the header at a stepped offset, the
 * next card rides over it. view-rise fades each deck in on scroll.
 * Hover never changes color — underline only.
 */
export default function FeaturedWork({
  work,
  className,
}: {
  work: WorkItem[]
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
          <article className="group/card flex flex-col gap-5 bg-background p-5 md:flex-row md:items-stretch md:gap-10">
            <div
              aria-hidden="true"
              className={cn(
                'w-full shrink-0 bg-background bg-[size:14px_14px] transition-[background-position] duration-700 md:h-[34vh] md:w-1/3 group-hover/card:bg-[position:14px_14px]',
                PLATES[item.plate],
              )}
            />
            <div className="flex min-w-0 grow flex-col items-start justify-center gap-3 text-left">
              <div className="flex gap-4 font-sans text-[11px] uppercase tracking-[0.08em] text-faint">
                <span className="font-normal leading-[1.2]">{item.n}</span>
                <span className="leading-[1.2]">{item.tagline}</span>
              </div>
              <h3 className="font-disp font-medium leading-[1.2] text-[clamp(28px,3.4vw,56px)] tracking-tight text-ink">
                {item.website ? (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline decoration-1 underline-offset-4"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </h3>
              <p className="max-w-prose font-sans text-[13px] leading-[1.65] text-soft">
                {item.body}
              </p>
              {item.bullets.length > 0 && (
                <ul className="grid gap-1.5 font-sans text-[13px] leading-[1.6] text-soft">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden="true" className="text-faint">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.tech && (
                <p className="font-sans text-[13px] text-faint">
                  <span className="uppercase tracking-[0.08em]">{item.techLabel ?? 'Tech'}</span>
                  {' · '}
                  <span className="text-soft">{item.tech}</span>
                </p>
              )}
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] text-ink no-underline hover:underline decoration-1 underline-offset-4"
                >
                  Website ↗
                </a>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
