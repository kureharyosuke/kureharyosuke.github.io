import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type Entry = {
  n: string
  title: string
  role: string
  year: string
  href: string
  blurb: string
}

/* Real initiatives from github.com/kureharyosuke */
const ENTRIES: Entry[] = [
  {
    n: '01',
    title: 'legalize-kr',
    role: 'Legal data',
    year: '2026',
    href: 'https://github.com/kureharyosuke/legalize-kr',
    blurb: 'Modeling South-Korean statutes as a Git repository — one Markdown file per law, amendments tracked by their actual promulgation dates.',
  },
  {
    n: '02',
    title: 'agentmemory',
    role: 'Agent systems',
    year: '2026',
    href: 'https://github.com/kureharyosuke/agentmemory',
    blurb: 'Persistent memory for AI coding agents, distilled from production agent runs.',
  },
  {
    n: '03',
    title: 'ponytail',
    role: 'Skills · DX',
    year: '2026',
    href: 'https://github.com/kureharyosuke/ponytail',
    blurb: 'A skill that makes AI agents think like the laziest senior dev in the room — the shortest path that actually works.',
  },
  {
    n: '04',
    title: 'openrig',
    role: 'Agent orchestration',
    year: '2026',
    href: 'https://github.com/kureharyosuke/openrig',
    blurb: 'Build your own network of agents out of Claude Code, Codex and friends.',
  },
  {
    n: '05',
    title: 'Agent-Reach',
    role: 'Agent tooling',
    year: '2026',
    href: 'https://github.com/kureharyosuke/Agent-Reach',
    blurb: 'Give your AI agent eyes to see the entire internet — read, save and index.',
  },
  {
    n: '06',
    title: 'rea',
    role: 'Reverse engineering',
    year: '2026',
    href: 'https://github.com/kureharyosuke/rea',
    blurb: 'Reverse engineer anything with agents — from app behavior down to the bytes.',
  },
  {
    n: '07',
    title: 'hyperframes',
    role: 'Video pipelines',
    year: '2026',
    href: 'https://github.com/kureharyosuke/hyperframes',
    blurb: 'Write HTML. Render video. Built for agents.',
  },
  {
    n: '08',
    title: 'skills',
    role: 'Engineering DX',
    year: '2026',
    href: 'https://github.com/kureharyosuke/skills',
    blurb: 'Skills for real engineers — straight from the .agents directory.',
  },
]

/**
 * Selected index — shadcn Accordion restyled as ruled broadsheet
 * rows: radius 0, black hairlines, display type triggers.
 * Rows rise into view on scroll (view-rise). Hover underlines
 * only; colors never change.
 */
export default function IndexList({ className }: { className?: string }) {
  return (
    <Accordion
      type="multiple"
      className={cn('border-t border-b border-ink', className)}
    >
      {ENTRIES.map((entry) => (
        <AccordionItem
          key={entry.n}
          value={entry.n}
          className="view-rise border-ink px-1 last:border-b-0"
        >
          <AccordionTrigger className="rounded-none py-5">
            <div className="flex w-full items-baseline gap-4 text-left">
              <span className="pt-1 font-sans text-[13px] text-faint tabular-nums">{entry.n}</span>
              <span className="grow font-disp font-medium leading-[1.2] text-[clamp(20px,2.4vw,32px)]">
                {entry.title}
              </span>
              <span className="hidden sm:block font-sans text-[13px] text-soft">{entry.role}</span>
              <span className="font-sans text-[13px] text-faint tabular-nums">{entry.year}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pl-10 font-sans text-[13px] leading-[1.6] text-soft text-left">
            <p className="max-w-prose">{entry.blurb}</p>
            <Link
              href={entry.href}
              className="mt-2 inline-block no-underline hover:underline decoration-1 underline-offset-4"
            >
              View on GitHub ↗
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
