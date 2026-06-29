export default function SectionHeading({ eyebrow, title, description, center = false, className = '' }) {
  return (
    <div className={['max-w-2xl', center && 'mx-auto text-center', className].filter(Boolean).join(' ')}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
