import { Link } from 'react-router-dom'
import { CreditCard } from 'lucide-react'

const cols = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#pp-features' },
      { label: 'How It Works', href: '#pp-how-it-works' },
      { label: 'Pricing', href: '#pp-pricing' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Use Cases',
    links: [
      { label: 'Furniture Stores', href: '#pp-use-cases' },
      { label: 'Jewelry & Luxury', href: '#pp-use-cases' },
      { label: 'Custom Products', href: '#pp-use-cases' },
      { label: 'B2B Orders', href: '#pp-use-cases' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
]

// Inline SVG social icons (lucide-react v1.x removed platform icons)
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const social = [
  { Icon: TwitterIcon, label: 'Twitter / X', href: '#' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { Icon: GithubIcon, label: 'GitHub', href: '#' },
]

export default function PPFooter() {
  return (
    <footer
      style={{
        background: '#09090B',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: brand + cols */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/partialpay" className="flex items-center gap-2 mb-4">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
              >
                <CreditCard size={16} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="text-white font-bold text-base tracking-tight">
                Partial<span style={{ color: '#A78BFA' }}>Pay</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Flexible payment collection for modern Shopify merchants.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {social.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-white text-sm font-semibold mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') ? (
                      <Link
                        to={l.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p>© {new Date().getFullYear()} PartialPay by QuickFix Labs. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              style={{ boxShadow: '0 0 6px #10B981' }}
            />
            <span className="text-zinc-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
