import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

/**
 * A laptop the cover screenshot sits inside, using the frame artwork at
 * public/laptop-frame.png (811×462).
 *
 * TWO THINGS ABOUT THAT ARTWORK DRIVE THE IMPLEMENTATION:
 *
 * 1. The file the designer supplied ("laptop frame.png") has no alpha —
 *    every pixel is opaque and the background is pure white. It was first
 *    composited with mix-blend-multiply, which did not work: Reveal applies
 *    a transform to its wrapper, a transform creates a stacking context,
 *    and mix-blend-mode only blends with the backdrop INSIDE its own
 *    stacking context. With no painted backdrop in there to blend against,
 *    the artwork rendered as-is and its white background showed.
 *
 *    So laptop-frame.png is a keyed copy: the background is flood-filled
 *    from the four corners at a tolerance of 8 (luminance >= 247) and set
 *    transparent. The tolerance has to stay under 12 — the silver base is
 *    243, only twelve points off the white background, and a looser fill
 *    leaks straight into the chassis. The screen interior is enclosed by
 *    the bezel so the fill never reaches it; it stays opaque white and acts
 *    as a backing behind the screenshot.
 *
 * 2. Its screen aperture is 606x382 = 1.586, while the covers are 1.698.
 *    The screen uses object-cover, so the cover fills the aperture edge to
 *    edge and loses ~3.3% off each side. object-contain was tried first and
 *    rejected: it left a 12px black band above and below the screenshot,
 *    which reads as a screen that is not switched on properly.
 *
 *    Padding the covers vertically to 1.586 instead of cropping them was
 *    also rejected — it does not remove the band, it just moves it above
 *    the page's own nav bar.
 *
 *    The crop is centred, which is the best of the three options for these
 *    two shots: Vanity Linx has light content reaching BOTH edges (x 0 and
 *    x 1587), so anchoring left or right would take the whole 105px off one
 *    side instead of splitting it.
 *
 * 3. The supplied canvas carried dead margin — 4px of empty space above
 *    the device and 9px to its right — which is transparent now but still
 *    counted toward the element's width, pushing the laptop off-centre and
 *    padding the card. laptop-frame.png is cropped to the opaque bounding
 *    box, so the element's box IS the device.
 *
 * 4. The screen interior of the supplied file was opaque WHITE, and the
 *    corner flood fill could not reach it — the bezel encloses it. Any
 *    fraction of a pixel where the overlay fell short of that white region
 *    showed as a white hairline around the screenshot, and the
 *    anti-aliased ring where white met black bezel made the effective
 *    white area larger than a naive measurement of it. Both are fixed: the
 *    interior is flood-filled to transparent (down to luminance 150, which
 *    takes the ring with it), and the overlay is given 2px of bleed so it
 *    tucks UNDER the bezel rather than butting against it.
 *
 * 5. The artwork also had a drop shadow baked in, and its faint outer
 *    rows were OPAQUE near-white (luminance 236-246) — under the corner
 *    flood fill's threshold, so they survived it and rendered as a pale
 *    smear under the machine on a tinted section. Those rows are erased
 *    outright rather than salvaged: the shadow is drawn in CSS now, where
 *    it can sit on any ground.
 *
 * SCREEN OVERLAY, measured off the cleared artwork (811×462):
 *   interior bbox x 103..711, y 22..406, plus 2px bleed on every side
 *   -> left 12.454%  top 4.329%  width 75.586%  height 84.199%
 * Re-measure these if the artwork is ever replaced; they are the only
 * thing keeping the screenshot registered to the bezel.
 */
export function LaptopFrame({
  children,
  className,
}: {
  /** The screen contents — an <img>, or a placeholder while one is pending. */
  children: ReactNode
  className?: string
}) {
  return (
    // A drop-shadow filter, not a box-shadow: box-shadow would draw the
    // silhouette of this div — a rectangle — and the laptop is not one.
    // drop-shadow follows the rendered alpha, so it traces the lid's
    // rounded corners and pools under the tapered base.
    //
    // Two chained shadows: a tight one that sits the machine on the
    // surface, and a wide soft one for the cast. A single shadow at this
    // size reads as a grey smear under the base.
    <div
      className={cn(
        'relative w-full',
        '[filter:drop-shadow(0_5px_5px_rgba(0,0,0,0.11))_drop-shadow(0_20px_18px_rgba(0,0,0,0.19))]',
        className,
      )}
    >
      <img
        src="/laptop-frame.png"
        alt=""
        aria-hidden="true"
        width={811}
        height={462}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />

      <div className="absolute top-[4.329%] left-[12.454%] h-[84.199%] w-[75.586%] overflow-hidden bg-[#0e090f]">
        {children}
      </div>
    </div>
  )
}
