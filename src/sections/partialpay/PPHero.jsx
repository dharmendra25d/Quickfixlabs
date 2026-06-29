import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, ShieldCheck, Mail, Package, Zap, Clock } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const float = (offset = 0) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3.5 + offset, repeat: Infinity, ease: 'easeInOut', delay: offset * 0.5 },
  },
})

function PaymentCard({ icon: Icon, label, amount, sub, color, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(18,18,22,0.92)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        borderRadius: 12,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        zIndex: 10,
        ...style,
      }}
    >
      <span
        style={{
          width: 32, height: 32, borderRadius: 8,
          background: color + '20',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={15} style={{ color }} />
      </span>
      <div>
        <p style={{ color: '#fff', fontSize: 12, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{label}</p>
        <p style={{ color, fontSize: 11, margin: 0, lineHeight: 1.3 }}>{amount}</p>
        {sub && <p style={{ color: '#71717A', fontSize: 10, margin: 0, lineHeight: 1.3 }}>{sub}</p>}
      </div>
    </motion.div>
  )
}

function MockDashboard() {
  const shouldReduce = useReducedMotion()

  return (
    <div className="relative" style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>

      {/* Floating notification: deposit received */}
      <motion.div {...(shouldReduce ? {} : float(0))}>
        <PaymentCard
          icon={ShieldCheck}
          label="Deposit Secured"
          amount="₹ 10,000 received"
          sub="Order #PP-4521"
          color="#10B981"
          delay={0.9}
          style={{ top: -18, right: -16 }}
        />
      </motion.div>

      {/* Floating notification: invoice sent */}
      <motion.div {...(shouldReduce ? {} : float(0.8))}>
        <PaymentCard
          icon={Mail}
          label="Invoice Sent"
          amount="₹ 15,000 due"
          sub="Due in 7 days"
          color="#A78BFA"
          delay={1.2}
          style={{ bottom: -20, left: -24 }}
        />
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'rgba(18,18,22,0.85)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(24px)',
          borderRadius: 20,
          padding: '24px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Card glow */}
        <div
          style={{
            position: 'absolute', top: -60, right: -60, width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              }}
            >
              <Zap size={14} className="text-white" />
            </span>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>PartialPay</span>
          </div>
          <span
            style={{
              fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              color: '#10B981', background: 'rgba(16,185,129,0.12)', padding: '3px 8px', borderRadius: 20,
            }}
          >
            Active
          </span>
        </div>

        {/* Order details */}
        <div style={{ marginBottom: 18 }}>
          <p style={{ color: '#71717A', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 3px' }}>Order #PP-4521</p>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: 15, margin: '0 0 2px' }}>Luxury Sectional Sofa</p>
          <p style={{ color: '#fff', fontWeight: 800, fontSize: 24, margin: 0, letterSpacing: '-0.02em' }}>₹ 25,000</p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: '#A1A1AA', fontSize: 11 }}>Payment Progress</span>
            <span style={{ color: '#A78BFA', fontSize: 11, fontWeight: 600 }}>40% collected</span>
          </div>
          <div
            style={{
              height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 99, overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '40%' }}
              transition={{ duration: 1.8, delay: 1, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #7C3AED, #6366F1)',
                borderRadius: 99,
              }}
            />
          </div>
        </div>

        {/* Payment rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 12px', borderRadius: 10,
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={14} style={{ color: '#10B981', flexShrink: 0 }} />
              <span style={{ color: '#E4E4E7', fontSize: 13 }}>Deposit</span>
            </div>
            <span style={{ color: '#10B981', fontSize: 13, fontWeight: 600 }}>₹10,000 paid</span>
          </div>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 12px', borderRadius: 10,
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Clock size={14} style={{ color: '#F59E0B', flexShrink: 0 }} />
              <span style={{ color: '#E4E4E7', fontSize: 13 }}>Balance</span>
            </div>
            <span style={{ color: '#F59E0B', fontSize: 13, fontWeight: 600 }}>₹15,000 due Feb 28</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            style={{
              flex: 1, background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff',
              border: 'none', borderRadius: 8, padding: '9px 0', fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Send Invoice
          </button>
          <button
            style={{
              flex: 1, background: 'rgba(255,255,255,0.06)', color: '#E4E4E7',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '9px 0', fontSize: 12, fontWeight: 500, cursor: 'pointer',
            }}
          >
            View Order
          </button>
        </div>
      </motion.div>

      {/* Shipping notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', bottom: 80, right: -20,
          background: 'rgba(18,18,22,0.92)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: 10, padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          zIndex: 10,
        }}
      >
        <Package size={14} style={{ color: '#38BDF8' }} />
        <span style={{ color: '#fff', fontSize: 11, fontWeight: 500 }}>Order shipped 🎉</span>
      </motion.div>
    </div>
  )
}

const stats = [
  { value: '2,400+', label: 'Shopify stores' },
  { value: '₹12M+', label: 'Deposits collected' },
  { value: '4.9★', label: 'App Store rating' },
  { value: '99.9%', label: 'Uptime' },
]

export default function PPHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
      style={{ background: '#09090B' }}
      aria-label="Hero"
    >
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500, borderRadius: '50%', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  color: '#A78BFA',
                }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#A78BFA', display: 'inline-block' }}
                />
                Now live on Shopify App Store
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Accept{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Deposits.
              </span>
              <br />
              Split{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #818CF8, #6366F1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Payments.
              </span>
              <br />
              <span className="text-white">Never Miss a Sale.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg"
            >
              PartialPay lets your customers pay deposits, split orders into installments, and complete balance payments — all inside{' '}
              <span className="text-zinc-300 font-medium">native Shopify Checkout.</span>
              {' '}No redirects. No friction. More conversions.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3 mb-12">
              <motion.a
                href="https://apps.shopify.com/partialpay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.35)',
                }}
              >
                Install Free on Shopify
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#pp-demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-zinc-300 hover:text-white transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#pp-demo')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap items-center gap-5"
            >
              {[
                'Free to install',
                'No subscription lock-in',
                'Works with all Shopify plans',
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-zinc-500">
                  <CheckCircle size={14} style={{ color: '#10B981' }} />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
            style={{ paddingTop: 30, paddingBottom: 30 }}
          >
            <MockDashboard />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <p
                  className="text-3xl font-extrabold text-white mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {value}
                </p>
                <p className="text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sticky CTA bar — appears after scrolling */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2 }}
        className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="pointer-events-auto hidden md:flex items-center gap-4 px-6 py-3 rounded-2xl"
          style={{
            background: 'rgba(18,18,22,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#F59E0B" stroke="none" />
            ))}
          </div>
          <span className="text-zinc-400 text-sm">Rated 4.9 by 2,400+ merchants</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
          <a
            href="https://apps.shopify.com/partialpay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
          >
            Install Free
            <ArrowRight size={13} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
