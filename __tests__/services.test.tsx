import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from '@/components/services'

// Regression test: this component previously imported `Instagram` directly
// from lucide-react, which does not export that icon in newer versions and
// crashed the whole page ("Export Instagram doesn't exist in target
// module"). Rendering here fails loudly if that ever happens again.

describe('Services', () => {
  it('renders all six service cards without throwing', () => {
    render(<Services />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Social Media Design')).toBeInTheDocument()
    expect(screen.getByText('Packaging Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Illustration')).toBeInTheDocument()
  })
})
