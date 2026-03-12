'use client'
import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message is too short (min 20 chars)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setFormState('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setTimeout(() => setFormState('idle'), 5000)
  }

  const field = (name: keyof typeof form) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(f => ({ ...f, [name]: e.target.value }))
      if (errors[name]) setErrors(ev => ({ ...ev, [name]: undefined }))
    },
  })

  const inputClass = (name: keyof typeof form) =>
    `w-full bg-transparent border-b py-3 text-sm placeholder:text-zinc-500 dark:placeholder:text-zinc-600 outline-none transition-colors focus:border-zinc-950 dark:focus:border-zinc-50 ${
      errors[name]
        ? 'border-red-400 dark:border-red-500'
        : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500'
    }`

  return (
    <section id="contact" className="relative py-28 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-black text-[20vw] leading-none text-white/[0.025] dark:text-black/[0.025] whitespace-nowrap"
      >
        HELLO
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-3">
              06 — Contact
              <span className="inline-block h-px w-10 bg-zinc-800 dark:bg-zinc-300" />
            </p>
            <h2 className="font-serif font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-tight tracking-tight mb-6">
              Got a project
              <br />
              <em className="italic text-zinc-500 dark:text-zinc-400">in mind?</em>
            </h2>
            <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed mb-12 max-w-sm">
              I'm available for select freelance projects and full-time opportunities. Fill in the form and I'll get back to you within 24 hours.
            </p>

            {/* Info */}
            <div className="space-y-5 mb-12">
              <a href="mailto:thoratgirish@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-50 dark:hover:text-zinc-950 transition-colors group">
                <Mail size={15} className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-50 dark:group-hover:text-zinc-950 transition-colors" />
                thoratgirish@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500">
                <MapPin size={15} className="text-zinc-600 dark:text-zinc-400" />
                Aurangabad, India · Open to Remote
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/GirishT25' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/girish-thorat-' },
                { icon: Twitter, label: 'Twitter', href: 'https://x.com/Girish252004' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 border border-zinc-800 dark:border-zinc-200 text-zinc-500 dark:text-zinc-400 hover:border-zinc-50 dark:hover:border-zinc-950 hover:text-zinc-50 dark:hover:text-zinc-950 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-16">
                <CheckCircle size={48} className="text-zinc-400 dark:text-zinc-500" />
                <h3 className="font-serif font-bold text-2xl">Message Sent!</h3>
                <p className="text-zinc-400 dark:text-zinc-500 max-w-xs">
                  Thanks for reaching out. I'll reply to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className={inputClass('name')}
                      {...field('name')}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[0.7rem] text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className={inputClass('email')}
                      {...field('email')}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[0.7rem] text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={inputClass('subject')}
                    {...field('subject')}
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project... *"
                    className={`${inputClass('message')} resize-none`}
                    {...field('message')}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[0.7rem] text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="font-mono text-[0.62rem] tracking-wider text-zinc-600 dark:text-zinc-400">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-mono text-xs tracking-[0.12em] uppercase border border-zinc-50 dark:border-zinc-950 hover:bg-transparent hover:text-zinc-50 dark:hover:text-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-250"
                  >
                    {formState === 'loading' ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={13} />
                      </>
                    )}
                  </button>
                </div>

                {formState === 'error' && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <AlertCircle size={15} /> Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
