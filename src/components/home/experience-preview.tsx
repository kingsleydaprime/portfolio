import Link from 'next/link'
import { ArrowRight, Briefcase } from 'lucide-react'
import experiences from '@/data/experience.json'

export default function ExperiencePreview() {
  const preview = experiences.slice(0, 3)

  return (
    <section id="experience" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Experience
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Where I've Worked
            </h2>
          </div>
          <Link
            href="/experience"
            className="hidden md:flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-4">
          {preview.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center shrink-0">
                <Briefcase size={20} className="text-[var(--color-primary)]" />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-[var(--color-text)]">
                    {exp.role}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-muted)]">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
                  {exp.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-gray-200 text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="shrink-0 text-sm text-[var(--color-text-muted)] md:text-right">
                {exp.startDate} — {exp.endDate}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Show More */}
        <div className="mt-8 flex md:hidden justify-center">
          <Link
            href="/experience"
            className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
          >
            View All Experience <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}