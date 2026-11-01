import type { Metadata } from 'next'
import HomePage from '@/components/pages/home'
import { makeHomeMetadata } from '@/components/pages/route-helpers'
import { dicts } from '@/lib/content'

export const metadata: Metadata = makeHomeMetadata('ja')

export default function Page() {
  return <HomePage d={dicts.ja} />
}
