import Reveal from '@/components/reveal'
import type { Dict } from '@/lib/content'

/**
 * Process — "Less Complexity. More Impact.", how I work in six
 * steps. Broadsheet ruled rows, left-aligned, monochrome. Rows rise
 * into view (view-rise, 21st.dev Scroll Reveal); the vertical rail
 * draws itself with scroll (sdlc-rail, CSS scroll timelines —
 * 21st.dev Scroll Progress / Line Draw family). Zero runtime JS.
 */
export default function Process({ d }: { d: Dict['process'] }) {
  return (
    <section id="process">
      <div className="scroll-mt-16 border-t border-ink bg-background px-5 py-14">
        <Reveal as="h2" size="headline" lines={[d.heading]} />
        <p className="mt-4 font-sans text-[13px] text-faint text-left">{d.sub}</p>

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
                    {s.title}.
                  </h3>
                  <p className="mt-3 max-w-prose font-sans text-[13px] leading-[1.65] text-soft text-left">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
