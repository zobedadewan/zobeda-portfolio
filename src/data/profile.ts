/**
 * Identity, contact and headline copy.
 *
 * Nothing here is invented. Every claim traces to the resume.
 */

export const profile = {
  name: 'Zobeda Dewan',
  /** Used for the nav wordmark. */
  shortName: 'Zobeda',
  title: 'Frontend Developer',
  location: 'Ontario, Canada',
  availability: 'Open to frontend roles — Ontario / Remote',

  /** Split so the second line can be set in display italic. */
  headline: {
    lead: 'I build fast, accessible',
    accent: 'interfaces that scale.',
  },

  intro:
    'Frontend developer specializing in React, TypeScript and Tailwind CSS, with eight years building scalable, high-performance web applications across SaaS, healthcare, workforce management and digital marketing.',

  /** Resume runs Feb 2017 → Dec 2025. */
  yearsExperience: 8,

  email: 'dewan.zobeda@gmail.com',
  /**
   * Phone is deliberately absent from the public site — it is scraped
   * relentlessly. It stays on the PDF resume, which is a deliberate
   * download rather than a page anyone can crawl.
   */
  linkedin: 'https://www.linkedin.com/in/zobeda-dewan',
  // TODO(zobeda): confirm this handle — inferred from the local git config,
  // not from the resume. Correct it or remove the entry if it is wrong.
  github: 'https://github.com/zobedadewan',

  resumePath: '/resume-zobeda-dewan.pdf',
} as const

export const about = {
  heading: {
    lead: 'I build for',
    accent: 'scale and for everyone.',
  },
  paragraphs: [
    'Most of my work lives in the part of the stack where architecture meets the person using it — reusable component libraries, design systems, and state that stays predictable as an application grows. React, TypeScript and Tailwind are where I am fastest.',
    'The two things I care about beyond shipping the feature: whether it stays fast under real data, and whether it works for someone using a screen reader. I have taken portals to WCAG 2.1 AA and AODA compliance, and cut load times by 30% with code-splitting and server-state caching.',
  ],
  traits: [
    {
      label: 'Accessibility-First',
      description: 'WCAG 2.1 AA and AODA compliance, verified with real assistive tech.',
      icon: 'accessibility',
    },
    {
      label: 'Performance-Minded',
      description: 'Code-splitting, caching and bundle discipline as a default, not a cleanup task.',
      icon: 'gauge',
    },
    {
      label: 'Detail Oriented',
      description: 'Typed contracts, validated forms and test suites that catch regressions early.',
      icon: 'scan-search',
    },
    {
      label: 'Lifelong Learner',
      description: 'M.Sc. in Computer Science, and a habit of picking up whatever the problem needs.',
      icon: 'sparkles',
    },
  ],
} as const

export const contact = {
  heading: {
    lead: 'Let’s build something',
    accent: 'thoughtful together.',
  },
  body: 'I am currently looking for a frontend role where accessibility and performance are treated as features, not afterthoughts. The fastest way to reach me is email.',
} as const
