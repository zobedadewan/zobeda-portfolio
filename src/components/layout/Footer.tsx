import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { Container } from '@/components/ui/Container'
import { profile } from '@/data/profile'

const socials = [
  { href: profile.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-petal bg-blush">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm text-ink-soft">
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="mt-1 font-mono text-[0.62rem] tracking-[0.1em] text-ink-soft">
              Built with React, TypeScript &amp; Tailwind CSS
            </p>
          </div>

          <ul className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="grid size-10 place-items-center rounded-full border border-petal bg-cream/60 text-ink-soft transition-colors hover:border-rose hover:text-rose-deep"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
