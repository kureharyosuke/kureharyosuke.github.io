import type { Metadata } from 'next'
import AboutPage from '@/components/pages/about'
import { makeAboutMetadata } from '@/components/pages/about-helpers'
import { dicts } from '@/lib/content'

export const metadata: Metadata = makeAboutMetadata('ko')

export default function Page() {
  return <AboutPage d={dicts.ko} />
}
