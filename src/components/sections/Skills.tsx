import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skillGroups } from '@/data/skills'
import { icons } from '@/lib/icons'

/**
 * Three accents, cycled by position, rather than a colour per category.
 *
 * Six distinct hues would mean inventing three that are not in the palette.
 * Cycling keeps every card on-brand and still breaks up what was a grid of
 * six identical cream rectangles.
 *
 * `bar` is the strip across the card top; `tile` is the icon square. Icons
 * on the tinted tile take the deep end of each hue — plain gold is 3.84:1,
 * a non-text colour, and an icon on a tinted ground is where that bites.
 */
const ACCENTS = [
  { bar: 'from-rose via-rose/40', tile: 'bg-rose/12 text-rose-deep' },
  { bar: 'from-plum via-plum/40', tile: 'bg-plum/12 text-plum' },
  { bar: 'from-gold via-gold/40', tile: 'bg-gold/15 text-gold-deep' },
] as const

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Technical Toolkit"
          lead="The stack I reach for"
          accent="to ship real products."
        />

        {/* Columns, not a grid.
            The groups are very uneven — Frontend carries 13 chips, Database
            & Cloud carries 3 — and a grid row stretches every card to the
            tallest in that row, so the small cards sat inside two thirds of
            empty card. Multi-column lets each card be its own height and
            balances the columns instead, which packs them tightly.
            `gap-6` still sets the gutter here; the vertical rhythm has to
            come from the items' own margin. */}
        <ul className="mt-14 gap-6 sm:columns-2 lg:columns-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]
            const accent = ACCENTS[index % ACCENTS.length]

            return (
              <Reveal
                as="li"
                key={group.category}
                delay={0.06 * index}
                className="mb-6 break-inside-avoid"
              >
                {/* The card is an inner element, not the Reveal itself:
                    Reveal owns a translate-y for its entrance, and a hover
                    lift on the same node would fight it.

                    card-warm is a champagne top-left corner falling away to
                    off-white, and it carries its own gold border — so there
                    is no border-petal here and no pink on the card. */}
                <div className="group card-lift card-warm relative overflow-hidden rounded-2xl border p-7 transition-[transform,box-shadow] duration-300 ease-out hover:card-lift-raised motion-safe:hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r to-transparent ${accent.bar}`}
                  />

                  <div className="flex items-center gap-3">
                    {Icon && (
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-xl ${accent.tile}`}
                      >
                        <Icon size={19} aria-hidden="true" />
                      </span>
                    )}
                    <h3 className="font-mono text-[0.8rem] font-bold tracking-widest text-ink uppercase">
                      {group.category}
                    </h3>
                  </div>

                  {/* Bigger than the site default, and a gold hairline in
                      place of the pink one — these pills are the whole
                      content of the card, so they carry it. Chips elsewhere
                      on the site are untouched. */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item} size="md" tone="gold">
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
