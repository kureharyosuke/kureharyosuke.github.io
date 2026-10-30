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
}

const ENTRIES: Entry[] = [
  { n: '01', title: 'Hex Apply', role: 'Frontend engineering', year: '2026', href: '/#work' },
  { n: '02', title: 'Broadsheet Type System', role: 'Identity & tooling', year: '2025', href: '/#work' },
  { n: '03', title: 'Static Export Toolkit', role: 'Infrastructure', year: '2024', href: '/#work' },
  { n: '04', title: 'Monochrome Grid Studies', role: 'Editorial design', year: '2022', href: '/#work' },
  { n: '05', title: 'Early Experiments', role: 'Miscellaneous', year: '2018', href: '/#work' },
]

/**
 * Selected index — shadcn Accordion restyled as ruled broadsheet
 * rows: radius 0, black hairlines, display type triggers.
 * Hover underlines only; colors never change.
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
          className="border-ink px-1 last:border-b-0"
        >
          <AccordionTrigger className="rounded-none py-5 ">
            <div className="flex w-full items-baseline gap-4 text-left">
              <span className="pt-1 font-sans text-[13px] text-faint tabular-nums">{entry.n}</span>
              <span className="font-disp font-medium leading-[1.2] text-[clamp(20px,2.4vw,32px)] grow">
                {entry.title}
              </span>
              <span className="hidden sm:block font-sans text-[13px] text-soft">{entry.role}</span>
              <span className="font-sans text-[13px] text-faint tabular-nums">{entry.year}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pl-10 font-sans text-[13px] leading-[1.2] text-soft text-left">
            <Link
              href={entry.href}
              className="no-underline hover:underline decoration-1 underline-offset-4"
            >
              View in work index →
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
