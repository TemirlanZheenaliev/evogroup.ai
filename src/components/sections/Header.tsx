'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/utils/cn'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Решения', href: '#solutions', icon: 'cog' },
    { label: 'Технологии', href: '#technology', icon: 'cpu' },
    { label: 'Кейсы', href: '#cases', icon: 'chart' },
    { label: 'О нас', href: '#about', icon: 'building' },
    { label: 'Контакты', href: '#contact', icon: 'phone' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-gradient-to-b from-navy/80 to-transparent backdrop-blur-sm'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300",
              isScrolled ? "shadow-lg" : "shadow-xl ring-2 ring-white/20"
            )}>
              <Icon name="brain" className="text-white drop-shadow-sm" size="sm" />
            </div>
            <div>
              <h1 className={cn(
                "text-lg sm:text-xl lg:text-2xl font-display font-bold transition-colors duration-300",
                isScrolled ? "text-navy" : "text-white"
              )}>
                ФискалеПро
              </h1>
              <p className={cn(
                "text-[10px] sm:text-xs hidden sm:block transition-colors duration-300",
                isScrolled ? "text-gray-600" : "text-white/80"
              )}>
                ИИ-решения для бизнеса
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isScrolled 
                    ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
              >
                <Icon name={item.icon} size="sm" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="md"
              onClick={() => scrollToSection('#contact')}
              className={cn(
                'transition-all duration-200',
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
              )}
            >
              Консультация
            </Button>
            <Button 
              variant="primary" 
              size="md"
              onClick={() => scrollToSection('#contact')}
            >
              <Icon name="rocket" size="sm" className="mr-2" />
              Запросить демо
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors duration-200',
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            )}
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                <Icon name={item.icon} size="md" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => scrollToSection('#contact')}
              >
                Консультация
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                onClick={() => scrollToSection('#contact')}
              >
                <Icon name="rocket" size="sm" className="mr-2" />
                Запросить демо
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header