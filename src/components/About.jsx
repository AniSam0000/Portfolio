import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { about } from '../content'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 01</span>
          <h2 className="text-xl font-bold text-white mt-1">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-10 mt-8"
        >
          <div className="space-y-4 text-sm leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-gray-400' : 'text-gray-500'}>
                {p}
              </p>
            ))}
          </div>

          <div className="flex gap-4">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex-1 border border-[#222] p-5"
              >
                <div className="text-3xl font-bold text-neon-green mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
