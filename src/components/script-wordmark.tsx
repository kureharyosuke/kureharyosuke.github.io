/**
 * ScriptWordmark — the felt-tip script wordmark ("yunseok oh.") drawn as
 * SVG paths, same single-stroke alphabet as the Sticker Slap Footer's
 * wordmark and the "oh!" favicon. Server-safe: pure path math, no hooks.
 */

const SX = 1.22
const TRACK = 1
const WORD_GAP = 6
const STROKE = 3.3
const SLANT = 0.1584 // tan(9°)

/** Felt-tip script: [advance, main stroke, pen-lift strokes, lifts after?]. x-height 10, baseline 0. */
const SCRIPT: Record<string, [number, string, string?, number?]> = {
  u: [10, 'M0 -1C1.2 -1.6 1.6 -6 1.8 -9.6L1.8 -3.6C1.8 -1 3 0 4.6 0C6.2 0 7.4 -1.4 7.6 -4L7.6 -9.8L7.6 -3C7.6 -0.8 8.6 -1 10 -1'],
  n: [9.6, 'M0 -1C1.2 -1.6 1.6 -6 1.8 -9.6L1.8 -1L1.8 -5.6C2.4 -8.6 3.4 -10 4.8 -10C6.4 -10 7.2 -9 7.2 -7L7.2 -3C7.2 -0.8 8.2 -1 9.6 -1'],
  s: [8.4, 'M0 -1C1.6 -2 3 -7 4.4 -10.2C5.6 -8 7.4 -6 7.4 -3.6C7.4 -1.2 5.6 0 3.6 0C2 0 1 -0.6 0.6 -1.6C1 -0.6 2 0 3.6 0C5.6 0 6.8 -0.8 8.4 -1'],
  e: [9.4, 'M0 -1C3.4 -2.4 8 -4.4 8 -7.6C8 -9.4 6.6 -10.4 4.8 -10.4C2.2 -10.4 0.8 -7.8 0.8 -5C0.8 -1.8 2.6 0 5 0C6.8 0 8 -1 9.4 -1'],
  o: [9, 'M0 -1C1.4 -1.4 1.4 -9.6 4.3 -10C2.5 -10 1 -7.8 1 -5C1 -2.2 2.5 0 4.3 0C6.1 0 7.6 -2.2 7.6 -5C7.6 -7.8 6.1 -10 4.3 -10C6 -10 7.4 -9.2 9 -9', '', 1],
  k: [9.6, 'M0 -1C2.8 -3 6.2 -12 6 -16.4C5.8 -19.8 1.8 -20 1.8 -16.4L1.8 -1L1.8 -4.6C3 -8 5.6 -10.4 7 -9.6C8.4 -8.6 7 -5.6 3.6 -5C5.6 -4.6 6.6 -1 9.6 -1'],
  y: [9.6, 'M0 -1C1.2 -1.6 1.6 -6 1.8 -9.6L1.8 -3.6C1.8 -1 3 0 4.6 0C6.2 0 7.4 -1.4 7.6 -4L7.6 -9.8L7.6 4.4C7.6 9 5.6 9.6 4.2 9.6C2 9.6 1.4 7.6 2.8 6C4.6 4 7.4 1.6 9.6 -1'],
  h: [10, 'M0 -1C2.8 -3 6.2 -12 6 -16.4C5.8 -19.8 1.8 -20 1.8 -16.4L1.8 -1L1.8 -5.6C2.6 -8.6 4 -10 5.6 -10C7.2 -10 7.8 -8.8 7.8 -7L7.8 -3C7.8 -0.8 8.8 -1 10 -1'],
  '.': [3.6, 'M1.8 -0.6L1.9 -0.7'],
}

const round = (v: number) => Math.round(v * 100) / 100

/** Shifts every x (and stretches) in an absolute M/L/C path. */
const place = (d: string, dx: number) => {
  let k = 0
  return d.replace(/-?\d*\.?\d+/g, (n) => (k++ % 2 === 0 ? String(round(+n * SX + dx)) : n))
}

const layout = (text: string) => {
  let x = 0
  let main = ''
  let lift = true
  let top = 0
  for (const ch of text.toLowerCase()) {
    const g = SCRIPT[ch]
    if (!g) {
      if (main) x += WORD_GAP
      lift = true
      continue
    }
    const d = place(g[1], x)
    main += lift ? d : 'L' + d.slice(1)
    top = Math.min(top, ...Array.from(d.matchAll(/-?\d*\.?\d+/g)).map(Number).filter((_, i) => i % 2 === 1))
    lift = !!g[3]
    x += g[0] * SX + TRACK
  }
  return { main, width: main ? round(x - TRACK) : 0, top }
}

export default function ScriptWordmark({ text = 'yunseok oh.' }: { text?: string }) {
  const { main, width, top } = layout(text)
  if (!main) return null
  const pad = STROKE / 2 + 0.6
  const vb = [
    -pad - 1,
    top - pad,
    Math.max(width, 1) + pad * 2 + 2 - top * SLANT,
    -top + pad * 2 + 1,
  ].map(round).join(' ')
  return (
    <svg
      viewBox={vb}
      aria-hidden="true"
      focusable="false"
      className="h-[clamp(20px,2.2vw,26px)] w-auto"
    >
      <path d={main} fill="none" stroke="currentColor" strokeWidth={STROKE} stroke-linecap="round" stroke-linejoin="round" transform="skewX(-9)" />
    </svg>
  )
}
