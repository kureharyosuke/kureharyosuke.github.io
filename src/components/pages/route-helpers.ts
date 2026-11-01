import type { Metadata } from 'next'
import HomePage from '@/components/pages/home'
import { dicts, switcher, type Locale } from '@/lib/content'

export const makeHomeMetadata = (locale: Locale): Metadata => {
  const d = dicts[locale]
  const p = locale === 'ja' ? '' : '/' + locale
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: p || '/',
      languages: { ja: '/', ko: '/ko', en: '/en' },
    },
  }
}

export { HomePage, switcher }
