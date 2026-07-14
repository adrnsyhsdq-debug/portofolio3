'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Crown, Package, Monitor, PenTool, Brush } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'
import { RegistrationMark } from '@/components/registration-mark'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Crown,
    title: 'Brand Identity',
    desc: 'Logo, panduan brand, dan sistem visual yang membuat brand terasa premium dan konsisten.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    desc: 'Desain kemasan produk yang menonjol di rak sekaligus mencerminkan kualitas brand.',
  },
  {
    icon: InstagramIcon,
    title: 'Social Media Design',
    desc: 'Feed design, konten visual, dan template yang membuat brand tampil premium di sosial media.',
  },
  {
    icon: Monitor,
    title: 'Web Development',
    desc: 'Website cepat, rapi, dan responsif dibangun dengan Next.js dan Tailwind CSS.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Desain antarmuka yang jelas, mudah digunakan, dan enak dipandang.',
  },
  {
    icon: Brush,
    title: 'Illustration',
    desc: 'Ilustrasi custom untuk memperkuat cerita dan karakter visual brand.',
  },
]

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
}

export function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal as="h2" className="mb-12 text-3xl">
        Layanan
      </Reveal>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={grid}
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              variants={shouldReduceMotion ? undefined : card}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative rounded-lg border border-ink/12 p-6 transition-colors hover:border-magenta/50"
            >
              <RegistrationMark className="absolute right-4 top-4 text-ink/15 transition-colors group-hover:text-magenta/40" />
              <Icon className="mb-4 h-6 w-6 text-magenta" aria-hidden="true" />
              <h3 className="mb-2 text-lg">{service.title}</h3>
              <p className="text-sm text-ink/65">{service.desc}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}