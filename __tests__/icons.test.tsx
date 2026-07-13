import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { InstagramIcon, DribbbleIcon } from '@/components/icons'

describe('brand icons', () => {
  it('InstagramIcon renders an svg', () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('DribbbleIcon renders an svg', () => {
    const { container } = render(<DribbbleIcon />)
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
