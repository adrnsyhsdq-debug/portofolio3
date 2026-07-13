/**
 * The signature element of this design: a literal CMYK color bar, like the
 * proof strip printed along the edge of packaging and print materials so a
 * press operator can check ink registration. Appears once, boldly, in the
 * hero (with a load-in "printing" reveal), then as a quiet accent between
 * sections — a recurring motif grounded directly in the brief (branding,
 * packaging, print production).
 */
const swatches = [
  { label: 'C', className: 'bg-cyan' },
  { label: 'M', className: 'bg-magenta' },
  { label: 'Y', className: 'bg-proof-yellow' },
  { label: 'K', className: 'bg-ink' },
]

export function ColorBar({
  className = '',
  animate = false,
}: {
  className?: string
  animate?: boolean
}) {
  return (
    <div
      className={`flex h-3 w-full overflow-hidden ${animate ? 'animate-proof-reveal' : ''} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {swatches.map((s) => (
        <span key={s.label} className={`flex-1 ${s.className}`} />
      ))}
    </div>
  )
}
