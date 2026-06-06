import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../content'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 05</span>
          <h2 className="text-xl font-bold text-white mt-1">Certifications</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="border border-[#222] p-6 flex items-center justify-between group hover:border-[#444] transition-colors block"
            >
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-neon-green transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-gray-700 mt-2">{cert.description}</p>
              </div>
              <span className="text-gray-700 text-xs group-hover:text-neon-green transition-colors shrink-0 ml-4">
                [view]
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
