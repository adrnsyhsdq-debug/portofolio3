import { Crown, Package, Monitor, PenTool, Brush } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'

// NOTE: 'Instagram' used to be imported from lucide-react directly. Recent
// lucide-react versions dropped brand icons, which crashed the build with
// "Export Instagram doesn't exist in target module". We now use the local
// InstagramIcon from components/icons.tsx instead.

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

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-3xl">Layanan</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="rounded-lg border border-white/10 p-6 transition-colors hover:border-gold/50"
            >
              <Icon className="mb-4 h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mb-2 text-lg">{service.title}</h3>
              <p className="text-sm text-neutral-400">{service.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
