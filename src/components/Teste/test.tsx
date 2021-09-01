import { render, screen } from '@testing-library/react'

import Teste from '.'

describe('<Teste />', () => {
  it('should render the heading', () => {
    render(<Teste />)

    expect(screen.getByRole('heading', { name: /Teste/i })).toBeInTheDocument()
  })
})
