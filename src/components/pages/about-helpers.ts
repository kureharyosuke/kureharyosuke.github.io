import type { Metadata } from 'next'
import { type Locale } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const makeAboutMetadata = (locale: Locale): Metadata =>
  pageMetadata(locale, 'about')
