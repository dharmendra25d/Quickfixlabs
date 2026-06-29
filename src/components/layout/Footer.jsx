import { Link } from 'react-router-dom'
import { Zap, ExternalLink } from 'lucide-react'
import { footerLinks } from '../../data/footer'
import { brand } from '../../data/nav'
import Container from '../common/Container'

const socialLinks = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-slate-400" role="contentinfo">
      <Container>
        <div className="pt-16 pb-8">
          {/* Top grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-700">
            {/* Brand col */}
            <div className="col-span-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
                aria-label={`${brand.name} home`}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-white">
                  <Zap size={16} strokeWidth={2.5} />
                </span>
                <span className="text-lg font-bold text-white tracking-tight">
                  {brand.name}
                </span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                Expert Shopify support and customization for ecommerce brands that need results, not excuses.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
                  {heading}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {year} {brand.name}. All rights reserved.</p>
            <p>Built for Shopify merchants who demand excellence.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
