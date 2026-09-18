import { ArrowUpRight, FolderGit2, ImageOff } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { LaptopFrame } from '@/components/ui/LaptopFrame'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { featuredProjects, type Project } from '@/data/projects'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={0.08 * index} className="group">
      <Link to={`/work/${project.slug}`} className="block">
        {/* No panel behind the laptop, and no shadow added here either —
            the frame artwork has its own drop shadow baked in, and
            multiply blending renders it against whatever is behind. */}
        <div className="relative transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-1">
          <LaptopFrame>
            {project.cover ? (
              <img
                src={project.cover}
                alt={project.coverAlt ?? ''}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
              />
            ) : (
              /* No cover yet — the frame stays, so the grid keeps its
                 shape and it reads as "shot pending". */
              <div className="grid h-full w-full place-items-center text-gold/60">
                <ImageOff size={26} aria-hidden="true" />
                <span className="sr-only">Cover image coming soon</span>
              </div>
            )}
          </LaptopFrame>
        </div>

        {/* Indented to the laptop's SCREEN edge, not the card edge. The
            frame's aperture starts at x=103 of an 811px canvas — 12.7% —
            so the index, title and everything under it line up with the
            left edge of the screenshot rather than with the chassis, which
            is wider and sits further out. Keep this in step with the
            overlay geometry in LaptopFrame if the artwork changes. */}
        <div className="pl-[12.7%]">
          <div className="mt-5 flex items-baseline gap-4">
            {/* rose is 4.70 on cream — fine for large text, marginal at 12px.
                The card index is small, so it takes rose-deep. */}
            <span className="font-mono text-xs font-bold text-rose-deep">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="flex items-center gap-1.5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-rose-deep">
                {project.title}
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-gold-deep transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </h3>
              {project.category && (
                <p className="mt-1 text-[0.8rem] font-medium text-ink-soft">{project.category}</p>
              )}
            </div>
          </div>

          {project.summary && <p className="copy-sm mt-3 text-ink-soft">{project.summary}</p>}

          {project.tech && project.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          )}
        </div>

      </Link>
    </Reveal>
  )
}

/**
 * Shown while src/data/projects.ts is empty, so the live site reads as
 * "case studies are coming" rather than as a broken grid.
 */
function EmptyState() {
  return (
    <Reveal className="mt-14 rounded-3xl border border-dashed border-petal bg-blush/40 px-8 py-16 text-center">
      <span className="grid mx-auto size-14 place-items-center rounded-full border border-petal bg-cream text-rose">
        <FolderGit2 size={22} aria-hidden="true" />
      </span>

      <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
        Case studies in progress
      </h3>

      <p className="copy mx-auto mt-3 max-w-md text-ink-soft">
        I&rsquo;m writing up recent work properly — the problem, the architecture decisions, and
        what actually shipped. In the meantime, my experience and stack are below.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#experience"
          className="rounded-full border border-petal bg-cream px-6 py-3 font-mono text-[0.66rem] font-semibold tracking-widest text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
        >
          View Experience
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-petal bg-cream px-6 py-3 font-mono text-[0.66rem] font-semibold tracking-widest text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
        >
          GitHub
        </a>
      </div>
    </Reveal>
  )
}

export function Work() {
  const featured = featuredProjects()

  return (
    <section id="work" className="bg-blush/45 py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Selected Work"
          lead="Things I have"
          accent="designed and built."
          description="Each case study covers the problem, the approach, and what changed once it shipped."
        />

        {featured.length === 0 ? (
          <EmptyState />
        ) : (
          /* Columns follow the project count instead of being fixed at
             three. With two projects a hard lg:grid-cols-3 left an empty
             third column, which does not read as a deliberate gap — it
             reads as a card that failed to load.

             Two projects therefore get two wide columns (~512px a card in
             this container rather than ~330px), which suits covers that are
             UI screenshots: more width means the screenshot is legible
             rather than a thumbnail. */
          <div
            className={cn(
              'mt-14 grid gap-x-8 gap-y-14',
              featured.length === 1 && 'mx-auto max-w-2xl',
              featured.length >= 2 && 'sm:grid-cols-2',
              featured.length >= 3 && 'lg:grid-cols-3',
            )}
          >
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
