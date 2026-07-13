import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/footer'

// Regression test: this component previously imported `Instagram` and
// `Dribbble` directly from lucide-react, which crashed the build. Rendering
// here fails loudly if that ever happens again.

describe('Footer', () => {
  it('renders all social links without throwing', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
  })
})
