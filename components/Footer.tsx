  export default function Footer() {
    const year = new Date().getFullYear()
    return (
      <footer className="bg-zinc-950 dark:bg-zinc-50 border-t border-zinc-900 dark:border-zinc-200 py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-zinc-700 dark:text-zinc-300">
            © {year} Alex Morgan. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-zinc-700 dark:text-zinc-300 hover:text-zinc-50 dark:hover:text-zinc-950 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    )
  }
