/**
 * Case studies.
 *
 * ── HOW TO ADD A PROJECT ────────────────────────────────────────────────
 * 1. Drop images in `public/projects/<slug>/` (cover.webp, plus any gallery
 *    shots). Cover images look best at 1200×900 or thereabouts.
 * 2. Append an entry to the `projects` array below.
 * 3. That is the whole job. The card grid on the home page, the detail page
 *    at /work/<slug>, and the sitemap all read from this array.
 *
 * Mark up to three entries `featured: true` to choose what shows on the
 * home page. With none marked, the three most recent are used.
 */

export type Project = {
  /** URL segment: /work/<slug>. Lowercase, hyphenated. */
  slug: string
  title: string
  /** Short descriptor under the title, e.g. "SaaS Dashboard". */
  category: string
  /** One line for the card. Aim for under 100 characters. */
  summary: string
  /** Year or range shown on the detail page. */
  timeframe: string
  /** The three-part case study. Keep each to a short paragraph. */
  problem: string
  approach: string
  outcome: string
  tech: string[]
  /** Path under /public, e.g. "/projects/my-app/cover.webp". */
  cover: string
  /** Describe the screenshot for screen-reader users. Required. */
  coverAlt: string
  gallery?: { src: string; alt: string }[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  // Nothing published yet — the Work section renders its "in progress"
  // state while this array is empty, so the live site never shows a
  // broken grid. Delete this comment when the first entry lands.
  //
  // Example of the shape:
  //
  // {
  //   slug: 'flow-dashboard',
  //   title: 'Flow Dashboard',
  //   category: 'SaaS Analytics',
  //   summary: 'A real-time analytics dashboard with exportable reporting.',
  //   timeframe: '2026',
  //   problem: 'Operations leads were rebuilding the same report by hand every week.',
  //   approach: 'React + TanStack Query over a REST API, with virtualized tables and a typed export pipeline.',
  //   outcome: 'Weekly reporting dropped from four hours to a single click.',
  //   tech: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS'],
  //   cover: '/projects/flow-dashboard/cover.webp',
  //   coverAlt: 'Analytics dashboard showing revenue charts and a filterable data table.',
  //   liveUrl: 'https://example.com',
  //   repoUrl: 'https://github.com/zobedadewan/flow-dashboard',
  //   featured: true,
  // },
]

/** The three projects shown on the home page. */
export const featuredProjects = (): Project[] => {
  const flagged = projects.filter((project) => project.featured)
  return (flagged.length > 0 ? flagged : projects).slice(0, 3)
}

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)
