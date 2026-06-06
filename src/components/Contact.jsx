import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../content'

const contactInfo = [
  {
    label: 'email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: 'phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'location',
    value: personal.location,
  },
]

const socialLinks = [
  { label: 'github', href: personal.social.github },
  { label: 'linkedin', href: personal.social.linkedin },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-gray-700 text-sm">// 06</span>
          <h2 className="text-xl font-bold text-white mt-1">Contact</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid md:grid-cols-2 gap-10"
        >
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'name', key: 'name', type: 'text' },
                { label: 'email', key: 'email', type: 'email' },
              ].map(field => (
                <div key={field.key}>
                  <label
                    htmlFor={field.key}
                    className="block text-xs text-gray-600 mb-1"
                  >
                    $ {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.key}
                    required
                    value={form[field.key]}
                    onChange={e =>
                      setForm({ ...form, [field.key]: e.target.value })
                    }
                    className="w-full bg-transparent border border-[#222] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon-green transition-colors placeholder-gray-700"
                    placeholder={`enter your ${field.label}...`}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-600 mb-1"
                >
                  $ message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={e =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-[#222] px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon-green transition-colors resize-none placeholder-gray-700"
                  placeholder="type your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full border border-[#222] px-4 py-2.5 text-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                {sent ? '[ ✓ message sent ]' : '[ send message ]'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-gray-700 w-20 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-gray-600">:</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-neon-green transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#222]">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-700 w-20 shrink-0">social</span>
                <span className="text-gray-600">:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-neon-green transition-colors text-xs"
                    >
                      [{link.label}]
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
