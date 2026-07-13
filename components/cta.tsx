import { ArrowRight, Download } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 className="mb-4 text-3xl">Punya proyek dalam pikiran?</h2>
      <p className="mx-auto mb-10 max-w-xl text-neutral-400">
        Mari wujudkan brand dan produk digital yang tampil premium dan
        profesional.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="mailto:hello@sidikadriansyah.dev"
          className="group flex items-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
        >
          Start a Project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
        <a
          href="/portfolio.pdf"
          className="group flex items-center gap-3 border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Portfolio PDF
        </a>
      </div>
    </section>
  )
}
