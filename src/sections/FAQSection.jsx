import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqData } from '../data/faq'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

function AccordionItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-secondary bg-blue-50/40' : 'border-slate-200 bg-white'}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? 'text-secondary' : 'text-primary'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-muted"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-sm text-muted leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { title, description, questions } = faqData

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <Container narrow>
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description={description}
          center
          className="mb-12"
        />

        <div className="space-y-3">
          {questions.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
