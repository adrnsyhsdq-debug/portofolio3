export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg tracking-wide text-gold">
          Sidik Adriansyah
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-widest text-neutral-300 sm:flex">
          <li><a href="#services" className="hover:text-gold transition-colors">Layanan</a></li>
          <li><a href="#contact" className="hover:text-gold transition-colors">Kontak</a></li>
        </ul>
      </nav>
    </header>
  )
}
