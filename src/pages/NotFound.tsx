import { Link } from 'react-router-dom'

import { Container } from '@/components/ui/Container'

export function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center py-24">
      <Container className="text-center">
        <p className="eyebrow">Error 404</p>

        <h1 className="mt-4 text-headline font-semibold text-ink">
          This page <em className="text-gradient">wandered off.</em>
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
          The link may be out of date, or the case study behind it hasn&rsquo;t been published yet.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </Container>
    </main>
  )
}
