import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should have correct github profile', () => {
    render(<Footer />)

    expect(screen.getByText(/@vinihvc/i)).toBeInTheDocument()
  })

  it('should have correct URL', () => {
    render(<Footer />)

    expect(screen.getByText(/@vinihvc/i)).toHaveAttribute(
      'href',
      'https://viniciusvicentini.com/github',
    )
  })
})
