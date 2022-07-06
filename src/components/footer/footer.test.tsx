import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should have correct github profile', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /@vinihvc/i })).toBeInTheDocument()
  })

  it('should have correct URL', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /@vinihvc/i })).toHaveAttribute(
      'href',
      'https://github.com/vinihvc',
    )
  })
})
