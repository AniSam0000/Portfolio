import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../content'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 03</span>
          <h2 className="text-xl font-bold text-white mt-1">Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-4"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="border border-[#222] p-6 hover:border-[#444] transition-colors duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-white group-hover:text-neon-green transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-700 text-xs ml-3 shrink-0">
                  {project.tag}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 text-xs text-gray-600 space-y-1">
                {project.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-neon-green shrink-0">{'>'}</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-xs text-gray-700">apt install</span>
                {project.tech.map((t, idx) => (
                  <span key={t}>
                    <span className="text-xs text-neon-green">{t}</span>
                    {idx < project.tech.length - 1 && (
                      <span className="text-gray-700 text-xs">,</span>
                    )}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-neon-green transition-colors"
              >
                <span className="text-gray-700">$</span>
                git clone <span className="text-gray-500">{project.github}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
