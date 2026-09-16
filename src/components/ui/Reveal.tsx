import { useEffect, useRef, useState, type ReactNode } from 'react'

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

/**
 * Fade-and-rise as the element scrolls into view.
 *
 * Deliberately a plain IntersectionObserver plus a CSS transition rather
 * than an animation library. Two reasons:
 *
 *  1. Weight. This is a portfolio that claims performance as a strength;
 *     a 50kB dependency to fade some divs would undercut that.
 *  2. Failure mode. Content that starts at `opacity: 0` is invisible if
 *     anything about the observer misbehaves, and "recruiter sees a blank
 *     section" is the worst bug this site could have. So there is a
 *     failsafe timer: if the observer has not fired within 2s of mount,
 *     the content is shown regardless.
 *
 * When the viewer prefers reduced motion, no transform or fade runs at
 * all — the content is simply present.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  /** Seconds. Stagger siblings by ~0.08 for a readable cascade. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const prefersReduced = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prefersReduced) return

    const node = ref.current
    if (!node) return

    const reveal = () => setVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    )
    observer.observe(node)

    // Failsafe — see the note above.
    const failsafe = window.setTimeout(reveal, 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [prefersReduced])

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={visible && delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  )
}
