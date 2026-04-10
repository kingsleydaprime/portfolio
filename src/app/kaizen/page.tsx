
import { SITE_URL } from '@/constants'
import { Heart, Users, Target, Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Kaizen Project',
  description:
    'The Kaizen Project — a community impact initiative by Kingsley Ihemelandu focused on personal development and health awareness. Aligned with SDG 3 and UNAI Principle 2.',
  openGraph: {
    title: 'The Kaizen Project | kingsleydaprime',
    description:
      'A community impact initiative focused on personal development and health awareness.',
    url:    `${SITE_URL}/kaizen`,
    images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Kaizen Project | kingsleydaprime',
    description: 'A community impact initiative by Kingsley Ihemelandu.',
    images: ['/og-image.webp'],
  },
}
const stats = [
  { icon: Users, label: 'Target Lives', value: '100+' },
  { icon: Calendar, label: 'Sessions Planned', value: '6' },
  { icon: Target, label: 'SDG Focus', value: 'SDG 3' },
  { icon: Heart, label: 'Core Principle', value: 'UNAI 2' },
]

const pillars = [
  {
    title: 'Personal Development',
    description: 'Equipping young people with the mindset, habits, and tools to grow intentionally — not just professionally, but as whole human beings.',
  },
  {
    title: 'Health Awareness',
    description: 'Making health literacy accessible. Physical, mental, and emotional health — because you cannot build anything meaningful on a broken foundation.',
  },
  {
    title: 'Community',
    description: 'Growth is not a solo journey. The Kaizen Project creates spaces where people can learn together, hold each other accountable, and rise together.',
  },
]

export default function KaizenPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Community Initiative
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              The Kaizen Project
            </h1>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Kaizen — the Japanese philosophy of continuous improvement. Small, consistent steps toward becoming better. That is what this project is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
                The Mission
              </span>
              <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
                Growth should be shared, not hoarded.
              </h2>
              <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  The Kaizen Project started with a simple conviction — that the insights, habits, and frameworks that help people grow should not stay locked in books or behind paywalls. They should reach people where they are.
                </p>
                <p>
                  We run sessions focused on personal development and health awareness, targeting young people who are building their lives and need more than just information — they need community, accountability, and honest conversation.
                </p>
                <p>
                  This is not a lecture series. It is a space to grow together.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center">
                      <Icon size={18} className="text-[var(--color-primary)]" />
                    </div>
                    <p className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              What We Stand On
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Our Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
              >
                <h3 className="font-heading text-xl font-bold text-[var(--color-primary)]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Recognition
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Millennium Fellowship
            </h2>
            <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                The Kaizen Project was submitted as the flagship initiative for the Millennium Fellowship application under the United Nations Academic Impact — one of the most prestigious student leadership fellowships in the world.
              </p>
              <p>
                The project is aligned with SDG 3 — Good Health and Well-being — and UNAI Principle 2, which focuses on the promotion of the health and well-being of all people. The application targets 100 lives reached across 6 structured sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading text-4xl font-bold text-white">
            Want to be part of this?
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed">
            Whether you want to collaborate, support, or just learn more about what we are building — reach out. The more people in the room, the better the room gets.
          </p>
          <a
            href="mailto:kingsleydaprime@gmail.com"
            className="px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Involved
          </a>
        </div>
      </section>

    </main>
  )
}