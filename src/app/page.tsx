import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/error-boundary'
import { SectionLoading } from '@/components/loading'

// Dynamic imports for client-heavy components
const Hero = dynamic(() => import('@/components/sections/hero').then(mod => ({ default: mod.Hero })), {
  ssr: false,
  loading: () => <SectionLoading text="Loading hero section..." />
})

const About = dynamic(() => import('@/components/sections/about').then(mod => ({ default: mod.About })), {
  ssr: false,
  loading: () => <SectionLoading text="Loading about section..." />
})

const Projects = dynamic(() => import('@/components/sections/projects').then(mod => ({ default: mod.Projects })), {
  ssr: false,
  loading: () => <SectionLoading text="Loading projects..." />
})

const Contact = dynamic(() => import('@/components/sections/contact').then(mod => ({ default: mod.Contact })), {
  ssr: false,
  loading: () => <SectionLoading text="Loading contact form..." />
})

export default function HomePage() {
  return (
    <>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </>
  )
}
