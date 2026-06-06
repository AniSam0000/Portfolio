import { useEffect, useState } from 'react'
import { personal, hero, asciiBanner } from '../content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const current = hero.roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % hero.roles.length)
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="text-sm text-gray-600 mb-6 font-mono">
          <span className="text-neon-green">root@{personal.name.toLowerCase().replace(' ', '')}</span>
          <span className="text-gray-600">:~$ </span>
          <span className="text-white">cat /etc/hero</span>
        </div>

        <div className="border border-[#222] p-8 sm:p-10 mb-8">
          <pre className="text-xs text-gray-700 mb-6 leading-tight hidden sm:block">
{asciiBanner}
</pre>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
            {personal.name}
          </h1>

          <div className="h-8 flex items-center gap-2 border-b border-[#222] pb-6 mb-6">
            <span className="text-neon-green text-sm">$&gt;</span>
            <span className="text-white text-base sm:text-lg">{displayed}</span>
            <span
              className={`inline-block w-2.5 h-5 bg-neon-green transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="space-y-1.5 text-sm text-gray-500">
            <p>
              <span className="text-gray-600">/* </span>
              {hero.tagline}
              <span className="text-gray-600"> */</span>
            </p>
            <p>
              <span className="text-gray-600">// </span>
              {hero.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-white hover:text-neon-green transition-colors group"
          >
            <span className="w-8 h-px bg-gray-600 group-hover:bg-neon-green transition-colors" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-white transition-colors group"
          >
            <span className="w-8 h-px bg-gray-600 group-hover:bg-white transition-colors" />
            Get in touch
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-white transition-colors group ml-auto"
          >
            <span className="w-8 h-px bg-gray-600 group-hover:bg-white transition-colors" />
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  )
}
