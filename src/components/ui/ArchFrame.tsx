import { cn } from '@/lib/cn'

/**
 * The arched image frame carried over from the reference design — the
 * strongest single idea in it.
 *
 * With no `src` it renders a designed placeholder (layered gradient bloom
 * plus a monogram) rather than an empty box, so the site is deployable
 * before a photograph exists. Dropping a real photo in later is a one-line
 * change at the call site.
 */
export function ArchFrame({
  src,
  alt,
  width,
  height,
  monogram,
  className,
  priority = false,
}: {
  src?: string
  /** Required whenever `src` is set. Ignored by the placeholder, which is decorative. */
  alt?: string
  /** Intrinsic pixel size. Set alongside `src` so the frame reserves its
      space before the image loads and nothing shifts. */
  width?: number
  height?: number
  monogram: string
  className?: string
  /** Set on the hero image so it is not lazy-loaded. */
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden border border-petal bg-blush',
        // The arch: fully rounded top, gently rounded base.
        'rounded-t-[999px] rounded-b-[2.5rem]',
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? ''}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="relative grid h-full w-full place-items-center bg-[radial-gradient(115%_85%_at_50%_5%,var(--color-petal)_0%,var(--color-blush)_50%,var(--color-cream)_100%)]"
        >
          {/* Fine dot grid — the one technical note in an otherwise soft
              panel, and what keeps the placeholder from reading as an
              image that failed to load. */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-plum)_1px,transparent_1px)] bg-[length:22px_22px] opacity-[0.07]" />

          {/* Concentric rings echo the arch without adding a second motif. */}
          <div className="absolute top-1/2 left-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/15" />
          <div className="absolute top-1/2 left-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-plum/15" />

          <span className="relative font-display text-[clamp(3.5rem,9vw,6.5rem)] leading-none font-semibold text-gradient">
            {monogram}
          </span>
        </div>
      )}
    </div>
  )
}
