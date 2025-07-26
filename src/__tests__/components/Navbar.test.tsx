import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders the agency logo', () => {
    render(<Navbar />)
    
    const logo = screen.getByText('Agency')
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has proper navigation structure', () => {
    render(<Navbar />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass('bg-white', 'shadow-sm', 'border-b')
  })

  it('navigation links have correct href attributes', () => {
    render(<Navbar />)
    
    expect(screen.getByRole('link', { name: 'Agency' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })
})