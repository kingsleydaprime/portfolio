'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import testimonials from '@/data/testimonials.json'

export default function Testimonials() {
  const [active, setActive] = useState(1)

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [active])

  const getPosition = (index: number) => {
    if (index === active) return 'center'
    if (
      index === (active - 1 + testimonials.length) % testimonials.length
    ) return 'left'
    if (index === (active + 1) % testimonials.length) return 'right'
    return 'hidden'
  }

  return (
    <section id="testimonials" className="py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
            What People Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-6 min-h-[320px]">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
<div className="flex items-center justify-center gap-6 w-full px-14">
  {[-1, 0, 1].map((offset) => {
    const index = (active + offset + testimonials.length) % testimonials.length
    const t = testimonials[index]
    const isCenter = offset === 0

    return (
      <div
        key={t.id}
        className={`
          bg-white rounded-2xl border flex flex-col gap-4 transition-all duration-500
          ${isCenter
            ? 'p-8 border-[var(--color-primary)] shadow-md z-10 flex-1 opacity-100 scale-100'
            : 'p-6 border-gray-100 shadow-sm flex-[0.75] opacity-50 scale-95 hidden md:flex'
          }
        `}
      >
        {/* Quote Icon */}
        <Quote
          size={24}
          className={`${isCenter ? 'text-[var(--color-accent)]' : 'text-gray-300'}`}
        />

        {/* Quote Text */}
        <p
          className={`leading-relaxed flex-1 ${
            isCenter
              ? 'text-[var(--color-text)] text-base'
              : 'text-[var(--color-text-muted)] text-sm'
          }`}
        >
          "{t.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          {t.image ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-[var(--color-primary)]">
                {t.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">
              {t.name}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {t.role}{t.company ? ` · ${t.company}` : ''}
            </p>
          </div>
        </div>
      </div>
    )
  })}
</div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-2 bg-[var(--color-primary)]'
                  : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}