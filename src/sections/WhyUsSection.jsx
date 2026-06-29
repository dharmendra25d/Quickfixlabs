import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { whyUsData } from '../data/whyUs'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

export default function WhyUsSection() {
  const { title, description, values, stats } = whyUsData

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Why QuickFix Labs"
          title={title}
          description={description}
          center
          className="mb-14"
        />

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm"
            >
              <p className="text-4xl font-extrabold text-secondary tracking-tight">{value}</p>
              <p className="text-sm text-muted mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => {
            const Icon = Icons[val.icon] ?? Icons.CheckCircle
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-secondary hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-secondary mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-primary mb-2">{val.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{val.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
