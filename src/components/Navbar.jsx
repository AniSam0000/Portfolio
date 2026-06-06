import { useState, useEffect } from 'react'
import { navLinks, personal } from '../content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = navLinks.map(l => l.href.slice(1))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'border-b border-[#222]' : ''
      }`}
      style={{ background: scrolled ? '#000' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-bold tracking-tight text-neon-green"
        >
          <span className="text-white">[</span>{personal.name.split(' ').map(w => w[0]).join('')}<span className="text-white">]</span>
        </a>

        <div className="hidden md:flex items-center gap-0">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-5 py-4 text-sm border-b-2 transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-neon-green border-neon-green'
                  : 'text-gray-600 border-transparent hover:text-gray-300'
              }`}
            >
              {active === link.href.slice(1) ? '_' : ' '}{link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm text-gray-400 hover:text-white transition-colors"
        >
          [{menuOpen ? 'close' : 'menu'}]
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b border-[#222] bg-[#000]">
          <div className="px-6 py-3 flex flex-col">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-neon-green'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                $ cd {link.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
