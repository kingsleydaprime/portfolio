import Image from 'next/image'
import Link from 'next/link'

export default function AboutSnippet() {
  return (
    <section id="about" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image Side - Left */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/kingsley-working.png"
                alt="Kingsley Ihemelandu working"
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--color-accent)] opacity-20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[var(--color-primary)] opacity-10 -z-10" />
          </div>

          {/* Text Side - Right */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow */}
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              About Me
            </span>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-tight">
              Driven by curiosity. <br /> Defined by craft.
            </h2>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                I am a Systems Engineering student at the University of Lagos and a software engineer at Nextvibe — but more than titles, I am someone who builds things that matter. From backend systems to robotics pipelines, I move across disciplines because I believe the most interesting problems live at the edges of fields.
              </p>
              <p>
                I founded Spectroniq Limited because I wanted to create, not just contribute. I host The Growth Podcast because I believe in learning out loud. I run The Kaizen Project because impact should not wait until you feel ready.
              </p>
              <p>
                What drives me is simple — a hunger to understand how things work deeply, and a commitment to building things that work excellently. I am not chasing a career. I am building a body of work.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="/about"
                className="px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Read More
              </Link>
              <a
                href="/kingsley-ihemelandu-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium rounded-lg hover:bg-[var(--color-surface)] transition-colors"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}