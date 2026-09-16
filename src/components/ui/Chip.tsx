import { cn } from '@/lib/cn'

/** Small mono tag used for tech stacks throughout the site. */
export function Chip({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-petal bg-cream/70 px-3 py-1',
        'font-mono text-[0.7rem] tracking-wide text-ink-soft',
        className,
      )}
    >
      {children}
    </span>
  )
}
