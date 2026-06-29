import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  CreditCard, Layers, Mail, Lock, BarChart2, Settings,
  Zap, Globe, CheckCircle,
} from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    color: '#A78BFA',
    gradient: 'linear-gradient(135deg, #7C3AED22, #4F46E522)',
    title: 'Flexible Deposit Rules',
    description: 'Set deposits as a fixed amount or percentage of order total. Different rules for different products, collections, or customer tags.',
    badge: 'Core',
  },
  {
    icon: Lock,
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #05966922, #10B98122)',
    title: 'Inventory Reservation',
    description: 'Automatically reserve stock when a deposit is collected. Prevent overselling and keep your customers confident their order is secure.',
    badge: 'Core',
  },
  {
    icon: Mail,
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #D9770622, #F59E0B22)',
    title: 'Automated Invoice Engine',
    description: 'Custom-branded invoice emails sent automatically at the right time. Include secure pay-now links and adjust timing to suit your business.',
    badge: 'Automation',
  },
  {
    icon: Layers,
    color: '#38BDF8',
    gradient: 'linear-gradient(135deg, #0284C722, #38BDF822)',
    title: 'Split Payment Schedules',
    description: 'Create multi-installment plans with custom due dates. Weekly, bi-weekly, monthly — you design the schedule, PartialPay handles collection.',
    badge: 'Pro',
  },
  {
    icon: BarChart2,
    color: '#F472B6',
    gradient: 'linear-gradient(135deg, #BE185D22, #F472B622)',
    title: 'Real-Time Dashboard',
    description: 'See every partial payment, pending balance, upcoming due date, and order status at a glance. Built into your Shopify admin.',
    badge: 'Core',
  },
  {
    icon: Settings,
    color: '#34D399',
    gradient: 'linear-gradient(135deg, #05966922, #34D39922)',
    title: 'No-Code Setup',
    description: 'Install, configure deposit rules, and go live in under 5 minutes. Zero coding. Zero developers. Just your products and a smarter checkout.',
    badge: 'Core',
  },
  {
    icon: Zap,
    color: '#818CF8',
    gradient: 'linear-gradient(135deg, #4338CA22, #818CF822)',
    title: 'Shopify Sync',
    description: 'Orders, customers, products — all synced with Shopify. No double-entry. Payments trigger order status updates automatically.',
    badge: 'Core',
  },
  {
    icon: Globe,
    color: '#FB923C',
    gradient: 'linear-gradient(135deg, #C2410C22, #FB923C22)',
    title: 'Multi-Currency Support',
    description: 'Accept deposits in any currency your Shopify store supports. PartialPay handles currency display and conversion tracking.',
    badge: 'Pro',
  },
]

const badgeColors = {
  Core: { bg: 'rgba(167,139,250,0.1)', color: '#A78BFA', border: 'rgba(167,139,250,0.2)' },
  Automation: { bg: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: 'rgba(245,158,11,0.2)' },
  Pro: { bg: 'rgba(56,189,248,0.1)', color: '#38BDF8', border: 'rgba(56,189,248,0.2)' },
}

export default function PPFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-features"
      className="py-24 md:py-32"
      style={{ background: '#0d0d13' }}
      aria-label="Features"
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
            style={{ color: '#A78BFA' }}
          >
            <Zap size={14} />
            Everything you need
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            Packed with features that{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              actually matter.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Every feature in PartialPay is designed around one goal: getting you paid, with less friction, for every high-value order.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            const badge = badgeColors[f.badge]
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '24px',
                  cursor: 'default',
                  transition: 'border-color 0.2s',
                }}
                className="group"
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                    background: f.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${f.color}25`,
                  }}
                >
                  <Icon size={20} style={{ color: f.color }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 14, margin: 0 }}>{f.title}</h3>
                  <span
                    style={{
                      fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20,
                      background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`,
                      flexShrink: 0, marginLeft: 6,
                    }}
                  >
                    {f.badge}
                  </span>
                </div>

                <p style={{ color: '#71717A', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{f.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
        >
          {[
            'Works with all Shopify themes',
            'Mobile optimized checkout',
            'PCI DSS compliant',
            'GDPR ready',
            '24/7 email support',
          ].map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle size={13} style={{ color: '#10B981' }} />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
