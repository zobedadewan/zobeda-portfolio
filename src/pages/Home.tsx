import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { Skills } from '@/components/sections/Skills'
import { Work } from '@/components/sections/Work'

export function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Process />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
