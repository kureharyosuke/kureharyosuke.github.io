/**
 * Content dictionary for the tiny static i18n layer.
 * Default site (`/`) is Japanese; `/ko`, `/en` mirror it.
 * Static export only — no middleware, no runtime locale detection.
 *
 * Display headings stay English in all locales (Altason broadsheet
 * house style); editorial copy switches. Persona: Ryosuke Kureha —
 * Product Engineer / Full-Stack Developer. Personal-developer
 * portfolio based on personal technical identity. Company ownership is
 * disclosed only as a plain footer credit and an About-page row
 * (no services, no client data, no titles).
 */

export type Locale = 'ko' | 'en' | 'ja'

export const locales: Locale[] = ['ko', 'en', 'ja']

export const switcherLabels: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
}

/** Locale-prefixed path for a top-level page ('' = home, 'about' = about). */
export const localePath = (locale: Locale, section: '' | 'about' = '') => {
  const prefix = locale === 'ja' ? '' : '/' + locale
  return section ? `${prefix}/${section}` : prefix || '/'
}

/** The three-way language switcher for a page. */
export const switcher = (current: Locale, section: '' | 'about' = '') =>
  locales.map((l) => ({ href: localePath(l, section), label: switcherLabels[l], current: l === current }))

/** A numbered focus/approach row: 01 — Title + body. */
export type FocusItem = { n: string; title: string; body: string }

export type StackGroup = { n: string; label: string; items: string }

export type Dict = {
  locale: Locale
  meta: { title: string; description: string }
  header: { links: { href: string; label: string }[] }
  hero: {
    headingLines: string[]
    lead: string
    body: string
    ctaAbout: string
    ctaGithub: string
    ctaContact: string
    githubUrl: string
  }
  about: { heading: string; sub: string; paragraphs: string[] }
  expertise: { heading: string; sub: string; items: FocusItem[] }
  approach: { heading: string; sub: string; items: FocusItem[] }
  stack: { heading: string; sub: string; groups: StackGroup[] }
  philosophy: { heading: string; paragraphs: string[] }
  interests: { heading: string; intro: string; bullets: string[] }
  contact: { heading: string; sub: string; links: { label: string; href: string }[]; note: string }
  drift: { down: string; up: string }
  aboutPage: { heading: string; paragraph: string; rows: { label: string; value: string; href?: string }[]; back: string }
}

const githubUrl = 'https://github.com/kureharyosuke'

const headerLinks = (locale: Locale) => {
  const p = localePath(locale)
  const anchor = (hash: string) => (p === '/' ? `/#${hash}` : `${p}/#${hash}`)
  return [
    { href: anchor('about'), label: 'About' },
    { href: anchor('expertise'), label: 'Expertise' },
    { href: anchor('stack'), label: 'Stack' },
    { href: anchor('contact'), label: 'Contact' },
  ]
}

const stackGroups = (): StackGroup[] => [
  { n: '01', label: 'Frontend', items: 'React · Next.js · TypeScript · JavaScript · Tailwind CSS · HTML · CSS' },
  { n: '02', label: 'Backend', items: 'Node.js · Python · FastAPI · REST APIs · PostgreSQL' },
  { n: '03', label: 'Infrastructure', items: 'AWS · Docker · Vercel · Cloudflare · Git · GitHub' },
  { n: '04', label: 'Engineering', items: 'System Design · API Integration · Component Architecture · Responsive Design · Testing · Technical SEO' },
  { n: '05', label: 'Automation & AI', items: 'Google Apps Script · Webhooks · LLM APIs · AI-Assisted Development' },
]

