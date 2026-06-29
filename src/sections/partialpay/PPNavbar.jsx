import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CreditCard, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Features', href: '#pp-features' },
  { label: 'How It Works', href: '#pp-how-it-works' },
  { label: 'Pricing', href: '#pp-pricing' },
  { label: 'FAQ', href: '#pp-faq' },
]

export default function PPNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-18" aria-label="Primary">

          {/* Logo */}
          <a href="/partialpay" className="flex items-center gap-2.5 group" aria-label="PartialPay home">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
            >
              <CreditCard size={16} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="text-white font-bold text-lg tracking-tight">
              Partial<span style={{ color: '#A78BFA' }}>Pay</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleAnchor(e, l.href)}
                  className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-md transition-colors duration-150"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#pp-demo" onClick={(e) => handleAnchor(e, '#pp-demo')} className="text-sm text-zinc-400 hover:text-white transition-colors">
              Watch Demo
            </a>
            <motion.a
              href="https://apps.shopify.com/partialpay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
            >
              Install Free
              <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              background: 'rgba(9,9,11,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-1 mb-4" role="list">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleAnchor(e, l.href)}
                      className="block px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.shopify.com/partialpay"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
              >
                Install Free on Shopify
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
