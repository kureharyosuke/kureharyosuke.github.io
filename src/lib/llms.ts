import { dicts, localePath } from '@/lib/content'
import { CONTENT_UPDATED, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo'

const page = (section: '' | 'about') =>
  absoluteUrl(localePath('en', section) + (section ? '/' : '/'))

const stream = (items: string[]) => items.join('\n')

/**
 * `/llms.txt` — short, link-first context for AI assistants.
 * `/llms-full.txt` — the same facts plus the full English profile copy,
 * generated from the same dictionary the pages render.
 */
export function llmsTxt(): string {
  const en = dicts.en
  return `# ${SITE_NAME} — Product Engineer / Full-Stack Developer

> ${en.meta.description}

- Canonical site: ${SITE_URL}/
- Languages: English, Japanese, Korean
- Last updated: ${CONTENT_UPDATED}

## Profile

- Name: ${SITE_NAME}
- Role: Product Engineer / Full-Stack Developer
- Company: BCROSSB Inc. (https://bcrossb.com)
- Focus: System Design, API Integration, Automation
- GitHub: ${en.hero.githubUrl}

## Pages

- [English home](${absoluteUrl('/en/')}): role, expertise, approach, stack, contact
- [Japanese home](${absoluteUrl('/')}): 役割、専門分野、アプローチ、技術スタック、連絡先
- [Korean home](${absoluteUrl('/ko/')}): 역할, 전문 분야, 접근 방식, 기술 스택, 연락처
- [About](${page('about')}): name, role, focus, stack, company, GitHub

## Expertise

${en.expertise.items.map((item) => `- ${item.title}: ${item.body}`).join('\n')}

## Stack

${en.stack.groups.map((group) => `- ${group.label}: ${group.items}`).join('\n')}

## Contact

- GitHub: ${en.hero.githubUrl}
- Preferred contact: GitHub issues or profile messages
`
}

export function llmsFullTxt(): string {
  const en = dicts.en
  const aboutRows = en.aboutPage.rows
    .map((row) => `- ${row.label}: ${row.value}${row.href ? ` (${row.href})` : ''}`)
    .join('\n')

  return `# ${SITE_NAME} — Product Engineer / Full-Stack Developer

> ${en.meta.description}

- Canonical site: ${SITE_URL}/
- Languages: English, Japanese, Korean
- Last updated: ${CONTENT_UPDATED}

## Profile

${aboutRows}

## About

${stream(en.about.paragraphs)}

${en.aboutPage.paragraph}

## Expertise

${en.expertise.items
  .map((item) => `### ${item.title}\n\n${item.body}`)
  .join('\n\n')}

## Approach

${en.approach.items
  .map((item) => `### ${item.title}\n\n${item.body}`)
  .join('\n\n')}

## Technologies and tools

${en.stack.groups
  .map((group) => `- ${group.label}: ${group.items}`)
  .join('\n')}

## Philosophy

${stream(en.philosophy.paragraphs)}

## Current interests

${en.interests.bullets.map((bullet) => `- ${bullet}`).join('\n')}

## Contact

${en.contact.sub}

${en.contact.links.map((link) => `- ${link.label}: ${link.href}`).join('\n')}

## Localized pages

- [Japanese home](${absoluteUrl('/')})
- [Korean home](${absoluteUrl('/ko/')})
- [English home](${absoluteUrl('/en/')})
- [About](${page('about')})
- [Korean about](${absoluteUrl('/ko/about/')})
- [Japanese about](${absoluteUrl('/about/')})
`
}
