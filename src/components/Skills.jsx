import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../content'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 02</span>
          <h2 className="text-xl font-bold text-white mt-1">Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-3"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + gi * 0.05 }}
              className="border border-[#222] p-4 hover:border-[#444] transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <span className="text-neon-green text-xs w-28 shrink-0">
                  import{' '}
                  <span className="text-white">{'{'}{group.items.length}{'}'}</span>{' '}
                  from{' '}
                </span>
                <span className="text-gray-600 text-xs w-20 shrink-0">
                  &apos;{group.title}&apos;
                </span>
                <div className="flex flex-wrap items-center gap-x-1.5">
                  {group.items.map((skill, si) => (
                    <span key={skill}>
                      <span className="text-gray-500 text-xs">{
                        si > 0 ? ', ' : ''
                      }</span>
                      <span
                        className="text-gray-300 text-xs hover:text-neon-green transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
