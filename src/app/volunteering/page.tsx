import { Heart } from 'lucide-react'
import volunteering from '@/data/volunteering.json'
import { Metadata } from 'next'
import { SITE_URL } from '@/constants'

export const metadata: Metadata = {
  title: 'Volunteering | kingsleydaprime',
  description:
    'Community involvement and volunteering work by Kingsley Ihemelandu — The Kaizen Project, Millennium Fellowship, Cowrywise Ambassador, and more.',
  openGraph: {
    title: 'Volunteering | kingsleydaprime',
    description:
      'Community involvement and volunteering work by Kingsley Ihemelandu — The Kaizen Project, Millennium Fellowship, Cowrywise Ambassador, and more.',
    url: `${SITE_URL}/volunteering`,
    images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteering | kingsleydaprime',
    description:
      'Community involvement and volunteering work by Kingsley Ihemelandu.',
    images: ['/og-image.webp'],
  },
}
export default function VolunteeringPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Volunteering
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              Beyond The Code
            </h1>
            <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              I believe in giving back, showing up, and building communities — not just products.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteering.map((item) => (
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
      </section>

    </main>
  )
}