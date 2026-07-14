'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in seconds before the reveal starts (used to stagger siblings). */
  delay?: number
  /** Direction the content travels in from. Defaults to 'up'. */
  direction?: Direction
  /** HTML element to render as. Defaults to 'div'. */
  as?: 'div' | 'li' | 'span'
}

const OFFSET = 24

function getOffset(direction: Direction) {
  switch (direction) {
    case 'left':
      return { x: -OFFSET, y: 0 }
    case 'right':
      return { x: OFFSET, y: 0 }
    case 'none':
      return { x: 0, y: 0 }
    default:
      return { x: 0, y: OFFSET }
  }
}

/**
 * Scroll-triggered fade + slide reveal used throughout the site. Fully
 * respects the OS-level "reduce motion" preference: when it's enabled,
 * content still appears (never left invisible, a common accessibility bug
 * with scroll-reveal libraries) — it just appears instantly with no
 * movement instead of animating in.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const offset = shouldReduceMotion ? { x: 0, y: 0 } : getOffset(direction)

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  }

  const shared = {
    className,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin: '-80px' },
    variants,
  }

  if (as === 'li') return <motion.li {...shared}>{children}</motion.li>
  if (as === 'span') return <motion.span {...shared}>{children}</motion.span>
  return <motion.div {...shared}>{children}</motion.div>
}