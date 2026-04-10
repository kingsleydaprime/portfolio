import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaMedium } from 'react-icons/fa6'
import { SiDevdotto, SiLinktree } from 'react-icons/si'

const cards = [
  {
    id: 1,
    label: 'Initiative',
    title: 'The Kaizen Project',
    description:
      'A community impact initiative focused on personal development and health awareness. Built on the belief that growth should be shared, not hoarded.',
    href: '/kaizen',
    internal: true,
  },
  {
    id: 2,
    label: 'Podcast',
    title: 'The Growth Podcast',
    description:
      'Conversations about growth, tech, faith, and the journey of becoming. Real talk for people building themselves as much as they build products.',
    href: '/podcast',
    internal: true,
  },
  {
    id: 3,
    label: 'Writing',
    title: 'Medium',
    description:
      'I write about engineering, systems thinking, personal development, and the lessons that don\'t fit in a tweet. Find my articles on Medium.',
    href: 'https://medium.com/@kingsleydaprime',
    internal: false,
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/kingsleydaprime', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kingsleydaprime', icon: FaLinkedinIn },
  { label: 'X', href: 'https://x.com/kingsleydaprime', icon: FaXTwitter },
  { label: 'Instagram', href: 'https://instagram.com/kingsleydaprime', icon: FaInstagram },
  { label: 'Medium', href: 'https://medium.com/@kingsleydaprime', icon: FaMedium },
  { label: 'Dev.to', href: 'https://dev.to/kingsleydaprime', icon: SiDevdotto },
  { label: 'Linktree', href: 'https://linktr.ee/kingsleydaprime', icon: SiLinktree },
]

export default function Others() {
  return (
    <section id="others" className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
            Beyond Tech
          </span>
          <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
            Other Things I Do
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mt-2 leading-relaxed">
            I am more than the code I write. Here is what else I am building.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
            >
              {/* Label */}
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium">
                {card.label}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {card.description}
              </p>

              {/* Link */}
              {card.internal ? (
                <Link
                  href={card.href}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-primary)] font-medium hover:gap-2.5 transition-all mt-auto"
                >
                  Find Out More <ArrowUpRight size={15} />
                </Link>
              ) : (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[var(--color-primary)] font-medium hover:gap-2.5 transition-all mt-auto"
                >
                  Read on Medium <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-widest">
            Find Me On
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                <social.icon size={22} />
                <span className="text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}