import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('Should render the button', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('Should render with secondary color', () => {
    render(<Button variant="secondary">Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('bg-secondary')
  })

  it('Should render smaller button', () => {
    render(<Button size="sm">Click me</Button>)
    expect(screen.getByText('Click me')).toHaveClass('h-8')
  })
})
