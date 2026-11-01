/**
 * Content dictionary for the tiny static i18n layer.
 * Default site (`/`, `/about`) is Korean; `/en`, `/ja` mirror it.
 * Static export only — no middleware, no runtime locale detection.
 *
 * Display headings stay English in all locales (Altason broadsheet
 * house style); editorial copy switches. Persona: Ryosuke Kureha —
 * full-stack engineer · product architect · technical founder,
 * BCROSSB.inc, Tokyo.
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
  const prefix = locale === 'ko' ? '' : '/' + locale
  return section ? `${prefix}/${section}` : prefix || '/'
}

/** The three-way language switcher for a page. */
export const switcher = (current: Locale, section: '' | 'about' = '') =>
  locales.map((l) => ({ href: localePath(l, section), label: switcherLabels[l], current: l === current }))

export type WorkItem = {
  n: string
  name: string
  tagline: string
  body: string
  bullets: string[]
  techLabel?: 'Tech' | 'Focus'
  tech?: string
  website?: string
  plate: 'lines' | 'dots' | 'hatch'
}

export type StackGroup = { n: string; label: string; items: string }

export type ProcessStep = { n: string; title: string; body: string }

export type Principle = { n: string; title: string; body: string }

export type Dict = {
  locale: Locale
  meta: { title: string; description: string }
  header: { links: { href: string; label: string }[] }
  hero: { headingLines: string[]; lead: string; body: string; ctaWork: string; ctaContact: string }
  about: { heading: string; sub: string; paragraphs: string[]; principles: Principle[] }
  services: { heading: string; sub: string; items: { title: string; body: string }[] }
  work: { heading: string; sub: string; items: WorkItem[] }
  stack: { heading: string; sub: string; groups: StackGroup[] }
  process: { heading: string; sub: string; steps: ProcessStep[] }
  exploring: { heading: string; intro: string; bullets: string[] }
  contact: { heading: string; lead: string; sub: string; outro: string; links: { label: string; href: string }[]; note: string }
  drift: { down: string; up: string }
  aboutPage: { heading: string; paragraph: string; rows: { label: string; value: string }[]; back: string }
}

const headerLinks = (locale: Locale) => {
  const p = localePath(locale)
  const anchor = (hash: string) => (p === '/' ? `/#${hash}` : `${p}/#${hash}`)
  return [
    { href: anchor('work'), label: 'Work' },
    { href: anchor('stack'), label: 'Stack' },
    { href: localePath(locale, 'about'), label: 'About' },
  ]
}

