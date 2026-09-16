/**
 * How I work — the four-step band that replaces the reference design's
 * "Services" block. This describes a working method, not a freelance offer.
 */

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Start with the requirement behind the ticket — who uses this, what breaks today, and what "done" actually looks like for them.',
  },
  {
    number: '02',
    title: 'Design & Architect',
    description:
      'Map the component boundaries, state ownership and data contracts before writing UI, so the structure survives the next three features.',
  },
  {
    number: '03',
    title: 'Build & Test',
    description:
      'Typed, reusable components with validated forms, covered by Playwright end-to-end tests and kept honest by linting and CI.',
  },
  {
    number: '04',
    title: 'Ship & Measure',
    description:
      'Release behind a clean pipeline, then check the things that matter: load time, accessibility audits, and whether it solved the problem.',
  },
]
