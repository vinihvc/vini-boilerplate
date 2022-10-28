import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render a button', () => {
    render(<Button>Example button</Button>)

    expect(
      screen.getByRole('button', { name: /example button/i }),
    ).toBeInTheDocument()
  })
})
