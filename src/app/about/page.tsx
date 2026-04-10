import { SITE_URL } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'

export const metadata: Metadata = {
  title: 'About | kingsleydaprime',
  description:
    'The story, values and personality behind Kingsley Ihemelandu — Systems Engineer, Founder of Spectroniq, host of The Growth Podcast.',
  openGraph: {
    title: 'About | kingsleydaprime',
    description:
      'The story, values and personality behind Kingsley Ihemelandu — Systems Engineer, Founder of Spectroniq, host of The Growth Podcast.',
    url: `${SITE_URL}/about`,
    // TODO: Implement OG Image
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | kingsleydaprime',
    description: 'The story, values and personality behind Kingsley Ihemelandu.',
    images: ['/og-image.png'],
  },
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/kingsleydaprime', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kingsleydaprime', icon: FaLinkedinIn },
  { label: 'X', href: 'https://x.com/kingsleydaprime', icon: FaXTwitter },
  { label: 'Instagram', href: 'https://instagram.com/kingsleydaprime', icon: FaInstagram },
]

const values = [
  {
    title: 'Depth over surface',
    description: 'I would rather understand one thing completely than know ten things halfway. This shows up in how I code, how I learn, and how I build relationships.',
  },
  {
    title: 'Excellence as a standard',
    description: 'Not perfectionism — excellence. Doing the work properly, caring about the details, and holding myself to a standard that does not depend on who is watching.',
  },
  {
    title: 'Build to impact',
    description: 'Every project I take on has to mean something. I am not interested in building things that do not matter. Tech is a tool — the question is always what you are building toward.',
  },
  {
    title: 'Faith as foundation',
    description: 'Everything I am and everything I am becoming is rooted in my faith. It is not separate from my work — it is the reason I work the way I do.',
  },
]

const currently = [
  { label: 'Building', value: 'Systems programming projects in Go' },
  { label: 'Learning', value: 'DevOps, AI/ML, and ethical hacking' },
  { label: 'Reading', value: 'One book per month' },
  { label: 'Running', value: 'The Kaizen Project & The Growth Podcast' },
  { label: 'Based in', value: 'Lagos, Nigeria' },
]

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              About Me
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              The Person Behind <br className="hidden md:block" /> The Work
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/kingsley-about.png"
                  alt="Kingsley Ihemelandu"
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--color-accent)] opacity-20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[var(--color-primary)] opacity-10 -z-10" />
            </div>

            {/* Story */}
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                My Story
              </h2>
              <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  I grew up fascinated by how things work — not just on the surface, but at the level of systems. What makes a machine move. What makes software scale. What makes a person grow. That curiosity never went away. It just found a home in engineering.
                </p>
                <p>
                  I am currently a Year 4 Systems Engineering student at the University of Lagos, and a software engineer at Nextvibe — where I have spent the last year building the entire backend infrastructure for a social event platform from the ground up. Before that, I founded Spectroniq Limited, my own registered technology company, because I wanted to build products of my own and not just for others.
                </p>
                <p>
                  My technical interests span robotics, AI and machine learning, embedded systems, backend engineering, and cybersecurity. I move across disciplines because I believe the most interesting problems live at the intersection of fields — and because I am genuinely curious about all of it.
                </p>
                <p>
                  Outside of code, I host The Growth Podcast — conversations about tech, faith, personal development, and becoming. I run The Kaizen Project, a community impact initiative. I serve as Public Relations Officer for the Igbo Students Union at UNILAG. I play music at church. I write on Medium. I am building a life with intention, not by accident.
                </p>
                <p>
                  The name kingsleydaprime is not random. Prime means accountable only to God and self. That is the standard I hold myself to — quietly, consistently, every day.
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5 mt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* CV Button */}
              <a
                href="/kingsley-ihemelandu-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              What I Stand For
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
              >
                <h3 className="font-heading text-xl font-bold text-[var(--color-primary)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Section */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Right Now
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Currently
            </h2>
            <p className="text-[var(--color-text-muted)] mt-2">
              A snapshot of what I am focused on at this point in time.
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-xl">
            {currently.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0"
              >
                <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium w-24 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--color-text)] leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading text-4xl font-bold text-white">
            Want to work together?
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed">
            Whether it is a project, a role, or just a conversation — I am open. Reach out and let's see what we can build.
          </p>
          <a
            href="mailto:kingsleydaprime@gmail.com"
            className="px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </main>
  )
}