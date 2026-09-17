import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skillGroups } from '@/data/skills'
import { icons } from '@/lib/icons'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Technical Toolkit"
          lead="The stack I reach for"
          accent="to ship real products."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <Reveal
                as="li"
                key={group.category}
                delay={0.06 * index}
                className="rounded-2xl border border-petal bg-cream p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-plum/5"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blush text-rose">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                  )}
                  <h3 className="font-mono text-[0.7rem] tracking-[0.14em] text-ink uppercase">
                    {group.category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item} className="bg-blush/70">
                      {item}
                    </Chip>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
