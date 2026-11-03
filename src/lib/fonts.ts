import { Inter, Inter_Tight } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter-tight',
  display: 'swap',
})
