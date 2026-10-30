import type { CSSProperties, JSX } from 'react'
import { cn } from '@/lib/utils'

type RevealSize = 'display' | 'headline'
type RevealProps = {
  lines: string[]
  as?: keyof JSX.IntrinsicElements
  size?: RevealSize
  className?: string
}

/**
 * Staggered line reveal. Pattern adapted from 21st.dev
 * "Slide Up Text" (tom/Spell) — CSS overflow mask + staggered
 * delays via .anim-rise (globals.css), no JS runtime.
 */
export default function Reveal({ lines, as: Tag = 'div', size = 'display', className }: RevealProps) {
  return (
    <Tag
      className={cn(
        'font-disp font-medium text-ink leading-[0.85] tracking-tight text-left',
        size === 'display' && 'text-[min(16vw,288px)]',
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
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
