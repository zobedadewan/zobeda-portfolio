# zobeda-portfolio

Personal portfolio for Zobeda Dewan, Frontend Developer.
React 19 · TypeScript · Tailwind CSS v4 · Vite · React Router · deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + generate sitemap + build to dist/
npm run preview    # serve the production build locally
```

## Where things are

| Path | What it holds |
|---|---|
| `src/data/` | **All site copy.** Edit here, not in components. |
| `src/components/sections/` | One file per page section |
| `src/components/ui/` | `Button`, `Chip`, `Card`, `Reveal`, `ArchFrame`, `Container`, `SectionHeader` |
| `src/index.css` | Design tokens (`@theme`), base layer, custom utilities |
| `.cursor/rules/portfolio.mdc` | Design + content rules Cursor's agent follows |
| `scripts/generate-sitemap.mjs` | Regenerates `public/sitemap.xml` on every build |

## Adding a project

1. Put images in `public/projects/<slug>/` (cover around 1200×900, WebP).
2. Append an entry to the `projects` array in `src/data/projects.ts`.

That's the whole job — the home-page grid, the `/work/<slug>` detail page and
the sitemap all read from that array. While the array is empty the Work section
renders an "in progress" state rather than a broken grid.

## Adding the portrait photo

`src/components/sections/Hero.tsx` renders `<ArchFrame>` with no `src`, which
draws a designed placeholder. To use a real photo, save it to `public/` and pass:

```tsx
<ArchFrame src="/zobeda.webp" alt="Zobeda Dewan, frontend developer" monogram="Z" priority ... />
```

Same idea for the About section (`src/components/sections/About.tsx`).

## Design system

Tokens live in `src/index.css`. Contrast ratios for every text/background pair
were measured and are recorded in a comment there — the two rules that matter:

- Text on a tinted ground (`blush`/`petal`) uses `rose-deep`, never `rose`.
- `gold` never carries small text; eyebrow labels use `gold-deep`.

## Deployment

Pushing to `main` triggers a Vercel deploy. `vercel.json` contains the SPA
rewrite that makes `/work/<slug>` resolve on a hard refresh — without it those
URLs 404.

After the first deploy, replace the placeholder URL in `index.html` (canonical
+ Open Graph tags), `public/robots.txt`, and the `SITE` constant in
`scripts/generate-sitemap.mjs` with the real one.
