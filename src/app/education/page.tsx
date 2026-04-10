import { SITE_URL } from '@/constants'
import education from '@/data/education.json'
import { GraduationCap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Academic background of Kingsley Ihemelandu — B.Eng Systems Engineering, University of Lagos.',
  openGraph: {
    title: 'Education | kingsleydaprime',
    description:
      'Academic background of Kingsley Ihemelandu — B.Eng Systems Engineering, University of Lagos.',
    url: `${SITE_URL}/education`,
    // TODO: Implement OG Image
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education | kingsleydaprime',
    description: 'Academic background of Kingsley Ihemelandu.',
    images: ['/og-image.png'],
  },
}

export default function EducationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Education
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              My Academic Journey
            </h1>
            <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              The foundation beneath everything I build.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-start gap-6 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                  <GraduationCap
                    size={20}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {item.institution} · {item.location}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-1">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-accent)] mt-1">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Coursework */}
{item.coursework && item.coursework.length > 0 && (
  <div className="mt-4 flex flex-col gap-3">
    <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
      Related Coursework
    </p>
    <div className="flex flex-wrap gap-2">
      {item.coursework.map((course) => (
        <span
          key={course}
          className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-surface)] text-[var(--color-text)] border border-gray-100"
        >
          {course}
        </span>
      ))}
    </div>
  </div>
)}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full border border-gray-200 text-[var(--color-text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="shrink-0 text-sm text-[var(--color-text-muted)] md:text-right">
                  {item.startDate} — {item.endDate}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}