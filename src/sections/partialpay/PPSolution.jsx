import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Zap, BarChart2, CheckCircle, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: ShieldCheck,
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    label: 'Solves high-value abandonment',
    title: 'Deposit-first checkout that converts',
    description:
      'Let customers reserve high-ticket products with as little as 10% down. Removing the full-payment barrier turns browsers into buyers — without discounting your prices.',
    bullets: [
      'Fixed or % deposits per product',
      'Inventory reserved on deposit',
      'Shopify-native checkout flow',
    ],
  },
  {
    icon: Zap,
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
    label: 'Solves manual follow-ups',
    title: 'Automated balance collection',
    description:
      'PartialPay automatically sends invoice emails, tracks payment deadlines, and retries failed payments — all on autopilot. You focus on fulfillment, not chasing money.',
    bullets: [
      'Auto-timed invoice emails',
      'Payment reminder sequences',
      'One-click secure payment links',
    ],
  },
  {
    icon: BarChart2,
    color: '#38BDF8',
    gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
    label: 'Native Shopify experience',
    title: 'Built for Shopify. Not bolted on.',
    description:
      'PartialPay lives inside your Shopify admin. Orders, customers, payments — all synced. No external dashboards, no custom code, no developer required.',
    bullets: [
      'Works with all Shopify themes',
      'Syncs with Shopify Orders',
      'Zero code installation',
    ],
  },
]

export default function PPSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-solution"
      className="py-24 md:py-32"
      style={{ background: '#0d0d13' }}
      aria-label="Solution"
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
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#10B981' }}
          >
            <CheckCircle size={14} />
            The solution
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            One app.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Total payment flexibility.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            PartialPay solves every payment friction point — before checkout, during checkout, and after.
          </p>
        </motion.div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '28px',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute', top: 0, left: 28, right: 28, height: 2, borderRadius: '0 0 4px 4px',
                    background: s.gradient,
                  }}
                />

                {/* Label tag */}
                <span
                  className="inline-block text-xs font-semibold mb-5 mt-2"
                  style={{ color: s.color, background: s.color + '15', padding: '3px 10px', borderRadius: 20 }}
                >
                  {s.label}
                </span>

                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ background: s.gradient }}
                >
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.description}</p>

                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <CheckCircle size={14} style={{ color: s.color, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="#pp-features"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pp-features')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: '#A78BFA' }}
          >
            Explore all features
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
