'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiHeadphones } from 'react-icons/fi'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const highlights = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Specialized in React.js and Tailwind CSS for creating responsive, modern interfaces.',
    },
    {
      icon: FiDatabase,
      title: 'Backend Skills',
      description: 'Experience with Supabase, MySQL, and PhpMyAdmin for robust backend solutions.',
    },
    {
      icon: FiHeadphones,
      title: 'Customer Support',
      description: '2 years of experience in customer chat support, ensuring excellent user interactions.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-pearl-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-pearl-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-pearl-500 mx-auto rounded-full" />
          </motion.div>
          </div>

          {/* Content */}
          <div className="glass-effect p-8 rounded-2xl mb-12">
            <motion.div variants={itemVariants}>
            <p className="text-pearl-700 text-lg leading-relaxed mb-4">
              I'm Roland Colas, an IT student passionate about web development and creating beautiful digital experiences. With a strong foundation in frontend technologies and growing expertise in backend development, I'm committed to building scalable, user-friendly applications.
            </p>
            <p className="text-pearl-600 text-lg leading-relaxed">
              My journey in tech has given me a unique perspective on the importance of both technical excellence and exceptional user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </motion.div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="glass-effect p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <motion.div
                    variants={itemVariants}
                  >
                  <div className="mb-4 p-4 bg-pearl-100 rounded-lg w-fit">
                    <Icon className="text-pearl-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-pearl-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-pearl-600">
                    {highlight.description}
                  </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
