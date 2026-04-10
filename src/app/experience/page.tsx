import ExperienceClient from '@/components/experience/experience-client'
import { SITE_URL } from '@/constants'
import experiences from '@/data/experience.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience of Kingsley Ihemelandu — Software Engineer at Nextvibe, Founder of Spectroniq Limited, and more.',
  openGraph: {
    title: 'Experience | kingsleydaprime',
    description:
      'Professional experience of Kingsley Ihemelandu — Software Engineer at Nextvibe, Founder of Spectroniq Limited, and more.',
    url: `${SITE_URL}/experience`,
    // TODO: Implement OG Image
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | kingsleydaprime',
    description: 'Professional experience of Kingsley Ihemelandu.',
    images: ['/og-image.png'],
  },
}

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Experience
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              Where I've Worked
            </h1>
            <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              A full history of my professional experience — from founding my own company to building products for others.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Client */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <ExperienceClient experiences={experiences} />
        </div>
      </section>
    </main>
  )
}