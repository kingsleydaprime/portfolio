import Link from 'next/link'
import { Mic, ExternalLink } from 'lucide-react'
import { FaSpotify, FaApple } from 'react-icons/fa'
import { Metadata } from 'next'
import { KEYWORDS, SITE_URL } from '@/constants'

export const metadata: Metadata = {
  title: 'The Growth Podcast',
  keywords: KEYWORDS,
  description:
    'The Growth Podcast — conversations about tech, faith, personal development and the journey of becoming, hosted by Kingsley Ihemelandu.',
  openGraph: {
    title: 'The Growth Podcast | kingsleydaprime',
    description:
      'Conversations about tech, faith, personal development and the journey of becoming.',
    url: `${SITE_URL}/podcast`,
    // TODO: Implement OG Image
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Growth Podcast | kingsleydaprime',
    description: 'Conversations about tech, faith, personal development and the journey of becoming.',
    images: ['/og-image.png'],
  },
}

const platforms = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/show/0AyhC8ydU34enAWf5p1LA9',
    icon: FaSpotify,
    color: '#1DB954',
  },
  {
    label: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/the-growth-podcast/id1857878990',
    icon: FaApple,
    color: '#FC3C44',
  },
//   {
//     label: 'YouTube',
//     href: 'https://youtube.com',
//     icon: FaYoutube,
//     color: '#FF0000',
//   },
]

const topics = [
  'Personal Development',
  'Faith & Purpose',
  'Tech & Engineering',
  'Entrepreneurship',
  'Mental Health',
  'Productivity',
  'Career Growth',
  'Relationships',
  'Leadership',
  'Learning & Growth',
]

const episodes = [
  {
    id: 1,
    title: 'Starting Before You Are Ready',
    description: 'The conversation about why waiting until you feel ready is the surest way to never begin — and what to do instead.',
    duration: '42 min',
    date: '2024',
  },
  {
    id: 2,
    title: 'Building With Intention',
    description: 'What does it mean to build a career, a product, or a life with real intention? This episode unpacks the difference between drifting and deciding.',
    duration: '38 min',
    date: '2024',
  },
  {
    id: 3,
    title: 'Faith and the Grind',
    description: 'An honest conversation about how faith intersects with ambition, hard work, and the moments when things do not go according to plan.',
    duration: '51 min',
    date: '2024',
  },
]

export default function PodcastPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[var(--color-surface)] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Podcast
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              The Growth Podcast
            </h1>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Real conversations about tech, faith, personal development, and the journey of becoming. For people who are building themselves as much as they build things.
            </p>

            {/* Platform Links */}
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              {platforms.map((platform) => {
                const Icon = platform.icon
                return (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Icon size={16} style={{ color: platform.color }} />
                    {platform.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
                About The Show
              </span>
              <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
                Learning out loud.
              </h2>
              <div className="flex flex-col gap-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  The Growth Podcast started as a simple idea — that the conversations worth having should not stay private. The lessons, the struggles, the breakthroughs, the questions that keep you up at night — those deserve an audience.
                </p>
                <p>
                  Every episode is an honest conversation. No performance, no pretense. Just real talk about what it means to grow — as an engineer, as an entrepreneur, as a person of faith, as a human being trying to figure it out.
                </p>
                <p>
                  If you are building something — a career, a product, a life — this show is for you.
                </p>
              </div>
            </div>

            {/* Topics */}
            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
                What We Talk About
              </span>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-sm px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Episodes
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Recent Episodes
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
              >
                {/* Mic Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                  <Mic
                    size={20}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-1">
                    {episode.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {episode.duration}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {episode.date}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Listen CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href={platforms[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} /> Listen on Spotify
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading text-4xl font-bold text-white">
            Want to be a guest?
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed">
            If you have a story worth telling or a conversation worth having — let's talk. I am always looking for honest voices to bring on the show.
          </p>
          <a
            href="mailto:kingsley@spectroniq.com"
            className="px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Reach Out
          </a>
        </div>
      </section>

    </main>
  )
}