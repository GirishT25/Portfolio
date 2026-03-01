// ==============================
// EXPERIENCES
// ==============================

export const experiences = [
  {
    id: 1,
    period: "Feb-2026 Mar-2026 ",
    company: "Cognifyz Technologies",
    role: "Full-Stack Intern",
    description:
      "Built and deployed cross-device compatible web applications using HTML, CSS, JavaScript, Node.js, Express, and Bootstrap. Designed RESTful APIs, integrated databases (MongoDB/MySQL), and implemented secure user authentication and authorization.",
    tags: ["Next.js", "Edge Runtime", "Rust", "TypeScript"],
  },
]

// ==============================
// SKILLS
// ==============================

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "WebGL",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "tRPC",
      "Prisma",
      "REST APIs",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "AWS",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    name: "AI & Data",
    skills: [
      "OpenAI API",
      "LangChain",
      "Pinecone",
      "Python",
      "Pandas",
      "RAG Systems",
    ],
  },
  {
    name: "Design",
    skills: [
      "Figma",
      "System Design",
      "Prototyping",
      "Accessibility",
      "Design Tokens",
    ],
  },
  {
    name: "Practices",
    skills: [
      "Agile / Scrum",
      "TDD",
      "Code Review",
      "Technical Writing",
      "DDD",
    ],
  },
]

// ==============================
// PROJECTS
// ==============================

export const projects = [
  {
  id: 1,
  num: "01",
  year: "2024",
  name: "Dev Event Platform",
  description:
    "Full-stack event management platform enabling users to browse, view, and manage events dynamically, with RESTful APIs and scalable architecture.",
  tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Cloudinary", "PostHog"],
  link: "#",
  github: "https://github.com/GirishT25/Dev-Events.git",
},
{
  id: 2,
  num: "02",
  year: "2024",
  name: "Typing Speed Web App",
  description:
    "Adaptive web application to track typing speed and accuracy in real-time, with user authentication, persistent storage, and CI/CD deployment.",
  tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Docker"],
  link: "#",
  github: "https://github.com/GirishT25/Typing_Speed_Web_Application.git",
},
{
  id: 3,
  num: "03",
  year: "2024",
  name: "Streamfiy",
  description:
    "Real-time language learning and collaboration platform with instant messaging using WebSockets, enabling peer-to-peer communication and scalable full-stack architecture.",
  tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Socket.io"],
  link: "#",
  github: "https://github.com/GirishT25/Video-Chat-Application.git",
},
{
  id: 4,
  num: "04",
  year: "2024",
  name: "Gemini-Clone",
  description:
    "Front-end clone of Google’s Gemini AI assistant featuring responsive chat UI, dark/light mode, modular React components, and ready for AI API integration.",
  tech: ["React.js", "CSS"],
  link: "#",
  github: "https://github.com/GirishT25/Gemini_Clone.git",
},
]

// ==============================
// BLOG POSTS
// ==============================

export const blogPosts = [
  {
  id: 1,
  slug: "why-i-stopped-using-redux",
  title: "Why I Stopped Using Redux and What I Use Instead",
  excerpt: "A practical guide to modern React state management without the ceremony.",
  date: "Feb 12, 2025",
  readTime: "8 min read",
  category: "Engineering",
  content: `
## The Problem with Redux in 2025

Redux was revolutionary in 2015. It gave React developers a single source of truth for state, predictable updates, and powerful developer tools.  

Fast forward to 2025, and most apps don’t need that level of ceremony. Many projects spend more time writing boilerplate and creating reducers than actually building features.

### Common Pain Points

- **Boilerplate overload:** Actions, reducers, and constants for every tiny state change.  
- **Over-engineering:** Small components or local UI state still require global store management.  
- **Steep learning curve:** Beginners often struggle with middleware, thunks, and dev tools.  
- **Performance pitfalls:** Unnecessary re-renders when large global state updates occur.

Redux still has its place in complex enterprise apps, but for most modern React projects, there are simpler and more efficient alternatives.

## Where State Actually Lives

Before choosing a state management library, it helps to understand **where your state belongs**:

- **Server state:** Data fetched from APIs or databases. Needs caching, refetching, and synchronization.  
- **URL state:** Filters, query params, or pagination that should persist in the URL.  
- **UI state:** Toggles, modals, dropdowns—state local to components or shared across small scopes.  
- **Form state:** Input values, validation, and submission status. Usually local and transient.

Each type of state has its own ideal management solution.

## What I Use Instead

### 1. TanStack Query for Server State

TanStack Query (formerly React Query) handles all server state concerns:

- Automatic caching and background refetching  
- Loading and error states  
- Optimistic updates  
- Pagination and infinite scrolling support  

\`\`\`js
import { useQuery } from '@tanstack/react-query'

const { data, isLoading, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
})
\`\`\`

### 2. Zustand for Shared UI State

For small, shared UI state like modals, drawers, or theme toggles:

- Tiny footprint  
- Simple API  
- No boilerplate  

\`\`\`js
import { create } from 'zustand'

const useStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}))
\`\`\`

### 3. React Router or Next.js for URL State

State that needs to live in the URL—filters, query parameters, pagination—is best handled by routing libraries:

\`\`\`js
const router = useRouter()
router.push({ query: { page: 2 } })
\`\`\`

### 4. React Hook Form or Local useState for Form State

Forms are local and transient. React Hook Form simplifies validation, submission, and state handling:

\`\`\`js
import { useForm } from 'react-hook-form'

const { register, handleSubmit, formState } = useForm()
\`\`\`

## Why This Approach Works

- **Less boilerplate:** No need for reducers, actions, or constants.  
- **Separation of concerns:** Each type of state has its proper abstraction.  
- **Improved performance:** Only components that use the state update.  
- **Modern tools:** Libraries like TanStack Query handle caching, persistence, and subscriptions efficiently.

## Anti-Patterns I Avoid

- **Global store for everything:** Not every toggle or input belongs in Redux or Zustand.  
- **Mixing server and UI state:** Keep API data separate from local component state.  
- **Over-optimizing early:** Premature abstraction creates more complexity than benefits.

## Conclusion

Redux was a lifesaver for complex apps a decade ago, but modern React apps rarely need its heavy machinery.  

By understanding **where state lives** and using specialized tools—TanStack Query, Zustand, React Hook Form, and router state—we can write cleaner, simpler, and more maintainable code.

---

> “Use the right tool for the right type of state.”  

This approach lets you focus on building features, not boilerplate.
  `,
},
  {
    id: 2,
    slug: "building-rag-systems",
    title: "Building RAG Systems That Work in Production",
    excerpt:
      "Lessons learned from deploying real retrieval-augmented generation systems.",
    date: "Jan 28, 2025",
    readTime: "12 min read",
    category: "AI",
    content: `
## RAG Isn't Magic

Production RAG is mostly data engineering.

Key lessons:

- Chunk properly (256–512 tokens)
- Use reranking
- Build evaluation harness
- Track retrieval recall

Production systems require monitoring and iteration.
`,
  },
]