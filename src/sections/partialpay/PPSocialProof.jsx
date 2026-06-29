import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Owner, The Sofa Studio',
    quote: 'PartialPay cut our cart abandonment on ₹30k+ sofas by nearly half. Customers love the deposit option.',
    stars: 5,
    industry: 'Furniture',
  },
  {
    name: 'Rohan Kapoor',
    role: 'Founder, Karat Jewelry',
    quote: 'Custom jewelry was always hard to sell online. Now customers pay 30% upfront and the rest on pickup. Perfect.',
    stars: 5,
    industry: 'Jewelry',
  },
  {
    name: 'Sneha Iyer',
    role: 'CEO, TechCart India',
    quote: 'Pre-orders are now our best revenue stream. PartialPay made the whole flow seamless inside Shopify.',
    stars: 5,
    industry: 'Electronics',
  },
]

const marqueeItems = [
  'Furniture Stores', 'Jewelry Brands', 'Electronics Shops', 'Custom Apparel',
  'Luxury Goods', 'Print-on-Demand', 'B2B Wholesale', 'Home Décor',
  'Art Galleries', 'Bespoke Products', 'Pre-Order Launches', 'High-Value DTC',
]

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={12} fill="#F59E0B" stroke="none" />
      ))}
    </div>
  )
}

export default function PPSocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      style={{ background: '#09090B', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      aria-label="Social proof"
    >
      {/* Scrolling marquee */}
      <div
        className="overflow-hidden py-5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium text-zinc-600 flex items-center gap-2 px-3"
            >
              <span
                style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                  display: 'inline-block', flexShrink: 0,
                }}
              />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#F59E0B" stroke="none" />
            ))}
          </div>
          <p className="text-white font-bold text-lg">Rated 4.9 / 5 by 2,400+ Shopify merchants</p>
          <p className="text-zinc-500 text-sm mt-1">Trusted across 14 countries</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <Stars count={t.stars} />
                <Quote size={18} style={{ color: 'rgba(167,139,250,0.4)' }} />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
                <span
                  className="ml-auto text-xs font-medium"
                  style={{
                    background: 'rgba(124,58,237,0.12)',
                    border: '1px solid rgba(124,58,237,0.25)',
                    color: '#A78BFA',
                    padding: '2px 8px',
                    borderRadius: 20,
                  }}
                >
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shopify badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-zinc-400"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span
              style={{
                width: 16, height: 16, background: '#96BF48', borderRadius: 4,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 109 124" fill="white">
                <path d="M74.7 14.8c-.1-.6-.6-1-1.2-1-.5 0-9.8-.2-9.8-.2S57.9 7.8 57.2 7.1c-.7-.7-2.1-.5-2.6-.3-.1 0-.9.3-2.2.7-1.3-3.8-3.6-7.2-7.7-7.2h-.4C43 .1 41.7-.3 40.7.5c-7.3 6-11 15.4-12.2 20.1-3 .9-5.2 1.6-5.5 1.7-1.7.5-1.8.6-2 2.2C20.8 25.7 11 103.8 11 103.8l63.9 12 .1-.3c0-.1-1.1-8.6-2.2-17.5L74.7 14.8zm-22.2-5.6c-1.1.3-2.3.7-3.6 1.1V9.7c0-1.8-.3-3.5-.7-5 1.7.2 3.1 2 4.3 4.5zm-8.1 2.5c-2.3.7-4.9 1.5-7.4 2.3 1.4-5.4 4-10.5 7.7-12.4.4 2.4.4 6.1-.3 10.1zm-4.3-14.6c.7 0 1.3.2 1.8.7-4.2 2-8.1 7.3-9.5 14.5-2.1.7-4.2 1.3-6.1 1.9 2.2-7.7 7.8-17 13.8-17.1z"/>
              </svg>
            </span>
            Shopify App Store Partner
          </span>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-zinc-400"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            GDPR Compliant
          </span>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-zinc-400"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#38BDF8', display: 'inline-block' }} />
            PCI DSS Ready
          </span>
        </motion.div>
      </div>
    </section>
  )
}
