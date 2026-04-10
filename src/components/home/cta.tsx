import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Eyebrow */}
          <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
            Get In Touch
          </span>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Have something in mind? Let's build it together.
          </h2>

          {/* Subtext */}
          <p className="text-white/70 max-w-lg leading-relaxed">
            Whether you're looking to hire, collaborate, or just have a conversation worth having — my inbox is open. I respond to every message.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:kingsleydaprime@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Send Me An Email
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/40 text-xs uppercase tracking-widest">or find me on</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kingsleydaprime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/kingsleydaprime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <FaLinkedinIn size={18} /> LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}