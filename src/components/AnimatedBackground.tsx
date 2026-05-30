'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 20,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-angelic-light via-pearl-50 to-angelic-lighter" />

      {/* Animated light orbs */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size * 10}px`,
            height: `${particle.size * 10}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: 'blur(2px)',
            boxShadow: `0 0 ${particle.size * 15}px rgba(255, 255, 255, 0.8)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating sparkles */}
      {particles.slice(0, 20).map((particle, idx) => (
        <motion.div
          key={`sparkle-${idx}`}
          className="absolute rounded-full"
          style={{
            width: '2px',
            height: '2px',
            left: `${(particle.x + 30) % 100}%`,
            top: `${(particle.y + 30) % 100}%`,
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 0 3px rgba(255, 255, 255, 0.9)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow effect areas */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
