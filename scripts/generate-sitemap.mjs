/**
 * Writes public/sitemap.xml from the project slugs in src/data/projects.ts.
 *
 * Runs automatically before every build (see the "prebuild" script), so the
 * sitemap stays correct as projects are added without anyone remembering to
 * update it. Commented-out example entries in projects.ts are ignored.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// Keep in sync with the canonical URL in index.html.
const SITE = process.env.SITE_URL ?? 'https://zobeda.dewan-zobeda.workers.dev'

const source = readFileSync(resolve(root, 'src/data/projects.ts'), 'utf8')

// Only look inside the exported array, and drop commented-out lines so the
// documented example entry never reaches the sitemap.
const arrayBody = source.slice(
  source.indexOf('export const projects'),
  source.indexOf('/** The three projects shown'),
)

const slugs = arrayBody
  .split('\n')
  .filter((line) => !line.trim().startsWith('//') && !line.trim().startsWith('*'))
  .flatMap((line) => [...line.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]))

const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${SITE}/`, priority: '1.0' },
  ...slugs.map((slug) => ({ loc: `${SITE}/work/${slug}`, priority: '0.8' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml: ${urls.length} URL(s)`)
