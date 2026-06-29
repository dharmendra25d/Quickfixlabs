import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ShoppingCart, ShieldCheck, Package, Mail, CreditCard, Truck,
  CheckCircle, Clock, ChevronRight,
} from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: ShoppingCart,
    color: '#818CF8',
    title: 'Customer Checks Out',
    description: 'Customer adds a high-value item to cart and proceeds to checkout. PartialPay intercepts and presents the deposit option seamlessly.',
    mockTitle: 'Shopify Checkout',
    mockContent: 'checkout',
  },
  {
    id: 2,
    icon: ShieldCheck,
    color: '#10B981',
    title: 'Deposit Collected',
    description: 'Customer pays only the deposit amount you\'ve defined — fixed or percentage. The order is instantly confirmed and inventory reserved.',
    mockTitle: 'Deposit Confirmed',
    mockContent: 'deposit',
  },
  {
    id: 3,
    icon: Package,
    color: '#38BDF8',
    title: 'Order Reserved',
    description: 'Inventory is automatically locked. Your customer receives an order confirmation with a clear payment schedule and due dates.',
    mockTitle: 'Order Reserved',
    mockContent: 'reserved',
  },
  {
    id: 4,
    icon: Mail,
    color: '#F59E0B',
    title: 'Invoice Sent',
    description: 'PartialPay automatically sends a payment invoice when the balance due date approaches. No manual work required on your end.',
    mockTitle: 'Invoice Email',
    mockContent: 'invoice',
  },
  {
    id: 5,
    icon: CreditCard,
    color: '#A78BFA',
    title: 'Balance Paid',
    description: 'The customer clicks the secure payment link in the invoice email and completes the remaining payment in seconds.',
    mockTitle: 'Payment Complete',
    mockContent: 'payment',
  },
  {
    id: 6,
    icon: Truck,
    color: '#34D399',
    title: 'Order Shipped',
    description: 'Full payment collected. Trigger fulfillment immediately. Everyone wins — customer is delighted, you\'ve captured full revenue.',
    mockTitle: 'Shipped 🎉',
    mockContent: 'shipped',
  },
]

function MockCheckout() {
  return (
    <div style={{ fontFamily: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ color: '#A1A1AA', fontSize: 12 }}>Order Total</span>
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>₹ 25,000</span>
      </div>
      <div
        style={{
          border: '2px solid rgba(124,58,237,0.5)', borderRadius: 10, padding: 12, marginBottom: 10,
          background: 'rgba(124,58,237,0.08)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ color: '#A78BFA', fontSize: 12, fontWeight: 600 }}>✦ Pay a deposit now</span>
          <span style={{ color: '#10B981', fontSize: 12, fontWeight: 700 }}>₹ 5,000</span>
        </div>
        <p style={{ color: '#71717A', fontSize: 11, margin: 0 }}>Reserve your order · Balance due in 30 days</p>
      </div>
      <div
        style={{
          border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 12, opacity: 0.5,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#A1A1AA', fontSize: 12 }}>Pay full amount</span>
          <span style={{ color: '#A1A1AA', fontSize: 12, fontWeight: 700 }}>₹ 25,000</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: 14, padding: '10px 0', borderRadius: 8, textAlign: 'center', fontSize: 13, fontWeight: 700,
          background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff',
        }}
      >
        Pay ₹5,000 Deposit
      </motion.div>
    </div>
  )
}

function MockDeposit() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          style={{
            width: 52, height: 52, borderRadius: '50%', background: 'rgba(16,185,129,0.15)',
            border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 10px',
          }}
        >
          <CheckCircle size={24} style={{ color: '#10B981' }} />
        </motion.div>
        <p style={{ color: '#10B981', fontWeight: 700, fontSize: 14, margin: '0 0 2px' }}>Deposit Secured!</p>
        <p style={{ color: '#71717A', fontSize: 11, margin: 0 }}>₹5,000 received · Order #PP-4521</p>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ color: '#A1A1AA', fontSize: 11 }}>Deposit paid</span>
          <span style={{ color: '#10B981', fontSize: 12, fontWeight: 600 }}>₹5,000 ✓</span>
        </div>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden', marginBottom: 10 }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '20%' }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ height: '100%', background: '#10B981', borderRadius: 99 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#71717A', fontSize: 11 }}>Balance remaining</span>
          <span style={{ color: '#F59E0B', fontSize: 12, fontWeight: 600 }}>₹20,000</span>
        </div>
      </div>
    </div>
  )
}

function MockReserved() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: 13 }}>🔒 Order Reserved</span>
        <span style={{ color: '#10B981', fontSize: 11, background: 'rgba(16,185,129,0.1)', padding: '2px 8px', borderRadius: 20 }}>1 unit held</span>
      </div>
      <div style={{ space: 8 }}>
        {[
          { label: 'Luxury Sectional Sofa', sub: '1× unit reserved' },
          { label: 'Due date', sub: 'Balance due Jan 15, 2025' },
          { label: 'Confirmation email', sub: 'Sent to customer@email.com' },
        ].map(({ label, sub }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <CheckCircle size={13} style={{ color: '#10B981', flexShrink: 0 }} />
            <div>
              <p style={{ color: '#E4E4E7', fontSize: 12, fontWeight: 500, margin: 0 }}>{label}</p>
              <p style={{ color: '#71717A', fontSize: 11, margin: 0 }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockInvoice() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Mail size={15} style={{ color: '#F59E0B' }} />
        </div>
        <div>
          <p style={{ color: '#fff', fontSize: 12, fontWeight: 600, margin: 0 }}>Balance Invoice</p>
          <p style={{ color: '#71717A', fontSize: 10, margin: 0 }}>Auto-sent by PartialPay</p>
        </div>
      </div>
      <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, padding: 12, marginBottom: 10 }}>
        <p style={{ color: '#A1A1AA', fontSize: 11, margin: '0 0 6px' }}>Hi Priya,</p>
        <p style={{ color: '#E4E4E7', fontSize: 12, margin: '0 0 10px', lineHeight: 1.5 }}>
          Your balance of <strong style={{ color: '#F59E0B' }}>₹20,000</strong> for Order #PP-4521 is due on Jan 15.
        </p>
        <div style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', borderRadius: 7, padding: '8px 0', textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>
          Pay ₹20,000 Now →
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Clock size={12} style={{ color: '#F59E0B' }} />
        <span style={{ color: '#71717A', fontSize: 11 }}>Auto-reminder in 3 days if unpaid</span>
      </div>
    </div>
  )
}

