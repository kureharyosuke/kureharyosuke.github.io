import type { Dict } from '@/lib/content'
import Reveal from '@/components/reveal'
import ScrollWordReveal from '@/components/scroll-word-reveal'

/**
 * TechStack — Tools I Use to Turn Ideas into Products, as an
 * accordion. Pattern adapted from 21st.dev community "Accordion"
 * styling, reimplemented with native <details>/<summary>: zero
 * runtime JS, CSS-only rotation of the drawn chevron, hairline
 * ruled rows. Hover underlines only; colors never change.
 */
export default function TechStack({ d }: { d: Dict['stack'] }) {
  return (
    <section id="stack">
      <div className="scroll-mt-16 border-t border-ink px-5 py-14">
        <Reveal as="h2" size="headline" lines={[d.heading]} />
        <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.sub}</p>

        <ul className="mt-10 border-t border-ink">
          {d.groups.map((g) => (
            <li key={g.n} className="view-rise border-b border-ink">
              <details className="group/acc">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4 py-4 font-sans text-[13px] text-soft">
                    <span aria-hidden="true" className="shrink-0 text-faint tabular-nums">{g.n}</span>
                    <span className="grow no-underline group-hover/acc:underline decoration-1 underline-offset-4 sm:text-[15px]">
                      {g.label}
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 6"
                      className="h-[6px] w-2.5 shrink-0 text-ink transition-transform duration-300 group-open/acc:rotate-180"
                    >
                      <path d="M1 1L5 5L9 1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </summary>
                <ScrollWordReveal
                  className="max-w-3xl pb-5 font-sans text-[13px] leading-[1.7] text-soft text-left sm:pl-8"
                  text={g.items}
                />
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
