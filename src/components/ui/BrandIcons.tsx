/**
 * GitHub and LinkedIn marks.
 *
 * lucide-react v1 removed brand icons from the set, so these are inlined.
 * They take the same `size` prop shape as lucide icons so call sites can
 * treat all the icons uniformly.
 */

import type { SVGProps } from 'react'

type IconProps = {
  size?: number
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>

export function GithubIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M12 .5C5.73.5.66 5.58.66 11.85c0 5.01 3.25 9.26 7.76 10.76.57.1.78-.25.78-.55l-.02-1.93c-3.16.69-3.83-1.53-3.83-1.53-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.52-2.520-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.01 0 0 .95-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.17-1.48 3.12-1.17 3.12-1.17.62 1.56.23 2.72.11 3.01.73.8 1.17 1.81 1.17 3.05 0 4.36-2.65 5.32-5.18 5.6.41.36.77 1.05.77 2.12l-.01 3.14c0 .3.2.66.79.55a11.36 11.36 0 0 0 7.75-10.76C23.34 5.58 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}
