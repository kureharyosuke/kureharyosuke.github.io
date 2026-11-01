import Link from 'next/link'
import Reveal from '@/components/reveal'
import type { Dict } from '@/lib/content'

/**
 * Practice — the developer's thesis section, i18n-driven.
 * "Culture over tech": defining which problem to solve, inside the
 * whole software development life cycle. Broadsheet ruled rows,
 * left-aligned, monochrome. Hover underlines only; colors never change.
 * Rows rise into view (view-rise); the vertical SDLC rail draws
 * itself with scroll (sdlc-rail, CSS scroll timelines).
 */
export default function Practice({ d }: { d: Dict['practice'] }) {
  return (
    <section id="practice">
      <div className="relative border-y border-ink bg-background px-5 py-14">
        <Reveal as="h2" size="headline" lines={[d.heading]} />
        <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.sub}</p>

        <div className="mt-10 max-w-prose">
          <p className="view-rise font-sans text-[clamp(18px,2vw,24px)] leading-[1.65] text-soft text-left">
            {d.thesis.pre}
            <strong className="font-semibold text-ink">{d.thesis.strong}</strong>
            {d.thesis.post}
          </p>
        </div>

        <div className="relative mt-12">
          {/* the drawn-with-scroll judgment line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden w-px origin-top bg-faint sm:block"
            style={{ height: '100%' }}
          >
            <div className="sdlc-rail h-full w-px bg-ink" />
          </div>

          <ol className="sm:pl-10">
            {d.steps.map((s) => (
              <li
                key={s.n}
                className="view-rise grid grid-cols-1 gap-2 border-b border-ink py-6 sm:grid-cols-[64px_1fr] sm:gap-6"
              >
                <span className="font-sans text-[13px] text-faint tabular-nums sm:pt-1">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-disp font-medium text-[clamp(22px,3vw,40px)] leading-[0.9] tracking-tight text-left">
                    {s.phase}.{' '}
                    <span className="font-sans text-[clamp(15px,1.6vw,20px)] font-normal leading-[1.6] text-soft">
                      {s.claim}
                    </span>
                  </h3>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                    <p className="max-w-prose font-sans text-[13px] leading-[1.65] text-soft text-left">
                      {s.detail}
                    </p>
                    <Link
                      href={s.href}
                      className="shrink-0 font-sans text-[13px] text-ink no-underline hover:underline decoration-1 underline-offset-4"
                    >
                      {s.repo} ↗
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 font-sans text-[13px] leading-[1.65] text-faint text-left">
          {d.outro}
        </p>
      </div>
    </section>
  )
}
