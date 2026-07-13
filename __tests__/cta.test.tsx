import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from '@/components/cta'

describe('CTA', () => {
  it('renders both call-to-action buttons', () => {
    render(<CTA />)
    expect(screen.getByText('Start a Project')).toBeInTheDocument()
    expect(screen.getByText('Download Portfolio PDF')).toBeInTheDocument()
  })
})
