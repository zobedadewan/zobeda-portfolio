import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { featuredProjects, type Project } from '@/data/projects'
import { profile } from '@/data/profile'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={0.08 * index} className="group">
      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-petal bg-blush">
          <img
            src={project.cover}
            alt={project.coverAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          />
          <span
            aria-hidden="true"
            className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-cream/95 text-rose-deep shadow-md backdrop-blur-sm transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
          >
            <ArrowUpRight size={17} />
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-4">
          <span className="font-mono text-xs text-gold-deep">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-rose-deep">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">{project.category}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
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

      <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
        I&rsquo;m writing up recent work properly — the problem, the architecture decisions, and
        what actually shipped. In the meantime, my experience and stack are below.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#experience"
          className="rounded-full border border-petal bg-cream px-6 py-3 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
        >
          View Experience
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-petal bg-cream px-6 py-3 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase transition-colors hover:border-rose hover:text-rose-deep"
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
    <section id="work" className="scroll-mt-24 bg-blush/45 py-16 lg:py-20">
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
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
