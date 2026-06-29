import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Star } from 'lucide-react'

const checks = [
  'Free to install — no credit card needed',
  'Live in under 5 minutes',
  'Works with every Shopify plan',
  'Cancel or downgrade anytime',
]

export default function PPFinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#09090B' }}
      aria-label="Final CTA"
      ref={ref}
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', top: '10%', left: '15%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '10%', right: '15%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              color: '#A78BFA', fontSize: 12, fontWeight: 600,
              padding: '6px 14px', borderRadius: 99,
            }}
          >
            <Zap size={12} />
            Start collecting deposits today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6"
          style={{ letterSpacing: '-0.04em', lineHeight: 1.05 }}
        >
          Stop losing{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #A78BFA, #818CF8, #6366F1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            high-value orders.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Join 2,400+ Shopify merchants who use PartialPay to convert high-intent shoppers into committed buyers — with deposits, split payments, and automated balance collection.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.a
            href="https://apps.shopify.com/partialpay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              color: '#fff', padding: '16px 36px', borderRadius: 14,
              fontWeight: 800, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 0 40px rgba(124,58,237,0.4)',
              transition: 'box-shadow 0.2s',
            }}
          >
            Install Free on Shopify
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#pp-demo"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pp-demo')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A1A1AA', padding: '16px 32px', borderRadius: 14,
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}
          >
            See a Live Demo
          </motion.a>
        </motion.div>

        {/* Trust checks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {checks.map((c) => (
            <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#52525B', fontSize: 13 }}>
              <CheckCircle size={13} style={{ color: '#10B981', flexShrink: 0 }} />
              {c}
            </span>
          ))}
        </motion.div>

        {/* Stars row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" stroke="none" />)}
          </div>
          <span style={{ color: '#52525B', fontSize: 13 }}>4.9 out of 5 · 340+ reviews on Shopify App Store</span>
        </motion.div>
      </div>
    </section>
  )
}
