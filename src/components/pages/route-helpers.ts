import type { Metadata } from 'next'
import HomePage from '@/components/pages/home'
import { switcher, type Locale } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const makeHomeMetadata = (locale: Locale): Metadata =>
  pageMetadata(locale, '')

export { HomePage, switcher }
