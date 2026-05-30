'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-pearl-300/20 to-pearl-100/20',
    },
    {
      category: 'Backend',
      skills: ['Supabase', 'MySQL', 'PhpMyAdmin', 'Node.js', 'RESTful APIs'],
      color: 'from-pearl-400/20 to-pearl-200/20',
    },
    {
      category: 'Tools & Technologies',
      skills: ['Next.js', 'Git', 'VS Code', 'npm/yarn', 'Vercel'],
      color: 'from-pearl-300/20 to-pearl-100/20',
    },
  ]

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-pearl-500 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-pearl-200/30 p-8 rounded-2xl hover:border-pearl-300/60 transition-all duration-300`}
                style={{}}
              >
                <h3 className="text-2xl font-bold text-pearl-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="flex items-center gap-3 group"
                      style={{}}
                    >
                      <div className="w-2 h-2 bg-pearl-500 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-pearl-700 font-medium group-hover:text-pearl-900 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-effect p-8 rounded-2xl"
            style={{}}
          >
            <h3 className="text-2xl font-bold text-pearl-900 mb-8">
              Proficiency Level
            </h3>
            <div className="space-y-6">
              {[
                { name: 'React.js', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'JavaScript', level: 85 },
                { name: 'Backend Development', level: 70 },
                { name: 'Database Management', level: 75 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-pearl-900">{skill.name}</span>
                    <span className="text-pearl-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-pearl-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-pearl-400 to-pearl-500 rounded-full"
                      style={{}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
