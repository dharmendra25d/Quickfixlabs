import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, AlertCircle, Clock, XCircle } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    color: '#EF4444',
    bgColor: 'rgba(239,68,68,0.08)',
    borderColor: 'rgba(239,68,68,0.2)',
    stat: '68%',
    statLabel: 'cart abandonment for orders over ₹15,000',
    title: 'High-value orders get abandoned',
    description:
      'Customers want your ₹20,000 sofa or ₹50,000 jewelry piece — but paying it all upfront is a deal-breaker. They leave, and your revenue walks out with them.',
  },
  {
    icon: Clock,
    color: '#F59E0B',
    bgColor: 'rgba(245,158,11,0.08)',
    borderColor: 'rgba(245,158,11,0.2)',
    stat: '3 hrs/day',
    statLabel: 'wasted chasing manual payment reminders',
    title: 'Balance collection is a manual nightmare',
    description:
      'WhatsApp messages, follow-up emails, awkward calls — tracking who paid what and when is exhausting. One missed payment tanks your cash flow and damages the customer relationship.',
  },
  {
    icon: AlertCircle,
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.2)',
    stat: '0',
    statLabel: 'native deposit solutions in Shopify by default',
    title: 'Shopify has no built-in deposit system',
    description:
      'Pre-orders, layaway, installments — none of it comes out of the box. You\'re forced to cobble together workarounds that break on mobile, confuse customers, and aren\'t Shopify-native.',
  },
]

export default function PPProblem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-problem"
      className="py-24 md:py-32"
      style={{ background: 'linear-gradient(to bottom, #09090B, #0d0d13)' }}
      aria-label="Problem"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#EF4444' }}
          >
            <XCircle size={14} />
            The problem
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            Your customers want to buy.{' '}
            <span className="text-zinc-500">The checkout is stopping them.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            High-ticket products deserve a payment experience designed for them. The default Shopify checkout
            demands full payment upfront — and that single friction point is costing you real money.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: p.bgColor,
                  border: `1px solid ${p.borderColor}`,
                  borderRadius: 16,
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', top: -30, right: -30,
                    width: 120, height: 120, borderRadius: '50%',
                    background: `radial-gradient(circle, ${p.color}20 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                  style={{ background: p.bgColor, border: `1px solid ${p.borderColor}` }}
                >
                  <Icon size={22} style={{ color: p.color }} />
                </div>

                <div className="mb-4">
                  <span
                    className="block font-extrabold mb-0.5"
                    style={{ color: p.color, fontSize: 32, letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {p.stat}
                  </span>
                  <span className="text-zinc-500 text-xs">{p.statLabel}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-base">
            If any of this sounds familiar,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
              }}
            >
              PartialPay was built for you.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
