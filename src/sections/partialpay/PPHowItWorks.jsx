import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, ShieldCheck, Package, Mail, CreditCard, Truck } from 'lucide-react'

const steps = [
  {
    id: '01',
    icon: ShoppingCart,
    color: '#818CF8',
    title: 'Customer Adds to Cart',
    description: 'A customer finds your high-value product and proceeds to checkout — PartialPay is already waiting.',
  },
  {
    id: '02',
    icon: ShieldCheck,
    color: '#10B981',
    title: 'Deposit Collected',
    description: 'The customer pays a small deposit. The order is confirmed instantly and inventory is locked.',
  },
  {
    id: '03',
    icon: Package,
    color: '#38BDF8',
    title: 'Order Reserved',
    description: 'Customer receives an order confirmation with a clear payment schedule and all due dates.',
  },
  {
    id: '04',
    icon: Mail,
    color: '#F59E0B',
    title: 'Invoice Sent Automatically',
    description: 'When the due date approaches, PartialPay emails a branded invoice with a secure pay-now link.',
  },
  {
    id: '05',
    icon: CreditCard,
    color: '#A78BFA',
    title: 'Balance Paid',
    description: 'Customer pays the remaining balance through the secure link. No login required.',
  },
  {
    id: '06',
    icon: Truck,
    color: '#34D399',
    title: 'Ship & Delight',
    description: 'Full payment confirmed. Trigger fulfillment. Your customer gets their order — and you keep 100% of the revenue.',
  },
]

export default function PPHowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-how-it-works"
      className="py-24 md:py-32"
      style={{ background: '#09090B' }}
      aria-label="How it works"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#A78BFA' }}
          >
            <Package size={14} />
            The complete journey
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            Six steps from{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              cart to shipped.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Every step is handled automatically. You set the rules once. PartialPay does the rest.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: 24,
              left: '8.33%',
              right: '8.33%',
              height: 2,
              background: 'linear-gradient(90deg, rgba(124,58,237,0.2) 0%, rgba(99,102,241,0.2) 100%)',
              transformOrigin: 'left center',
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: s.color + '15',
                      border: `2px solid ${s.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 16, position: 'relative', zIndex: 1,
                      boxShadow: `0 0 20px ${s.color}30`,
                    }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>

                  {/* Step number */}
                  <span
                    style={{
                      fontSize: 11, fontWeight: 800, color: s.color,
                      letterSpacing: '0.06em', marginBottom: 6,
                    }}
                  >
                    {s.id}
                  </span>

                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 6, lineHeight: 1.4 }}>
                    {s.title}
                  </h3>
                  <p style={{ color: '#71717A', fontSize: 12, lineHeight: 1.6 }}>{s.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute', top: 0, bottom: 0, left: 22,
              width: 2,
              background: 'linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(99,102,241,0.05))',
              zIndex: 0,
            }}
          />

          <div className="space-y-8 relative">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', gap: 16, position: 'relative' }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                      background: s.color + '15',
                      border: `2px solid ${s.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', zIndex: 1,
                    }}
                  >
                    <Icon size={18} style={{ color: s.color }} />
                  </div>

                  <div style={{ paddingTop: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: s.color, letterSpacing: '0.08em', display: 'block', marginBottom: 4 }}>
                      STEP {s.id}
                    </span>
                    <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ color: '#71717A', fontSize: 14, lineHeight: 1.6 }}>{s.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: 64, padding: '32px', borderRadius: 20,
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.15)',
            textAlign: 'center',
          }}
        >
          <p className="text-white font-bold text-xl mb-2">Ready to set this up?</p>
          <p className="text-zinc-400 text-sm mb-6">The entire flow takes under 5 minutes to configure. No developer needed.</p>
          <motion.a
            href="#pp-pricing"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pp-pricing')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              color: '#fff', padding: '12px 28px', borderRadius: 10,
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
              boxShadow: '0 0 30px rgba(124,58,237,0.3)',
            }}
          >
            Start for Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
