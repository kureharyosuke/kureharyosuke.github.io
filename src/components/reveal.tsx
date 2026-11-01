import type { CSSProperties, JSX } from 'react'
import StaggerText from './stagger-text'
import { cn } from '@/lib/utils'

type RevealSize = 'display' | 'display-sm' | 'headline'
type RevealProps = {
  lines: string[]
  as?: keyof JSX.IntrinsicElements
  size?: RevealSize
  className?: string
  /** Per-letter hover stagger (21st.dev "Text Stagger Hover"). */
  stagger?: boolean
}

/**
 * Staggered line reveal. Pattern adapted from 21st.dev
 * "Slide Up Text" (tom/Spell) — CSS overflow mask + staggered
 * delays via .anim-rise (globals.css), no JS runtime.
 */
export default function Reveal({
  lines,
  as: Tag = 'div',
  size = 'display',
  className,
  stagger = false,
}: RevealProps) {
  return (
    <Tag
      className={cn(
        'font-disp font-medium text-ink leading-[0.85] tracking-[-0.04em] text-left',
        size === 'display' && 'text-[min(16vw,288px)]',
        size === 'display-sm' && 'text-[min(10vw,180px)] whitespace-nowrap',
        size === 'headline' && 'text-[clamp(40px,8vw,96px)]',
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <span
            className="anim-rise"
            style={{ '--delay': `${i * 90}ms` } as CSSProperties}
          >
            {stagger ? <StaggerText text={line} /> : line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
