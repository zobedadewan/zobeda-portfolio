import type { ReactNode } from 'react'

import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

/**
 * Mono eyebrow + display heading. The eyebrow uses gold-deep rather than
 * gold: at 12px it is small text and needs 4.5:1, which gold does not meet.
 */
export function SectionHeader({
  eyebrow,
  lead,
  accent,
  description,
  align = 'left',
  action,
}: {
  eyebrow: string
  lead: string
  /** Rendered in display italic with the brand gradient. */
  accent?: string
  description?: string
  align?: 'left' | 'center'
  action?: ReactNode
}) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centered && 'items-center text-center',
        Boolean(action) && 'sm:flex-row sm:items-end sm:justify-between sm:gap-8',
      )}
    >
      <Reveal className={cn('max-w-2xl', centered && 'flex flex-col items-center')}>
        <p className="eyebrow flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>

        <h2 className="mt-4 text-headline font-semibold text-ink">
          {lead}{' '}
          {accent && <em className="text-gradient">{accent}</em>}
        </h2>

        {description && (
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
        )}
      </Reveal>

      {action && <Reveal delay={0.1} className="shrink-0">{action}</Reveal>}
    </div>
  )
}
