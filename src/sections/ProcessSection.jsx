import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { processData } from '../data/process'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

export default function ProcessSection() {
  const { title, description, steps } = processData

  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title={title}
          description={description}
          center
          className="mb-16"
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-slate-200" aria-hidden="true" />

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = Icons[step.icon] ?? Icons.CheckCircle
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-sm mb-5 group-hover:border-secondary transition-colors">
                    <Icon size={22} className="text-secondary" strokeWidth={1.75} />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">{step.duration}</p>
                  <h3 className="font-bold text-primary text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = Icons[step.icon] ?? Icons.CheckCircle
            const isLast = i === steps.length - 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="flex gap-5"
              >
                {/* Left: circle + line */}
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white border-2 border-secondary shadow-sm relative">
                    <Icon size={18} className="text-secondary" strokeWidth={1.75} />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-slate-200 my-2" />}
                </div>

                {/* Right: content */}
                <div className={`pt-2 ${isLast ? '' : 'pb-8'}`}>
                  <span className="text-xs font-semibold text-secondary">{step.duration}</span>
                  <h3 className="font-bold text-primary mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
