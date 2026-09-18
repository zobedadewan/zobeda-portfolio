import { GraduationCap } from 'lucide-react'

import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { education, experience, type Role } from '@/data/experience'

/**
 * Two tiers, driven by `role.recent`.
 *
 * A flat list where an eight-month contract from 2017 gets the same weight
 * as a four-year lead role is a resume, not a portfolio — a resume has to
 * be exhaustive, a portfolio has to have a point of view. So the recent
 * roles get the full card and the earlier ones condense into a register
 * underneath, which is also the order a reader actually wants them in.
 */

/**
 * Highlights as separated statements rather than a dot-bulleted list.
 *
 * The dots were the single strongest resume signal in the old layout —
 * nothing else on the page uses them, and a reader has seen ten thousand of
 * them on CVs. Hairline rules carry the same "these are distinct points"
 * meaning without the association.
 */
function Highlights({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? 'mt-3 space-y-2' : 'mt-6 space-y-3.5'}>
      {items.map((item, i) => (
        <li
          key={i}
          className={
            compact
              ? 'copy-sm text-ink-soft'
              : 'copy-sm border-t border-petal/70 pt-3.5 text-ink-soft first:border-t-0 first:pt-0'
          }
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Tier one: the recent roles, as full cards. */
function FeaturedRole({ role, index }: { role: Role; index: number }) {
  return (
    <Reveal as="li" delay={0.08 * index}>
      {/* card-warm, the same ground the Skills and Work cards use: cream
          with a faint champagne corner. Plain bg-cream was invisible here —
          the section sits on the cream page, so the card had no panel of
          its own, only a border and a shadow. */}
      <article className="card-lift card-warm rounded-2xl border p-7 sm:p-9">
        {/* Period sits beside the title rather than stacked above it as a
            date line — that stacking is the resume header pattern. */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <h3 className="font-display text-2xl leading-tight font-semibold text-ink sm:text-[1.75rem]">
              {role.role}
            </h3>
            <p className="mt-1.5 text-[0.95rem] font-semibold text-plum">{role.company}</p>
          </div>

          <p className="font-mono text-[0.62rem] font-bold tracking-widest text-gold-deep uppercase">
            {role.period}
            <span className="mt-1 block font-medium text-ink-soft">{role.location}</span>
          </p>
        </div>

        <Highlights items={role.highlights} />

        <div className="mt-6 flex flex-wrap gap-2">
          {role.tech.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </article>
    </Reveal>
  )
}

/** Tier two: everything earlier, as a compact register. */
function EarlierRole({ role, index }: { role: Role; index: number }) {
  return (
    <Reveal as="li" delay={0.06 * index} className="border-t border-petal py-7 first:border-t-0">
      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[10rem_1fr]">
        <p className="font-mono text-[0.62rem] font-bold tracking-widest text-gold-deep uppercase">
          {role.period}
        </p>

        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            {role.role}
            <span className="font-sans text-[0.9rem] font-semibold text-plum"> · {role.company}</span>
          </h3>

          <Highlights items={role.highlights} compact />

          <div className="mt-4 flex flex-wrap gap-2">
            {role.tech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Experience() {
  const featured = experience.filter((role) => role.recent)
  const earlier = experience.filter((role) => !role.recent)

  return (
    <section id="experience" className="py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          lead="Eight years of"
          accent="shipping to production."
        />

        <ol className="mt-14 space-y-8">
          {featured.map((role, index) => (
            <FeaturedRole key={role.company} role={role} index={index} />
          ))}
        </ol>

        {earlier.length > 0 && (
          <>
            <Reveal className="mt-16 flex items-center gap-4">
              <p className="eyebrow shrink-0">Earlier</p>
              <span aria-hidden="true" className="h-px grow bg-petal" />
            </Reveal>

            <ol className="mt-2">
              {earlier.map((role, index) => (
                <EarlierRole key={role.company} role={role} index={index} />
              ))}
            </ol>
          </>
        )}

        <Reveal delay={0.1}>
          <div className="card-lift card-warm mt-14 flex flex-wrap items-center gap-5 rounded-2xl border p-7">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold-deep">
              <GraduationCap size={22} aria-hidden="true" />
            </span>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-[0.82rem] text-ink-soft">
                {education.institution} · {education.location}
              </p>
            </div>

            <p className="font-mono text-[0.62rem] font-bold tracking-widest text-gold-deep uppercase sm:ml-auto">
              {education.period}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
