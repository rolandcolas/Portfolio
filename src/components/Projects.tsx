'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      name: 'QMaster',
      description: 'An intelligent quiz platform built with React and Tailwind CSS, featuring real-time scoring, multiple quiz categories, and an intuitive user interface.',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/rolandcolas',
    },
    {
      name: 'QuizKasiii',
      description: 'A comprehensive quiz application with backend integration using Supabase. Includes user authentication, quiz creation, and performance tracking.',
      technologies: ['React.js', 'Supabase', 'Tailwind CSS'],
      github: 'https://github.com/rolandcolas',
    },
    {
      name: 'IncluServe',
      description: 'A full-stack web application focused on inclusive services. Built with modern technologies and designed with accessibility and user experience in mind.',
      technologies: ['React.js', 'MySQL', 'Node.js'],
      github: 'https://github.com/rolandcolas',
    },
  ]

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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-pearl-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
            style={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pearl-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-pearl-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group h-full flex flex-col"
                style={{}}
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-pearl-300/30 to-pearl-100/20 flex items-center justify-center p-6 group-hover:from-pearl-300/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-pearl-900 text-center">
                    {project.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-pearl-600 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-pearl-700 mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-pearl-100 text-pearl-700 text-xs font-medium rounded-full border border-pearl-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-pearl-500 text-white rounded-lg hover:bg-pearl-600 transition-colors flex-1 justify-center"
                    >
                      <FiGithub size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
