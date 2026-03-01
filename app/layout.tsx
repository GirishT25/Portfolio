import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { Playfair_Display, DM_Mono, Instrument_Sans } from 'next/font/google'

// Load Google Fonts via Next.js (no @import needed in CSS)
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'] })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300','400','500'] })
const instrument = Instrument_Sans({ subsets: ['latin'], weight: ['300','400','500','600'] })

export const metadata: Metadata = {
  title: 'Girish Thorat — Full-Stack Engineer',
  description: 'Portfolio of Girish Thorat, Full-Stack Engineer & Product Builder',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-sans transition-colors duration-300 antialiased
          ${playfair.className} ${dmMono.className} ${instrument.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}