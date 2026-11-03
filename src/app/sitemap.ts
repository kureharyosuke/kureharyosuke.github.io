import type { MetadataRoute } from 'next'
import { locales, localePath, type Locale } from '@/lib/content'
import { absoluteUrl, withTrailingSlash } from '@/lib/seo'

export const dynamic = 'force-static'

const lastModified = new Date()

const alternatesFor = (section: '' | 'about') => {
  const languages = Object.fromEntries(
    locales.map((locale: Locale) => [
      locale,
      absoluteUrl(withTrailingSlash(localePath(locale, section))),
    ]),
  ) as Record<string, string>
  return {
    languages: {
      ...languages,
      'x-default': absoluteUrl(withTrailingSlash(localePath('ja', section))),
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    { section: '' as const, priority: 1 },
    { section: 'about' as const, priority: 0.8 },
  ]

  return sections.flatMap(({ section, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(withTrailingSlash(localePath(locale, section))),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: alternatesFor(section),
    })),
  )
}
