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

/**
 * Selected index — shadcn Accordion restyled as ruled broadsheet
 * rows: radius 0, black hairlines, display type triggers.
 * Rows rise into view on scroll (view-rise). Hover underlines
 * only; colors never change. Copy arrives via the i18n dictionary.
 */
export default function IndexList({
  entries,
  className,
}: {
  entries: Entry[]
  className?: string
}) {
  return (
    <Accordion
      type="multiple"
      className={cn('border-t border-b border-ink', className)}
    >
      {entries.map((entry) => (
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
