import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type StaggerTextProps = {
  text: string
  className?: string
  delayMs?: number
}

/**
 * Per-letter stagger on hover. Pattern adapted from 21st.dev
 * "Text Stagger Hover" (youcefbnm) — pure CSS: group hover +
 * per-letter transition delays. Transform only, colors untouched.
 */
export default function StaggerText({ text, className, delayMs = 16 }: StaggerTextProps) {
  return (
    <span className={cn('group/stag', className)} aria-label={text} role="text">
      {text.split('').map((ch, i) => {
        const glyph = ch === ' ' ? '\u00A0' : ch
        return (
          <span
            key={`${ch}-${i}`}
            aria-hidden="true"
            className="inline-block will-change-transform [transition-delay:calc(var(--i,0)*var(--step,0ms))] transition-transform duration-300 ease-out motion-safe:group-hover/stag:-translate-y-[0.12em] motion-reduce:transition-none"
            style={{ '--i': i, '--step': `${delayMs}ms` } as CSSProperties}
          >
            {glyph}
          </span>
        )
      })}
    </span>
  )
}
