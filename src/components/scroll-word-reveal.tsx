import { cn } from '@/lib/utils'

type ScrollWordRevealProps = {
  text: string
  className?: string
}

/**
 * Word-by-word scroll reveal. Pattern adapted from 21st.dev
 * "Scroll word reveal" (motiondotdev) — each word's opacity is
 * scrubbed by its own view-timeline range; --wr staggers the
 * words across the paragraph's entry. Fallback: fully visible.
 */
export default function ScrollWordReveal({ text, className }: ScrollWordRevealProps) {
  const words = text.split(' ')
  const total = words.length
  return (
    <p className={cn('word-reveal', className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ '--wr': `${Math.round((i / total) * 55)}%` } as React.CSSProperties}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
