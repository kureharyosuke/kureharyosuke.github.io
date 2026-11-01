import type { Metadata } from 'next'
import { dicts, type Locale } from '@/lib/content'

export const makeAboutMetadata = (locale: Locale): Metadata => {
  const p = locale === 'ko' ? '' : '/' + locale
  return {
    title: dicts[locale].meta.title.replace('— portfolio', '— about'),
    description: dicts[locale].aboutPage.paragraph.slice(0, 150),
    alternates: {
      canonical: p ? p + '/about' : '/about',
      languages: { ko: '/about', en: '/en/about', ja: '/ja/about' },
    },
  }
}
