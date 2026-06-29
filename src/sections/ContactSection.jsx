import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { contactData } from '../data/contact'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-primary placeholder:text-slate-400 bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-blue-100 transition-all'

const errorInputClass = 'border-red-300 focus:border-red-400 focus:ring-red-100'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { title, description, info } = contactData

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const res = await fetch('https://formspree.io/f/xrewlbrr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to send')
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title={title}
              description={description}
              className="mb-10 [&_h2]:text-white [&_p]:text-slate-400 [&_p:first-child]:text-blue-400"
            />

            <ul className="space-y-5">
              {info.map(({ icon, label, value }) => {
                const Icon = Icons[icon] ?? Icons.Mail
                return (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-blue-300">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
                      <p className="text-sm font-medium text-slate-200">{value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Message Received!</h3>
                <p className="text-sm text-muted mb-6">
                  We'll review your request and get back to you within one business day.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" error={errors.name?.message}>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Alex Johnson"
                      className={`${inputClass} ${errors.name ? errorInputClass : ''}`}
                    />
                  </Field>
                  <Field label="Email Address *" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                      placeholder="alex@mystore.com"
                      className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
                    />
                  </Field>
                </div>

                <Field label="Company / Store Name" error={errors.company?.message}>
                  <input
                    {...register('company')}
                    placeholder="My Brand Co."
                    className={inputClass}
                  />
                </Field>

                <Field label="Shopify Store URL *" error={errors.storeUrl?.message}>
                  <input
                    {...register('storeUrl', {
                      required: 'Store URL is required',
                      pattern: {
                        value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
                        message: 'Enter a valid URL',
                      },
                    })}
                    placeholder="https://mystore.myshopify.com"
                    className={`${inputClass} ${errors.storeUrl ? errorInputClass : ''}`}
                  />
                </Field>

                <Field label="Message *" error={errors.message?.message}>
                  <textarea
                    {...register('message', {
                      required: 'Please describe what you need',
                      minLength: { value: 20, message: 'Minimum 20 characters' },
                    })}
                    rows={4}
                    placeholder="Describe what you need help with -- bugs, customizations, performance issues..."
                    className={`${inputClass} resize-none ${errors.message ? errorInputClass : ''}`}
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>

                <p className="text-xs text-center text-muted">
                  By submitting you agree to our{' '}
                  <a href="#" className="text-secondary hover:underline">Privacy Policy</a>.
                  No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
