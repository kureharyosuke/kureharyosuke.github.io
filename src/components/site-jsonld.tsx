import { dicts, localePath, type Locale } from '@/lib/content'
import {
  CONTENT_UPDATED,
  GITHUB_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  withTrailingSlash,
} from '@/lib/seo'

type Section = '' | 'about'

const LABELS: Record<
  Locale,
  { home: string; about: string; jobTitle: string; description: string }
> = {
  ja: {
    home: 'ホーム',
    about: 'プロフィール',
    jobTitle: 'プロダクトエンジニア',
    description:
      'ソフトウェアアーキテクチャ、プロダクトエンジニアリング、自動化に取り組むプロダクトエンジニア兼フルスタック開発者。',
  },
  ko: {
    home: '홈',
    about: '소개',
    jobTitle: '프로덕트 엔지니어',
    description:
      '소프트웨어 아키텍처, 프로덕트 엔지니어링, 자동화에 집중하는 프로덕트 엔지니어 겸 풀스택 개발자.',
  },
  en: {
    home: 'Home',
    about: 'About',
    jobTitle: 'Product Engineer',
    description:
      'Product engineer and full-stack developer working on software architecture, APIs, automation and AI-assisted engineering.',
  },
}

/**
 * Page-level structured data. Only claims visible on the page are marked up:
 * role, company credit, public GitHub profile, and the page's own copy.
 * The graph is emitted server-side, so crawlers see it without JavaScript.
 */
export default function SiteJsonLd({
  locale,
  section = '',
}: {
  locale: Locale
  section?: Section
}) {
  const d = dicts[locale]
  const labels = LABELS[locale]
  const isAbout = section === 'about'

  const pagePath = withTrailingSlash(localePath(locale, section))
  const pageUrl = absoluteUrl(pagePath)
  const homeUrl = absoluteUrl('/')
  const personId = `${SITE_URL}/#person`
  const organizationId = `${SITE_URL}/#organization`
  const websiteId = `${SITE_URL}/#website`
  const imageId = `${SITE_URL}/#og-image`
  const pageId = `${pageUrl}#webpage`
  const breadcrumbId = `${pageUrl}#breadcrumb`

  const title = isAbout ? d.aboutPage.metaTitle : d.meta.title
  const description = isAbout ? d.aboutPage.metaDescription : d.meta.description

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Person',
      '@id': personId,
      name: SITE_NAME,
      url: homeUrl,
      mainEntityOfPage: pageUrl,
      image: { '@id': imageId },
      jobTitle: labels.jobTitle,
      description: labels.description,
      sameAs: [GITHUB_URL],
      worksFor: { '@id': organizationId },
      knowsAbout: [
        'Full-stack development',
        'Software architecture',
        'React',
        'Next.js',
        'TypeScript',
        'API engineering',
        'Automation',
        'AI-assisted engineering',
      ],
    },
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'BCROSSB Inc.',
      url: 'https://bcrossb.com',
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: homeUrl,
      name: SITE_NAME,
      inLanguage: ['ja', 'ko', 'en'],
      publisher: { '@id': personId },
    },
    {
      '@type': 'ImageObject',
      '@id': imageId,
      url: absoluteUrl(OG_IMAGE),
      width: 1200,
      height: 630,
      caption: `${SITE_NAME} — Product Engineer / Full-Stack Developer`,
    },
    {
      '@type': isAbout ? 'ProfilePage' : 'WebPage',
      '@id': pageId,
      url: pageUrl,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      primaryImageOfPage: { '@id': imageId },
      dateModified: CONTENT_UPDATED,
      ...(isAbout
        ? {
            mainEntity: { '@id': personId },
            breadcrumb: { '@id': breadcrumbId },
          }
        : {}),
    },
  ]

  if (isAbout) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: labels.home,
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: labels.about,
          item: pageUrl,
        },
      ],
    })
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
