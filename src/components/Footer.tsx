'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-pearl-100 border-t border-pearl-200/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
          style={{}}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} style={{}}>
            <h3 className="text-2xl font-bold text-pearl-900 mb-2">RC</h3>
            <p className="text-pearl-600">
              Crafting beautiful web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} style={{}}>
            <h4 className="font-bold text-pearl-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#hero" className="text-pearl-600 hover:text-pearl-900 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-pearl-600 hover:text-pearl-900 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-pearl-600 hover:text-pearl-900 transition-colors">
                Projects
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} style={{}}>
            <h4 className="font-bold text-pearl-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/rolandcolas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-pearl-200 rounded-lg transition-colors"
              >
                <FiGithub className="text-pearl-700" size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-pearl-200 rounded-lg transition-colors"
              >
                <FiLinkedin className="text-pearl-700" size={20} />
              </a>
              <a
                href="#contact"
                className="p-2 hover:bg-pearl-200 rounded-lg transition-colors"
              >
                <FiMail className="text-pearl-700" size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-pearl-200/30 pt-8 text-center"
          style={{}}
        >
          <p className="text-pearl-600 text-sm">
            © {new Date().getFullYear()} Roland Colas. All rights reserved. Designed with ✨
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
