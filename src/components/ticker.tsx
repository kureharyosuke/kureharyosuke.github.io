import { cn } from '@/lib/utils'

type TickerProps = {
  items: string[]
  className?: string
}

/**
 * Infinite marquee. Pattern adapted from 21st.dev "Marquee"
 * (lukacho/ui) — duplicated track + CSS translateX loop,
 * .pausable pauses on hover, static under reduced-motion.
 */
export default function Ticker({ items, className }: TickerProps) {
  const copies = [items, items, items, items]
  return (
    <div
      className={cn('pausable overflow-hidden border-y border-ink py-3', className)}
      aria-label="Disciplines"
    >
      <div className="anim-scroll flex w-max">
        {copies.map((copy, c) => (
          <div key={c} className="flex shrink-0" aria-hidden={c > 0 ? 'true' : undefined}>
            {copy.map((item) => (
              <span
                key={item}
                className="font-disp text-base font-medium leading-[1.2] whitespace-nowrap px-6"
              >
                <span aria-hidden="true" className="text-faint pr-6">/</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
