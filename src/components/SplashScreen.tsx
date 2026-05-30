'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3500) // Show splash for 3.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-angelic-light via-pearl-50 to-angelic-lighter overflow-hidden"
          style={{}}
        >
          {/* Background particles for splash */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`splash-particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
              } as any}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Main splash content */}
          <div className="relative z-10 text-center">
            {/* Animated circle background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pearl-300/30 to-pearl-200/30"
              style={{
                width: '300px',
                height: '300px',
                margin: 'auto',
              } as any}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Inner animated circle */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pearl-400/50"
              style={{
                width: '250px',
                height: '250px',
                margin: 'auto',
              } as any}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />

            {/* Logo/Initial */}
            <motion.div
              className="relative z-20 mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'backOut', delay: 0.3 }}
              style={{}}
            >
              <h1 className="text-7xl font-bold text-pearl-700 drop-shadow-lg">RC</h1>
            </motion.div>

            {/* Text */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              style={{}}
            >
              <h2 className="text-3xl font-bold text-pearl-900 mb-2">Roland Colas</h2>
              <p className="text-pearl-600 text-lg">Portfolio</p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="relative z-20 mt-8 flex gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{}}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-2 h-2 rounded-full bg-pearl-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{}}
                />
              ))}
            </motion.div>
          </div>

          {/* Glow orbs */}
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/20"
            style={{ filter: 'blur(40px)' } as any}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/20"
            style={{ filter: 'blur(40px)' } as any}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
