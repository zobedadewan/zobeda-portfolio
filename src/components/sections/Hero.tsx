import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { profile } from '@/data/profile'

const socials = [
  { href: profile.github, label: 'GitHub profile', Icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn profile', Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'Email Zobeda', Icon: Mail },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* The section's one decorative element: a soft gold bloom behind the
          portrait. Nothing else competes with it here. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-12%] right-[-10%] size-[46rem] rounded-full bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_62%)] opacity-[0.10]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-petal bg-blush/60 px-4 py-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold-deep" />
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.12em] text-ink-soft uppercase sm:text-[0.68rem] sm:tracking-[0.14em]">
                  {profile.availability}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-display font-semibold text-ink">
                {profile.headline.lead}{' '}
                <em className="text-gradient">{profile.headline.accent}</em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#work">
                  View My Work
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Button>
                <Button href={profile.resumePath} variant="outline" download>
                  Download Resume
                  <ArrowDown size={17} aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-10 flex items-center gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer noopener' }
                        : {})}
                      className="grid size-11 place-items-center rounded-full border border-petal text-ink-soft transition-all duration-200 hover:border-rose hover:text-rose-deep motion-safe:hover:-translate-y-0.5"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* No frame: the portrait is cut out of its original background and
              floats directly on the page, dissolving at the shoulders. The
              gold bloom above is the only thing behind it. */}
          <Reveal delay={0.12} className="relative mx-auto w-full max-w-72 sm:max-w-xs lg:mx-0 lg:ml-auto lg:max-w-88">
            <img
              src="/zobeda.webp"
              alt="Zobeda Dewan, frontend developer"
              width={742}
              height={844}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full"
            />

            <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-petal bg-cream/95 px-5 py-2.5 font-mono text-[0.68rem] tracking-[0.1em] whitespace-nowrap text-ink-soft shadow-lg shadow-plum/5 backdrop-blur-sm">
              React · TypeScript · Tailwind
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
