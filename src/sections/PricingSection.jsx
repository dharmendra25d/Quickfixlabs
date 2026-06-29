import { motion } from 'framer-motion'
import { pricingData } from '../data/pricing'
import PricingCard from '../components/common/PricingCard'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

export default function PricingSection() {
  const { title, description, plans, addons } = pricingData

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={title}
          description={description}
          center
          className="mb-14"
        />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <PricingCard plan={plan} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-14 bg-white border border-slate-200 rounded-2xl p-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-5">Add-on Services</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div key={addon.label} className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                <p className="text-sm text-slate-600 leading-snug">{addon.label}</p>
                <span className="text-sm font-bold text-secondary whitespace-nowrap">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
