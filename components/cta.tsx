'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
      <Reveal as="h2" className="mb-4 text-3xl">
        Punya proyek dalam pikiran?
      </Reveal>
      <Reveal as="p" delay={0.1} className="mx-auto mb-10 max-w-xl text-ink/65">
        Mari wujudkan brand dan produk digital yang tampil premium dan
        profesional.
      </Reveal>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <motion.a
          href="mailto:hello@sidikadriansyah.dev"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="group flex items-center gap-3 bg-magenta px-8 py-4 text-xs font-semibold uppercase tracking-widest text-paper"
        >
          Start a Project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </motion.a>
        <motion.a
          href="/portfolio.pdf"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="group flex items-center gap-3 border border-cyan px-8 py-4 text-xs font-semibold uppercase tracking-widest text-cyan transition-colors hover:bg-cyan hover:text-ink"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Portfolio PDF
        </motion.a>
      </div>
    </section>
  )
}