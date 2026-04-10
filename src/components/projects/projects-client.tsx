'use client'

import { useState, useMemo } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  type: string[]
  language: string[]
  tools: string[]
  date: string
  image: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

const types = ['Backend', 'Frontend', 'Full Stack', 'DevOps', 'ML', 'Robotics', 'Cybersecurity']
const languages = ['TypeScript', 'Python', 'JavaScript', 'Go', 'C', 'C++', 'Java', 'Bash']
const dates = ['2024', '2023', '2022']

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [filterOpen, setFilterOpen] = useState(false)

  const toggleFilter = (value: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const clearAll = () => {
    setSearch('')
    setSelectedTypes([])
    setSelectedLanguages([])
    setSelectedDate('')
  }

  const activeFilterCount =
    selectedTypes.length + selectedLanguages.length + (selectedDate ? 1 : 0)

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tools.some((t) => t.toLowerCase().includes(search.toLowerCase()))

      const matchesType =
        !selectedTypes.length || selectedTypes.some((t) => p.type.includes(t))

      const matchesLanguage =
        !selectedLanguages.length || selectedLanguages.some((l) => p.language.includes(l))

      const matchesDate = !selectedDate || p.date === selectedDate

      return matchesSearch && matchesType && matchesLanguage && matchesDate
    })
  }, [projects, search, selectedTypes, selectedLanguages, selectedDate])

  return (
    <div className="flex flex-col gap-8">

      {/* Search + Filter Bar */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          />
          <input
            type="text"
            placeholder="Search projects, tools, technologies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className={`relative flex items-center gap-2 px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors shrink-0 ${
            filterOpen || activeFilterCount > 0
              ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
              : 'bg-white border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
          }`}
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Filters</span>
          {activeFilterCount > 0 && (
            <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold ${
              filterOpen
                ? 'bg-white text-[var(--color-primary)]'
                : 'bg-[var(--color-accent)] text-white'
            }`}>
              {activeFilterCount}
            </span>
          )}
        </button>

      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">

          {/* Type Filter */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
              Type
            </p>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    selectedTypes.includes(type)
                      ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                      : 'bg-white border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Language Filter */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
              Language
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleFilter(lang, selectedLanguages, setSelectedLanguages)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    selectedLanguages.includes(lang)
                      ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                      : 'bg-white border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filter */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
              Year
            </p>
            <div className="flex flex-wrap gap-2">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(selectedDate === date ? '' : date)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    selectedDate === date
                      ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                      : 'bg-white border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <button
              onClick={clearAll}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5"
            >
              <X size={14} /> Clear all
            </button>
            <button
              onClick={() => setFilterOpen(false)}
              className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply
            </button>
          </div>

        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">
          Showing{' '}
          <span className="font-semibold text-[var(--color-text)]">{filtered.length}</span>{' '}
          project{filtered.length !== 1 ? 's' : ''}
        </p>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl flex flex-col border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group overflow-hidden"
            >
              {/* Image */}
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

              {/* Body */}
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
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="text-[var(--color-text-muted)] text-lg font-heading">
            No projects found.
          </p>
          <button
            onClick={clearAll}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            Clear filters and try again
          </button>
        </div>
      )}

    </div>
  )
}