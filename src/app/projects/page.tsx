import ProjectsClient from '@/components/projects/projects-client'
import { SITE_URL } from '@/constants'
import projects from '@/data/projects.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A full portfolio of projects by Kingsley Ihemelandu — spanning backend systems, frontend interfaces, robotics, AI, and more.',
  openGraph: {
    title: 'Projects | kingsleydaprime',
    description:
      'A full portfolio of projects by Kingsley Ihemelandu — spanning backend systems, frontend interfaces, robotics, AI, and more.',
    url: `${SITE_URL}/projects`,
    // TODO: Implement OG Image
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | kingsleydaprime',
    description: 'A full portfolio of projects by Kingsley Ihemelandu.',
    images: ['/og-image.png'],
  },
}

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
<section className="bg-[var(--color-surface)] pt-32 pb-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col gap-4">
      <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
        Portfolio
      </span>
      <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
        Things I've Built
      </h1>
      <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
        A collection of projects across backend systems, frontend interfaces, robotics, AI, and more. Search or filter to find what you're looking for.
      </p>
    </div>
  </div>
</section>

      {/* Projects Client — search and filters live here */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <ProjectsClient projects={projects} />
        </div>
      </section>
    </main>
  )
}