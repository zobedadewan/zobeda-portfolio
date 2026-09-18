import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.github, label: "GitHub profile", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn profile", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email Zobeda", Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="home"
      /* Added bg-blush for the full hero background and extra bottom padding for the wave */
      className="relative overflow-hidden bg-blush pt-28 pb-28 lg:pt-30 lg:pb-36"
    >
      {/* Decorative radial background bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-12%] right-[-10%] size-[46rem] rounded-full bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_62%)] opacity-[0.10]"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-petal bg-blush/60 px-4 py-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold-deep" />
                </span>
                <span className="font-mono text-[0.58rem] font-semibold tracking-widest text-ink uppercase sm:text-[0.62rem]">
                  {profile.availability}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-display font-semibold text-ink">
                {profile.headline.lead}{" "}
                <em className="text-gradient">{profile.headline.accent}</em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-[1.7] text-ink-soft">
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
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="grid size-11 place-items-center rounded-full border border-gold/25 bg-gold/8 text-ink transition-all duration-200 hover:border-gold/40 hover:bg-gold/15 hover:text-gold-deep motion-safe:hover:-translate-y-0.5"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="relative mx-auto w-full max-w-84 lg:mx-0 lg:ml-auto lg:max-w-88"
          >
            <img
              src="/zobeda.webp"
              alt="Zobeda Dewan, frontend developer"
              width={1086}
              height={1448}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="portrait-shadow relative w-full rounded-[4rem_0.25rem_4rem_0.25rem] sm:rounded-[6rem_0.25rem_6rem_0.25rem]"
            />
            <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-petal bg-cream px-5 py-2.5 font-mono text-[0.62rem] font-medium tracking-[0.06em] whitespace-nowrap text-ink shadow-lg shadow-plum/5">
              React · TypeScript · Tailwind
            </p>
          </Reveal>
        </div>
      </Container>
      {/* Hero Bottom Wave Divider with Visible Drop Shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 w-full overflow-visible leading-none"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          /* Applied drop-shadow to the SVG path so it projects onto the section below */
          className="block h-[60px] w-full text-cream sm:h-[90px] [filter:drop-shadow(0px_15px_12px_rgba(45,15,35,0.15))]"
        >
          <path
            fill="currentColor"
            d="M0 48c180-42 360-42 540-8s360 44 540 6 300-40 360-32V90H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
