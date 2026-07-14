import { Reveal } from '@/components/reveal'
import { ColorBar } from '@/components/color-bar'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
      <Reveal as="span" className="text-xs uppercase tracking-[0.3em] text-magenta">
        Design Engineer &amp; Frontend Developer
      </Reveal>
      <h1 className="max-w-2xl animate-proof-reveal text-4xl leading-tight sm:text-6xl">
        Membangun identitas visual dan pengalaman digital kelas premium.
      </h1>
      <Reveal as="p" delay={0.15} className="max-w-xl text-ink/65">
        Saya membantu brand tampil elegan dan profesional lewat branding,
        desain sosial media, dan website yang cepat serta rapi.
      </Reveal>
      <ColorBar animate className="mt-4 max-w-md" />
    </section>
  )
}