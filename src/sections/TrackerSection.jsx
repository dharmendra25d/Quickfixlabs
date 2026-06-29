import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { trackerData } from '../data/tracker'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

function MockDashboard() {
  const tickets = [
    { id: '#1042', title: 'Cart not updating quantity', status: 'In Progress', priority: 'High', time: '2h ago' },
    { id: '#1041', title: 'Payment gateway timeout', status: 'Testing', priority: 'Critical', time: '5h ago' },
    { id: '#1040', title: 'Product image cropping', status: 'Delivered', priority: 'Normal', time: '1d ago' },
    { id: '#1039', title: 'Discount code not applying', status: 'In Review', priority: 'High', time: '2d ago' },
  ]

  const statusColors = {
    'In Progress': 'bg-yellow-100 text-yellow-700',
    Testing: 'bg-purple-100 text-purple-700',
    Delivered: 'bg-green-100 text-green-700',
    'In Review': 'bg-blue-100 text-blue-700',
  }

  const priorityColors = {
    Critical: 'text-red-500',
    High: 'text-orange-500',
    Normal: 'text-slate-400',
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-semibold text-slate-500">QuickFix Portal -- Active Issues</span>
        <span className="text-xs text-slate-400">4 open</span>
      </div>

      {/* Tickets */}
      <div className="divide-y divide-slate-100">
        {tickets.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <span className="text-xs font-mono text-slate-400 w-12 flex-shrink-0">{t.id}</span>
            <span className="flex-1 text-sm font-medium text-slate-700 truncate">{t.title}</span>
            <span className={`text-xs font-semibold ${priorityColors[t.priority]} hidden sm:block`}>{t.priority}</span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[t.status]}`}>{t.status}</span>
            <span className="text-xs text-slate-400 hidden md:block">{t.time}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500">Avg. resolution: 6.2 hours</span>
        <button className="text-xs font-semibold text-secondary hover:underline">+ New Issue</button>
      </div>
    </div>
  )
}

export default function TrackerSection() {
  const { title, description, features, statuses } = trackerData

  return (
    <section id="tracker" className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <SectionHeading
              eyebrow="Issue Tracking"
              title={title}
              description={description}
              className="mb-10"
            />

            <ul className="space-y-6">
              {features.map((feat, i) => {
                const Icon = Icons[feat.icon] ?? Icons.CheckCircle
                return (
                  <motion.li
                    key={feat.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex gap-4"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-secondary">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold text-primary text-sm">{feat.title}</p>
                      <p className="text-sm text-muted mt-0.5 leading-relaxed">{feat.description}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>

            {/* Status pipeline */}
            <div className="mt-10 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Ticket Status Pipeline</p>
              <div className="flex items-center gap-1 flex-wrap">
                {statuses.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                      <span className="text-xs font-medium text-slate-600">{s.label}</span>
                    </div>
                    {i < statuses.length - 1 && (
                      <Icons.ChevronRight size={12} className="text-slate-300 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: mock dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MockDashboard />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
