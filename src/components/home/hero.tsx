import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kingsleydaprime', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kingsleydaprime', icon: FaLinkedinIn },
  { label: 'Linktree', href: 'https://linktr.ee/kingsleydaprime', icon: SiLinktree },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background — two zones */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left/Top — warm white */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[var(--color-background)]" />
        {/* Right/Bottom — navy */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[var(--color-primary)]" />
      </div>

      {/* Wave divider — desktop (vertical, left-right) */}
      <div className="absolute inset-0 hidden md:block">
        <svg
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M580,0 
               C580,0 540,150 560,300 
               C580,450 620,480 600,600 
               C580,720 540,750 560,900 
               L1200,900 L1200,0 Z"
            fill="#1B3A6B"
          />
          {/* Second wave layer for depth */}
          <path
            d="M600,0 
               C600,0 570,120 585,280 
               C600,440 635,470 618,600 
               C600,730 565,760 580,900 
               L1200,900 L1200,0 Z"
            fill="#1B3A6B"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Wave divider — mobile (horizontal, top-bottom) */}
      <div className="absolute inset-0 md:hidden">
        <svg
          viewBox="0 0 400 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,420 
               C80,400 120,440 200,430 
               C280,420 320,400 400,420 
               L400,900 L0,900 Z"
            fill="#1B3A6B"
          />
          <path
            d="M0,440 
               C80,420 120,460 200,448 
               C280,436 320,418 400,440 
               L400,900 L0,900 Z"
            fill="#1B3A6B"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

          {/* Text Side */}
          <div className="flex flex-col gap-6">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Systems Engineer & Builder
            </span>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight">
              Kingsley <br /> Ihemelandu.
            </h1>

            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-md">
              Building for the future — at the intersection of systems, intelligence, and impact.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Link
                href="/projects"
                className="px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-medium rounded-lg hover:bg-[var(--color-surface)] transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex items-center gap-5 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/kingsley.jpeg"
                alt="Kingsley Ihemelandu"
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}