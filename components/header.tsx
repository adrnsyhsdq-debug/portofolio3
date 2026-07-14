'use client'

import { motion } from 'framer-motion'
import { RegistrationMark } from '@/components/registration-mark'

const links = [
  { href: '#services', label: 'Layanan' },
  { href: '#contact', label: 'Kontak' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-lg tracking-wide text-paper">
          <motion.span
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="text-magenta"
          >
            <RegistrationMark />
          </motion.span>
          Sidik Adriansyah
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-widest text-paper/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group/link relative transition-colors hover:text-cyan">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover/link:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}