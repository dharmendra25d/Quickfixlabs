import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Does PartialPay work with Shopify\'s native checkout?',
    a: 'Yes — completely. PartialPay integrates directly with Shopify Checkout. Customers see the deposit option on the checkout page itself, with no redirects or third-party flows. It uses standard Shopify payment methods, so it works with everything your store already accepts.',
  },
  {
    q: 'Can I set different deposit rules for different products?',
    a: 'Absolutely. You can configure deposit rules at the product level, collection level, or as a store-wide default. Set a 20% deposit on furniture, a fixed ₹5,000 deposit on custom jewelry, and full payment for everything else — all from one dashboard.',
  },
  {
    q: 'How are balance payments collected from customers?',
    a: 'PartialPay sends an automated invoice email to the customer when the balance due date approaches. The email contains a secure, one-click payment link. Customers pay directly — no account login required. You can also manually trigger invoice sends from the dashboard at any time.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. All new installs get access to Growth plan features for 14 days, completely free. No credit card required to start. After the trial, you can continue on the free Starter plan or upgrade to Growth or Scale.',
  },
  {
    q: 'Does it work with Shopify Plus?',
    a: 'Yes, PartialPay is fully compatible with Shopify Plus stores. On Plus, you can also use Checkout Extensibility to deeply customize how the deposit option is presented during checkout.',
  },
  {
    q: 'Can customers choose their own payment schedule?',
    a: 'You control the payment schedule as the merchant. You define the deposit amount and the balance due date(s). Customers see the schedule you\'ve set. On the Growth and Scale plans, you can offer multiple payment schedule templates for different product categories.',
  },
  {
    q: 'What happens if a customer fails to pay the balance?',
    a: 'PartialPay sends automatic reminder emails before and on the due date. If payment fails, you\'re notified immediately and the order is flagged in your dashboard. You can choose to extend the deadline, send a manual reminder, or cancel the order and release the reserved inventory.',
  },
  {
    q: 'Is my customer\'s payment data secure?',
    a: 'Yes. All payments are processed through Shopify Payments or your existing Shopify-approved payment gateway. PartialPay never stores card details. All data is encrypted in transit and at rest. We are GDPR compliant and follow PCI DSS guidelines.',
  },
]

export default function PPFAQ() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-faq"
      className="py-24 md:py-32"
      style={{ background: '#0d0d13' }}
      aria-label="FAQ"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#A78BFA' }}
            >
              <HelpCircle size={14} />
              Common questions
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Everything you{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                need to know.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Can't find your answer here? Email us at{' '}
              <a
                href="mailto:support@partialpay.io"
                style={{ color: '#A78BFA', textDecoration: 'none' }}
              >
                support@partialpay.io
              </a>{' '}
              — we typically respond within 2 hours.
            </p>

            {/* Contact card */}
            <div
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.15)',
                borderRadius: 16, padding: '20px',
              }}
            >
              <p style={{ color: '#E4E4E7', fontWeight: 600, fontSize: 15, marginBottom: 6 }}>
                Still have questions?
              </p>
              <p style={{ color: '#71717A', fontSize: 13, marginBottom: 14, lineHeight: 1.6 }}>
                Book a 15-minute live demo with our team. We'll walk through your specific use case and show you exactly how to configure PartialPay for your store.
              </p>
              <a
                href="#"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  color: '#A78BFA', fontSize: 13, fontWeight: 600,
                  padding: '9px 18px', borderRadius: 8, textDecoration: 'none',
                }}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>

          {/* Right column — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-2">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div
                    key={i}
                    style={{
                      background: isOpen ? 'rgba(124,58,237,0.06)' : 'rgba(255,255,255,0.025)',
                      border: isOpen ? '1px solid rgba(124,58,237,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 12,
                      overflow: 'hidden',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      style={{
                        width: '100%', textAlign: 'left', padding: '16px 18px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        gap: 12, background: 'none', border: 'none', cursor: 'pointer',
                      }}
                      aria-expanded={isOpen}
                    >
                      <span
                        style={{
                          color: isOpen ? '#E4E4E7' : '#A1A1AA',
                          fontSize: 14, fontWeight: isOpen ? 600 : 400,
                          lineHeight: 1.5, textAlign: 'left',
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                          background: isOpen ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 0.2s',
                        }}
                      >
                        {isOpen
                          ? <Minus size={13} style={{ color: '#A78BFA' }} />
                          : <Plus size={13} style={{ color: '#71717A' }} />
                        }
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            style={{
                              padding: '0 18px 16px',
                              color: '#71717A', fontSize: 13, lineHeight: 1.7,
                            }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
