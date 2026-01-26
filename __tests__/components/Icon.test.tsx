import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from '@/components/ui/Icon'

describe('Icon Component', () => {
  it('renders the correct icon', () => {
    render(<Icon name="brain" />)
    const icon = screen.getByRole('img', { name: /brain/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Icon name="brain" size="sm" />)
    let svg = screen.getByRole('img').querySelector('svg')
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')

    rerender(<Icon name="brain" size="md" />)
    svg = screen.getByRole('img').querySelector('svg')
    expect(svg).toHaveAttribute('width', '20')

    rerender(<Icon name="brain" size="lg" />)
    svg = screen.getByRole('img').querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')

    rerender(<Icon name="brain" size="xl" />)
    svg = screen.getByRole('img').querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
  })

  it('applies custom className', () => {
    render(<Icon name="brain" className="custom-class text-red-500" />)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('custom-class', 'text-red-500')
  })

  it('applies custom color', () => {
    render(<Icon name="brain" color="red" />)
    const svg = screen.getByRole('img').querySelector('svg')
    expect(svg?.querySelector('path')).toHaveAttribute('stroke', 'red')
  })

  it('renders fallback icon for unknown name', () => {
    render(<Icon name="unknown-icon-name" />)
    // Fallback renders svg directly without wrapper span
    const svg = document.querySelector('svg[aria-label="unknown-icon-name"]')
    // Check for question mark icon (circle with question mark)
    expect(svg?.querySelector('circle')).toBeInTheDocument()
    expect(svg?.querySelector('path')).toBeInTheDocument()
  })

  it('renders all icon types correctly', () => {
    const iconNames = [
      'api', 'database', 'cloud', 'bank', 'building', 
      'chart', 'money', 'brain', 'cog', 'robot',
      'cpu', 'shield', 'puzzle', 'rocket', 'lightning',
      'government', 'document', 'certificate', 'phone', 'email',
      'location', 'linkedin', 'github', 'arrow-right', 'arrow-left',
      'arrow-up', 'arrow-down', 'check', 'close', 'menu',
      'search', 'star', 'heart', 'eye', 'oil', 'factory'
    ]

    iconNames.forEach(iconName => {
      const { unmount } = render(<Icon name={iconName} />)
      const icon = screen.getByRole('img', { name: iconName })
      expect(icon).toBeInTheDocument()
      unmount()
    })
  })

  it('maintains accessibility attributes', () => {
    render(<Icon name="brain" />)
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('aria-label', 'brain')
  })
})