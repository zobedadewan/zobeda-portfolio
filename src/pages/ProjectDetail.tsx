import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { findProject } from '@/data/projects'
import { NotFound } from '@/pages/NotFound'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? findProject(slug) : undefined

  // This is a single-page app, so the document title has to be set per route.
  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — Zobeda Dewan`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <NotFound />

  const sections = [
    { label: 'The Problem', body: project.problem },
    { label: 'The Approach', body: project.approach },
    { label: 'The Outcome', body: project.outcome },
  ]

  return (
    <>
      <main className="pt-28 pb-24 lg:pt-36">
        <Container>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-rose-deep"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All Work
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <p className="eyebrow">
              {project.category} · {project.timeframe}
            </p>

            <h1 className="mt-4 text-headline font-semibold text-ink">{project.title}</h1>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.summary}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white"
                  >
                    View Live
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-petal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-rose hover:text-rose-deep"
                  >
                    Source
                    <GithubIcon size={16} />
                  </a>
                )}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="mt-14 w-full rounded-3xl border border-petal object-cover"
            />
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-petal pt-12 sm:grid-cols-3">
            {sections.map((section, index) => (
              <Reveal key={section.label} delay={0.06 * index}>
                <h2 className="font-mono text-[0.68rem] tracking-[0.14em] text-gold-deep uppercase">
                  {section.label}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{section.body}</p>
              </Reveal>
            ))}
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <Reveal key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-2xl border border-petal"
                  />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  )
}
