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
  title: 'hex apply',
  description: 'Design engineer portfolio — monochrome broadsheet.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
