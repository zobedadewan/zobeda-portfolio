import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold ' +
  'transition-[transform,box-shadow,background-color,color] duration-200 ease-out ' +
  'motion-safe:hover:-translate-y-0.5 active:translate-y-0'

const variants: Record<Variant, string> = {
  // White on the rose→plum gradient measures 4.95:1 at its lightest point.
  primary: 'gradient-brand px-7 py-3.5 text-white shadow-lg shadow-rose/25 hover:shadow-xl hover:shadow-rose/35',
  outline: 'border border-petal bg-cream/60 px-7 py-3.5 text-ink hover:border-rose hover:text-rose-deep',
  ghost: 'px-2 py-1 text-rose-deep hover:text-plum',
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
