import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold ' +
  // border-color is in the list because the outline variant now shifts its
  // border on hover as well as its ground; without it the border snapped
  // while the fill eased.
  'transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out ' +
  'motion-safe:hover:-translate-y-0.5 active:translate-y-0'

const variants: Record<Variant, string> = {
  // White on the rose→plum gradient measures 4.95:1 at its lightest point.
  primary: 'gradient-brand px-7 py-3.5 text-white shadow-lg shadow-plum/25 hover:shadow-xl hover:shadow-plum/35',
  // Gold ground rather than the old cream-on-petal. Translucent so it
  // picks up whichever section it lands in — blush in the hero and in
  // Contact — instead of being a flat patch that only matches one of them.
  // ink on gold/8 over blush measures 12.9:1.
  outline:
    'border border-gold/25 bg-gold/8 px-7 py-3.5 text-ink hover:border-gold/40 hover:bg-gold/15 hover:text-gold-deep',
  ghost: 'px-2 py-1 text-gold-deep hover:text-plum',
}

export function Button({
  href,
  variant = 'primary',
  children,
  className,
  ...rest
}: {
  href: string
  variant?: Variant
  children: ReactNode
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  )
}
