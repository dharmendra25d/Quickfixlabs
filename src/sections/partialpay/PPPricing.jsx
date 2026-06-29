import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Zap, ArrowRight, Star } from 'lucide-react'

const INSTALL_URL = 'https://apps.shopify.com/partialpay'

const plans = [
  {
    name: 'Starter',
    price: 9,
    tagline: 'Perfect for getting started',
    color: '#A1A1AA',
    accent: 'rgba(255,255,255,0.025)',
    borderColor: 'rgba(255,255,255,0.07)',
    cta: 'Install Free',
    ctaStyle: {
      background: 'rgba(255,255,255,0.06)',
      color: '#E4E4E7',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    features: [
      'Up to 50 orders',
      'All core features',
    ],
    trial: '7-day free trial',
  },
  {
    name: 'Basic',
    price: 25,
    tagline: 'For growing merchants',
    color: '#A78BFA',
    accent: 'rgba(124,58,237,0.07)',
    borderColor: 'rgba(124,58,237,0.28)',
    cta: 'Start Free Trial',
    ctaStyle: {
      background: 'rgba(124,58,237,0.15)',
      color: '#A78BFA',
      border: '1px solid rgba(124,58,237,0.3)',
    },
    features: [
      'Up to 150 orders',
      'All core features',
      'Priority email support',
    ],
    trial: '7-day free trial',
  },
  {
    name: 'Pro',
    price: 49,
    tagline: 'For scaling stores',
    color: '#A78BFA',
    accent: 'rgba(124,58,237,0.1)',
    borderColor: 'rgba(124,58,237,0.35)',
    badge: 'Most Popular',
    cta: 'Start Free Trial',
    ctaStyle: {
      background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
      color: '#fff',
      boxShadow: '0 0 32px rgba(124,58,237,0.4)',
    },
    features: [
      'Up to 400 orders',
      'All core features',
      'Premium support',
    ],
    trial: '7-day free trial',
  },
  {
    name: 'Premium',
    price: 99,
    tagline: 'For high-volume stores',
    color: '#38BDF8',
    accent: 'rgba(56,189,248,0.05)',
    borderColor: 'rgba(56,189,248,0.18)',
    cta: 'Start Free Trial',
    ctaStyle: {
      background: 'rgba(56,189,248,0.1)',
      color: '#38BDF8',
      border: '1px solid rgba(56,189,248,0.25)',
    },
    features: [
      'Unlimited orders',
      'All core features',
      'Premium support',
    ],
    trial: '7-day free trial',
  },
]

export default function PPPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-pricing"
      className="py-24 md:py-32"
      style={{ background: '#09090B' }}
      aria-label="Pricing"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#A78BFA' }}
          >
            <Zap size={14} />
            Simple pricing
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            Start free.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Scale when ready.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            No setup fees. No hidden charges. 7-day free trial on all plans. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: plan.accent,
                border: `1px solid ${plan.borderColor}`,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <span
                  style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                    color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 14px',
                    borderRadius: '0 0 10px 10px', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}
                >
                  <Star size={9} fill="#fff" stroke="none" />
                  {plan.badge}
                </span>
              )}

              {/* Card body */}
              <div style={{ padding: '28px 24px 0', flex: 1, paddingTop: plan.badge ? 44 : 28 }}>
                {/* Plan name */}
                <p
                  style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: plan.color, marginBottom: 4,
                  }}
                >
                  {plan.name}
                </p>
                <p style={{ color: '#52525B', fontSize: 12, marginBottom: 18 }}>{plan.tagline}</p>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 20 }}>
                  <span style={{ color: '#71717A', fontSize: 18, fontWeight: 600 }}>$</span>
                  <span
                    style={{
                      fontSize: 44, fontWeight: 900, color: '#fff',
                      letterSpacing: '-0.04em', lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: '#52525B', fontSize: 13, marginLeft: 2 }}>/ month</span>
                </div>

                {/* Features */}
                <div style={{ marginBottom: 20 }}>
                  <p
                    style={{
                      color: '#3F3F46', fontSize: 10, fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
                    }}
                  >
                    Features
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                        <CheckCircle size={13} style={{ color: plan.color, flexShrink: 0, marginTop: 1 }} />
                        <span style={{ color: '#A1A1AA', fontSize: 13, lineHeight: 1.45 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer with CTA + trial */}
              <div style={{ padding: '0 24px 24px' }}>
                {/* Trial note */}
                <div
                  style={{
                    padding: '10px 0',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: 14,
                    color: '#52525B',
                    fontSize: 12,
                  }}
                >
                  {plan.trial}
                </div>

                {/* CTA */}
                <motion.a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '11px 0', borderRadius: 10, fontWeight: 700, fontSize: 13,
                    textDecoration: 'none', transition: 'opacity 0.2s',
                    ...plan.ctaStyle,
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-xs text-zinc-600 mt-8"
        >
          All plans include a 7-day free trial. No credit card required to start.
          Installed directly from the{' '}
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#7C3AED', textDecoration: 'none' }}
          >
            Shopify App Store
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
