'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function ProfileSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-[-0.05em] top-1/2 -translate-y-1/2 font-serif font-black text-[22vw] leading-none text-zinc-100 dark:text-zinc-900 tracking-tighter z-0"
      >
      GT
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-6 animate-fade-up">
            Full-Stack Engineer & Product Builder
          </p>

          {/* Name */}
          <h1
            ref={headingRef}
            className="font-serif font-black text-[clamp(3.5rem,8vw,7rem)] leading-[0.94] tracking-tight mb-8"
          >
            Girish
            <br />
            <em className="font-serif italic text-zinc-400 dark:text-zinc-600">Thorat</em>
          </h1>

          {/* Bio */}
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl mb-10 animate-fade-up [animation-delay:0.3s]">
            I’m an aspiring Full-Stack Developer passionate about building modern, scalable web applications.
Focused on clean architecture, performance, and crafting intuitive user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up [animation-delay:0.45s]">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-mono text-xs tracking-[0.12em] uppercase border border-zinc-950 dark:border-zinc-50 hover:bg-transparent hover:text-zinc-950 dark:hover:bg-transparent dark:hover:text-zinc-50 transition-all duration-250"
            >
              View Work <ArrowDown size={13} />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-zinc-950 dark:text-zinc-50 font-mono text-xs tracking-[0.12em] uppercase border border-zinc-300 dark:border-zinc-700 hover:border-zinc-950 dark:hover:border-zinc-50 transition-all duration-250"
            >
              Let's Talk →
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 animate-fade-up [animation-delay:0.6s]">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/GirishT25' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/girish-thorat-' },
              { icon: Twitter, label: 'Twitter', href: 'https://x.com/Girish252004' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="h-px w-12 bg-zinc-200 dark:bg-zinc-800" />
            <span className="font-mono text-xs text-zinc-400 tracking-wider">
              thoratgirish286@gmail.com
            </span>
          </div>
        </div>

        {/* Stats — bottom right */}
        {/* <div className="hidden lg:flex absolute right-12 bottom-20 flex-col items-end gap-8">
          {[
            { num: '6+', label: 'Years exp.' },
            { num: '34', label: 'Projects' },
            { num: '12', label: 'Clients' },
          ].map(({ num, label }) => (
            <div key={label} className="text-right">
              <div className="font-serif font-black text-5xl leading-none tracking-tight">{num}</div>
              <div className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-zinc-400 dark:text-zinc-500 mt-1">
                {label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <ArrowDown size={16} />
      </div>
    </section>
  )
}
