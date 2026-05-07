import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Epoh Abengs | Marriage, Family & Godly Counsel',
  description: 'We share real moments, couple content, beauty tips, recipes and daily inspirations for a fulfilling life and home. Faith-centered marriage guidance from Cameroon to the world.',
  keywords: ['marriage', 'family', 'couple', 'faith', 'Cameroon', 'beauty', 'recipes', 'godly counsel', 'lifestyle'],
  authors: [{ name: 'The Epoh Abengs' }],
  creator: 'The Epoh Abengs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    siteName: 'The Epoh Abengs',
    title: 'The Epoh Abengs | Marriage, Family & Godly Counsel',
    description: 'Real moments, couple content, beauty tips, recipes and daily inspirations for a fulfilling life and home.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Epoh Abengs',
    description: 'Marriage, Family & Godly Counsel',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#C4713B' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
