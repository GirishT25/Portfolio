# Portfolio — Next.js 15 + Tailwind CSS

A modern, black & white single-page portfolio with dark/light mode toggle.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v3**
- **TypeScript**
- **Lucide React** (icons)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx           # Fixed nav + mobile menu + theme toggle
│   ├── Footer.tsx           # Footer
│   ├── sections/
│   │   ├── ProfileSection.tsx    # Hero / profile
│   │   ├── ExperienceSection.tsx # Work history
│   │   ├── SkillsSection.tsx     # Skills grid
│   │   ├── ProjectsSection.tsx   # Project cards
│   │   ├── BlogSection.tsx       # Blog cards + reader modal
│   │   └── ContactSection.tsx    # Contact form with validation
│   └── ui/
│       ├── ThemeProvider.tsx     # Dark/light mode context
│       └── useReveal.tsx         # Intersection observer hook
└── lib/
    └── data.ts              # All portfolio content
```

## Customization

Edit `lib/data.ts` to update your:
- Work experience
- Skill categories
- Projects
- Blog posts (supports basic markdown: ##, ###, >, -, \`code\`)

Edit `components/sections/ProfileSection.tsx` for name, bio, stats.

Edit `components/sections/ContactSection.tsx` to wire up a real form handler (Resend, EmailJS, Formspree, etc).