export const dicts: Record<Locale, Dict> = {
  ko: {
    locale: 'ko',
    meta: {
      title: 'Ryosuke Kureha — Product Engineer',
      description:
        'Ryosuke Kureha — Product Engineer / Full-Stack Developer. Turning complexity into clarity: clean architecture, practical engineering, and reliable software systems.',
    },
    header: { links: headerLinks('ko') },
    hero: {
      headingLines: ['Turning Complexity', 'Into Clarity.'],
      lead: '사려 깊은 디지털 경험, 확장 가능한 애플리케이션, 그리고 신뢰할 수 있는 소프트웨어 시스템을 설계하고 개발합니다.',
      body: '복잡한 문제를 깔끔한 아키텍처, 실용적인 엔지니어링, 지속적인 개선을 통해 해결하는 데 집중합니다.',
      ctaAbout: 'About Me',
      ctaGithub: 'GitHub',
      ctaContact: 'Get in Touch',
      githubUrl,
    },
    about: {
      heading: 'A Developer Who Thinks Beyond Code.',
      sub: '코드 너머를 생각하는 개발자입니다.',
      paragraphs: [
        '저는 소프트웨어 아키텍처, 프로덕트 엔지니어링, 자동화에 깊은 관심을 가진 풀스택 개발자, Ryosuke Kureha입니다.',
        '복잡한 요구사항을 단순하고 유지보수하기 쉬운 해결책으로 바꾸는 일을 좋아합니다.',
        '문제를 먼저 이해하고, 적절한 도구를 선택하고, 확장과 개선이 쉬운 시스템을 만드는 데 집중합니다.',
        '훌륭한 소프트웨어는 기능을 늘리거나 새 기술을 닥치는 대로 채택하는 것이 아니라, 의미 있는 가치를 만드는 신중한 결정에서 나온다고 믿습니다.',
      ],
    },
    expertise: {
      heading: 'What I Focus On.',
      sub: '집중하는 다섯 가지 영역입니다.',
      items: [
        {
          n: '01',
          title: 'Full-Stack Development',
          body: 'React, Next.js, TypeScript 그리고 백엔드 기술로 현대적인 웹 애플리케이션을 개발하며, 성능, 사용성, 유지보수성을 함께 고려합니다.',
        },
        {
          n: '02',
          title: 'Software Architecture',
          body: '모듈화된 시스템, 재사용 가능한 컴포넌트, 명확한 애플리케이션 경계를 설계해 복잡성을 관리하고 미래의 개발을 지원합니다.',
        },
        {
          n: '03',
          title: 'Backend & API Engineering',
          body: 'API, 관계형 데이터베이스, 데이터 모델링, 애플리케이션 로직으로 신뢰할 수 있는 소프트웨어 기반을 만듭니다.',
        },
        {
          n: '04',
          title: 'Automation & Integration',
          body: 'API, Webhook, 워크플로우 자동화로 시스템과 서비스를 연결해 반복적인 프로세스를 단순화합니다.',
        },
        {
          n: '05',
          title: 'AI-Assisted Engineering',
          body: '언어 모델, AI 보조 개발, 지능형 자동화를 최신 소프트웨어 워크플로우에 실용적으로 적용하는 방법을 탐구합니다.',
        },
      ],
    },
    approach: {
      heading: 'Simple by Design.',
      sub: '설계의 다섯 가지 원칙입니다.',
      items: [
        { n: '01', title: 'Understand Before Building', body: '기술이 아니라 문제에서 시작합니다.' },
        { n: '02', title: 'Remove Unnecessary Complexity', body: '과도한 추상화와 과잉 설계보다 명확하고 집중된 해결책을 선호합니다.' },
        { n: '03', title: 'Build for Maintainability', body: '이해하기 쉽고, 재사용 가능하고, 진화하기 쉬운 코드를 작성합니다.' },
        { n: '04', title: 'Validate Through Practice', body: '테스트, 피드백, 반복을 통해 소프트웨어 품질을 개선합니다.' },
        { n: '05', title: 'Keep Learning', body: '더 나은 도구, 기법, 접근 방식을 끊임없이 탐구합니다.' },
      ],
    },
    stack: {
      heading: 'Technologies & Tools.',
      sub: '설계와 개발에 사용하는 기술과 도구입니다.',
      groups: stackGroups(),
    },
    philosophy: {
      heading: 'Build With Purpose.',
      paragraphs: [
        '저는 영리함보다 명확성을, 불필요한 복잡성보다 단순함을, 단기적 편의보다 유지보수성을 중요하게 생각합니다.',
        '모든 기술적 선택에는 트레이드오프가 따릅니다. 그 트레이드오프를 이해하고, 요구사항이 변해도 실용적인 상태를 유지하는 솔루션을 만드는 것이 목표입니다.',
        '소프트웨어는 어려운 일을 더 쉽게 만들어야 합니다 — 복잡성 자체를 만들기 위해서가 아니라.',
      ],
    },
    interests: {
      heading: 'Always Exploring.',
      intro: '현재 다음 주제에 관심을 두고 있습니다.',
      bullets: [
        '확장 가능한 웹 애플리케이션 아키텍처',
        '재사용 가능한 소프트웨어 컴포넌트와 패턴',
        'AI 보조 개발 워크플로우',
        '지능형 자동화',
        '개발자 생산성과 도구',
        '성능과 신뢰성 엔지니어링',
      ],
    },
    contact: {
      heading: "Let's Connect.",
      sub: '의미 있는 기술적 대화, 아이디어 공유, 새로운 접근 방식 탐구에 언제든 열려 있습니다. GitHub로 편하게 연락 주세요.',
      links: [{ label: 'GitHub', href: githubUrl }],
      note: '© 2026 Ryosuke Kureha.',
    },
    drift: {
      down: 'Engineering — Architecture — Automation —',
      up: 'System Design — Integration —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kureha는 소프트웨어 아키텍처, 프로덕트 엔지니어링, 자동화에 깊은 관심을 가진 풀스택 개발자입니다. 복잡한 요구사항을 단순하고 유지보수하기 쉬운 해결책으로 바꾸는 것을 즐기며, 명확성·단순성·유지보수성을 설계의 기준으로 삼습니다.',
      rows: [
        { label: 'Role', value: 'Product Engineer / Full-Stack Developer' },
        { label: 'Focus', value: 'System Design · API Integration · Automation' },
        { label: 'Company', value: 'BCROSSB Inc.', href: 'https://bcrossb.com' },
        { label: 'GitHub', value: 'github.com/kureharyosuke' },
      ],
      back: '→ 랜딩 시트로 돌아가기',
    },
  },

  en: {
    locale: 'en',
    meta: {
      title: 'Ryosuke Kureha — Product Engineer',
      description:
        'Ryosuke Kureha — Product Engineer / Full-Stack Developer. Turning complexity into clarity: clean architecture, practical engineering, and reliable software systems.',
    },
    header: { links: headerLinks('en') },
    hero: {
      headingLines: ['Turning Complexity', 'Into Clarity.'],
      lead: 'I design and build thoughtful digital experiences, scalable applications, and reliable software systems.',
      body: 'My focus is on solving complex problems through clean architecture, practical engineering, and continuous improvement.',
      ctaAbout: 'About Me',
      ctaGithub: 'GitHub',
      ctaContact: 'Get in Touch',
      githubUrl,
    },
    about: {
      heading: 'A Developer Who Thinks Beyond Code.',
      sub: 'Ryosuke Kureha — Product Engineer / Full-Stack Developer.',
      paragraphs: [
        "I'm Ryosuke Kureha, a full-stack developer with a strong interest in software architecture, product engineering, and automation.",
        'I enjoy transforming complex requirements into simple, maintainable solutions.',
        "My approach to development focuses on understanding the problem first, choosing the right tools, and building systems that are easy to extend and improve.",
        "I believe great software is not about adding more features or adopting every new technology. It's about making thoughtful decisions that create meaningful value.",
      ],
    },
    expertise: {
      heading: 'What I Focus On.',
      sub: 'Five areas I go deep on.',
      items: [
        {
          n: '01',
          title: 'Full-Stack Development',
          body: 'Building modern web applications with React, Next.js, TypeScript, and backend technologies, with attention to performance, usability, and maintainability.',
        },
        {
          n: '02',
          title: 'Software Architecture',
          body: 'Designing modular systems, reusable components, and clear application boundaries to manage complexity and support future development.',
        },
        {
          n: '03',
          title: 'Backend & API Engineering',
          body: 'Working with APIs, relational databases, data modeling, and application logic to build reliable software foundations.',
        },
        {
          n: '04',
          title: 'Automation & Integration',
          body: 'Connecting systems and services through APIs, webhooks, and workflow automation to simplify repetitive processes.',
        },
        {
          n: '05',
          title: 'AI-Assisted Engineering',
          body: 'Exploring the practical application of language models, AI-assisted development, and intelligent automation in modern software workflows.',
        },
      ],
    },
    approach: {
      heading: 'Simple by Design.',
      sub: 'Five principles of how I design and build.',
      items: [
        { n: '01', title: 'Understand Before Building', body: 'Start with the problem, not the technology.' },
        { n: '02', title: 'Remove Unnecessary Complexity', body: 'Prefer clear, focused solutions over excessive abstraction and overengineering.' },
        { n: '03', title: 'Build for Maintainability', body: 'Write code that is understandable, reusable, and easy to evolve.' },
        { n: '04', title: 'Validate Through Practice', body: 'Use testing, feedback, and iteration to improve software quality.' },
        { n: '05', title: 'Keep Learning', body: 'Continuously explore better tools, techniques, and approaches to software engineering.' },
      ],
    },
    stack: {
      heading: 'Technologies & Tools.',
      sub: 'Technologies & tools behind the work.',
      groups: stackGroups(),
    },
    philosophy: {
      heading: 'Build With Purpose.',
      paragraphs: [
        'I value clarity over cleverness, simplicity over unnecessary complexity, and maintainability over short-term convenience.',
        'Every technical decision comes with trade-offs. My goal is to understand those trade-offs and build solutions that remain practical as requirements evolve.',
        'Software should make difficult things easier — not introduce complexity for its own sake.',
      ],
    },
    interests: {
      heading: 'Always Exploring.',
      intro: 'My current technical interests include:',
      bullets: [
        'Scalable web application architecture',
        'Reusable software components and patterns',
        'AI-assisted development workflows',
        'Intelligent automation',
        'Developer productivity and tooling',
        'Performance and reliability engineering',
      ],
    },
    contact: {
      heading: "Let's Connect.",
      sub: "I'm always interested in meaningful technical conversations, sharing ideas, and exploring new approaches to software development. Feel free to connect with me on GitHub.",
      links: [{ label: 'GitHub', href: githubUrl }],
      note: '© 2026 Ryosuke Kureha.',
    },
    drift: {
      down: 'Engineering — Architecture — Automation —',
      up: 'System Design — Integration —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kureha is a full-stack developer with a strong interest in software architecture, product engineering, and automation. He enjoys transforming complex requirements into simple, maintainable solutions — with clarity, simplicity and maintainability as the standard for every design.',
      rows: [
        { label: 'Role', value: 'Product Engineer / Full-Stack Developer' },
        { label: 'Focus', value: 'System Design · API Integration · Automation' },
        { label: 'Company', value: 'BCROSSB Inc.', href: 'https://bcrossb.com' },
        { label: 'GitHub', value: 'github.com/kureharyosuke' },
      ],
      back: '→ Back to the landing sheet',
    },
  },

  ja: {
    locale: 'ja',
    meta: {
      title: 'Ryosuke Kureha — Product Engineer',
      description:
        'Ryosuke Kureha — Product Engineer / Full-Stack Developer. Turning complexity into clarity: clean architecture, practical engineering, and reliable software systems.',
    },
    header: { links: headerLinks('ja') },
    hero: {
      headingLines: ['Turning Complexity', 'Into Clarity.'],
      lead: '使いやすいデジタル体験、スケーラブルなアプリケーション、そして信頼性の高いソフトウェアシステムを設計・開発します。',
      body: 'クリーンなアーキテクチャ、実践的なエンジニアリング、継続的な改善によって複雑な問題を解決することに焦点を当てています。',
      ctaAbout: 'About Me',
      ctaGithub: 'GitHub',
      ctaContact: 'Get in Touch',
      githubUrl,
    },
    about: {
      heading: 'A Developer Who Thinks Beyond Code.',
      sub: 'コードの向こうを考える開発者です。',
      paragraphs: [
        'ソフトウェアアーキテクチャ、プロダクトエンジニアリング、自動化に深い関心を持つフルスタック開発者のRyosuke Kurehaです。',
        '複雑な要件をシンプルで保守しやすい解決策に変えることを大切にしています。',
        'まず問題を理解すること、適切な道具を選ぶこと、拡張と改善がしやすいシステムを構築することを重視しています。',
        '優れたソフトウェアとは、機能を増やしたり新しい技術を何でも採用したりすることではなく、意味のある価値を生み出す思慮深い判断だと考えています。',
      ],
    },
    expertise: {
      heading: 'What I Focus On.',
      sub: '集中している五つの領域です。',
      items: [
        {
          n: '01',
          title: 'Full-Stack Development',
          body: 'React、Next.js、TypeScriptそしてバックエンド技術でモダンなWebアプリケーションを開発し、パフォーマンス、使いやすさ、保守性に配慮します。',
        },
        {
          n: '02',
          title: 'Software Architecture',
          body: 'モジュール化されたシステム、再利用可能なコンポーネント、明確なアプリケーション境界を設計し、複雑さを管理して将来の開発を支えます。',
        },
        {
          n: '03',
          title: 'Backend & API Engineering',
          body: 'API、リレーショナルデータベース、データモデリング、アプリケーションロジックで信頼性の高いソフトウェアの基盤を築きます。',
        },
        {
          n: '04',
          title: 'Automation & Integration',
          body: 'API、Webhook、ワークフロー自動化でシステムとサービスをつなぎ、繰り返されるプロセスをシンプルにします。',
        },
        {
          n: '05',
          title: 'AI-Assisted Engineering',
          body: '言語モデル、AI支援開発、インテリジェントな自動化を現代のソフトウェアワークフローに実用的に応用する方法を探求しています。',
        },
      ],
    },
    approach: {
      heading: 'Simple by Design.',
      sub: '設計の原則、五つのステップです。',
      items: [
        { n: '01', title: 'Understand Before Building', body: '技術ではなく、問題から始めます。' },
        { n: '02', title: 'Remove Unnecessary Complexity', body: '過剰な抽象化やオーバーエンジニアリングよりも、明確で焦点の絞った解決策を好みます。' },
        { n: '03', title: 'Build for Maintainability', body: '理解しやすく、再利用でき、進化させやすいコードを書きます。' },
        { n: '04', title: 'Validate Through Practice', body: 'テスト、フィードバック、イテレーションでソフトウェアの品質を高めます。' },
        { n: '05', title: 'Keep Learning', body: 'より良い道具、手法、アプローチを絶えず探究し続けます。' },
      ],
    },
    stack: {
      heading: 'Technologies & Tools.',
      sub: '設計と開発に使っている技術と道具です。',
      groups: stackGroups(),
    },
    philosophy: {
      heading: 'Build With Purpose.',
      paragraphs: [
        '私は、賢さよりも明確さ、不必要な複雑さよりもシンプルさ、短期的な便利さよりも保守性を重視します。',
        'すべての技術的判断にはトレードオフが伴います。そのトレードオフを理解し、要件が変化しても実用的であり続ける解決策を構築することが目標です。',
        'ソフトウェアは難しいことを簡単にすべきです — 複雑さそのものを作るためではありません。',
      ],
    },
    interests: {
      heading: 'Always Exploring.',
      intro: '現在、次の技術的テーマに関心を持っています。',
      bullets: [
        'スケーラブルなWebアプリケーションアーキテクチャ',
        '再利用可能なソフトウェアコンポーネントとパターン',
        'AI支援の開発ワークフロー',
        'インテリジェントな自動化',
        '開発者の生産性とツール',
        'パフォーマンスと信頼性エンジニアリング',
      ],
    },
    contact: {
      heading: "Let's Connect.",
      sub: '意味のある技術的な対話、アイデアの共有、新しいアプローチの探求にはいつでも興味があります。GitHubでお気軽にどうぞ。',
      links: [{ label: 'GitHub', href: githubUrl }],
      note: '© 2026 Ryosuke Kureha.',
    },
    drift: {
      down: 'Engineering — Architecture — Automation —',
      up: 'System Design — Integration —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kurehaは、ソフトウェアアーキテクチャ、プロダクトエンジニアリング、自動化に深い関心を持つフルスタック開発者です。複雑な要件をシンプルで保守しやすい解決策に変えることを楽しみとしており、明確さ・シンプルさ・保守性を設計の基準としています。',
      rows: [
        { label: 'Role', value: 'Product Engineer / Full-Stack Developer' },
        { label: 'Focus', value: 'System Design · API Integration · Automation' },
        { label: 'Company', value: 'BCROSSB Inc.', href: 'https://bcrossb.com' },
        { label: 'GitHub', value: 'github.com/kureharyosuke' },
      ],
      back: '→ ランディングシートに戻る',
    },
  },
}
