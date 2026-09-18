/**
 * Maps a skill label to its mark.
 *
 * Kept out of TechIcons.tsx so that file exports nothing but components —
 * mixing a lookup in with them breaks React Fast Refresh for the whole
 * module. Same split as src/lib/icons.ts, for the same reason.
 *
 * Marks come from three places: the hand-drawn ones in TechIcons.tsx, the
 * existing GitHub mark in BrandIcons.tsx, and lucide for the entries that
 * are practices rather than products — "Agile" has no logo, and inventing
 * one would be worse than using a plain glyph.
 */

import {
  Accessibility,
  ClipboardCheck,
  Globe,
  MonitorSmartphone,
  RefreshCw,
  Webhook,
} from 'lucide-react'

import { GithubIcon } from '@/components/ui/BrandIcons'
import {
  AwsMark,
  AxiosMark,
  CssMark,
  CypressMark,
  DockerMark,
  ExpressMark,
  FigmaMark,
  GitMark,
  HtmlMark,
  JavascriptMark,
  JiraMark,
  MongoMark,
  MysqlMark,
  NextMark,
  NodeMark,
  OpenAiMark,
  PlaywrightMark,
  ReactMark,
  ReduxMark,
  TailwindMark,
  TanstackMark,
  type TechIcon,
  TypescriptMark,
  ViteMark,
  WebpackMark,
  ZodMark,
} from '@/components/ui/TechIcons'

type TechMark = {
  Icon: TechIcon
  /** Brand colour, or a site token for entries that have no brand. */
  color: string
}

/* ---- Brand colours ---------------------------------------------------
   Vendor values, with one deliberate exception class: where a brand's
   headline colour is a pale one meant for dark UI, this uses the darker
   variant the vendor itself publishes for light backgrounds. Otherwise the
   mark would all but vanish on cream.

     React     #087EA4  (its docs' light-mode blue, not #61DAFB)
     Webpack   #1C78C0  (the dark blue of the mark, not #8DD6F9)
     Tailwind  #0EA5E9  (one step down from #38BDF8)

   JavaScript and AWS keep their real yellow and orange — those marks are
   filled badges with the letters knocked out in ink, which is how the real
   logos handle exactly this problem. */
const BRAND = {
  react: '#087EA4',
  redux: '#764ABC',
  tanstack: '#FF4154',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  html: '#E34F26',
  css: '#1572B6',
  tailwind: '#0EA5E9',
  next: '#111111',
  node: '#339933',
  express: '#111111',
  openai: '#412991',
  mongo: '#47A248',
  mysql: '#00758F',
  aws: '#FF9900',
  playwright: '#2EAD33',
  cypress: '#17202C',
  vite: '#646CFF',
  webpack: '#1C78C0',
  git: '#F05032',
  github: '#181717',
  docker: '#2496ED',
  axios: '#5A29E4',
  zod: '#3E67B1',
  figma: '#F24E1E',
  jira: '#0052CC',
} as const

/* Entries with no vendor behind them stay on the site palette, so the
   practice pills read as part of the page rather than as a brand nobody
   recognises. */
const OWN = {
  plum: 'var(--color-plum)',
  rose: 'var(--color-rose-deep)',
  gold: 'var(--color-gold-deep)',
} as const

/**
 * Keys are normalised labels — see `normalise`, which is what lets one
 * entry cover "React", "React.js" and "JavaScript (ES6+)".
 *
 * Several React-ecosystem entries share the atom on purpose: Context API
 * and React Hooks are React, not separate products, and giving them
 * invented marks would be worse than repeating the real one.
 */
const BY_LABEL: Record<string, TechMark> = {
  // React and its ecosystem
  react: { Icon: ReactMark, color: BRAND.react },
  reactjs: { Icon: ReactMark, color: BRAND.react },
  reacthooks: { Icon: ReactMark, color: BRAND.react },
  reactrouter: { Icon: ReactMark, color: BRAND.react },
  reacthookform: { Icon: ReactMark, color: BRAND.react },
  contextapi: { Icon: ReactMark, color: BRAND.react },
  redux: { Icon: ReduxMark, color: BRAND.redux },
  reduxtoolkit: { Icon: ReduxMark, color: BRAND.redux },
  tanstackquery: { Icon: TanstackMark, color: BRAND.tanstack },

  // Languages and markup
  typescript: { Icon: TypescriptMark, color: BRAND.typescript },
  javascript: { Icon: JavascriptMark, color: BRAND.javascript },
  javascriptes6: { Icon: JavascriptMark, color: BRAND.javascript },
  html5: { Icon: HtmlMark, color: BRAND.html },
  css3: { Icon: CssMark, color: BRAND.css },
  tailwindcss: { Icon: TailwindMark, color: BRAND.tailwind },
  nextjs: { Icon: NextMark, color: BRAND.next },

  // Backend
  nodejs: { Icon: NodeMark, color: BRAND.node },
  expressjs: { Icon: ExpressMark, color: BRAND.express },
  restfulapis: { Icon: Webhook, color: OWN.plum },
  restapis: { Icon: Webhook, color: OWN.plum },
  gpt4api: { Icon: OpenAiMark, color: BRAND.openai },

  // Data and cloud
  mongodb: { Icon: MongoMark, color: BRAND.mongo },
  mysql: { Icon: MysqlMark, color: BRAND.mysql },
  aws: { Icon: AwsMark, color: BRAND.aws },

  // Testing
  playwright: { Icon: PlaywrightMark, color: BRAND.playwright },
  cypress: { Icon: CypressMark, color: BRAND.cypress },
  functionaltesting: { Icon: ClipboardCheck, color: OWN.rose },

  // Tooling
  vite: { Icon: ViteMark, color: BRAND.vite },
  webpack: { Icon: WebpackMark, color: BRAND.webpack },
  git: { Icon: GitMark, color: BRAND.git },
  github: { Icon: GithubIcon, color: BRAND.github },
  docker: { Icon: DockerMark, color: BRAND.docker },
  axios: { Icon: AxiosMark, color: BRAND.axios },
  zod: { Icon: ZodMark, color: BRAND.zod },
  figma: { Icon: FigmaMark, color: BRAND.figma },
  jira: { Icon: JiraMark, color: BRAND.jira },

  // Practices, not products
  wcag21: { Icon: Accessibility, color: OWN.plum },
  aoda: { Icon: Accessibility, color: OWN.plum },
  agile: { Icon: RefreshCw, color: OWN.gold },
  responsivedesign: { Icon: MonitorSmartphone, color: OWN.rose },
  crossbrowsercompatibility: { Icon: Globe, color: OWN.plum },
}

/** "JavaScript (ES6+)" -> "javascriptes6", so one key covers the variants. */
function normalise(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]/g, '')
}

/**
 * The mark for a skill label, or null if there isn't one — an unmapped
 * skill added to src/data/* renders as plain text rather than breaking.
 */
export function techIconFor(label: string): TechMark | null {
  return BY_LABEL[normalise(label)] ?? null
}
