'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ColorBar } from '@/components/color-bar'
import { RegistrationMark } from '@/components/registration-mark'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 overflow-hidden px-6 py-24">
      <RegistrationMark
        className="absolute right-6 top-8 hidden text-ink/15 sm:block"
        width="28"
        height="28"
        aria-hidden="true"
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.5 }}
        className="text-xs uppercase tracking-[0.3em] text-magenta"
      >
        Design Engineer &amp; Frontend Developer
      </motion.span>

      <h1
        className={`max-w-2xl text-4xl leading-tight sm:text-6xl ${
          shouldReduceMotion ? '' : 'animate-proof-reveal'
        }`}
      >
        Membangun identitas visual dan pengalaman digital kelas premium.
      </h1>

      <ColorBar animate={!shouldReduceMotion} className="max-w-xs" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.9,
        }}
        className="max-w-xl text-ink/60"
      >
        Saya membantu brand tampil elegan dan profesional lewat branding,
        desain sosial media, dan website yang cepat serta rapi.
      </motion.p>
    </section>
  )
}