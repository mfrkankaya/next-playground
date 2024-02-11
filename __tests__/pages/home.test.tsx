import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('Home page', () => {
  it('Should render the home page', () => {
    render(<HomePage />)
    expect(
      screen.getByText(
        'Find in-depth information about Next.js features and API.'
      )
    ).toBeInTheDocument()
  })
})
