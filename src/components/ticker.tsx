import { cn } from '@/lib/utils'

type TickerProps = {
  items: string[]
  className?: string
  /** Render a second, inverted row scrolling the opposite way. */
  parallel?: boolean
}

function Row({
  items,
  reverse = false,
  inverted = false,
  hidden,
}: {
  items: string[]
  reverse?: boolean
  inverted?: boolean
  hidden?: boolean
}) {
  const copies = [items, items, items, items]
  return (
    <div
      className={cn(
        'overflow-hidden py-3',
        inverted && 'bg-ink text-paper',
      )}
      aria-hidden={hidden ? 'true' : undefined}
    >
      <div
        className={cn(
          'flex w-max',
          reverse ? 'anim-scroll-rev' : 'anim-scroll',
        )}
      >
        {copies.map((copy, c) => (
          <div key={c} className="flex shrink-0" aria-hidden={c > 0 ? 'true' : undefined}>
            {copy.map((item) => (
              <span
                key={item}
                className="font-disp text-[clamp(20px,2.6vw,40px)] font-medium leading-[1.2] whitespace-nowrap px-8"
              >
                <span aria-hidden="true" className={cn('pr-8', inverted ? 'text-faint' : 'text-faint')}>
                  {reverse ? '—' : '/'}
                </span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Parallel marquee band. Pattern adapted from 21st.dev
 * "Scroll Velocity Text — opposing rows" (cnippet) as two
 * continuous CSS marquees moving in opposite directions; the
 * lower row is ink-inverted. Pauses on hover, static under
 * reduced-motion.
 */
export default function Ticker({ items, className, parallel = true }: TickerProps) {
  return (
    <div
      className={cn('pausable border-y border-ink', className)}
      aria-label="Disciplines"
    >
      <Row items={items} />
      {parallel && <Row items={items} reverse inverted hidden />}
    </div>
  )
}
