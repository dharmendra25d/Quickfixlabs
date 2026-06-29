import { Check } from 'lucide-react'
import Button from './Button'

export default function PricingCard({ plan, index }) {
  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border p-7 transition-all duration-300',
        plan.popular
          ? 'border-secondary bg-primary shadow-2xl shadow-blue-900/30 scale-[1.02]'
          : 'border-slate-200 bg-white hover:border-secondary hover:shadow-lg hover:shadow-blue-50',
      ].join(' ')}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-secondary text-white text-xs font-bold tracking-wide shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan header */}
      <div className="mb-6">
        <h3 className={`font-bold text-lg mb-1 ${plan.popular ? 'text-white' : 'text-primary'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-muted'}`}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        {plan.price ? (
          <div className="flex items-end gap-1">
            <span className={`text-5xl font-extrabold tracking-tight ${plan.popular ? 'text-white' : 'text-primary'}`}>
              ${plan.price}
            </span>
            <span className={`mb-2 text-sm ${plan.popular ? 'text-slate-400' : 'text-muted'}`}>/month</span>
          </div>
        ) : (
          <div className="text-3xl font-extrabold text-white">Custom</div>
        )}
        {plan.monthlyHours && (
          <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-300' : 'text-secondary'}`}>
            {plan.monthlyHours} hours included
          </p>
        )}
        {plan.additionalRate && (
          <p className={`text-xs mt-0.5 ${plan.popular ? 'text-slate-400' : 'text-muted'}`}>
            Additional hours at ${plan.additionalRate}/hr
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <Check
              size={15}
              strokeWidth={2.5}
              className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-secondary'}`}
            />
            <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href="#contact"
        variant={plan.popular ? 'primary' : 'outline'}
        size="lg"
        className={`w-full ${plan.popular ? 'bg-secondary hover:bg-blue-600' : ''}`}
      >
        {plan.cta}
      </Button>
    </div>
  )
}
