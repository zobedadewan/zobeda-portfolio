/**
 * Technology marks for the skill pills. The label -> mark lookup lives in
 * src/lib/techIcons.ts; this file only draws them.
 *
 * Every icon draws in `currentColor`. It carries no colour of its own — the
 * brand colour is set on the element that renders it, from the table in
 * src/lib/techIcons.ts, which keeps the drawing and the palette separate.
 *
 * A handful of brand colours are the darkened variant the vendor itself
 * publishes for light backgrounds (React uses #087EA4, not the pale #61DAFB
 * from its dark-mode mark). Those are noted at the table.
 *
 * The set is three tiers, because not every mark survives being 12px wide:
 *
 *   1. Geometric reconstructions, for logos that ARE geometry — React's
 *      atom, Figma's five shapes, Webpack's nested cube, the HTML5/CSS3
 *      shields. These are drawn from the shapes of the real marks.
 *   2. Letter badges, for brands whose logo is already a letterform in a
 *      rounded square (TypeScript, JavaScript) and for the handful whose
 *      real mark is too intricate to read at this size.
 *   3. lucide glyphs, for entries that are practices rather than products —
 *      those are wired up in the lookup, not here.
 */

import type { ComponentType, ReactNode, SVGProps } from 'react'

export type TechIconProps = {
  size?: number
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'ref'>

/** Wide enough to cover both the marks below and lucide's own components. */
export type TechIcon = ComponentType<TechIconProps>

/** Shared wrapper so every mark has the same box and defaults. */
function Svg({ size = 12, children, ...rest }: TechIconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

/**
 * Tier 2: a letter knocked out of a filled rounded square. This is not a
 * fallback shape — for TypeScript and JavaScript it is genuinely what the
 * logo is (white TS on blue, black JS on yellow).
 *
 * Filled rather than outlined because the fill is what carries the brand
 * colour at 12px. An outlined badge in TypeScript blue reads as a thin blue
 * ring; a filled one reads as the TypeScript logo.
 *
 * `knockout` picks the letter colour. Most brands are dark enough to take
 * the page ground; the light ones (JavaScript yellow, AWS orange) need ink
 * instead, which is also what their real logos use.
 *
 * The text uses the site's mono face via a class rather than a fontFamily
 * attribute, because SVG presentation attributes cannot resolve var().
 */
function LetterMark({
  label,
  knockout = 'light',
  ...props
}: TechIconProps & { label: string; knockout?: 'light' | 'dark' }) {
  return (
    <Svg {...props}>
      <rect x="1.4" y="1.4" width="21.2" height="21.2" rx="5.2" fill="currentColor" />
      <text
        className="font-mono"
        x="12"
        y="12.7"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={label.length > 2 ? 8.6 : 11.2}
        fontWeight="700"
        fill={knockout === 'dark' ? 'var(--color-ink)' : 'var(--color-cream)'}
      >
        {label}
      </text>
    </Svg>
  )
}

/* ---- Tier 1: geometric reconstructions ----------------------------- */

/** Nucleus plus three orbits at 0/60/120° — the mark is exactly this. */
export const ReactMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.15">
      <ellipse cx="12" cy="12" rx="10.4" ry="3.95" />
      <ellipse cx="12" cy="12" rx="10.4" ry="3.95" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10.4" ry="3.95" transform="rotate(120 12 12)" />
    </g>
    <circle cx="12" cy="12" r="2.05" fill="currentColor" />
  </Svg>
)

export const NextMark: TechIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="10.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8.7 16.6V7.6l7.3 9.3M15.3 7.5v6.7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

/** Node's hexagon. */
export const NodeMark: TechIcon = (props) => (
  <Svg {...props}>
    <path
      d="M12 1.9 21 7.05v9.9L12 22.1 3 16.95v-9.9L12 1.9Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </Svg>
)

/** Webpack's cube: the same hexagon with its inner faces. */
export const WebpackMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="none" stroke="currentColor" strokeLinejoin="round">
      <path d="M12 1.9 21 7.05v9.9L12 22.1 3 16.95v-9.9L12 1.9Z" strokeWidth="1.5" />
      <path d="M12 6.5l5.3 3.05v5.9L12 18.5l-5.3-3.05v-5.9L12 6.5Z" strokeWidth="1.05" />
    </g>
  </Svg>
)

/** Three nodes on orbital arcs. */
export const ReduxMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M14.3 5.6c3.6 1.2 6 3.9 5.4 6.5" />
      <path d="M19 18.3c-2.3 2.1-5.8 2.4-8 .6" />
      <path d="M6.2 15.5C3.9 12.8 3.6 9.4 5.4 7.5" />
    </g>
    <g fill="currentColor">
      <circle cx="12" cy="4.6" r="2.4" />
      <circle cx="19.2" cy="16.6" r="2.4" />
      <circle cx="4.9" cy="16.6" r="2.4" />
    </g>
  </Svg>
)

export const TailwindMark: TechIcon = (props) => (
  <Svg {...props}>
    <path
      fill="currentColor"
      d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C16.34 6.18 14.98 4.8 12 4.8ZM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.89 2.29 1.62C7.67 17.82 9.03 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.89-2.29-1.62C10.34 13.38 8.98 12 6 12Z"
    />
  </Svg>
)

/**
 * The HTML5/CSS3 shield, differing only in its numeral. Filled with the
 * numeral knocked out, which is how both real marks are drawn.
 */
