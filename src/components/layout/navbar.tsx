'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const homeDropdownLinks = [
  { label: 'About Me', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Services', href: '/#services' },
  { label: 'Volunteering', href: '/#volunteering' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Others', href: '/#others' },
]

const navLinks = [
  { label: 'Home', href: '/', dropdown: true },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
]

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold text-white"
        >
          kingsleydaprime.
        </Link>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  Home <ChevronDown size={14} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-8 left-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50">
                    {homeDropdownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Contact Button - Right */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="px-5 py-2 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Sections
          </p>
          {homeDropdownLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
            {navLinks.filter((l) => !l.dropdown).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}