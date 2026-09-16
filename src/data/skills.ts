/**
 * Technical skills, grouped. Taken verbatim from the resume so the site and
 * the PDF never disagree — recruiters read both.
 *
 * `icon` values are lucide-react icon names, resolved in the Skills section.
 */

export type SkillGroup = {
  category: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'layout-dashboard',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Redux Toolkit',
      'Context API',
      'React Hooks',
      'TanStack Query',
      'React Hook Form',
      'React Router',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'GPT-4 API'],
  },
  {
    /* Database and Cloud are separate lines on the resume. They are shown
       together here purely for layout — a card holding the single chip
       "AWS" reads as an accident. No content is lost. */
    category: 'Database & Cloud',
    icon: 'database',
    items: ['MongoDB', 'MySQL', 'AWS'],
  },
  {
    category: 'Testing',
    icon: 'flask-conical',
    items: ['Playwright', 'Cypress', 'Functional Testing'],
  },
  {
    category: 'Tooling',
    icon: 'wrench',
    items: ['Vite', 'Webpack', 'Git', 'GitHub', 'Docker', 'Axios', 'Zod'],
  },
  {
    category: 'Accessibility & Workflow',
    icon: 'accessibility',
    items: [
      'WCAG 2.1',
      'AODA',
      'Agile',
      'Jira',
      'Responsive Design',
      'Cross-Browser Compatibility',
    ],
  },
]
