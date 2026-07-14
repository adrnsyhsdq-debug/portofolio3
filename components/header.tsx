'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { RegistrationMark } from '@/components/registration-mark'
import { ColorBar } from '@/components/color-bar'

const links = [
  { href: '#services', label: 'Layanan' },
  { href: '#contact', label: 'Kontak' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <ColorBar animate />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-display text-lg tracking-wide text-paper transition-colors hover:text-cyan"
        >
          <RegistrationMark className="text-magenta" aria-hidden="true" />
          Sidik Adriansyah
        </a>

        <ul className="hidden gap-8 text-xs uppercase tracking-widest text-neutral-300 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-cyan">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="text-paper transition-colors hover:text-cyan sm:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-1 overflow-hidden border-t border-white/10 px-6 text-xs uppercase tracking-widest text-neutral-300 sm:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 transition-colors hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}