function MockPayment() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 10px',
          }}
        >
          <CheckCircle size={24} className="text-white" />
        </motion.div>
        <p style={{ color: '#A78BFA', fontWeight: 700, fontSize: 14, margin: '0 0 2px' }}>Payment Complete!</p>
        <p style={{ color: '#71717A', fontSize: 11, margin: 0 }}>₹20,000 received</p>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 12 }}>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden', marginBottom: 10 }}>
          <motion.div
            initial={{ width: '20%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #7C3AED, #4F46E5)', borderRadius: 99 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#10B981', fontSize: 12, fontWeight: 600 }}>Fully paid ✓</span>
          <span style={{ color: '#10B981', fontSize: 12, fontWeight: 700 }}>₹25,000</span>
        </div>
      </div>
    </div>
  )
}

function MockShipped() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <p style={{ color: '#34D399', fontWeight: 700, fontSize: 15, margin: '0 0 2px' }}>Order Shipped!</p>
        <p style={{ color: '#71717A', fontSize: 11, margin: 0 }}>Tracking: DTDC-78923456</p>
      </div>
      <div style={{ space: 6 }}>
        {[
          { label: 'Deposit collected', value: '₹5,000', color: '#10B981' },
          { label: 'Balance collected', value: '₹20,000', color: '#10B981' },
          { label: 'Total revenue', value: '₹25,000', color: '#A78BFA' },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: '#A1A1AA', fontSize: 12 }}>{label}</span>
            <span style={{ color, fontSize: 12, fontWeight: 700 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockMap = {
  checkout: MockCheckout,
  deposit: MockDeposit,
  reserved: MockReserved,
  invoice: MockInvoice,
  payment: MockPayment,
  shipped: MockShipped,
}

export default function PPDemo() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  const step = steps[active]
  const MockComponent = mockMap[step.mockContent]

  return (
    <section
      id="pp-demo"
      className="py-24 md:py-32"
      style={{ background: '#09090B' }}
      aria-label="Product demo"
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
            <CheckCircle size={14} />
            The payment flow
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            From checkout to shipment —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              fully automated.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Click each step to see exactly how PartialPay handles the complete payment lifecycle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Steps list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2"
          >
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="w-full text-left transition-all"
                  style={{
                    background: isActive ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.02)',
                    border: isActive ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '14px 16px',
                    cursor: 'pointer',
                  }}
                  aria-pressed={isActive}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span
                      style={{
                        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                        background: isActive ? s.color + '20' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isActive ? s.color + '40' : 'rgba(255,255,255,0.07)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} style={{ color: isActive ? s.color : '#71717A' }} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span
                          style={{ fontSize: 10, color: isActive ? s.color : '#52525B', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '0.08em' }}
                        >
                          Step {s.id}
                        </span>
                      </div>
                      <p style={{ color: isActive ? '#fff' : '#A1A1AA', fontSize: 14, fontWeight: isActive ? 600 : 400, margin: '2px 0 0' }}>
                        {s.title}
                      </p>
                    </div>
                    <ChevronRight
                      size={16}
                      style={{ color: isActive ? s.color : '#3F3F46', transition: 'all 0.2s', flexShrink: 0 }}
                    />
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ color: '#A1A1AA', fontSize: 13, lineHeight: 1.6, marginTop: 10, paddingLeft: 48 }}
                    >
                      {s.description}
                    </motion.p>
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* Mock UI panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'sticky', top: 100 }}
          >
            <div
              style={{
                background: 'rgba(18,18,22,0.9)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
                  <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />
                ))}
                <span style={{ marginLeft: 8, color: '#52525B', fontSize: 11, fontWeight: 500 }}>
                  PartialPay · {step.mockTitle}
                </span>
              </div>

              {/* Step indicator */}
              <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1, height: 3, borderRadius: 99,
                        background: i <= active ? step.color : 'rgba(255,255,255,0.07)',
                        transition: 'background 0.3s',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Mock content */}
              <div style={{ padding: '20px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <MockComponent />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation arrows */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, padding: '0 4px' }}>
              <button
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                disabled={active === 0}
                style={{
                  color: active === 0 ? '#3F3F46' : '#A1A1AA',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 8, padding: '6px 12px', fontSize: 12, cursor: active === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                ← Previous
              </button>
              <span style={{ color: '#52525B', fontSize: 12 }}>{active + 1} / {steps.length}</span>
              <button
                onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
                disabled={active === steps.length - 1}
                style={{
                  color: active === steps.length - 1 ? '#3F3F46' : '#A78BFA',
                  background: active === steps.length - 1 ? 'rgba(255,255,255,0.03)' : 'rgba(124,58,237,0.1)',
                  border: `1px solid ${active === steps.length - 1 ? 'rgba(255,255,255,0.07)' : 'rgba(124,58,237,0.3)'}`,
                  borderRadius: 8, padding: '6px 12px', fontSize: 12, cursor: active === steps.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500,
                }}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
