import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Navigating from /work/some-project back to /#contact needs to actually
 * land on #contact. The browser only honours a hash on a real document
 * load, so on client-side navigation we scroll it ourselves — and move
 * focus there too, so keyboard and screen-reader users follow the jump
 * instead of being left at the top of the document.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const target = document.getElementById(hash.slice(1))
    if (!target) return

    target.scrollIntoView({ behavior: 'instant', block: 'start' })

    // Make the section programmatically focusable just long enough to
    // receive focus, so we don't leave a stray tab stop behind.
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true })
  }, [pathname, hash])

  return null
}
