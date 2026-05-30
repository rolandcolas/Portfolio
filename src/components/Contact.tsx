'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-pearl-gradient">
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
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-pearl-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
              style={{}}
            >
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-pearl-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-pearl-600 mb-8">
                  I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pearl-100 rounded-lg">
                      <FiMail className="text-pearl-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl-900">Email</p>
                      <p className="text-pearl-600">roland.colas@hcdc.edu.ph</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pearl-100 rounded-lg">
                      <FiPhone className="text-pearl-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl-900">Phone</p>
                      <p className="text-pearl-600">+63 9560979404</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-pearl-100 rounded-lg">
                      <FiMapPin className="text-pearl-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-pearl-900">Location</p>
                      <p className="text-pearl-600">Davao City, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl"
              style={{}}
            >
              <h3 className="text-2xl font-bold text-pearl-900 mb-6">
                Send Me a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100/50 border border-green-300/50 rounded-lg text-green-700"
                  style={{}}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-pearl-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pearl-50 border border-pearl-200 rounded-lg focus:outline-none focus:border-pearl-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-pearl-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pearl-50 border border-pearl-200 rounded-lg focus:outline-none focus:border-pearl-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-pearl-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-pearl-50 border border-pearl-200 rounded-lg focus:outline-none focus:border-pearl-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-pearl-500 text-white font-medium rounded-lg hover:bg-pearl-600 transition-colors duration-300"
                  style={{}}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
