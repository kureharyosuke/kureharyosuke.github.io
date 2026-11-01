import type { Metadata } from 'next'
import { dicts, type Locale } from '@/lib/content'

export const makeAboutMetadata = (locale: Locale): Metadata => {
  const d = dicts[locale]
  const p = locale === 'ja' ? '' : '/' + locale
  return {
    title: d.meta.title + ' — About',
    description: d.aboutPage.paragraph.slice(0, 150),
    alternates: {
      canonical: p ? p + '/about' : '/about',
      languages: { ja: '/about', ko: '/ko/about', en: '/en/about' },
    },
  }
}
