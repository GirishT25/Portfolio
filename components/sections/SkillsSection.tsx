'use client'
import { useReveal } from '@/components/ui/useReveal'
import { skillCategories } from '@/lib/data'

export default function SkillsSection() {
  const { ref } = useReveal()

  return (
    <section id="skills" className="py-28 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-3">
          03 — Craft
          <span className="inline-block h-px w-10 bg-zinc-800 dark:bg-zinc-300" />
        </p>
        <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-16">
          What I <em className="italic text-zinc-500 dark:text-zinc-400">bring</em>
          <br />to the table.
        </h2>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-800 dark:border-zinc-200"
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className={`reveal p-8 border-zinc-800 dark:border-zinc-200 ${
                i % 3 !== 2 ? 'lg:border-r' : ''
              } ${i % 2 !== 1 ? 'sm:border-r lg:border-r-0' : 'sm:border-r-0'} ${
                i < skillCategories.length - 3 ? 'lg:border-b' : ''
              } ${i < skillCategories.length - 2 ? 'sm:border-b lg:border-b-0' : ''} ${
                i < skillCategories.length - 1 ? 'border-b lg:border-b-0' : ''
              }`}
            >
              <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-400 mb-5">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-300 dark:text-zinc-600 border border-zinc-800 dark:border-zinc-200 px-3 py-1 hover:border-zinc-50 dark:hover:border-zinc-900 hover:text-zinc-50 dark:hover:text-zinc-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
