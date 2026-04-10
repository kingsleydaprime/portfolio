'use client'

import { useState, useMemo } from 'react'
import { Search, X, SlidersHorizontal, Briefcase } from 'lucide-react'

type Experience = {
  id: number
  role: string
  company: string
  type: string
  location: string
  startDate: string
  endDate: string
  description: string
  tags: string[]
}

const types = ['Full-time', 'Contract', 'Freelance', 'Founder', 'Internship']
const years = ['2024', '2023', '2022']

export default function ExperienceClient({ experiences }: { experiences: Experience[] }) {
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const clearAll = () => {
    setSearch('')
    setSelectedTypes([])
    setSelectedYear('')
  }

  const activeFilterCount = selectedTypes.length + (selectedYear ? 1 : 0)

  const filtered = useMemo(() => {
    return experiences.filter((e) => {
      const matchesSearch =
        !search ||
        e.role.toLowerCase().includes(search.toLowerCase()) ||
        e.company.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase()) ||
        e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

      const matchesType =
        !selectedTypes.length || selectedTypes.includes(e.type)

      const matchesYear =
        !selectedYear ||
        e.startDate === selectedYear ||
        e.endDate === selectedYear ||
        e.endDate === 'Present'

      return matchesSearch && matchesType && matchesYear
    })
  }, [experiences, search, selectedTypes, selectedYear])

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
            placeholder="Search roles, companies, skills..."
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
                  onClick={() => toggleType(type)}
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

          {/* Year Filter */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">
              Year
            </p>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(selectedYear === year ? '' : year)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    selectedYear === year
                      ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                      : 'bg-white border-gray-200 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {year}
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
          role{filtered.length !== 1 ? 's' : ''}
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

      {/* Experience List */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-start gap-6 border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--color-surface)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                <Briefcase
                  size={20}
                  className="text-[var(--color-primary)] group-hover:text-white transition-colors"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-muted)]">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-1">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-gray-200 text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="shrink-0 text-sm text-[var(--color-text-muted)] md:text-right">
                {exp.startDate} — {exp.endDate}
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="text-[var(--color-text-muted)] text-lg font-heading">
            No experience found.
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