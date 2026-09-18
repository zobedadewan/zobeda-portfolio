import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { about, profile } from "@/data/profile";
import { icons } from "@/lib/icons";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-20">
      <Container>
        {/* Three children, placed differently per breakpoint.

            On lg the photo occupies the whole left column and the two text
            blocks stack in the right one — the original two-column layout.

            Below lg the grid collapses to one column and `order` interleaves
            them: heading and paragraphs, then the photo, then the traits. The
            photo used to lead on mobile, which pushed the section's opening
            sentence below the fold; this way the text introduces itself and
            the photo arrives as a break before the traits list.

            Splitting the text into two blocks is what makes that possible —
            `order` can only reposition whole grid items, so the photo cannot
            be moved into the middle of a single text column. */}
        <div className="grid items-start gap-x-20 gap-y-14 lg:grid-cols-2 lg:gap-y-0">
          {/* Heading and paragraphs */}
          <div className="order-1 lg:order-0 lg:col-start-2 lg:row-start-1">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                About Me
              </p>

              <h2 className="mt-4 text-headline font-semibold text-ink">
                {about.heading.lead}{" "}
                <em className="text-gradient">{about.heading.accent}</em>
              </h2>
            </Reveal>

            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.08 * (index + 1)}>
                <p className="copy mt-5 text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {/* Photo. On lg it spans both text rows in the left column; on
              mobile it sits between them. lg:mt-12.5 drops its top edge to
              the heading's cap height — 18px eyebrow line box, 16px mt-4 to
              the h2's line box, then 16px of leading and ascent to the top of
              the "I" itself. Optical alignment with the letterform, not the
              text box, and only worth doing where the two sit side by side. */}
          <Reveal className="relative order-2 mx-auto w-full max-w-xl lg:order-0 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mt-12.5">
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
              className="portrait-shadow w-full rounded-[3rem_0.25rem_3rem_0.25rem] sm:rounded-[4rem_0.25rem_4rem_0.25rem]"
            />

            {/* Circular years badge, carried over from the reference — with
                a real number. profile.yearsExperience is derived from the
                resume's Feb 2017 start. */}
            <div className="absolute -top-6 -right-4 grid size-28 place-items-center rounded-full border border-petal bg-cream text-center shadow-lg shadow-plum/10 sm:-right-8 sm:size-32">
              <div>
                <p className="font-display text-3xl leading-none font-semibold text-gradient">
                  {profile.yearsExperience}+
                </p>
                <p className="mt-1.5 font-mono text-[0.54rem] leading-tight font-semibold tracking-[0.08em] text-ink uppercase">
                  Years
                  <br />
                  Building
                </p>
              </div>
            </div>
          </Reveal>

          {/* Traits and the link through to Experience */}
          <div className="order-3 lg:order-0 lg:col-start-2 lg:row-start-2">
            <Reveal delay={0.24}>
              <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-10">
                {about.traits.map((trait) => {
                  const Icon = icons[trait.icon];
                  return (
                    <li key={trait.label} className="border-t border-petal pt-4">
                      {Icon && (
                        <Icon size={20} aria-hidden="true" className="text-rose" />
                      )}
                      <p className="mt-3 font-mono text-[0.62rem] font-bold tracking-widest text-ink uppercase">
                        {trait.label}
                      </p>
                      <p className="copy-sm mt-2 text-ink-soft">
                        {trait.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href="#experience"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-petal px-6 py-3 font-mono text-[0.62rem] font-semibold tracking-widest text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
              >
                See My Experience
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
