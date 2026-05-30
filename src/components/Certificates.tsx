'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certificates = [
    {
      id: 1,
      name: 'Certificate 1',
      issuer: 'To be added',
      image: '/images/certificates/cert-1.png',
    },
    {
      id: 2,
      name: 'Certificate 2',
      issuer: 'To be added',
      image: '/images/certificates/cert-2.png',
    },
    {
      id: 3,
      name: 'Certificate 3',
      issuer: 'To be added',
      image: '/images/certificates/cert-3.png',
    },
    {
      id: 4,
      name: 'Certificate 4',
      issuer: 'To be added',
      image: '/images/certificates/cert-4.png',
    },
    {
      id: 5,
      name: 'Certificate 5',
      issuer: 'To be added',
      image: '/images/certificates/cert-5.png',
    },
  ]

  const selectedCertificate = certificates.find(
    (c) => c.id === selectedCert
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pearl-900 mb-4">
              Achievements & Certificates
            </h2>

            <div className="w-20 h-1 bg-pearl-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="cursor-pointer"
                onClick={() =>
                  setSelectedCert(
                    selectedCert === cert.id ? null : cert.id
                  )
                }
              >
                <div className="relative group h-60 rounded-xl overflow-hidden glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105">

                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 20vw"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium">
                      View Certificate
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 max-w-5xl w-full relative"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-2xl text-pearl-600 hover:text-pearl-900 z-50"
                >
                  ✕
                </button>

                <div className="relative w-full h-[70vh]">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-pearl-900 mt-4">
                  {selectedCertificate.name}
                </h3>

                <p className="text-pearl-600 mt-2">
                  {selectedCertificate.issuer}
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}