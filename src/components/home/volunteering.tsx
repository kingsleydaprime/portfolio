import { ArrowRight, Heart } from 'lucide-react'
import volunteering from '@/data/volunteering.json'
import Link from 'next/link'

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
<div className="flex items-end justify-between mb-12">
  <div className="flex flex-col gap-2">
    <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
      Volunteering
    </span>
    <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
      Beyond The Code
    </h2>
    <p className="text-[var(--color-text-muted)] max-w-xl mt-2 leading-relaxed">
      I believe in giving back, showing up, and building communities — not just products.
    </p>
  </div>
  <Link
    href="/volunteering"
    className="hidden md:flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium hover:gap-3 transition-all shrink-0"
  >
    View All <ArrowRight size={16} />
  </Link>
</div>

        {/* Volunteering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteering.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-4">

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                  <Heart
                    size={16}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Period */}
                <span className="text-xs text-[var(--color-text-muted)] shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Role & Org */}
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  {item.organization}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* Mobile Show More */}
<div className="mt-8 flex md:hidden justify-center">
  <Link
    href="/volunteering"
    className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
  >
    View All <ArrowRight size={16} />
  </Link>
</div>
    </section>
  )
}