export const dicts: Record<Locale, Dict> = {
  ko: {
    locale: 'ko',
    meta: {
      title: 'Ryosuke Kureha — portfolio',
      description:
        'Ryosuke Kureha — Full-Stack Engineer, Product Architect and Technical Founder at BCROSSB.inc, Tokyo. Systems that run businesses.',
    },
    header: { links: headerLinks('ko') },
    hero: {
      headingLines: ['I Build Systems', 'That Run Businesses.'],
      lead: '비즈니스의 문제를 발견하고, 확장 가능한 소프트웨어로 해결합니다.',
      body: '저는 웹사이트를 만드는 것을 넘어, 실제 비즈니스가 효율적으로 운영될 수 있도록 제품과 시스템을 설계하고 개발합니다. 아이디어를 검증하는 초기 단계부터 아키텍처 설계, 프론트엔드·백엔드 구현, 데이터베이스, 운영 자동화까지 제품의 전체 생명주기를 다룹니다. 복잡한 문제를 단순하게 만들고, 반복되는 업무를 자동화하며, 하나의 기술 기반으로 여러 서비스를 확장하는 데 집중합니다.',
      ctaWork: 'Explore Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      heading: 'Technology Meets Business.',
      sub: '기술을 위한 기술보다, 실제 문제를 해결하는 기술을 추구합니다.',
      paragraphs: [
        '안녕하세요. 저는 도쿄를 기반으로 활동하는 개발자이자 주식회사 BCROSSB의 대표, Ryosuke Kureha입니다.',
        '웹 애플리케이션 개발, 서비스 설계, 클라우드 인프라, AI 자동화 시스템 구축을 중심으로 활동하고 있습니다.',
        '직접 여러 서비스를 기획하고 운영하면서 소프트웨어가 단순한 기능의 집합이 아니라, 비즈니스의 생산성과 성장성을 결정하는 핵심 인프라라는 것을 경험했습니다. 제가 중요하게 생각하는 세 가지 원칙은 다음과 같습니다.',
      ],
      principles: [
        {
          n: '01',
          title: 'Simplify Complexity',
          body: '복잡한 요구사항을 분해하고, 불필요한 기능과 구조를 제거해 가장 단순한 해결책을 찾습니다.',
        },
        {
          n: '02',
          title: 'Build for Reusability',
          body: '같은 문제를 반복해서 해결하지 않습니다. 공통 비즈니스 로직과 재사용 가능한 모듈을 설계해 새로운 서비스를 더 빠르게 개발합니다.',
        },
        {
          n: '03',
          title: 'Automate What Matters',
          body: '반복적인 운영 업무는 자동화하고, 사람의 판단이 중요한 부분에 더 많은 시간을 사용할 수 있도록 시스템을 구축합니다.',
        },
      ],
    },
    services: {
      heading: 'From Idea to Production.',
      sub: '아이디어부터 실제 운영까지, 하나의 흐름으로 연결합니다.',
      items: [
        {
          title: 'Full-Stack Engineering',
          body: 'Next.js, React, TypeScript, Python 기반으로 사용자 인터페이스부터 API, 데이터베이스까지 통합된 웹 애플리케이션을 개발합니다.',
        },
        {
          title: 'System Architecture',
          body: '여러 서비스에서 공유할 수 있는 인증, 예약, 결제, 알림, 운영 관리 등의 공통 모듈과 확장 가능한 아키텍처를 설계합니다.',
        },
        {
          title: 'AI & Workflow Automation',
          body: 'LLM, AI Agent, Webhook, Google Apps Script, 외부 API를 조합해 고객 응대, 데이터 처리, 업무 흐름 자동화를 구현하거나 실험합니다.',
        },
        {
          title: 'Product & Business Development',
          body: '시장과 고객의 요구사항을 분석하고 제품의 기능, 수익모델, 운영 프로세스를 함께 고려해 실용적인 솔루션을 만듭니다.',
        },
      ],
    },
    work: {
      heading: "Products & Systems I'm Building.",
      sub: '직접 만들고 운영 중인 제품과 시스템들입니다.',
      items: [
        {
          n: '01',
          name: 'STAYJP',
          tagline: 'Hospitality Management Platform',
          body: '숙박 운영의 복잡한 프로세스를 효율적으로 관리하기 위한 서비스입니다. 예약 채널, 고객 커뮤니케이션, 청소 일정, 운영 데이터 등을 연결하고 반복 업무를 자동화하는 데 집중합니다.',
          bullets: [
            '숙박 운영 업무 및 예약 데이터 관리',
            '외부 예약 시스템과 API·Webhook 연동',
            '다국어 웹사이트 및 고객 접점 개발',
            '운영 프로세스 개선과 자동화',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, TypeScript, Google Apps Script, API Integration',
          website: 'https://stayjp.jp',
          plate: 'lines',
        },
        {
          n: '02',
          name: 'RIVACTA',
          tagline: 'AI-Enabled Customer Operations',
          body: '마케팅과 고객지원을 연결하는 AI 기반 운영 시스템 프로젝트입니다. AI가 반복적인 문의를 분류하고 응답 초안을 작성하며, 복잡하거나 민감한 문제는 사람이 처리할 수 있는 협업 구조를 설계하고 있습니다.',
          bullets: [
            'AI 기반 문의 분류 및 응답 워크플로우',
            '상담원 이관 및 승인 프로세스',
            '고객지원 데이터 분석 구조',
            '마케팅과 고객 운영 데이터의 연결',
          ],
          techLabel: 'Focus',
          tech: 'AI Agents, LLM Integration, Workflow Automation, Customer Operations',
          website: 'https://rivacta.com',
          plate: 'dots',
        },
        {
          n: '03',
          name: 'BCROSSB Platform OS',
          tagline: 'Reusable Marketplace Architecture',
          body: '여러 플랫폼을 각각 독립적으로 개발하는 대신, 공통 기능을 재사용하기 위해 설계 중인 멀티서비스 플랫폼 아키텍처입니다. 서비스마다 달라지는 비즈니스 로직은 분리하고, 공통 기능은 재사용할 수 있도록 설계합니다.',
          bullets: [
            '공통 인증 및 사용자 권한 구조',
            '예약·결제·정산·취소 공통 도메인 설계',
            '재사용 가능한 UI 컴포넌트 및 패키지',
            '서비스별 비즈니스 로직 분리',
            '관리 시스템 및 운영 워크플로우 표준화',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, React, TypeScript, FastAPI, PostgreSQL, Tailwind CSS, shadcn/ui',
          plate: 'hatch',
        },
        {
          n: '04',
          name: 'Cleaning Marketplace',
          tagline: 'Service Operations Platform',
          body: '청소 서비스 요청자와 전문 파트너를 연결하는 마켓플레이스 프로젝트입니다. 서비스 요청, 일정 관리, 파트너 매칭, 작업 완료 확인, 정산까지 연결하는 운영 시스템을 개발하고 있습니다.',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Marketplace Architecture, Scheduling, Partner Management, Workflow Automation',
          plate: 'lines',
        },
        {
          n: '05',
          name: 'Monthly Stay Platform',
          tagline: 'Flexible Accommodation Marketplace',
          body: '중장기 체류를 위한 숙박 및 임대 매칭 플랫폼 프로젝트입니다. 숙박 및 임대 비즈니스에 적합한 검색, 예약, 일정 관리, 호스트 운영 기능을 공통 플랫폼 아키텍처 위에서 개발하고 있습니다.',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Booking Systems, Availability Management, Multi-role Applications',
          plate: 'dots',
        },
      ],
    },
    stack: {
      heading: 'Tools I Use to Turn Ideas into Products.',
      sub: '아이디어를 제품으로 바꾸는 데 사용하는 도구들입니다.',
      groups: [
        { n: '01', label: 'Frontend', items: 'TypeScript · JavaScript · React · Next.js · Tailwind CSS · shadcn/ui · HTML · CSS' },
        { n: '02', label: 'Backend & Database', items: 'Python · FastAPI · Node.js · PostgreSQL · Neon · Supabase · REST API · Webhook' },
        { n: '03', label: 'Infrastructure & DevOps', items: 'AWS · Vercel · Cloudflare · Docker · Git · GitHub' },
        { n: '04', label: 'AI & Automation', items: 'LLM APIs · AI Agents · Local LLM · Google Apps Script · Google Sheets · Workflow Automation' },
        { n: '05', label: 'Testing & Quality', items: 'Cypress · TypeScript Type Safety · Git-based Workflow · Component Reusability' },
      ],
    },
    process: {
      heading: 'Less Complexity. More Impact.',
      sub: '덜 복잡하게, 더 크게 — 제가 일하는 여섯 단계입니다.',
      steps: [
        { n: '01', title: 'Understand', body: '코드를 작성하기 전에 해결해야 할 문제와 비즈니스 목표를 이해합니다.' },
        { n: '02', title: 'Simplify', body: '불필요한 요구사항과 기능을 제거하고, 가장 작은 실행 가능한 해결책을 정의합니다.' },
        { n: '03', title: 'Architect', body: '기존 시스템과 재사용 가능한 모듈을 검토한 후, 필요한 구조만 설계합니다.' },
        { n: '04', title: 'Build', body: '화면, 비즈니스 로직, API, 데이터베이스를 하나의 기능 단위로 연결해 구현합니다.' },
        { n: '05', title: 'Validate', body: '테스트와 실제 운영 데이터를 통해 구현 결과를 검증하고 개선합니다.' },
        { n: '06', title: 'Automate & Scale', body: '반복되는 업무와 검증된 프로세스를 자동화하고, 새로운 서비스에서도 활용할 수 있도록 표준화합니다.' },
      ],
    },
    exploring: {
      heading: 'Building the Next Generation of Business Systems.',
      intro: '현재 다음 기술과 문제에 집중하고 있습니다.',
      bullets: [
        'AI Agent를 활용한 업무 실행 및 자동화',
        '비즈니스별로 확장 가능한 공통 플랫폼 아키텍처',
        'LLM과 사람의 판단을 결합한 고객지원 시스템',
        '데이터 기반 운영 최적화 및 의사결정',
        '로컬 AI 모델과 클라우드 API를 조합한 효율적인 AI 인프라',
      ],
    },
    contact: {
      heading: 'Have a Problem Worth Solving?',
      lead: '좋은 제품은 좋은 문제에서 시작됩니다.',
      sub: '새로운 제품 개발, 시스템 아키텍처, AI 자동화 또는 기술을 활용한 비즈니스 개선에 관심이 있다면 이야기 나누고 싶습니다.',
      outro: "Let's Build Something Meaningful.",
      links: [{ label: 'GitHub', href: 'https://github.com/kureharyosuke' }],
      note: 'Based in Tokyo, Japan.',
    },
    drift: {
      down: 'Simplify — Automate — Scale —',
      up: 'Systems — Architecture — Platforms —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kureha는 도쿄에 기반한 풀스택 엔지니어이자 주식회사 BCROSSB의 대표입니다. 웹 애플리케이션 개발, 서비스 설계, 클라우드 인프라, AI 자동화 시스템 구축을 중심으로 활동하며, 기술을 위한 기술보다 실제 문제를 해결하는 기술을 추구합니다. STAYJP, RIVACTA 등 여러 서비스를 직접 기획하고 운영하면서 소프트웨어가 비즈니스의 생산성과 성장성을 결정하는 핵심 인프라임을 경험했습니다.',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc — 代表' },
        { label: 'Focus', value: '풀스택 개발 · 시스템 아키텍처 · AI 자동화' },
        { label: 'Base', value: '도쿄, 일본' },
      ],
      back: '→ 랜딩 시트로 돌아가기',
    },
  },

  en: {
    locale: 'en',
    meta: {
      title: 'Ryosuke Kureha — portfolio',
      description:
        'Ryosuke Kureha — Full-Stack Engineer, Product Architect and Technical Founder at BCROSSB.inc, Tokyo. Systems that run businesses.',
    },
    header: { links: headerLinks('en') },
    hero: {
      headingLines: ['I Build Systems', 'That Run Businesses.'],
      lead: 'I discover business problems and solve them with scalable software.',
      body: 'Beyond building websites, I design and develop products and systems so real businesses run efficiently. From early idea validation through architecture, frontend and backend implementation, databases, and operational automation, I cover the whole product life cycle. I focus on making complex problems simple, automating repetitive work, and scaling multiple services on a single technical foundation.',
      ctaWork: 'Explore Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      heading: 'Technology Meets Business.',
      sub: 'Technology that solves real problems — over technology for its own sake.',
      paragraphs: [
        'Hello. I am Ryosuke Kureha, a developer based in Tokyo and the representative of BCROSSB.inc.',
        'My work centers on web application development, service design, cloud infrastructure, and AI automation systems.',
        'Building and operating several services myself, I experienced that software is not just a set of features — it is the core infrastructure that determines a business productivity and growth. Three principles matter most to me.',
      ],
      principles: [
        {
          n: '01',
          title: 'Simplify Complexity',
          body: 'Break complex requirements apart, remove unnecessary features and structures, and find the simplest solution.',
        },
        {
          n: '02',
          title: 'Build for Reusability',
          body: 'Never solve the same problem twice. Common business logic and reusable modules make every new service faster to build.',
        },
        {
          n: '03',
          title: 'Automate What Matters',
          body: 'Automate repetitive operations so people can spend their time where judgment matters.',
        },
      ],
    },
    services: {
      heading: 'From Idea to Production.',
      sub: 'Ideas and live operations, connected in one flow.',
      items: [
        {
          title: 'Full-Stack Engineering',
          body: 'Integrated web applications on Next.js, React, TypeScript and Python — from user interface through API and database.',
        },
        {
          title: 'System Architecture',
          body: 'Shared modules for auth, booking, payments, notifications and operations management, designed to be reused across services.',
        },
        {
          title: 'AI & Workflow Automation',
          body: 'Combining LLMs, AI agents, webhooks, Google Apps Script and external APIs for customer response, data processing and workflow automation.',
        },
        {
          title: 'Product & Business Development',
          body: 'Analyzing markets and requirements, and shaping features, revenue models and operations into practical solutions.',
        },
      ],
    },
    work: {
      heading: "Products & Systems I'm Building.",
      sub: 'Products and systems I build and operate.',
      items: [
        {
          n: '01',
          name: 'STAYJP',
          tagline: 'Hospitality Management Platform',
          body: 'A service that brings efficient order to the complex processes of hospitality operations. It connects reservation channels, guest communication, cleaning schedules and operations data, with a focus on automating repetitive work.',
          bullets: [
            'Hospitality operations and reservation data management',
            'API and webhook integrations with external booking systems',
            'Multilingual websites and guest touchpoints',
            'Operations process improvement and automation',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, TypeScript, Google Apps Script, API Integration',
          website: 'https://stayjp.jp',
          plate: 'lines',
        },
        {
          n: '02',
          name: 'RIVACTA',
          tagline: 'AI-Enabled Customer Operations',
          body: 'An AI-based operations system project connecting marketing and customer support. AI classifies recurring inquiries and drafts responses, while a collaboration structure keeps complex or sensitive issues in human hands.',
          bullets: [
            'AI-based inquiry classification and response workflow',
            'Agent handoff and approval processes',
            'Customer support data analysis structure',
            'Connecting marketing and customer operations data',
          ],
          techLabel: 'Focus',
          tech: 'AI Agents, LLM Integration, Workflow Automation, Customer Operations',
          website: 'https://rivacta.com',
          plate: 'dots',
        },
        {
          n: '03',
          name: 'BCROSSB Platform OS',
          tagline: 'Reusable Marketplace Architecture',
          body: 'A multi-service platform architecture in the making — instead of developing each platform independently, shared capabilities are built once and reused. Business logic that differs per service is separated; common capabilities are reused.',
          bullets: [
            'Shared auth and user permission structure',
            'Common booking, payment, settlement and cancellation domain design',
            'Reusable UI components and packages',
            'Per-service business logic separation',
            'Standardized management systems and operations workflows',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, React, TypeScript, FastAPI, PostgreSQL, Tailwind CSS, shadcn/ui',
          plate: 'hatch',
        },
        {
          n: '04',
          name: 'Cleaning Marketplace',
          tagline: 'Service Operations Platform',
          body: 'A marketplace project connecting cleaning service requesters with professional partners. An operations system links service requests, scheduling, partner matching, job completion and settlement.',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Marketplace Architecture, Scheduling, Partner Management, Workflow Automation',
          plate: 'lines',
        },
        {
          n: '05',
          name: 'Monthly Stay Platform',
          tagline: 'Flexible Accommodation Marketplace',
          body: 'A matching platform for mid-to-long term stays. Search, booking, schedules and host operations are developed on the shared platform architecture.',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Booking Systems, Availability Management, Multi-role Applications',
          plate: 'dots',
        },
      ],
    },
    stack: {
      heading: 'Tools I Use to Turn Ideas into Products.',
      sub: 'The tools that turn ideas into products.',
      groups: [
        { n: '01', label: 'Frontend', items: 'TypeScript · JavaScript · React · Next.js · Tailwind CSS · shadcn/ui · HTML · CSS' },
        { n: '02', label: 'Backend & Database', items: 'Python · FastAPI · Node.js · PostgreSQL · Neon · Supabase · REST API · Webhook' },
        { n: '03', label: 'Infrastructure & DevOps', items: 'AWS · Vercel · Cloudflare · Docker · Git · GitHub' },
        { n: '04', label: 'AI & Automation', items: 'LLM APIs · AI Agents · Local LLM · Google Apps Script · Google Sheets · Workflow Automation' },
        { n: '05', label: 'Testing & Quality', items: 'Cypress · TypeScript Type Safety · Git-based Workflow · Component Reusability' },
      ],
    },
    process: {
      heading: 'Less Complexity. More Impact.',
      sub: 'Six steps of how I work.',
      steps: [
        { n: '01', title: 'Understand', body: 'Before writing any code, I understand the problem to solve and the business goal.' },
        { n: '02', title: 'Simplify', body: 'Strip unnecessary requirements and features; define the smallest viable solution.' },
        { n: '03', title: 'Architect', body: 'Review existing systems and reusable modules, then design only the structure that is needed.' },
        { n: '04', title: 'Build', body: 'Wire screens, business logic, APIs and databases together as one functional unit.' },
        { n: '05', title: 'Validate', body: 'Verify implementations with tests and real operational data, then improve.' },
        { n: '06', title: 'Automate & Scale', body: 'Automate the repetitive and validate the proven, standardizing for the next service.' },
      ],
    },
    exploring: {
      heading: 'Building the Next Generation of Business Systems.',
      intro: 'What I am currently exploring:',
      bullets: [
        'AI agents that execute and automate real work',
        'A common platform architecture extensible per business',
        'Customer support systems that combine LLMs with human judgment',
        'Data-driven operations optimization and decision making',
        'Efficient AI infrastructure combining local models and cloud APIs',
      ],
    },
    contact: {
      heading: 'Have a Problem Worth Solving?',
      lead: 'Good products start with good problems.',
      sub: 'If you are thinking about new product development, system architecture, AI automation or technology-driven business improvement, I would love to talk.',
      outro: "Let's Build Something Meaningful.",
      links: [{ label: 'GitHub', href: 'https://github.com/kureharyosuke' }],
      note: 'Based in Tokyo, Japan.',
    },
    drift: {
      down: 'Simplify — Automate — Scale —',
      up: 'Systems — Architecture — Platforms —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kureha is a full-stack engineer based in Tokyo and the representative of BCROSSB.inc. His work centers on web application development, service design, cloud infrastructure and AI automation — with a bias toward technology that solves real problems rather than technology for its own sake. Building and operating services like STAYJP and RIVACTA taught him that software is the core infrastructure that determines business productivity and growth.',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc — Representative' },
        { label: 'Focus', value: 'Full-stack development · System architecture · AI automation' },
        { label: 'Base', value: 'Tokyo, Japan' },
      ],
      back: '→ Back to the landing sheet',
    },
  },

  ja: {
    locale: 'ja',
    meta: {
      title: 'Ryosuke Kureha — portfolio',
      description:
        'Ryosuke Kureha — Full-Stack Engineer, Product Architect and Technical Founder at BCROSSB.inc, Tokyo. Systems that run businesses.',
    },
    header: { links: headerLinks('ja') },
    hero: {
      headingLines: ['I Build Systems', 'That Run Businesses.'],
      lead: 'ビジネスの問題を発見し、スケーラブルなソフトウェアで解決します。',
      body: 'ウェブサイトを作ることにとどまらず、実際のビジネスが効率的に運営されるように製品とシステムを設計・開発します。アイデアを検証する初期段階からアーキテクチャ設計、フロントエンド・バックエンドの実装、データベース、運用の自動化まで、製品のライフサイクル全体を扱います。複雑な問題をシンプルにし、繰り返される業務を自動化し、ひとつの技術基盤で複数のサービスへ拡張することに集中しています。',
      ctaWork: 'Explore Projects',
      ctaContact: 'Get in Touch',
    },
    about: {
      heading: 'Technology Meets Business.',
      sub: '技術のための技術より、実際の問題を解決する技術を追求します。',
      paragraphs: [
        'こんにちは。東京を拠点に活動する開発者で、株式会社BCROSSBの代表を務めるRyosuke Kurehaです。',
        'Webアプリケーション開発、サービス設計、クラウドインフラ、AI自動化システムの構築を中心に活動しています。',
        '自ら複数のサービスを企画・運営する中で、ソフトウェアは単なる機能の集合ではなく、ビジネスの生産性と成長を決める中核インフラであることを学びました。私が大切にしている三つの原則です。',
      ],
      principles: [
        {
          n: '01',
          title: 'Simplify Complexity',
          body: '複雑な要件を分解し、不要な機能と構造を取り除いて、もっともシンプルな解決策を見つけます。',
        },
        {
          n: '02',
          title: 'Build for Reusability',
          body: '同じ問題を二度と解きません。共通のビジネスロジックと再利用可能なモジュールの設計によって、次のサービスをより速く開発します。',
        },
        {
          n: '03',
          title: 'Automate What Matters',
          body: '繰り返される運用業務は自動化し、人の判断が重要な部分により多くの時間を使えるようにします。',
        },
      ],
    },
    services: {
      heading: 'From Idea to Production.',
      sub: 'アイデアから実際の運用まで、ひとつの流れでつなげます。',
      items: [
        {
          title: 'Full-Stack Engineering',
          body: 'Next.js、React、TypeScript、Pythonを基盤に、ユーザーインターフェースからAPI、データベースまで統合されたWebアプリケーションを開発します。',
        },
        {
          title: 'System Architecture',
          body: '複数のサービスで共有できる認証、予約、決済、通知、運用管理などの共通モジュールとスケーラブルなアーキテクチャを設計します。',
        },
        {
          title: 'AI & Workflow Automation',
          body: 'LLM、AIエージェント、Webhook、Google Apps Script、外部APIを組み合わせて、顧客対応、データ処理、業務フローの自動化を実装・実験します。',
        },
        {
          title: 'Product & Business Development',
          body: '市場と顧客の要件を分析し、製品の機能、収益モデル、運用プロセスを合わせて考え、実用的なソリューションを作ります。',
        },
      ],
    },
    work: {
      heading: "Products & Systems I'm Building.",
      sub: '直接作り、運営している製品とシステムです。',
      items: [
        {
          n: '01',
          name: 'STAYJP',
          tagline: 'Hospitality Management Platform',
          body: '宿泊運営の複雑なプロセスを効率的に管理するためのサービスです。予約チャネル、顧客コミュニケーション、清掃スケジュール、運用データをつなぎ、繰り返される業務の自動化に注力しています。',
          bullets: [
            '宿泊運用業務と予約データの管理',
            '外部予約システムとのAPI・Webhook連携',
            '多言語ウェブサイトと顧客接点の開発',
            '運用プロセスの改善と自動化',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, TypeScript, Google Apps Script, API Integration',
          website: 'https://stayjp.jp',
          plate: 'lines',
        },
        {
          n: '02',
          name: 'RIVACTA',
          tagline: 'AI-Enabled Customer Operations',
          body: 'マーケティングとカスタマーサポートをつなぐAIベースの運用システムのプロジェクトです。AIが繰り返される問い合わせを分類して回答の下書きを作成し、複雑あるいはセンシティブな問題は人が処理できる協業構造を設計しています。',
          bullets: [
            'AIベースの問い合わせ分類と回答ワークフロー',
            'オペレーターへの引き継ぎと承認プロセス',
            'カスタマーサポートデータの分析構造',
            'マーケティングと顧客運用データの接続',
          ],
          techLabel: 'Focus',
          tech: 'AI Agents, LLM Integration, Workflow Automation, Customer Operations',
          website: 'https://rivacta.com',
          plate: 'dots',
        },
        {
          n: '03',
          name: 'BCROSSB Platform OS',
          tagline: 'Reusable Marketplace Architecture',
          body: '複数のプラットフォームをそれぞれ独立に開発するのではなく、共通機能を再利用するために設計中のマルチサービスプラットフォームアーキテクチャです。サービスごとに異なるビジネスロジックは分離し、共通機能は再利用できるようにします。',
          bullets: [
            '共通認証とユーザー権限構造',
            '予約・決済・精算・キャンセルの共通ドメイン設計',
            '再利用可能なUIコンポーネントとパッケージ',
            'サービス別ビジネスロジックの分離',
            '管理システムと運用ワークフローの標準化',
          ],
          techLabel: 'Tech',
          tech: 'Next.js, React, TypeScript, FastAPI, PostgreSQL, Tailwind CSS, shadcn/ui',
          plate: 'hatch',
        },
        {
          n: '04',
          name: 'Cleaning Marketplace',
          tagline: 'Service Operations Platform',
          body: '清掃サービスの依頼者と専門パートナーをつなぐマーケットプレイスのプロジェクトです。サービスの受付、スケジュール管理、パートナーマッチング、作業完了確認、精算までつながる運用システムを開発しています。',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Marketplace Architecture, Scheduling, Partner Management, Workflow Automation',
          plate: 'lines',
        },
        {
          n: '05',
          name: 'Monthly Stay Platform',
          tagline: 'Flexible Accommodation Marketplace',
          body: '中長期滞在のための宿泊・レンタルマッチングプラットフォームのプロジェクトです。検索、予約、スケジュール管理、ホスト運用機能を共通プラットフォームアーキテクチャの上で開発しています。',
          bullets: [],
          techLabel: 'Focus',
          tech: 'Booking Systems, Availability Management, Multi-role Applications',
          plate: 'dots',
        },
      ],
    },
    stack: {
      heading: 'Tools I Use to Turn Ideas into Products.',
      sub: 'アイデアを製品に変えるために使っているツールです。',
      groups: [
        { n: '01', label: 'Frontend', items: 'TypeScript · JavaScript · React · Next.js · Tailwind CSS · shadcn/ui · HTML · CSS' },
        { n: '02', label: 'Backend & Database', items: 'Python · FastAPI · Node.js · PostgreSQL · Neon · Supabase · REST API · Webhook' },
        { n: '03', label: 'Infrastructure & DevOps', items: 'AWS · Vercel · Cloudflare · Docker · Git · GitHub' },
        { n: '04', label: 'AI & Automation', items: 'LLM APIs · AI Agents · Local LLM · Google Apps Script · Google Sheets · Workflow Automation' },
        { n: '05', label: 'Testing & Quality', items: 'Cypress · TypeScript Type Safety · Git-based Workflow · Component Reusability' },
      ],
    },
    process: {
      heading: 'Less Complexity. More Impact.',
      sub: '私の働き方の六つのステップです。',
      steps: [
        { n: '01', title: 'Understand', body: 'コードを書く前に、解決すべき問題とビジネスの目標を理解します。' },
        { n: '02', title: 'Simplify', body: '不要な要件と機能を取り除き、最小の実行可能なソリューションを定義します。' },
        { n: '03', title: 'Architect', body: '既存システムと再利用可能なモジュールを検討したうえで、必要な構造だけを設計します。' },
        { n: '04', title: 'Build', body: '画面、ビジネスロジック、API、データベースをひとつの機能単位としてつなげて実装します。' },
        { n: '05', title: 'Validate', body: 'テストと実際の運用データで実装結果を検証し、改善します。' },
        { n: '06', title: 'Automate & Scale', body: '繰り返される業務と検証済みのプロセスを自動化し、新しいサービスでも活用できるように標準化します。' },
      ],
    },
    exploring: {
      heading: 'Building the Next Generation of Business Systems.',
      intro: '現在、次の技術と問題に集中しています。',
      bullets: [
        'AIエージェントを活用した業務実行と自動化',
        'ビジネスごとに拡張可能な共通プラットフォームアーキテクチャ',
        'LLMと人の判断を組み合わせたカスタマーサポートシステム',
        'データに基づく運用の最適化と意思決定',
        'ローカルAIモデルとクラウドAPIを組み合わせた効率的なAIインフラ',
      ],
    },
    contact: {
      heading: 'Have a Problem Worth Solving?',
      lead: '良い製品は良い問題から始まります。',
      sub: '新しい製品開発、システムアーキテクチャ、AI自動化、あるいは技術を活用したビジネス改善に関心があれば、ぜひお話ししたいです。',
      outro: "Let's Build Something Meaningful.",
      links: [{ label: 'GitHub', href: 'https://github.com/kureharyosuke' }],
      note: 'Based in Tokyo, Japan.',
    },
    drift: {
      down: 'Simplify — Automate — Scale —',
      up: 'Systems — Architecture — Platforms —',
    },
    aboutPage: {
      heading: 'About',
      paragraph:
        'Ryosuke Kurehaは東京を拠点とするフルスタックエンジニアで、株式会社BCROSSBの代表です。Webアプリケーション開発、サービス設計、クラウドインフラ、AI自動化システムの構築を中心に活動し、技術のための技術よりも実際の問題を解決する技術を追求しています。STAYJPやRIVACTAなど複数のサービスを自ら企画・運営する中で、ソフトウェアがビジネスの生産性と成長を決める中核インフラであることを学びました。',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc — 代表' },
        { label: 'Focus', value: 'フルスタック開発 · システムアーキテクチャ · AI自動化' },
        { label: 'Base', value: '東京、日本' },
      ],
      back: '→ ランディングシートに戻る',
    },
  },
}
