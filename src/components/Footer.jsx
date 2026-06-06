import { personal, footer } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-[#222] py-6 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-700">
        <span>
          <span className="text-neon-green">*</span> {footer.builtWith}
        </span>
        <span>
          <span className="text-neon-green">(c)</span> {new Date().getFullYear()} {personal.name}
        </span>
      </div>
    </footer>
  )
}
