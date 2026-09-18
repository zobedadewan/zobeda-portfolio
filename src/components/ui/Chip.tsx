import { cn } from '@/lib/cn'
import { techIconFor } from '@/lib/techIcons'

/** Reading size. `md` is for chips that carry a card on their own. */
type Size = 'sm' | 'md'
/** Which hairline the pill takes — petal is pink, gold suits a warm card. */
type Tone = 'petal' | 'gold'

const SIZES: Record<Size, { text: string; pad: string; padIcon: string; icon: number }> = {
  sm: { text: 'text-[0.64rem]', pad: 'px-3 py-1', padIcon: 'py-1 pr-3 pl-2.5', icon: 12 },
  md: { text: 'text-[0.74rem]', pad: 'px-3.5 py-1.5', padIcon: 'py-1.5 pr-3.5 pl-2.5', icon: 14 },
}

const TONES: Record<Tone, string> = {
  petal: 'border-petal bg-cream/70',
  gold: 'border-gold/20 bg-cream/70',
}

/**
 * Small mono tag used for tech stacks throughout the site.
 * These are names, not prose — they get read one word at a time, so they
 * take full ink rather than the softened tone, and normal tracking rather
 * than the wide tracking that suits an eyebrow.
 *
 * The mark is resolved from the label itself rather than passed in, so
 * every call site — Skills, Experience, Work, the project pages — picks it
 * up without changing. Labels with no mark simply render as text.
 *
 * Size and tone are props rather than classes passed through `className`
 * because `cn` is a plain join, not tailwind-merge: an override would emit
 * two competing `text-*` or `border-*` classes and leave the winner to CSS
 * source order.
 */
export function Chip({
  children,
  className,
  icon = true,
  size = 'sm',
  tone = 'petal',
}: {
  children: string
  className?: string
  /** Set false for a pill where the mark would be noise. */
  icon?: boolean
  size?: Size
  tone?: Tone
}) {
  const mark = icon ? techIconFor(children) : null
  const scale = SIZES[size]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border',
        TONES[tone],
        // Tighter on the mark side: the glyph already carries its own
        // optical padding, so an equal inset leaves the pill lopsided.
        mark ? scale.padIcon : scale.pad,
        'font-mono font-medium text-ink',
        scale.text,
        className,
      )}
    >
      {/* The brand colour rides in on `color`, and the mark itself draws in
          currentColor — so the icon is coloured without the label being
          dragged along with it. */}
      {mark && (
        <mark.Icon
          size={scale.icon}
          aria-hidden="true"
          className="shrink-0"
          style={{ color: mark.color }}
        />
      )}
      {children}
    </span>
  )
}
