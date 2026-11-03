import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { inter, interTight } from '@/lib/fonts'
import { rootMetadata } from '@/lib/seo'
import '../globals.css'

export const metadata: Metadata = rootMetadata('ja')

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
