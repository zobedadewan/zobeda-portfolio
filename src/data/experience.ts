/**
 * Work history, newest first. Lifted from the resume — every metric here
 * is one already claimed there. Do not add numbers that are not on it.
 */

export type Role = {
  company: string
  role: string
  location: string
  period: string
  /** Recent roles get the full card treatment; earlier ones are condensed. */
  recent: boolean
  highlights: string[]
  tech: string[]
}

export const experience: Role[] = [
  {
    company: '44 North Digital Marketing',
    role: 'Frontend Developer',
    location: 'Toronto, Canada',
    period: 'Jan 2022 — Dec 2025',
    recent: true,
    highlights: [
      'Built responsive React applications serving 10,000+ users, using Hooks, Context API and Redux Toolkit to eliminate prop-drilling across 15+ major HR and operations features.',
      'Cut redundant API calls by 30% and dashboard latency by 25% with TanStack Query server-state caching; Vite and Webpack code-splitting reduced load times a further 30%.',
      'Shipped GPT-4-powered search and AI compliance checks that reduced retrieval time by 60%, plus multi-step forms with React Hook Form and Zod.',
      'Migrated the test suite from Cypress to Playwright for 3x faster cross-browser runs, enforced by ESLint, Prettier and CI/CD.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Vite',
      'Playwright',
      'GPT-4 API',
    ],
  },
  {
    company: 'Ontario Ministry of Health',
    role: 'Software Engineer',
    location: 'Toronto, Canada',
    period: 'Jul 2021 — Dec 2021',
    recent: true,
    highlights: [
      'Optimized regional patient portals with React Hooks and React Router, improving application speed by 30% for 15,000+ healthcare professionals across Ontario.',
      'Upgraded legacy portal features to AODA and WCAG 2.1 AA compliance, resolving screen-reader and keyboard navigation defects.',
      'Integrated Axios against a Node/Express backend, resolving data synchronization bugs across 14 releases.',
    ],
    tech: ['React', 'React Router', 'Axios', 'Node.js', 'Express.js', 'MongoDB', 'WCAG 2.1', 'AODA'],
  },
  {
    company: 'Canadian Centre for Information and Knowledge',
    role: 'Web Developer',
    location: 'Toronto, Canada',
    period: 'Jan 2019 — Jun 2021',
    recent: false,
    highlights: [
      'Turned wireframes into interactive, fully responsive React landing pages, increasing user engagement by 35%.',
      'Streamlined e-commerce routing and checkout flows with React Router, reducing cart abandonment.',
      'Accelerated page loads with lazy loading, code-splitting and optimized MongoDB query patterns.',
    ],
    tech: ['React', 'React Router', 'Axios', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'Kraken Digital Asset Exchange',
    role: 'Software Engineer',
    location: 'Halifax, Canada',
    period: 'Apr 2018 — Nov 2018',
    recent: false,
    highlights: [
      'Diagnosed and resolved UI defects across releases, holding responsive layout and cross-browser consistency.',
      'Validated fixes and new features alongside QA during Agile sprints, supporting stable releases.',
    ],
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Figma', 'Git', 'Agile'],
  },
  {
    company: 'IBM Canada',
    role: 'IT Specialist',
    location: 'Halifax, Canada',
    period: 'Feb 2017 — Nov 2017',
    recent: false,
    highlights: [
      'Built responsive HTML5/CSS3 email templates and web interface enhancements from Figma designs for an oil and gas client.',
      'Authored test plans and automated scripts for a large-scale banking migration, running end-to-end testing and tracking critical defects to release.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'REST APIs', 'MySQL', 'Jira'],
  },
]

export const education = {
  degree: 'M.Sc. in Computer Science',
  institution: 'Memorial University of Newfoundland',
  location: "St. John's, NL, Canada",
  period: 'Sep 2014 — Sep 2016',
}
