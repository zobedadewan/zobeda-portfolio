import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for highlighting the
 * matching nav link.
 *
 * Uses a rootMargin that treats "current" as the band just below the fixed
 * nav, so a heading becomes active as it settles under the header rather
 * than when its last pixel leaves the viewport.
 */
export function useScrollSpy(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        }

        if (visible.size === 0) return

        // Document order wins ties, so scrolling up lands on the upper section.
        let best = ''
        let bestRatio = -1
        for (const id of sectionIds) {
          const ratio = visible.get(id)
          if (ratio !== undefined && ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }
        if (best) setActiveId(best)
      },
      {
        rootMargin: '-88px 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
