'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

const Footer: React.FC = () => {
    const { t, locale } = useTranslation()
    const [email, setEmail] = useState('')
    const currentYear = new Date().getFullYear()

    // Переводы для всех языков
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                newsletter: {
                    title: 'Stay updated with latest AI news',
                    subtitle: 'Get exclusive case studies, market analytics and announcements of new solutions',
                    placeholder: 'Your email',
                    button: 'Subscribe',
                    successMessage: 'Thank you for subscribing!'
                },
                company: {
                    name: 'Evolution Group',
                    tagline: 'AI Solutions',
                    description: 'We create intelligent solutions that transform the way companies work.',
                    slogan: 'Made with ❤️ in Kyrgyzstan'
                },
                sections: {
                    solutions: {
                        title: 'Solutions',
                        banking: 'Banking Systems',
                        government: 'Government Sector',
                        manufacturing: 'Manufacturing',
                        api: 'API Integration'
                    },
                    company: {
                        title: 'Company',
                        about: 'About Us',
                        team: 'Team',
                        careers: 'Careers',
                        blog: 'Blog'
                    },
                    support: {
                        title: 'Support',
                        documentation: 'Documentation',
                        cases: 'Case Studies',
                        faq: 'FAQ',
                        techSupport: 'Technical Support'
                    }
                },
                achievements: {
                    projects: 'Projects',
                    savings: 'Savings',
                    experts: 'Experts',
                    uptime: 'Uptime'
                },
                technologies: {
                    title: 'Technologies we work with:'
                },
                status: {
                    online: 'Status: Online 🟢',
                    responseTime: 'Average response time: 15 minutes'
                },
                copyright: 'All rights reserved.',
                legal: {
                    privacy: 'Privacy Policy',
                    terms: 'Terms of Use',
                    cookies: 'Cookie Policy'
                }
            }
        } else if (locale === 'ky') {
            return {
                newsletter: {
                    title: 'ИИнын акыркы жаңылыктарынан кабардар болуңуз',
                    subtitle: 'Эксклюзивдүү мисалдарды, рынок аналитикасын жана жаңы чечимдердин жарыялоолорун алыңыз',
                    placeholder: 'Сиздин email',
                    button: 'Жазылуу',
                    successMessage: 'Жазылганыңыз үчүн рахмат!'
                },
                company: {
                    name: 'Evolution Group',
                    tagline: 'ИИ Чечимдери',
                    description: 'Компаниялардын иштөө ыкмасын өзгөрткөн акылдуу чечимдерди түзөбүз.',
                    slogan: 'Кыргызстанда ❤️ менен жасалган'
                },
                sections: {
                    solutions: {
                        title: 'Чечимдер',
                        banking: 'Банктык системалар',
                        government: 'Мамсектор',
                        manufacturing: 'Өндүрүш',
                        api: 'API интеграциясы'
                    },
                    company: {
                        title: 'Компания',
                        about: 'Биз жөнүндө',
                        team: 'Команда',
                        careers: 'Карьера',
                        blog: 'Блог'
                    },
                    support: {
                        title: 'Колдоо',
                        documentation: 'Документация',
                        cases: 'Мисалдар',
                        faq: 'Көп берилүүчү суроолор',
                        techSupport: 'Техколдоо'
                    }
                },
                achievements: {
                    projects: 'Долбоор',
                    savings: 'Үнөмдөлгөн',
                    experts: 'Адис',
                    uptime: 'Жумуштоо убактысы'
                },
                technologies: {
                    title: 'Биз иштеген технологиялар:'
                },
                status: {
                    online: 'Статус: Онлайн 🟢',
                    responseTime: 'Орточо жооп берүү убактысы: 15 мүнөт'
                },
                copyright: 'Бардык укуктар корголгон.',
                legal: {
                    privacy: 'Купуялуулук саясаты',
                    terms: 'Колдонуу шарттары',
                    cookies: 'Cookie саясаты'
                }
            }
        } else {
            return {
                newsletter: {
                    title: 'Будьте в курсе последних новостей ИИ',
                    subtitle: 'Получайте эксклюзивные кейсы, аналитику рынка и анонсы новых решений',
                    placeholder: 'Ваш email',
                    button: 'Подписаться',
                    successMessage: 'Спасибо за подписку!'
                },
                company: {
                    name: 'Evolution Group',
                    tagline: 'AI Solutions',
                    description: 'Создаем интеллектуальные решения, которые трансформируют способ работы компаний.',
                    slogan: 'Сделано с ❤️ в Кыргызстане'
                },
                sections: {
                    solutions: {
                        title: 'Решения',
                        banking: 'Банковские системы',
                        government: 'Госсектор',
                        manufacturing: 'Производство',
                        api: 'API интеграция'
                    },
                    company: {
                        title: 'Компания',
                        about: 'О нас',
                        team: 'Команда',
                        careers: 'Карьера',
                        blog: 'Блог'
                    },
                    support: {
                        title: 'Поддержка',
                        documentation: 'Документация',
                        cases: 'Кейсы',
                        faq: 'FAQ',
                        techSupport: 'Техподдержка'
                    }
                },
                achievements: {
                    projects: 'Проектов',
                    savings: 'Экономии',
                    experts: 'Экспертов',
                    uptime: 'Аптайм'
                },
                technologies: {
                    title: 'Технологии, с которыми мы работаем:'
                },
                status: {
                    online: 'Статус: Онлайн 🟢',
                    responseTime: 'Среднее время ответа: 15 минут'
                },
                copyright: 'Все права защищены.',
                legal: {
                    privacy: 'Политика конфиденциальности',
                    terms: 'Условия использования',
                    cookies: 'Файлы cookie'
                }
            }
        }
    }

    const translations = getTranslations()

    const footerLinks = [
        {
            title: translations.sections.solutions.title,
            links: [
                { label: translations.sections.solutions.banking, href: '#solutions', icon: '🏦' },
                { label: translations.sections.solutions.government, href: '#solutions', icon: '🏛️' },
                { label: translations.sections.solutions.manufacturing, href: '#solutions', icon: '🏭' },
                { label: translations.sections.solutions.api, href: '#solutions', icon: '🔗' },
            ]
        },
        {
            title: translations.sections.company.title,
            links: [
                { label: translations.sections.company.about, href: '#about', icon: '👥' },
                { label: translations.sections.company.team, href: '#team', icon: '🚀' },
                { label: translations.sections.company.careers, href: '#careers', icon: '💼' },
                { label: translations.sections.company.blog, href: '#blog', icon: '📰' },
            ]
        },
        {
            title: translations.sections.support.title,
            links: [
                { label: translations.sections.support.documentation, href: '#docs', icon: '📖' },
                { label: translations.sections.support.cases, href: '#cases', icon: '📊' },
                { label: translations.sections.support.faq, href: '#faq', icon: '❓' },
                { label: translations.sections.support.techSupport, href: '#support', icon: '🛠️' },
            ]
        }
    ]

    const technologies = [
        { name: 'Python', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'React', icon: '⚛️' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⚙️' }
    ]

    const achievements = [
        { metric: '50+', label: translations.achievements.projects, icon: '🎯' },
        { metric: '$10M+', label: translations.achievements.savings, icon: '💰' },
        { metric: '25+', label: translations.achievements.experts, icon: '👨‍💻' },
        { metric: '99.9%', label: translations.achievements.uptime, icon: '⚡' }
    ]

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Подписка на email:', email)
        setEmail('')
        alert(translations.newsletter.successMessage)
    }

    return (
        <footer className="bg-gradient-to-b from-slate-900/95 to-slate-900 backdrop-blur-sm border-t border-white/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Newsletter Section */}
                <div className="py-16 border-b border-white/10">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            {translations.newsletter.title}
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            {translations.newsletter.subtitle}
                        </p>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={translations.newsletter.placeholder}
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                {translations.newsletter.button}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Achievements */}
                <div className="py-12 border-b border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl mb-2">{achievement.icon}</div>
                                <div className="text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">
                                    {achievement.metric}
                                </div>
                                <div className="text-white/60 text-sm">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">Ф</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl">{translations.company.name}</h3>
                                <p className="text-sm text-white/60">{translations.company.tagline}</p>
                            </div>
                        </div>

                        <p className="text-white/70 mb-6 leading-relaxed">
                            {translations.company.description}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📧</span>
                                <a href="mailto:info@evolution-group.kg">info@fiscalepro.kg</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📞</span>
                                <a href="tel:+996555123456">+996 555 123 456</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📍</span>
                                <span>
                                    {locale === 'en' ? 'Bishkek, Tech Park' :
                                        locale === 'ky' ? 'Бишкек, Техникалык парк' :
                                            'Бишкек, Технопарк'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Technologies */}
                <div className="py-8 border-t border-white/10 border-b border-white/10">
                    <h4 className="text-white font-semibold mb-4 text-center">{translations.technologies.title}</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105 group"
                            >
                                <span className="text-lg group-hover:scale-110 transition-transform">{tech.icon}</span>
                                <span className="text-white/70 text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {[
                                { icon: '💼', href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20' },
                                { icon: '💻', href: '#', label: 'GitHub', color: 'hover:bg-gray-600/20' },
                                { icon: '📱', href: '#', label: 'Telegram', color: 'hover:bg-blue-500/20' },
                                { icon: '🎥', href: '#', label: 'YouTube', color: 'hover:bg-red-600/20' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group ${social.color}`}
                                    title={social.label}
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                                </a>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">
                                {translations.status.online}
                            </div>
                            <div className="text-white/60 text-sm">
                                {translations.status.responseTime}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-white/60 mb-4">
                            © {currentYear} {translations.company.name}. {translations.copyright}
                            <span className="ml-2">{translations.company.slogan}</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
                                {translations.legal.privacy}
                            </a>
                            <span className="text-white/40">•</span>
                            <a href="#terms" className="text-white/60 hover:text-white transition-colors">
                                {translations.legal.terms}
                            </a>
                            <span className="text-white/40">•</span>
                            <a href="#cookies" className="text-white/60 hover:text-white transition-colors">
                                {translations.legal.cookies}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer