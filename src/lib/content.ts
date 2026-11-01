/**
 * Content dictionary for the tiny static i18n layer.
 * Default site (`/`, `/about`) is Korean; `/en`, `/ja` mirror it.
 * Static export only — no middleware, no runtime locale detection.
 *
 * Display headings stay English in all locales (Altason broadsheet
 * house style); editorial copy switches.
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

export type WorkEntry = {
  n: string
  title: string
  year: string
  field: string
  href: string
  blurb: string
  plate: 'lines' | 'dots' | 'hatch'
}

export type IndexEntry = {
  n: string
  title: string
  role: string
  year: string
  href: string
  blurb: string
}

export type PracticeStep = {
  n: string
  phase: string
  claim: string
  detail: string
  repo: string
  href: string
}

export type Dict = {
  locale: Locale
  meta: { title: string; description: string }
  header: { links: { href: string; label: string }[] }
  hero: { lines: string[]; paragraph: string; tick: string }
  ticker: string[]
  featured: { heading: string; more: string; work: WorkEntry[] }
  practice: {
    heading: string
    sub: string
    thesis: { pre: string; strong: string; post: string }
    outro: string
    steps: PracticeStep[]
  }
  index: { heading: string; entries: IndexEntry[] }
  drift: { down: string; up: string }
  about: {
    heading: string
    paragraph: string
    rows: { label: string; value: string }[]
    back: string
  }
}

const WORK_BASE: Omit<WorkEntry, 'blurb' | 'field'>[] = [
  {
    n: '01',
    title: 'legalize-kr',
    year: '2026',
    href: 'https://github.com/kureharyosuke/legalize-kr',
    plate: 'lines',
  },
  {
    n: '02',
    title: 'agentmemory',
    year: '2026',
    href: 'https://github.com/kureharyosuke/agentmemory',
    plate: 'dots',
  },
  {
    n: '03',
    title: 'ponytail',
    year: '2026',
    href: 'https://github.com/kureharyosuke/ponytail',
    plate: 'hatch',
  },
]

const INDEX_BASE: Omit<IndexEntry, 'blurb' | 'role'>[] = [
  { n: '01', title: 'legalize-kr', year: '2026', href: 'https://github.com/kureharyosuke/legalize-kr' },
  { n: '02', title: 'agentmemory', year: '2026', href: 'https://github.com/kureharyosuke/agentmemory' },
  { n: '03', title: 'ponytail', year: '2026', href: 'https://github.com/kureharyosuke/ponytail' },
  { n: '04', title: 'openrig', year: '2026', href: 'https://github.com/kureharyosuke/openrig' },
  { n: '05', title: 'Agent-Reach', year: '2026', href: 'https://github.com/kureharyosuke/Agent-Reach' },
  { n: '06', title: 'rea', year: '2026', href: 'https://github.com/kureharyosuke/rea' },
  { n: '07', title: 'hyperframes', year: '2026', href: 'https://github.com/kureharyosuke/hyperframes' },
  { n: '08', title: 'skills', year: '2026', href: 'https://github.com/kureharyosuke/skills' },
]

const headerLinks = (locale: Locale) => {
  return [
    { href: localePath(locale) === '/' ? '/#work' : localePath(locale) + '/#work', label: 'Work' },
    { href: localePath(locale) === '/' ? '/#index' : localePath(locale) + '/#index', label: 'Index' },
    { href: localePath(locale, 'about'), label: 'About' },
  ]
}

export const dicts: Record<Locale, Dict> = {
  ko: {
    locale: 'ko',
    meta: {
      title: 'Yunseok Oh — portfolio',
      description:
        'Yunseok Oh — design & AI engineer at BCROSSB.inc. Agent systems, agent memory, skills and tooling.',
    },
    header: { links: headerLinks('ko') },
    hero: {
      lines: ['Yunseok', 'Oh —'],
      paragraph:
        'BCROSSB.inc의 디자인·AI 엔지니어. 도쿄에서 에이전트 시스템을 만듭니다: 영속 메모리, 에이전트 네트워크, 법령 데이터 인프라 — 모두 오픈소스로.',
      tick: 'Selected works 2026',
    },
    ticker: ['Agent Systems', 'Agent Memory', 'Open Source', 'Legal Data', 'Video Pipelines', 'Engineering DX'],
    featured: {
      heading: 'Featured',
      more: 'Full index ↓',
      work: [
        {
          ...WORK_BASE[0],
          field: 'Legal data',
          blurb:
            '대한민국 법령을 Git 저장소로 관리합니다. 법령마다 Markdown 파일을 두고, 개정은 실제 공포일자를 따라갑니다.',
        },
        {
          ...WORK_BASE[1],
          field: 'Agent systems',
          blurb: 'AI 코딩 에이전트를 위한 영구 메모리 — 실전에서 다듬어진 persistent memory.',
        },
        {
          ...WORK_BASE[2],
          field: 'Skills · DX',
          blurb: 'AI 에이전트가 가장 게으른 시니어 개발자처럼 생각하게 만드는 스킬 — laziest solution that actually works.',
        },
      ],
    },
    practice: {
      heading: 'Problem, first.',
      sub: '문제를 찾는 능력과 설계 — 소프트웨어 개발 주기(SDLC) 전체의 맥락',
      thesis: {
        pre: '기술 그 자체보다, ',
        strong: '어떤 문제를 해결해야 하는가를 정의하는 능력',
        post: '이 중요해졌습니다. 그리고 전체 소프트웨어 제품 개발 주기(SDLC)의 맥락을 이해하는 능력 — 제가 매일 하는 일은 이 네 단계의 반복입니다.',
      },
      outro:
        'Define → Design → Build → Verify. 사이클이 돌수록 좋아지는 것은 기술이 아니라, 판단입니다.',
      steps: [
        {
          n: '01',
          phase: 'Define',
          claim: '해결할 문제를 먼저 정의한다.',
          detail: '법령이 정적 PDF에 매몰되는 문제를 정의하고, 법령 데이터를 Git 저장소로 재모델링했습니다.',
          repo: 'legalize-kr',
          href: 'https://github.com/kureharyosuke/legalize-kr',
        },
        {
          n: '02',
          phase: 'Design',
          claim: '개발 주기 전체를 내려다보고 설계한다.',
          detail: '코딩 에이전트의 기억 상실 문제를 프로덕션 런 기록에서 역으로 설계해 영속 메모리로 풀었습니다.',
          repo: 'agentmemory',
          href: 'https://github.com/kureharyosuke/agentmemory',
        },
        {
          n: '03',
          phase: 'Build',
          claim: '기준은 문제 해결. 가장 짧은 경로로 만든다.',
          detail: '에이전트가 최소주의 시니어 개발자처럼 생각하도록 만드는 스킬과 엔지니어링 DX 도구들입니다.',
          repo: 'ponytail · skills',
          href: 'https://github.com/kureharyosuke/ponytail',
        },
        {
          n: '04',
          phase: 'Verify',
          claim: '감이 아니라 증거로 검증한다.',
          detail: '출시 후 동작을 바이트 수준까지 파고들어 증거 번들로 남기는 리버스 엔지니어링 도구입니다.',
          repo: 'rea',
          href: 'https://github.com/kureharyosuke/rea',
        },
      ],
    },
    index: {
      heading: 'Index',
      entries: [
        {
          ...INDEX_BASE[0],
          role: 'Legal data',
          blurb: '대한민국 법령을 Git 저장소로 모델링합니다 — 법령마다 Markdown 파일 하나, 개정은 실제 공포일자로 추적.',
        },
        {
          ...INDEX_BASE[1],
          role: 'Agent systems',
          blurb: 'AI 코딩 에이전트를 위한 영구 메모리 — 실전 에이전트 런에서 증류했습니다.',
        },
        {
          ...INDEX_BASE[2],
          role: 'Skills · DX',
          blurb: 'AI 에이전트를 방 안에서 가장 게으른 시니어 개발자처럼 생각하게 만드는 스킬 — 실제로 작동하는 가장 짧은 경로.',
        },
        {
          ...INDEX_BASE[3],
          role: 'Agent orchestration',
          blurb: 'Claude Code, Codex 등을 조합해 당신만의 에이전트 네트워크를 만듭니다.',
        },
        {
          ...INDEX_BASE[4],
          role: 'Agent tooling',
          blurb: 'AI 에이전트에 인터넷 전체를 보는 눈을 — 읽고, 저장하고, 색인합니다.',
        },
        {
          ...INDEX_BASE[5],
          role: 'Reverse engineering',
          blurb: '에이전트로 무엇이든 리버스 엔지니어링 — 출시된 앱의 동작부터 바이트까지.',
        },
        {
          ...INDEX_BASE[6],
          role: 'Video pipelines',
          blurb: 'HTML을 쓰면 영상이 됩니다. 에이전트용으로 설계된 렌더 파이프라인.',
        },
        {
          ...INDEX_BASE[7],
          role: 'Engineering DX',
          blurb: '진짜 엔지니어를 위한 스킬들 — .agents 디렉터리에서 그대로 꺼냈습니다.',
        },
      ],
    },
    drift: {
      down: 'Agent systems — Agent memory — Skills — Tooling —',
      up: 'Open source — Agent networks — Legal data — Video pipelines —',
    },
    about: {
      heading: 'About',
      paragraph:
        'Yunseok Oh은 도쿄에 기반한 디자인 & AI 엔지니어로, BCROSSB.inc에서 일합니다. 오픈소스로 에이전트 시스템을 출시합니다: 코딩 에이전트의 영속 메모리, Claude Code와 Codex 위의 에이전트 네트워크, 한국 법령 데이터 인프라, 그리고 에이전트를 방 안에서 가장 게으른 시니어 개발자처럼 만드는 스킬 프레임워크.',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc' },
        { label: 'Focus', value: '에이전트 시스템 · AI 툴링 · 에디토리얼 디자인' },
        { label: 'Base', value: '도쿄, 일본' },
      ],
      back: '→ 랜딩 시트로 돌아가기',
    },
  },

  en: {
    locale: 'en',
    meta: {
      title: 'Yunseok Oh — portfolio',
      description:
        'Yunseok Oh — design & AI engineer at BCROSSB.inc. Agent systems, agent memory, skills and tooling.',
    },
    header: { links: headerLinks('en') },
    hero: {
      lines: ['Yunseok', 'Oh —'],
      paragraph:
        'Design engineer and AI engineer at BCROSSB.inc. Building agent systems from Tokyo: persistent memory, agent networks, legal data infrastructure — all shipped as open source.',
      tick: 'Selected works 2026',
    },
    ticker: ['Agent Systems', 'Agent Memory', 'Open Source', 'Legal Data', 'Video Pipelines', 'Engineering DX'],
    featured: {
      heading: 'Featured',
      more: 'Full index ↓',
      work: [
        {
          ...WORK_BASE[0],
          field: 'Legal data',
          blurb:
            'South-Korean statutes as a Git repository — one Markdown file per law, amendments tracked by their actual promulgation dates.',
        },
        {
          ...WORK_BASE[1],
          field: 'Agent systems',
          blurb: 'Persistent memory for AI coding agents, distilled from production agent runs.',
        },
        {
          ...WORK_BASE[2],
          field: 'Skills · DX',
          blurb: 'Makes AI agents think like the laziest senior dev in the room — the shortest path that actually works.',
        },
      ],
    },
    practice: {
      heading: 'Problem, first.',
      sub: 'Problem-finding and design — the software development life cycle (SDLC) as working context',
      thesis: {
        pre: 'What matters now is not the tech itself — it is ',
        strong: 'defining which problem to solve',
        post:
          ', and understanding the whole software development life cycle (SDLC). What I do every day is the repetition of these four steps.',
      },
      outro:
        'Define → Design → Build → Verify. What improves every cycle is not the technology — it is judgment.',
      steps: [
        {
          n: '01',
          phase: 'Define',
          claim: 'Define the problem first.',
          detail: 'Modeled South-Korean statutes buried in static PDFs by re-modeling legal data as a Git repository.',
          repo: 'legalize-kr',
          href: 'https://github.com/kureharyosuke/legalize-kr',
        },
        {
          n: '02',
          phase: 'Design',
          claim: 'Design looking down the whole cycle.',
          detail: 'Reverse-designed persistent memory for coding agents out of production agent run records.',
          repo: 'agentmemory',
          href: 'https://github.com/kureharyosuke/agentmemory',
        },
        {
          n: '03',
          phase: 'Build',
          claim: 'The bar is the problem — build the shortest path.',
          detail: 'Skills and engineering DX tooling that make agents think like the laziest senior dev in the room.',
          repo: 'ponytail · skills',
          href: 'https://github.com/kureharyosuke/ponytail',
        },
        {
          n: '04',
          phase: 'Verify',
          claim: 'Verify with evidence, not vibes.',
          detail: 'Reverse engineering that digs shipped behavior down to the bytes and leaves an evidence bundle.',
          repo: 'rea',
          href: 'https://github.com/kureharyosuke/rea',
        },
      ],
    },
    index: {
      heading: 'Index',
      entries: [
        {
          ...INDEX_BASE[0],
          role: 'Legal data',
          blurb:
            'Modeling South-Korean statutes as a Git repository — one Markdown file per law, amendments tracked by their actual promulgation dates.',
        },
        {
          ...INDEX_BASE[1],
          role: 'Agent systems',
          blurb: 'Persistent memory for AI coding agents, distilled from production agent runs.',
        },
        {
          ...INDEX_BASE[2],
          role: 'Skills · DX',
          blurb: 'A skill that makes AI agents think like the laziest senior dev in the room — the shortest path that actually works.',
        },
        {
          ...INDEX_BASE[3],
          role: 'Agent orchestration',
          blurb: 'Build your own network of agents out of Claude Code, Codex and friends.',
        },
        {
          ...INDEX_BASE[4],
          role: 'Agent tooling',
          blurb: 'Give your AI agent eyes to see the entire internet — read, save and index.',
        },
        {
          ...INDEX_BASE[5],
          role: 'Reverse engineering',
          blurb: 'Reverse engineer anything with agents — from app behavior down to the bytes.',
        },
        {
          ...INDEX_BASE[6],
          role: 'Video pipelines',
          blurb: 'Write HTML. Render video. Built for agents.',
        },
        {
          ...INDEX_BASE[7],
          role: 'Engineering DX',
          blurb: 'Skills for real engineers — straight from the .agents directory.',
        },
      ],
    },
    drift: {
      down: 'Agent systems — Agent memory — Skills — Tooling —',
      up: 'Open source — Agent networks — Legal data — Video pipelines —',
    },
    about: {
      heading: 'About',
      paragraph:
        'Yunseok Oh is a design & AI engineer based in Tokyo, working at BCROSSB.inc. He ships agent systems as open source: persistent memory for coding agents, agent networks built on Claude Code and Codex, legal data infrastructure for Korean statutes, and skills frameworks that make agents think like the laziest senior dev in the room.',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc' },
        { label: 'Focus', value: 'Agent systems · AI tooling · Editorial design' },
        { label: 'Base', value: 'Tokyo, Japan' },
      ],
      back: '→ Back to the landing sheet',
    },
  },

  ja: {
    locale: 'ja',
    meta: {
      title: 'Yunseok Oh — portfolio',
      description:
        'Yunseok Oh — design & AI engineer at BCROSSB.inc. Agent systems, agent memory, skills and tooling.',
    },
    header: { links: headerLinks('ja') },
    hero: {
      lines: ['Yunseok', 'Oh —'],
      paragraph:
        'BCROSSB.incのデザイン・AIエンジニア。東京からエージェントシステムを構築しています:永続メモリ、エージェントネットワーク、法令データインフラ — すべてオープンソースとして。',
      tick: 'Selected works 2026',
    },
    ticker: ['Agent Systems', 'Agent Memory', 'Open Source', 'Legal Data', 'Video Pipelines', 'Engineering DX'],
    featured: {
      heading: 'Featured',
      more: 'Full index ↓',
      work: [
        {
          ...WORK_BASE[0],
          field: 'Legal data',
          blurb:
            '韓国の法令をGitリポジトリで管理します。法律ごとにMarkdownファイルを置き、改正は実際の公布日を追跡します。',
        },
        {
          ...WORK_BASE[1],
          field: 'Agent systems',
          blurb: 'AIコーディングエージェントのための永続メモリ — 実戦のエージェントランから蒸留された persistent memory。',
        },
        {
          ...WORK_BASE[2],
          field: 'Skills · DX',
          blurb: 'AIエージェントを部屋で一番怠惰なシニア開発者のように思考させるスキル — 実際に動く最短の道。',
        },
      ],
    },
    practice: {
      heading: 'Problem, first.',
      sub: '問題を発見する力と設計 — ソフトウェア開発ライフサイクル(SDLC)全体の文脈',
      thesis: {
        pre: '技術そのものより、',
        strong: 'どの問題を解決すべきかを定義する力',
        post: 'こそが重要になりました。そしてソフトウェア製品開発ライフサイクル(SDLC)全体の文脈を理解する力 — 私が毎日していることは、この四段階の繰り返しです。',
      },
      outro: 'Define → Design → Build → Verify。サイクルを回すごとに上がるのは技術ではなく、判断力です。',
      steps: [
        {
          n: '01',
          phase: 'Define',
          claim: '解決すべき問題を先に定義する。',
          detail: '静的PDFに埋もれていた法令データの問題を定義し、法令データをGitリポジトリとして再モデルリングしました。',
          repo: 'legalize-kr',
          href: 'https://github.com/kureharyosuke/legalize-kr',
        },
        {
          n: '02',
          phase: 'Design',
          claim: '開発サイクル全体を見下ろして設計する。',
          detail: 'コーディングエージェントの記憶喪失問題をプロダクションランの記録から逆設計し、永続メモリとして解きました。',
          repo: 'agentmemory',
          href: 'https://github.com/kureharyosuke/agentmemory',
        },
        {
          n: '03',
          phase: 'Build',
          claim: '基準は問題解決。最短の道で作る。',
          detail: 'エージェントを最小主義のシニア開発者のように思考させるスキルと、エンジニアリングDXツール群です。',
          repo: 'ponytail · skills',
          href: 'https://github.com/kureharyosuke/ponytail',
        },
        {
          n: '04',
          phase: 'Verify',
          claim: '勘ではなく証拠で検証する。',
          detail: 'リリース後の動作をバイトレベルまで掘り下げ、証拠バンドルとして残すリバースエンジニアリングツールです。',
          repo: 'rea',
          href: 'https://github.com/kureharyosuke/rea',
        },
      ],
    },
    index: {
      heading: 'Index',
      entries: [
        {
          ...INDEX_BASE[0],
          role: 'Legal data',
          blurb: '韓国の法令をGitリポジトリとしてモデルリング — 法律ごとにMarkdownファイル1枚、改正は実際の公布日で追跡。',
        },
        {
          ...INDEX_BASE[1],
          role: 'Agent systems',
          blurb: 'AIコーディングエージェントのための永続メモリ — 実戦のエージェントランから蒸留。',
        },
        {
          ...INDEX_BASE[2],
          role: 'Skills · DX',
          blurb: 'AIエージェントを部屋で一番怠惰なシニア開発者のように思考させるスキル — 実際に動く最短の道。',
        },
        {
          ...INDEX_BASE[3],
          role: 'Agent orchestration',
          blurb: 'Claude Code、Codexなどを組み合わせて自分だけのエージェントネットワークを構築。',
        },
        {
          ...INDEX_BASE[4],
          role: 'Agent tooling',
          blurb: 'AIエージェントにインターネット全体を見る目を — 読み、保存し、インデックスします。',
        },
        {
          ...INDEX_BASE[5],
          role: 'Reverse engineering',
          blurb: 'エージェントで何でもリバースエンジニアリング — アプリの挙動からバイトまで。',
        },
        {
          ...INDEX_BASE[6],
          role: 'Video pipelines',
          blurb: 'HTMLを書けば映像になる。エージェントのために設計されたレンダリングパイプライン。',
        },
        {
          ...INDEX_BASE[7],
          role: 'Engineering DX',
          blurb: '本当のエンジニアのためのスキル — .agentsディレクトリからそのまま。',
        },
      ],
    },
    drift: {
      down: 'Agent systems — Agent memory — Skills — Tooling —',
      up: 'Open source — Agent networks — Legal data — Video pipelines —',
    },
    about: {
      heading: 'About',
      paragraph:
        'Yunseok Ohは東京を拠点とするデザイン&AIエンジニアで、BCROSSB.incに在籍しています。オープンソースとしてエージェントシステムをリリースしています:コーディングエージェントの永続メモリ、Claude CodeとCodexの上のエージェントネットワーク、韓国法令データインフラ、そしてエージェントを部屋で一番怠惰なシニア開発者のようにするスキルフレームワーク。',
      rows: [
        { label: 'Company', value: 'BCROSSB.inc' },
        { label: 'Focus', value: 'エージェントシステム · AIツーリング · エディトリアルデザイン' },
        { label: 'Base', value: '東京、日本' },
      ],
      back: '→ ランディングシートに戻る',
    },
  },
}
