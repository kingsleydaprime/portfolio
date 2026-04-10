import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaMedium } from 'react-icons/fa6'
import { SiLinktree } from 'react-icons/si'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Kaizen', href: '/kaizen' },
  { label: 'Podcast', href: '/podcast' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/kingsleydaprime', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kingsleydaprime', icon: FaLinkedinIn },
  { label: 'X', href: 'https://x.com/kingsleydaprime', icon: FaXTwitter },
  { label: 'Instagram', href: 'https://instagram.com/kingsleydaprime', icon: FaInstagram },
  { label: 'Medium', href: 'https://medium.com/@kingsleydaprime', icon: FaMedium },
  { label: 'Linktree', href: 'https://linktr.ee/kingsleydaprime', icon: SiLinktree },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-white"
            >
              kingsleydaprime.
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Systems Engineer. Builder. Founder. Driven by curiosity, defined by craft.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kingsleydaprime@gmail.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                kingsleydaprime@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/kingsleydaprime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://linktr.ee/kingsleydaprime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Linktree
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kingsley Ihemelandu. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}