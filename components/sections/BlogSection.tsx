'use client'
import { useState } from 'react'
import { useReveal } from '@/components/ui/useReveal'
import { blogPosts } from '@/lib/data'
import { X, ArrowRight, Clock, Tag } from 'lucide-react'

type BlogPost = typeof blogPosts[0]

function BlogReader({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  // Parse markdown-ish content
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) {
          return <h2 key={i} className="font-serif font-bold text-2xl mt-10 mb-4 leading-tight">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} className="font-semibold text-lg mt-7 mb-3">{line.slice(4)}</h3>
        }
        if (line.startsWith('> ')) {
          return (
            <blockquote key={i} className="border-l-2 border-zinc-300 dark:border-zinc-600 pl-5 italic opacity-70 my-6">
              {line.slice(2)}
            </blockquote>
          )
        }
        if (line.startsWith('- ')) {
          return <li key={i} className="ml-5 mb-1.5 leading-relaxed list-disc">{renderInline(line.slice(2))}</li>
        }
        if (line.startsWith('```')) {
          return null
        }
        if (line === '') {
          return <br key={i} />
        }
        return (
          <p key={i} className="mb-5 leading-[1.85] text-zinc-600 dark:text-zinc-400">
            {renderInline(line)}
          </p>
        )
      })
  }

  const renderInline = (text: string) => {
    const parts = text.split(/(`[^`]+`)/)
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-950 overflow-y-auto animate-fade-in">
      {/* Top bar */}
      <div className="sticky top-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-zinc-400 dark:text-zinc-500">
              {post.category}
            </span>
            <span className="text-zinc-200 dark:text-zinc-800">·</span>
            <span className="font-mono text-[0.65rem] tracking-[0.1em] text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.12em] uppercase text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <X size={14} /> Close
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-zinc-400 dark:text-zinc-500 mb-6">
          {post.date}
        </p>

        {/* Title */}
        <h1 className="font-serif font-black text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-8">
          {post.title}
        </h1>

        {/* Lead */}
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-12">
          {post.excerpt}
        </p>

        {/* Body */}
        <div className="text-zinc-800 dark:text-zinc-200 prose-custom">
          {renderContent(post.content)}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-lg">Girish Thorat</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Full-Stack Engineer & Writer</p>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs tracking-[0.12em] uppercase border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 hover:border-zinc-950 dark:hover:border-zinc-50 transition-colors self-start sm:self-auto"
          >
            ← Back to Blog
          </button>
        </div>
      </article>
    </div>
  )
}

export default function BlogSection() {
  const { ref } = useReveal()
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
    <>
      <section id="blog" className="py-28 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-zinc-300 dark:text-zinc-700 mb-3 flex items-center gap-3">
                05 — Writing
                <span className="inline-block h-px w-10 bg-zinc-200 dark:bg-zinc-800" />
              </p>
              <h2 className="font-serif font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight">
                From the Blog
              </h2>
            </div>
          </div>

          {/* Cards grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={post.id}
                className="reveal group cursor-pointer flex flex-col bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-zinc-950 dark:bg-zinc-50 flex items-center justify-center overflow-hidden">
                  <span className="font-serif font-black text-[4rem] text-zinc-800 dark:text-zinc-200 opacity-20 leading-none">
                    {String(post.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                      <Tag size={9} /> {post.category}
                    </span>
                    <span className="text-zinc-200 dark:text-zinc-800">·</span>
                    <span className="font-mono text-[0.6rem] tracking-[0.1em] text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                      <Clock size={9} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl leading-snug mb-3 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900">
                    <span className="font-mono text-[0.62rem] tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase text-zinc-950 dark:text-zinc-50 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Reader Modal */}
      {selectedPost && (
        <BlogReader post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  )
}
