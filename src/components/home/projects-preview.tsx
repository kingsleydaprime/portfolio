import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import projects from '@/data/projects.json'

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section id="projects" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">
              Projects
            </span>
            <h2 className="font-heading text-4xl font-bold text-[var(--color-primary)]">
              Things I've Built
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl flex flex-col border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group overflow-hidden"
            >
              {/* Project Image — only if exists */}
              {project.image ? (
                <div className="relative w-full h-44 bg-[var(--color-surface)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-44 bg-[var(--color-surface)] flex items-center justify-center">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                    {project.type[0]}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">

                {/* Type Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.type.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-0.5 rounded border border-gray-200 text-[var(--color-text-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">

                  {/* Live — primary action */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--color-primary)] text-white text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}

                  {/* GitHub — secondary action */}
                  {project.githubUrl && (
                 <a   
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-gray-200 text-[var(--color-text-muted)] text-xs font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <FaGithub size={12} /> Source
                    </a>
                  )}

                  <span className="ml-auto text-xs text-[var(--color-text-muted)]">
                    {project.date}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Show More */}
        <div className="mt-8 flex md:hidden justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}