import AboutSnippet from '@/components/home/about-snippet'
import CTA from '@/components/home/cta'
import ExperiencePreview from '@/components/home/experience-preview'
import Hero from '@/components/home/hero'
import Others from '@/components/home/others'
import ProjectsPreview from '@/components/home/projects-preview'
import Services from '@/components/home/services'
import Skills from '@/components/home/skills'
import Testimonials from '@/components/home/testimonials'
import Volunteering from '@/components/home/volunteering'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSnippet />
      <ExperiencePreview />
      <ProjectsPreview />
      <Skills />
      <Services />
      <Volunteering />
      <Testimonials />
      <Others />
      <CTA />
    </main>
  )
}