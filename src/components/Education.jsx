import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../content'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 04</span>
          <h2 className="text-xl font-bold text-white mt-1">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 border border-[#222] p-6 hover:border-[#444] transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white">
                {education.university}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {education.degree}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">CGPA:</span>
              <span className="text-lg font-bold text-neon-green">{education.cgpa}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#222] flex items-center gap-2 text-xs text-gray-600">
            <span className="text-neon-green">*</span>
            {education.type}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
