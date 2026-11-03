import type { Metadata } from 'next'
import { dicts, localePath, type Locale } from '@/lib/content'

/**
 * Canonical site origin. This is a GitHub Pages user site, so the
 * default origin is the deployed one; NEXT_PUBLIC_SITE_URL only exists
 * as an override for a fork or a repo rename.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kureharyosuke.github.io'
).replace(/\/+$/, '')

export const SITE_NAME = 'Ryosuke Kureha'
export const GITHUB_URL = 'https://github.com/kureharyosuke'
export const OG_IMAGE = '/og.png'

/** ISO date for the last content review, reused by schema freshness signals. */
export const CONTENT_UPDATED = '2026-11-04'

/** Optional search-engine verification tokens, set at build time. */
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

/** Absolute URL without touching the path (keeps file extensions intact). */
export const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).toString()

/** GitHub Pages serves directory URLs with a trailing slash. */
export const withTrailingSlash = (path: string) =>
  path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`

const canonicalPath = (locale: Locale, section: '' | 'about') =>
  withTrailingSlash(localePath(locale, section))

const languageAlternates = (section: '' | 'about') => ({
  ja: absoluteUrl(canonicalPath('ja', section)),
  ko: absoluteUrl(canonicalPath('ko', section)),
  en: absoluteUrl(canonicalPath('en', section)),
  'x-default': absoluteUrl(canonicalPath('ja', section)),
})

const OG_LOCALES: Record<Locale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  ja: 'ja_JP',
}

const otherOgLocales = (locale: Locale) =>
  (Object.keys(OG_LOCALES) as Locale[])
    .filter((l) => l !== locale)
    .map((l) => OG_LOCALES[l])

/** Per-page metadata: absolute canonical, reciprocal hreflang, social cards. */
export const pageMetadata = (
  locale: Locale,
  section: '' | 'about' = '',
): Metadata => {
  const d = dicts[locale]
  const isAbout = section === 'about'
  const title = isAbout ? d.aboutPage.metaTitle : d.meta.title
  const description = isAbout ? d.aboutPage.metaDescription : d.meta.description
  const url = absoluteUrl(canonicalPath(locale, section))
  const image = absoluteUrl(OG_IMAGE)
  const imageAlt = `${SITE_NAME} — Product Engineer / Full-Stack Developer`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(section),
      types: {
        'text/plain': absoluteUrl('/llms.txt'),
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: OG_LOCALES[locale],
      alternateLocale: otherOgLocales(locale),
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

/** Root-level defaults: metadataBase, indexing policy, social fallbacks. */
export const rootMetadata = (locale: Locale): Metadata => {
  const d = dicts[locale]
  const image = absoluteUrl(OG_IMAGE)
  const imageAlt = `${SITE_NAME} — Product Engineer / Full-Stack Developer`

  return {
    metadataBase: new URL(SITE_URL),
    title: d.meta.title,
    description: d.meta.description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: absoluteUrl('/') }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    verification: {
      ...(GOOGLE_VERIFICATION ? { google: GOOGLE_VERIFICATION } : {}),
      ...(BING_VERIFICATION
        ? { other: { 'msvalidate.01': BING_VERIFICATION } }
        : {}),
    },
    openGraph: {
      type: 'website',
      url: absoluteUrl('/'),
      siteName: SITE_NAME,
      title: d.meta.title,
      description: d.meta.description,
      locale: OG_LOCALES[locale],
      alternateLocale: otherOgLocales(locale),
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.meta.title,
      description: d.meta.description,
      images: [image],
    },
  }
}
