import type { SVGProps } from 'react'

/**
 * A printer's registration mark — the crosshair-in-circle used to align
 * color plates on a printing press. Used here as a small structural motif
 * (logo mark, section corners) that ties directly to the brand-identity /
 * packaging / print-production subject matter this portfolio represents.
 */
export function RegistrationMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
