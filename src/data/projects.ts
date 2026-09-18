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

/**
 * Everything except slug and title is optional, so a project can be listed
 * the day it is decided on and filled in afterwards. The card and the
 * detail page both render only the parts that exist — a project with no
 * cover gets a placeholder tile, and a case study with no `problem` simply
 * has no Problem section. Nothing renders an empty heading or a "TODO".
 *
 * This is deliberate: a half-finished entry should look like a project
 * whose write-up is pending, never like a broken page.
 */
export type Project = {
  /** URL segment: /work/<slug>. Lowercase, hyphenated. */
  slug: string
  title: string
  /** Short descriptor under the title, e.g. "SaaS Dashboard". */
  category?: string
  /** One line for the card. Aim for under 100 characters. */
  summary?: string
  /** Year or range shown on the detail page. */
  timeframe?: string
  /** The three-part case study. Keep each to a short paragraph. */
  problem?: string
  approach?: string
  outcome?: string
  tech?: string[]
  /** Path under /public, e.g. "/projects/my-app/cover.webp". */
  cover?: string
  /** Describe the screenshot for screen-reader users. Required with a cover. */
  coverAlt?: string
  gallery?: { src: string; alt: string }[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'vanity-linx',
    title: 'Vanity Linx',
    category: 'Beauty Providers Marketplace',
    cover: '/vanitylinx.jpg',
    // Describes what is on screen, not what the product claims. The
    // ratings and review counts in the shot are mockup data, so they stay
    // out of the alt text — a screen reader user should get the layout,
    // not numbers that were never real.
    coverAlt:
      'The Vanity Linx homepage: a location and service search over a dark plum hero, filter pills for hair, nails, lashes, spa and barber, and a nearby-salons panel listing local providers.',
    featured: true,

    // ── Still to fill in ────────────────────────────────────────────────
    // summary    one line for the card, under ~100 characters
    // timeframe  e.g. '2025' or '2024 — 2025'
    // problem / approach / outcome    a short paragraph each
    // tech       the real stack, as an array of chip labels
    // liveUrl    when the site goes live
    //
    // Until each of those is set, the card and the detail page just omit
    // that piece. Nothing breaks and nothing shows a placeholder string.
  },
  {
    slug: 'esimlinx',
    title: 'eSIMLinx',
    category: 'Travel eSIM Platform',
    // Cropped from the original esimlinx.png to 1536×904, matching Vanity
    // Linx's 1.698 exactly. Both covers being the same shape is what lets
    // the two cards frame identically — with object-contain, a cover that
    // does not match the tile gets letterboxed, which both widens its bezel
    // on one axis and hides the rounded corners (the radius clips the <img>
    // box, and a letterboxed image does not reach its own box edges).
    cover: '/esimlinx-cover.jpg',
    // Describes the screen, not the pitch. The marketing claims in the
    // shot — "200+ countries", "trusted by millions" — are the product's
    // own copy, so they stay out of the alt text rather than being
    // restated here as fact.
    coverAlt:
      'The eSIMLinx homepage: a destination and duration search over a traveller holding a phone at an airport window, feature callouts for instant activation and global coverage, and a section below showing destination plans around a phone.',
    featured: true,

    // ── Still to fill in ────────────────────────────────────────────────
    // summary    one line for the card, under ~100 characters
    // timeframe  e.g. '2025' or '2024 — 2025'
    // problem / approach / outcome    a short paragraph each
    // tech       the real stack, as an array of chip labels
    // liveUrl    when the site goes live
  },
]

/** The three projects shown on the home page. */
export const featuredProjects = (): Project[] => {
  const flagged = projects.filter((project) => project.featured)
  return (flagged.length > 0 ? flagged : projects).slice(0, 3)
}

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)
