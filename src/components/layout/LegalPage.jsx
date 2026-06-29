import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../common/Container'

export default function LegalPage({ data }) {
  const { title, lastUpdated, intro, sections } = data

  return (
    <div className="bg-white min-h-screen">
      {/* Header band */}
      <div className="bg-primary pt-28 pb-14">
        <Container narrow>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-6 focus-visible:outline-none focus-visible:underline"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
        </Container>
      </div>

      {/* Body */}
      <Container narrow>
        <div className="py-14">
          {/* Intro */}
          <p className="text-base text-slate-600 leading-relaxed mb-12 border-l-4 border-secondary pl-5">
            {intro}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-primary mb-5 pb-3 border-b border-slate-100">
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subheading && (
                        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-1.5">
                          {block.subheading}
                        </h3>
                      )}
                      <p className="text-sm text-slate-600 leading-relaxed">{block.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-muted">
              Questions? Email us at{' '}
              <a href="mailto:hello@quickfixlabs.com" className="text-secondary hover:underline">
                hello@quickfixlabs.com
              </a>
            </p>
            <div className="flex gap-5 text-xs">
              <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>
              <Link to="/refund-policy" className="text-secondary hover:underline">Refund Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
