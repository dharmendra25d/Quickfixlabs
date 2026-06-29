import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    color: '#10B981',
    value: 37,
    suffix: '%',
    label: 'increase in high-ticket order completion',
    description: 'Merchants using PartialPay see significantly more completed orders on products priced above ₹10,000.',
  },
  {
    icon: DollarSign,
    color: '#A78BFA',
    value: 2.4,
    suffix: '×',
    label: 'higher average order value',
    description: 'Deposit-first checkout removes price anxiety, letting customers stretch their budget on premium products.',
    isDecimal: true,
  },
  {
    icon: Clock,
    color: '#38BDF8',
    value: 85,
    suffix: '%',
    label: 'reduction in manual payment follow-up',
    description: 'Automated invoices and reminders eliminate the daily grind of chasing customers for outstanding balances.',
  },
  {
    icon: Zap,
    color: '#F59E0B',
    value: 5,
    suffix: ' min',
    label: 'average setup time per product',
    description: 'From install to your first deposit-enabled product live in the store. No developer. No waiting.',
  },
]

function AnimatedNumber({ target, suffix, isDecimal, isInView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const start = performance.now()
    const startVal = 0

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const val = startVal + (target - startVal) * eased
      setDisplay(isDecimal ? Math.round(val * 10) / 10 : Math.round(val))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, isDecimal])

  return (
    <span>
      {isDecimal ? display.toFixed(1) : display}
      {suffix}
    </span>
  )
}

export default function PPBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-benefits"
      className="py-24 md:py-32"
      style={{ background: '#0d0d13' }}
      aria-label="Benefits"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            The numbers{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              speak for themselves.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Real results from real Shopify merchants using PartialPay on high-value product categories.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', top: -40, right: -40, width: 100, height: 100,
                    borderRadius: '50%', pointerEvents: 'none',
                    background: `radial-gradient(circle, ${s.color}20 0%, transparent 70%)`,
                  }}
                />

                <div
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: s.color + '15',
                    border: `1px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>

                <div
                  style={{
                    fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em',
                    color: '#fff', lineHeight: 1, marginBottom: 8,
                    background: `linear-gradient(135deg, #fff 0%, ${s.color} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedNumber
                    target={s.value}
                    suffix={s.suffix}
                    isDecimal={s.isDecimal}
                    isInView={isInView}
                  />
                </div>

                <p style={{ color: '#E4E4E7', fontSize: 13, fontWeight: 600, marginBottom: 8, lineHeight: 1.4 }}>
                  {s.label}
                </p>
                <p style={{ color: '#71717A', fontSize: 12, lineHeight: 1.6 }}>{s.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center text-xs text-zinc-600 mt-8"
        >
          * Based on aggregate data from PartialPay merchants with 50+ orders/month, Q3 2024.
        </motion.p>
      </div>
    </section>
  )
}
