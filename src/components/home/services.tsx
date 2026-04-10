import Link from 'next/link'
import { Layers, Server, Monitor, Smartphone, Brain } from 'lucide-react'
import services from '@/data/services.json'
import { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  server: Server,
  monitor: Monitor,
  smartphone: Smartphone,
  brain: Brain,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
            Services
          </span>
          <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
            What I Can Do For You
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mt-2 leading-relaxed">
            Whether you need a full product built from scratch or a specific layer handled with precision — I'm available for freelance and contract work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href="/#contact"
                  className="text-sm text-[var(--color-primary)] font-medium hover:underline mt-auto"
                >
                  Get In Touch →
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}