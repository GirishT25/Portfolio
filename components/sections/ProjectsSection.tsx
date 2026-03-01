  'use client'
  import { useReveal } from '@/components/ui/useReveal'
  import { projects } from '@/lib/data'
  import { ExternalLink, Github } from 'lucide-react'

  export default function ProjectsSection() {
    const { ref } = useReveal()

    return (
      <section id="projects" className="py-28 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-zinc-300 dark:text-zinc-700 mb-3 flex items-center gap-3">
                04 — Work
                <span className="inline-block h-px w-10 bg-zinc-200 dark:bg-zinc-800" />
              </p>
              <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">
                Selected
                <br />Projects
              </h2>
            </div>
            <a
              href="#"
              className="self-start sm:self-end font-mono text-xs tracking-[0.12em] uppercase border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 hover:border-zinc-950 dark:hover:border-zinc-50 transition-colors"
            >
              All Projects →
            </a>
          </div>

          {/* Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-900">
            {projects.map((proj, i) => (
              <div
                key={proj.id}
                className="reveal group relative bg-white dark:bg-zinc-950 p-8 overflow-hidden"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-zinc-950 dark:bg-zinc-50 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] cubic-bezier(0.4,0,0.2,1) z-0" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <p className="font-mono text-[0.65rem] tracking-[0.15em] text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {proj.num} — {proj.year}
                    </p>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={proj.github} aria-label="GitHub" className="text-zinc-500 hover:text-zinc-50 dark:hover:text-zinc-950 transition-colors">
                        <Github size={16} />
                      </a>
                      <a href={proj.link} aria-label="Live" className="text-zinc-500 hover:text-zinc-50 dark:hover:text-zinc-950 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl leading-tight mb-3 group-hover:text-zinc-50 dark:group-hover:text-zinc-950 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 group-hover:text-zinc-400 dark:group-hover:text-zinc-500 transition-colors">
                    {proj.description}
                  </p>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors mb-6">
                    {proj.tech.join(' · ')}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.12em] uppercase border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-700 dark:group-hover:border-zinc-200 px-4 py-2 text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-950 transition-colors">
                    View Project ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
