'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { Button } from '@/components/ui/Button'

const ModernHeader: React.FC = () => {
    const { locale } = useTranslation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isMobileMenuOpen])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                company: 'Evolution Group',
                nav: {
                    solutions: 'Solutions',
                    cases: 'Cases',
                    technology: 'Technology',
                    team: 'Team',
                    contact: 'Contact'
                },
                cta: 'Start Project'
            }
        } else if (locale === 'ky') {
            return {
                company: 'Evolution Group',
                nav: {
                    solutions: 'Чечимдер',
                    cases: 'Мисалдар',
                    technology: 'Технологиялар',
                    team: 'Команда',
                    contact: 'Байланыш'
                },
                cta: 'Долбоорду баштоо'
            }
        } else {
            return {
                company: 'Evolution Group',
                nav: {
                    solutions: 'Решения',
                    cases: 'Кейсы',
                    technology: 'Технологии',
                    team: 'Команда',
                    contact: 'Контакты'
                },
                cta: 'Начать проект'
            }
        }
    }

    const translations = getTranslations()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            {translations.company}
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('solutions')}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {translations.nav.solutions}
                        </button>
                        <button
                            onClick={() => scrollToSection('cases')}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {translations.nav.cases}
                        </button>
                        <button
                            onClick={() => scrollToSection('technology')}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {translations.nav.technology}
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {translations.nav.team}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {translations.nav.contact}
                        </button>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />

                        <Button
                            variant="primary"
                            size="md"
                            className="hidden sm:flex bg-blue-600 hover:bg-blue-700"
                            onClick={() => scrollToSection('contact')}
                        >
                            {translations.cta}
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white relative"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}>
                    <nav className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                        <button
                            onClick={() => scrollToSection('solutions')}
                            className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium py-2"
                        >
                            {translations.nav.solutions}
                        </button>
                        <button
                            onClick={() => scrollToSection('cases')}
                            className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium py-2"
                        >
                            {translations.nav.cases}
                        </button>
                        <button
                            onClick={() => scrollToSection('technology')}
                            className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium py-2"
                        >
                            {translations.nav.technology}
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium py-2"
                        >
                            {translations.nav.team}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium py-2"
                        >
                            {translations.nav.contact}
                        </button>

                        <Button
                            variant="primary"
                            size="md"
                            className="bg-blue-600 hover:bg-blue-700 mt-4 w-full justify-center"
                            onClick={() => scrollToSection('contact')}
                        >
                            {translations.cta}
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default ModernHeader