function ShieldMark({ numeral, ...props }: TechIconProps & { numeral: string }) {
  return (
    <Svg {...props}>
      <path
        d="M3.4 2.2h17.2l-1.57 17.1L12 21.8l-7.03-2.5L3.4 2.2Z"
        fill="currentColor"
        strokeLinejoin="round"
      />
      <text
        className="font-mono"
        x="12"
        y="12.6"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontWeight="700"
        fill="var(--color-cream)"
      >
        {numeral}
      </text>
    </Svg>
  )
}

/** Git's diamond with a branch inside it. */
export const GitMark: TechIcon = (props) => (
  <Svg {...props}>
    <rect
      x="4.4"
      y="4.4"
      width="15.2"
      height="15.2"
      rx="2.4"
      transform="rotate(45 12 12)"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none">
      <path d="M9.4 14.6 14.6 9.4" />
      <path d="M12 12.1l2.6 2.6" />
    </g>
    <g fill="currentColor">
      <circle cx="9" cy="15" r="1.55" />
      <circle cx="15" cy="9" r="1.55" />
      <circle cx="15" cy="15.1" r="1.45" />
    </g>
  </Svg>
)

/** Containers stacked on the whale's back. */
export const DockerMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="currentColor">
      <rect x="4.1" y="10.3" width="2.7" height="2.7" rx=".35" />
      <rect x="7.4" y="10.3" width="2.7" height="2.7" rx=".35" />
      <rect x="10.7" y="10.3" width="2.7" height="2.7" rx=".35" />
      <rect x="7.4" y="7" width="2.7" height="2.7" rx=".35" />
      <rect x="10.7" y="7" width="2.7" height="2.7" rx=".35" />
      <path d="M1.9 14.3h15.5c.3 2-.66 3.75-2.3 4.65-1.45.8-3.35 1.15-5.5 1.15-3.75 0-6.5-1.8-7.7-5.8Z" />
    </g>
    <path
      d="M17.7 13.1c.7-.95 1.85-1.35 3-1.1-.25 1.35-1.1 2.3-2.35 2.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </Svg>
)

/** MongoDB's leaf. */
export const MongoMark: TechIcon = (props) => (
  <Svg {...props}>
    <path
      d="M12 1.9c2.55 3.1 4.75 5.85 4.75 9.6 0 3.7-2.15 6.2-4.25 7.35L12 22.1l-.5-3.25c-2.1-1.15-4.25-3.65-4.25-7.35 0-3.75 2.2-6.5 4.75-9.6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinejoin="round"
    />
    <path
      d="M12 4.6v13.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </Svg>
)

/** Figma's five shapes. */
export const FigmaMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="currentColor">
      <path d="M8.75 1.9H12v6.5H8.75a3.25 3.25 0 0 1 0-6.5Z" />
      <path d="M12 1.9h3.25a3.25 3.25 0 0 1 0 6.5H12V1.9Z" />
      <path d="M8.75 8.75H12v6.5H8.75a3.25 3.25 0 0 1 0-6.5Z" />
      <path d="M8.75 15.6H12v3.25a3.25 3.25 0 1 1-3.25-3.25Z" />
      <circle cx="15.25" cy="12" r="3.25" />
    </g>
  </Svg>
)

/** Vite's bolt in its shield. */
export const ViteMark: TechIcon = (props) => (
  <Svg {...props}>
    <path
      d="M2.7 5.1 11.4 21.3a.68.68 0 0 0 1.2 0L21.3 5.1a.68.68 0 0 0-.73-.98l-8.45 1.5a.68.68 0 0 1-.24 0L3.43 4.12a.68.68 0 0 0-.73.98Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinejoin="round"
    />
    <path d="M13.9 7.1l-.62 4.2 2.42-.48-2.1 5.6.62-3.85-2.35.47L13.9 7.1Z" fill="currentColor" />
  </Svg>
)

/** Jira's chevron over its diamond. */
export const JiraMark: TechIcon = (props) => (
  <Svg {...props}>
    <g fill="currentColor">
      <path d="M12 1.9 21.5 11.4l-3.6 3.6L12 9.1l-5.9 5.9-3.6-3.6L12 1.9Z" />
      <path d="M12 12.6l4.75 4.75L12 22.1l-4.75-4.75L12 12.6Z" />
    </g>
  </Svg>
)

/* ---- Letter and shield marks ---------------------------------------- */

/* Each is written out as its own component rather than produced by calling
   the factory, so every export in this file is a component declaration.
   A `const X = factory('TS')` export reads as a plain constant and costs
   the whole module its Fast Refresh. */

export const HtmlMark: TechIcon = (props) => <ShieldMark numeral="5" {...props} />
export const CssMark: TechIcon = (props) => <ShieldMark numeral="3" {...props} />

export const TypescriptMark: TechIcon = (props) => <LetterMark label="TS" {...props} />
export const JavascriptMark: TechIcon = (props) => (
  <LetterMark label="JS" knockout="dark" {...props} />
)
export const TanstackMark: TechIcon = (props) => <LetterMark label="TQ" {...props} />
export const ExpressMark: TechIcon = (props) => <LetterMark label="EX" {...props} />
export const OpenAiMark: TechIcon = (props) => <LetterMark label="AI" {...props} />
export const MysqlMark: TechIcon = (props) => <LetterMark label="SQL" {...props} />
export const AwsMark: TechIcon = (props) => (
  <LetterMark label="AWS" knockout="dark" {...props} />
)
export const PlaywrightMark: TechIcon = (props) => <LetterMark label="PW" {...props} />
export const CypressMark: TechIcon = (props) => <LetterMark label="CY" {...props} />
export const AxiosMark: TechIcon = (props) => <LetterMark label="AX" {...props} />
export const ZodMark: TechIcon = (props) => <LetterMark label="Z" {...props} />
