import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] ?? Icons.Settings

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-secondary hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex flex-col"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-secondary mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
        <Icon size={20} strokeWidth={1.75} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{service.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* Link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:underline"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more <ArrowRight size={14} />
      </a>
    </motion.div>
  )
}
