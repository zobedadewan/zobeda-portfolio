import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the OS reduced-motion setting, and keeps tracking it — someone can
 * flip the preference while the page is open.
 *
 * The global CSS in index.css already collapses transition and animation
 * durations. This hook exists so components can skip transforms entirely
 * rather than running them instantly, which is the difference between a
 * calm page and one that flickers.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY)
    const onChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches)

    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  return prefersReduced
}
