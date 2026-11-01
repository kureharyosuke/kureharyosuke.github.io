import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'Yunseok Oh — portfolio',
  description:
    'Yunseok Oh — design & AI engineer at BCROSSB.inc. Agent systems, agent memory, skills and tooling.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
