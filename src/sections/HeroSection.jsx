import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { heroData } from '../data/hero'
import Button from '../components/common/Button'
import Container from '../components/common/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

export default function HeroSection() {
  const { headline, subheadline, primaryCTA, secondaryCTA, trustIndicators, badges } = heroData

  return (
    <section
      className="relative overflow-hidden bg-primary pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(ellipse, #3B82F6 0%, transparent 70%)' }}
      />

      <Container>
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-blue-200 border border-white/10"
              >
                <CheckCircle size={12} className="text-blue-400" />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {headline.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'text-accent block' : 'block'}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <Button href={primaryCTA.href} size="xl" variant="primary" className="group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
              {primaryCTA.label}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href={secondaryCTA.href} size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
              {secondaryCTA.label}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-12 w-full"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {trustIndicators.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{value}</span>
                <span className="text-sm text-slate-400 mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
