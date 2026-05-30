'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen bg-transparent">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
