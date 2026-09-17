import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/process'

export function Process() {
  return (
    <section className="bg-blush/45 py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="How I Work"
          lead="From requirements"
          accent="to production."
          align="center"
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={0.08 * index} className="relative">
              {/* Connector between steps — the section's one decorative
                  element, and only on the wide layout where it reads. */}
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-14 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-petal to-transparent lg:block"
                />
              )}

              {/* No opacity here: gold is 3.84:1 on blush, which clears the
                  3:1 bar for large text — but only at full strength. */}
              <span className="font-display text-4xl font-semibold text-gold">
                {step.number}
              </span>

              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
