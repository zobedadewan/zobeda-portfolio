import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { about, profile } from '@/data/profile'
import { icons } from '@/lib/icons'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        {/* items-start, not items-center: the text column is much taller, so
            centring dropped the photo well below the section heading. */}
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* 50px drops the photo's top edge to the heading's cap height:
              18px eyebrow line box + 16px mt-4 to the h2's line box, then
              16px more of leading and ascent to the top of the "I" itself.
              Optical alignment with the letterform, not the text box. Only
              on lg — below that the photo stacks above the text. */}
          <Reveal className="relative mx-auto w-full max-w-xl lg:mx-0 lg:mt-12.5">
            {/* Shown at its native 3:2 rather than cropped to a portrait
                slot — the monitors and desk are the point of the shot.
                Leaf corners match the hero portrait. */}
            <img
              src="/workspace.webp"
              alt="Zobeda Dewan at her desk, writing code on a dual-monitor setup"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[3rem_0.25rem_3rem_0.25rem] shadow-lg shadow-plum/10 sm:rounded-[4rem_0.25rem_4rem_0.25rem]"
            />

            {/* Circular years badge, carried over from the reference — with
                a real number. profile.yearsExperience is derived from the
                resume's Feb 2017 start. */}
            <div className="absolute -top-6 -right-4 grid size-28 place-items-center rounded-full border border-petal bg-cream text-center shadow-lg shadow-plum/10 sm:-right-8 sm:size-32">
              <div>
                <p className="font-display text-3xl leading-none font-semibold text-gradient">
                  {profile.yearsExperience}+
                </p>
                <p className="mt-1.5 font-mono text-[0.55rem] leading-tight tracking-[0.12em] text-ink-soft uppercase">
                  Years
                  <br />
                  Building
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                About Me
              </p>

              <h2 className="mt-4 text-headline font-semibold text-ink">
                {about.heading.lead} <em className="text-gradient">{about.heading.accent}</em>
              </h2>
            </Reveal>

            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.08 * (index + 1)}>
                <p className="mt-5 leading-relaxed text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {about.traits.map((trait) => {
                  const Icon = icons[trait.icon]
                  return (
                    <li key={trait.label} className="border-t border-petal pt-4">
                      {Icon && <Icon size={20} aria-hidden="true" className="text-rose" />}
                      <p className="mt-3 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase">
                        {trait.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {trait.description}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href="#experience"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-petal px-6 py-3 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
              >
                See My Experience
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
