import { ArrowDown, CalendarCheck, Mail, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { contact, profile } from '@/data/profile'

const details = [
  { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: MapPin, label: 'Location', value: `${profile.location} · Open to Remote` },
  { Icon: CalendarCheck, label: 'Status', value: 'Available for full-time roles' },
]

export function Contact() {
  return (
    <section id="contact">
      {/* Wave divider into the tinted band — carried over from the reference. */}
      <div aria-hidden="true" className="-mb-px">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-[60px] w-full text-blush sm:h-[90px]"
        >
          <path
            fill="currentColor"
            d="M0 48c180-42 360-42 540-8s360 44 540 6 300-40 360-32V90H0Z"
          />
        </svg>
      </div>

      <div className="bg-blush pt-6 pb-16 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                Let&rsquo;s Connect
              </p>

              <h2 className="mt-4 text-headline font-semibold text-ink">
                {contact.heading.lead} <em className="text-gradient">{contact.heading.accent}</em>
              </h2>

              <p className="copy mt-5 max-w-lg text-ink-soft">{contact.body}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={`mailto:${profile.email}`}>
                  Email Me
                  <Mail size={17} aria-hidden="true" />
                </Button>
                <Button href={profile.resumePath} variant="outline" download>
                  Download Resume
                  <ArrowDown size={17} aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="card-lift space-y-1 rounded-3xl border border-petal bg-cream p-3">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    {/* Text on the cream card, so the deeper accent is not required
                        here — but it costs nothing and reads better. */}
                    <div className="flex items-center gap-4 rounded-2xl px-5 py-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blush text-gold-deep">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <p className="font-mono text-[0.56rem] font-bold tracking-widest text-ink-soft uppercase">
                          {label}
                        </p>
                        {/* decoration-petal is nearly invisible against
                            cream — the underline has to be readable as a
                            link affordance, so it takes rose. */}
                        {href ? (
                          <a
                            href={href}
                            className="mt-0.5 block truncate text-[0.82rem] font-semibold text-ink underline decoration-rose/50 underline-offset-4 transition-colors hover:text-gold-deep hover:decoration-rose"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-[0.82rem] font-semibold text-ink">{value}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  )
}
