'use client'
import { useReveal } from '@/components/ui/useReveal'
import { experiences } from '@/lib/data'

export default function ExperienceSection() {
  const { ref } = useReveal()

  return (
    <section id="experience" className="py-28 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-zinc-300 dark:text-zinc-700 mb-3 flex items-center gap-3">
              02 — History
              <span className="inline-block h-px w-10 bg-zinc-200 dark:bg-zinc-800" />
            </p>
            <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">
              Experience
            </h2>
          </div>
        </div>

        {/* List */}
        <div ref={ref} className="divide-y divide-zinc-100 dark:divide-zinc-900">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 py-10 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 -mx-4 px-4 rounded-sm transition-colors duration-200"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Meta */}
              <div className="lg:pt-1">
                <p className="font-mono text-[0.7rem] tracking-[0.1em] text-zinc-400 dark:text-zinc-500 mb-1">
                  {exp.period}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
              </div>

              {/* Body */}
              <div>
                <h3 className="font-serif font-bold text-2xl mb-3 leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl mb-5">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
