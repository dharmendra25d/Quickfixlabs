import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cases = [
  {
    emoji: '🛋️',
    industry: 'Furniture Stores',
    color: '#F59E0B',
    headline: 'Reserve bespoke pieces with a 30% deposit',
    description: 'Custom sofas, dining sets, and cabinets often take weeks to manufacture. Collect deposits upfront, start production confidently, and collect the balance on delivery.',
    tags: ['Custom orders', 'Long lead times', 'High-value'],
  },
  {
    emoji: '💍',
    industry: 'Jewelry & Luxury',
    color: '#F472B6',
    headline: 'Layaway for high-ticket jewelry',
    description: 'Offer traditional layaway digitally. Customers pay in installments for engagement rings, custom pieces, or luxury watches — you hold the item until fully paid.',
    tags: ['Layaway', 'Custom pieces', 'Luxury'],
  },
  {
    emoji: '📱',
    industry: 'Electronics & Tech',
    color: '#38BDF8',
    headline: 'Launch pre-orders with guaranteed demand',
    description: 'Accept pre-order deposits before stock arrives. Validate demand, fund your purchase order, and ship when ready — customers stay committed because they\'ve paid.',
    tags: ['Pre-orders', 'Stock funding', 'Launch'],
  },
  {
    emoji: '🎨',
    industry: 'Custom Products',
    color: '#A78BFA',
    headline: 'Fund production before you build',
    description: 'Bespoke clothing, personalized gifts, commissioned art — collect a deposit when the order is placed and the balance when the product is ready.',
    tags: ['Made-to-order', 'Production funding', 'POD'],
  },
  {
    emoji: '🏢',
    industry: 'B2B & Wholesale',
    color: '#10B981',
    headline: 'Net-30 style payment terms — built in',
    description: 'Corporate clients expect flexible payment terms. PartialPay lets you accept large bulk orders with a deposit now and invoice the balance at delivery or 30 days.',
    tags: ['Bulk orders', 'Payment terms', 'B2B'],
  },
  {
    emoji: '🖼️',
    industry: 'Art & Décor',
    color: '#FB923C',
    headline: 'Commission pieces with confidence',
    description: 'Artists and designers can take commissions online with a deposit to start and the rest on completion. Protect your time. Get paid for your work.',
    tags: ['Commissions', 'Creative work', 'Décor'],
  },
  {
    emoji: '👗',
    industry: 'Fashion & Apparel',
    color: '#818CF8',
    headline: 'Seasonal collections with pre-order deposits',
    description: 'Launch next-season collections early. Accept pre-order deposits to gauge demand and fund production before the collection ships.',
    tags: ['Pre-season', 'Demand testing', 'Fashion'],
  },
  {
    emoji: '🔑',
    industry: 'Experiences & Events',
    color: '#34D399',
    headline: 'Booking deposits for premium experiences',
    description: 'Retreat organizers, event planners, and experience sellers can collect booking deposits and final payments through Shopify without any custom development.',
    tags: ['Bookings', 'Events', 'Services'],
  },
]

export default function PPUseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-use-cases"
      className="py-24 md:py-32"
      style={{ background: '#09090B' }}
      aria-label="Industry use cases"
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
            Built for your industry
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            If you sell{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              high-value products,
            </span>{' '}
            this is for you.
          </h2>
          <p className="text-zinc-400 text-lg">
            PartialPay is used by merchants across 14 industries where full upfront payment creates unnecessary friction.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '22px',
                cursor: 'default',
              }}
            >
              {/* Emoji + industry */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 28 }}>{c.emoji}</span>
                <span
                  style={{
                    fontSize: 11, fontWeight: 700, color: c.color,
                    background: c.color + '15', padding: '3px 9px', borderRadius: 20,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}
                >
                  {c.industry}
                </span>
              </div>

              <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 8, lineHeight: 1.4 }}>
                {c.headline}
              </h3>
              <p style={{ color: '#71717A', fontSize: 12, lineHeight: 1.6, marginBottom: 14 }}>
                {c.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10, fontWeight: 500, color: '#52525B',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      padding: '2px 8px', borderRadius: 20,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
