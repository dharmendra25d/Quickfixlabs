import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart2, TrendingUp, Package, CreditCard,
  CheckCircle, Clock, AlertCircle, Zap, ArrowUpRight,
} from 'lucide-react'

const orders = [
  { id: '#PP-4521', product: 'Luxury Sectional Sofa', customer: 'Priya M.', total: 25000, deposit: 10000, status: 'balance_due', dueDate: 'Feb 28' },
  { id: '#PP-4520', product: 'Custom Diamond Ring', customer: 'Ravi K.', total: 85000, deposit: 25500, status: 'completed' },
  { id: '#PP-4519', product: 'Gaming PC Setup', customer: 'Ananya S.', total: 45000, deposit: 9000, status: 'awaiting_deposit' },
  { id: '#PP-4518', product: 'Teak Dining Set', customer: 'Mohit T.', total: 32000, deposit: 9600, status: 'completed' },
  { id: '#PP-4517', product: 'Pearl Necklace Set', customer: 'Sita D.', total: 18000, deposit: 5400, status: 'balance_due', dueDate: 'Mar 5' },
]

const statusConfig = {
  completed: { label: 'Paid in Full', color: '#10B981', bg: 'rgba(16,185,129,0.1)', icon: CheckCircle },
  balance_due: { label: 'Balance Due', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', icon: Clock },
  awaiting_deposit: { label: 'Awaiting Deposit', color: '#38BDF8', bg: 'rgba(56,189,248,0.1)', icon: AlertCircle },
}

const kpis = [
  { label: 'Total Deposits', value: '₹2.4L', change: '+18%', icon: CreditCard, color: '#A78BFA' },
  { label: 'Pending Balances', value: '₹87K', change: '-5%', icon: Clock, color: '#F59E0B' },
  { label: 'Orders Active', value: '47', change: '+23%', icon: Package, color: '#10B981' },
  { label: 'Conversion Rate', value: '64%', change: '+12%', icon: TrendingUp, color: '#38BDF8' },
]

function fmt(n) {
  return '₹' + n.toLocaleString('en-IN')
}

export default function PPDashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section
      id="pp-dashboard"
      className="py-24 md:py-32"
      style={{ background: '#0d0d13' }}
      aria-label="Dashboard showcase"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#A78BFA' }}
          >
            <BarChart2 size={14} />
            Your command centre
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            Every payment, every order —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              one clean view.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The PartialPay dashboard lives inside your Shopify admin. Track deposits, manage balances, and trigger invoices — without leaving the tools you already use.
          </p>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'rgba(14,14,18,0.95)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          }}
        >
          {/* Dashboard chrome */}
          <div
            style={{
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />
            ))}
            <div
              style={{
                marginLeft: 12, flex: 1, maxWidth: 320, height: 22, borderRadius: 6,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', paddingLeft: 10, gap: 4,
              }}
            >
              <Zap size={11} style={{ color: '#7C3AED' }} />
              <span style={{ color: '#52525B', fontSize: 11 }}>admin.shopify.com/apps/partialpay</span>
            </div>
          </div>

          {/* Dashboard sidebar + content */}
          <div style={{ display: 'flex', minHeight: 400 }}>
            {/* Sidebar */}
            <div
              style={{
                width: 180, padding: '20px 12px', flexShrink: 0,
                borderRight: '1px solid rgba(255,255,255,0.05)',
              }}
              className="hidden sm:block"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '0 8px' }}>
                <span
                  style={{
                    width: 26, height: 26, borderRadius: 6,
                    background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <CreditCard size={13} className="text-white" />
                </span>
                <span style={{ color: '#E4E4E7', fontWeight: 700, fontSize: 13 }}>PartialPay</span>
              </div>
              {[
                { label: 'Overview', active: true, icon: BarChart2 },
                { label: 'Orders', active: false, icon: Package },
                { label: 'Invoices', active: false, icon: CreditCard },
                { label: 'Settings', active: false, icon: Zap },
              ].map(({ label, active, icon: Icon }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 8px', borderRadius: 8, marginBottom: 2,
                    background: active ? 'rgba(124,58,237,0.12)' : 'transparent',
                    cursor: 'default',
                  }}
                >
                  <Icon size={14} style={{ color: active ? '#A78BFA' : '#52525B' }} />
                  <span style={{ fontSize: 12, color: active ? '#E4E4E7' : '#52525B', fontWeight: active ? 600 : 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: '20px', overflowX: 'auto' }}>
              {/* KPI row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 20 }} className="grid-cols-2 sm:grid-cols-4">
                {kpis.map((k) => {
                  const Icon = k.icon
                  const isPositive = k.change.startsWith('+')
                  return (
                    <div
                      key={k.label}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 10, padding: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ color: '#52525B', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{k.label}</span>
                        <Icon size={13} style={{ color: k.color }} />
                      </div>
                      <p style={{ color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 4px' }}>{k.value}</p>
                      <span style={{ fontSize: 10, color: isPositive ? '#10B981' : '#EF4444', fontWeight: 600 }}>
                        {k.change} this month
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Orders table */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12, overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '10px 14px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#E4E4E7', fontSize: 12, fontWeight: 600 }}>Recent Orders</span>
                  <span style={{ color: '#A78BFA', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4, cursor: 'default' }}>
                    View all <ArrowUpRight size={11} />
                  </span>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {['Order', 'Product', 'Deposit', 'Balance', 'Status'].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: '8px 12px', textAlign: 'left',
                              color: '#52525B', fontSize: 10, fontWeight: 600,
                              textTransform: 'uppercase', letterSpacing: '0.08em',
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o, i) => {
                        const sc = statusConfig[o.status]
                        const StatusIcon = sc.icon
                        const balance = o.total - o.deposit
                        return (
                          <tr
                            key={o.id}
                            style={{
                              borderBottom: i < orders.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                            }}
                          >
                            <td style={{ padding: '10px 12px', color: '#A78BFA', fontSize: 12, fontWeight: 600 }}>{o.id}</td>
                            <td style={{ padding: '10px 12px' }}>
                              <p style={{ color: '#E4E4E7', fontSize: 12, margin: 0 }}>{o.product}</p>
                              <p style={{ color: '#52525B', fontSize: 10, margin: 0 }}>{o.customer}</p>
                            </td>
                            <td style={{ padding: '10px 12px', color: '#10B981', fontSize: 12, fontWeight: 600 }}>{fmt(o.deposit)}</td>
                            <td style={{ padding: '10px 12px', color: '#A1A1AA', fontSize: 12 }}>
                              {fmt(balance)}
                              {o.dueDate && <span style={{ color: '#F59E0B', fontSize: 10, display: 'block' }}>Due {o.dueDate}</span>}
                            </td>
                            <td style={{ padding: '10px 12px' }}>
                              <span
                                style={{
                                  display: 'inline-flex', alignItems: 'center', gap: 4,
                                  fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20,
                                  background: sc.bg, color: sc.color,
                                }}
                              >
                                <StatusIcon size={10} />
                                {sc.label}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
