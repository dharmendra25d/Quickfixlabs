import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { navLinks, brand } from '../../data/nav'
import Button from '../common/Button'
import Container from '../common/Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden',
    scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      : 'bg-transparent',
  ].join(' ')

  const brandTextClass = scrolled ? 'text-primary' : 'text-white'

  return (
    <header className={navClass} role="banner">
      <Container>
        <nav
          className="flex items-center justify-between gap-3 h-16 sm:h-18 min-w-0"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
            aria-label={`${brand.name} home`}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-white group-hover:bg-blue-700 transition-colors">
              <Zap size={16} strokeWidth={2.5} />
            </span>
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${brandTextClass}`}>
              {brand.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.isProduct ? null : (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium text-muted hover:text-primary rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="px-3 py-2 text-sm font-medium text-muted hover:text-primary rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/partialpay"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, #7C3AED18, #4F46E518)',
                border: '1px solid #7C3AED44',
                color: '#7C3AED',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
              PartialPay App
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Sign in
            </a>
            <Button href="#contact" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex-shrink-0 p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${scrolled ? 'text-muted hover:text-primary hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden overflow-x-hidden bg-white border-t border-slate-100 shadow-lg">
          <Container>
            <ul className="py-4 space-y-1" role="list">
              {navLinks.filter((l) => !l.isProduct).map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="pb-4 pt-1 border-t border-slate-100 space-y-2">
              <Link
                to="/partialpay"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mt-3 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED18, #4F46E518)',
                  border: '1px solid #7C3AED44',
                  color: '#7C3AED',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
                PartialPay App
              </Link>
              <Button href="#contact" size="md" className="w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
