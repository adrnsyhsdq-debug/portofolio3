import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { ColorBar } from '@/components/color-bar'

export default function Home() {
  return (
    <main>
      <Hero />
      <ColorBar className="opacity-20" />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}