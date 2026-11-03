import type { Metadata } from 'next'
import AboutPage from '@/components/pages/about'
import { makeAboutMetadata } from '@/components/pages/about-helpers'
import { dicts } from '@/lib/content'

export const metadata: Metadata = makeAboutMetadata('en')

export default function Page() {
  return <AboutPage d={dicts.en} />
}
