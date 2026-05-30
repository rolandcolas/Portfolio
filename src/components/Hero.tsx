'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
            style={{}}
          >
            <motion.div variants={itemVariants} className="space-y-2" style={{}}>
              <p className="text-pearl-600 text-lg font-light tracking-wide">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-pearl-900 leading-tight">
                Roland Colas
              </h1>
              <p className="text-xl text-pearl-700 font-light">
                Web Developer & IT Student
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-pearl-600 text-lg leading-relaxed max-w-md"
              style={{}}
            >
              Crafting beautiful, functional web experiences with React, Tailwind CSS, and modern web technologies. Passionate about clean code and exceptional design.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-4"
              style={{}}
            >
              <div className="glass-effect p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-pearl-700">2+</p>
                <p className="text-sm text-pearl-600">Years Experience</p>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-pearl-700">3</p>
                <p className="text-sm text-pearl-600">Key Projects</p>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-pearl-700">5</p>
                <p className="text-sm text-pearl-600">Certificates</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
              style={{}}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-pearl-500 text-white rounded-lg hover:bg-pearl-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-pearl-500 text-pearl-700 rounded-lg hover:bg-pearl-50 transition-all duration-300 font-medium"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
              style={{}}
            >
              <a
                href="https://github.com/rolandcolas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg hover:bg-pearl-100 transition-all duration-300"
              >
                <FiGithub className="text-pearl-700" size={20} />
              </a>
              <a
                href="#"
                className="p-3 glass-effect rounded-lg hover:bg-pearl-100 transition-all duration-300"
              >
                <FiLinkedin className="text-pearl-700" size={20} />
              </a>
              <a
                href="#contact"
                className="p-3 glass-effect rounded-lg hover:bg-pearl-100 transition-all duration-300"
              >
                <FiMail className="text-pearl-700" size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[350px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
            style={{}}
          >
            {/* Soft vignette overlay for blurred edges */}
            <div className="absolute inset-0 rounded-2xl z-20" style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)',
              backdropFilter: 'blur(0px)',
            }} />
            <div className="absolute inset-0 bg-gradient-to-br from-pearl-300/10 to-transparent rounded-2xl z-10" />
            <div className="absolute inset-0 angelic-glow rounded-2xl z-10" />
            <Image
              src="/images/profile/gg.jpg"
              alt="Roland Colas - Profile Photo"
              fill
              className="object-cover object-[99%_90%]"
  priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
