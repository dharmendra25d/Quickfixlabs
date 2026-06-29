import { forwardRef } from 'react'

const variants = {
  primary:
    'bg-secondary text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md',
  outline:
    'border border-secondary text-secondary hover:bg-blue-50 active:bg-blue-100',
  ghost:
    'text-secondary hover:bg-blue-50 active:bg-blue-100',
  dark:
    'bg-primary text-white hover:bg-slate-800 active:bg-slate-900 shadow-sm hover:shadow-md',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  xl: 'px-8 py-4 text-base',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    as: Tag = 'button',
    href,
    ...props
  },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none'

  const classes = [base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Tag ref={ref} disabled={disabled} className={classes} {...props}>
      {children}
    </Tag>
  )
})

export default Button
