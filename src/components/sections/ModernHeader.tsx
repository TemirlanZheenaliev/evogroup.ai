'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react"
import { useTranslation } from '@/components/providers/I18nProvider'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const ModernHeader: React.FC = () => {
    const { locale } = useTranslation()
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    // Log для отладки
    React.useEffect(() => {
        console.log('ModernHeader: isMenuOpen =', isMenuOpen)
    }, [isMenuOpen])

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

    const menuItems = [
        { href: '/solutions', label: translations.nav.solutions },
        { href: '/cases', label: translations.nav.cases },
        { href: '/technology', label: translations.nav.technology },
        { href: '/team', label: translations.nav.team },
        { href: '/contact', label: translations.nav.contact },
    ]

    const isActive = (href: string) => pathname === href

    const handleMenuOpenChange = React.useCallback((open: boolean) => {
        console.log('handleMenuOpenChange called with:', open)
        setIsMenuOpen(open)
    }, [])

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={handleMenuOpenChange}
            maxWidth="xl"
            className="bg-black/80 backdrop-blur-2xl border-b border-white/10 fixed top-0 z-50"
            classNames={{
                wrapper: "px-6 py-2",
                item: "text-white/70 hover:text-white data-[active=true]:text-white transition-colors",
                menuItem: "text-white/80",
                menu: "z-50 mt-16",
            }}
        >
            <NavbarContent>
                <NavbarBrand className="gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="/Vector.svg"
                                alt="Evolution Group Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <p className="font-bold text-white text-xl">
                            {translations.company}
                        </p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.href} isActive={isActive(item.href)}>
                        <Link
                            href={item.href}
                            className={`font-medium transition-colors duration-200 ${
                                isActive(item.href)
                                    ? 'text-white'
                                    : 'text-white/80 hover:text-white'
                            }`}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-4">
                <NavbarItem>
                    <LanguageSwitcher />
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Link href="/contact">
                        <Button
                            color="primary"
                            variant="shadow"
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            {translations.cta}
                        </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem className="lg:hidden">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="text-white relative z-50"
                        onClick={(e) => {
                            console.log('NavbarMenuToggle clicked')
                            e.stopPropagation()
                        }}
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-slate-900/98 backdrop-blur-xl pt-6">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.href}-${index}`}>
                        <Link
                            href={item.href}
                            className={`w-full block py-3 text-lg transition-colors ${
                                isActive(item.href)
                                    ? 'text-white font-semibold'
                                    : 'text-white/80 hover:text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link href="/contact" className="w-full block mt-4">
                        <Button
                            color="primary"
                            variant="shadow"
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            onPress={() => setIsMenuOpen(false)}
                        >
                            {translations.cta}
                        </Button>
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default ModernHeader