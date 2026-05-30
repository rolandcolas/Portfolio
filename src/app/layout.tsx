import type { Metadata } from 'next'
import '../styles/globals.css'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Roland Colas - Web Developer Portfolio',
  description: 'Explore my portfolio as an IT student specializing in web development with React, Tailwind CSS, and backend technologies.',
  keywords: 'portfolio, web developer, ReactJS, Tailwind CSS, Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-angelic-light">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
