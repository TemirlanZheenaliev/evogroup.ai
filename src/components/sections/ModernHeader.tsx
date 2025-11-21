'use client'

import React from 'react'
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react"
import { useTranslation } from '@/components/providers/I18nProvider'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const ModernHeader: React.FC = () => {
    const { locale } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
        setIsMenuOpen(false)
    }

    const menuItems = [
        { key: 'solutions', label: translations.nav.solutions },
        { key: 'cases', label: translations.nav.cases },
        { key: 'technology', label: translations.nav.technology },
        { key: 'team', label: translations.nav.team },
        { key: 'contact', label: translations.nav.contact },
    ]

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            className="bg-black/80 backdrop-blur-2xl border-b border-white/10 fixed top-0"
            classNames={{
                wrapper: "px-6 py-2",
                item: "text-white/70 hover:text-white data-[active=true]:text-white transition-colors",
                menuItem: "text-white/80",
            }}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden text-white"
                />
                <NavbarBrand className="gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/Group 1.png"
                            alt="Evolution Group Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <p className="font-bold text-white text-xl">
                        {translations.company}
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.key}>
                        <button
                            onClick={() => scrollToSection(item.key)}
                            className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                        >
                            {item.label}
                        </button>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-4">
                <NavbarItem>
                    <LanguageSwitcher />
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Button
                        color="primary"
                        variant="shadow"
                        onPress={() => scrollToSection('contact')}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        {translations.cta}
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-slate-900/98 backdrop-blur-xl pt-6">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.key}-${index}`}>
                        <button
                            className="w-full text-left text-white/80 hover:text-white py-3 text-lg"
                            onClick={() => scrollToSection(item.key)}
                        >
                            {item.label}
                        </button>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Button
                        color="primary"
                        variant="shadow"
                        onPress={() => scrollToSection('contact')}
                        className="w-full mt-4"
                    >
                        {translations.cta}
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default ModernHeader