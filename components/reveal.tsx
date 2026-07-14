'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Tag = 'div' | 'span' | 'p' | 'h2'

const tagToMotion = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
} as const

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
}: {
  children: ReactNode
  delay?: number
  as?: Tag
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  const Component = tagToMotion[as]

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </Component>
  )
}