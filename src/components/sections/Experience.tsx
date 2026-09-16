import { GraduationCap } from 'lucide-react'

import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { education, experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          lead="Eight years of"
          accent="shipping to production."
        />

        <ol className="relative mt-14 space-y-12 border-l border-petal pl-8 sm:pl-12">
          {experience.map((role, index) => (
            <Reveal as="li" key={role.company} delay={0.06 * index} className="relative">
              {/* Timeline node, sitting on the spine. */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[calc(2rem+4.5px)] size-2.5 rounded-full gradient-brand ring-4 ring-cream sm:-left-[calc(3rem+4.5px)]"
              />

              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-gold-deep uppercase">
                {role.period}
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{role.role}</h3>

              <p className="mt-1 text-sm text-plum">
                {role.company}
                <span className="text-ink-soft"> · {role.location}</span>
              </p>

              <ul className="mt-5 space-y-3">
                {role.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-rose"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-5 rounded-2xl border border-petal bg-blush/50 p-7">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cream text-rose">
              <GraduationCap size={22} aria-hidden="true" />
            </span>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-sm text-ink-soft">
                {education.institution} · {education.location}
              </p>
            </div>

            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-gold-deep uppercase sm:ml-auto">
              {education.period}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
