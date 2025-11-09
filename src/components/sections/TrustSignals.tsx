'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const TrustSignals: React.FC = () => {
    const { locale } = useTranslation()

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Trusted by Market Leaders',
                subtitle: 'We work with the largest banks, industrial companies and government organizations',
                keyClients: 'Our Key Clients',
                certificationsTitle: 'Certifications and Partnerships',
                trustQuote: '"Evolution Group is the only company in Kyrgyzstan with full government API integration and AI expertise for enterprise solutions"',
                trustSource: '— IT Companies Association of Kyrgyzstan'
            }
        } else if (locale === 'ky') {
            return {
                title: 'Базардын лидерлери бизге ишенет',
                subtitle: 'Эң ири банктар, өнөр жай компаниялары жана мамлекеттик уюмдар менен иштейбиз',
                keyClients: 'Биздин негизги кардарлар',
                certificationsTitle: 'Сертификаттар жана серипкештик',
                trustQuote: '"Evolution Group Кыргызстанда мамлекеттик APIлерди толук интеграциялоо жана корпоративдик чечимдер үчүн ИИ адистиги бар жалгыз компания"',
                trustSource: '— Кыргызстандын IT компанияларынын ассоциациясы'
            }
        } else {
            return {
                title: 'Нам доверяют лидеры рынка',
                subtitle: 'Работаем с крупнейшими банками, промышленными компаниями и государственными организациями',
                keyClients: 'Наши ключевые клиенты',
                certificationsTitle: 'Сертификации и партнерства',
                trustQuote: '"Evolution Group - единственная компания в Кыргызстане с полной интеграцией государственных API и экспертизой в области искусственного интеллекта для enterprise-решений"',
                trustSource: '— Ассоциация IT-компаний Кыргызстана'
            }
        }
    }

    // Данные сертификаций с переводами
    const getCertifications = () => {
        if (locale === 'en') {
            return [
                { name: 'ISO 27001', icon: '🏆', description: 'Security certification' },
                { name: 'API Partner', icon: '🤝', description: 'Official government partner' },
                { name: 'AI Certified', icon: '🧠', description: 'Certified AI solutions' },
            ]
        } else if (locale === 'ky') {
            return [
                { name: 'ISO 27001', icon: '🏆', description: 'Коопсуздук сертификаты' },
                { name: 'API өнөктөш', icon: '🤝', description: 'Расмий мамлекеттик өнөктөш' },
                { name: 'ИИ сертификат', icon: '🧠', description: 'Сертификатталган ИИ чечимдер' },
            ]
        } else {
            return [
                { name: 'ISO 27001', icon: '🏆', description: 'Сертификация безопасности' },
                { name: 'API Partner', icon: '🤝', description: 'Официальный партнер госорганов' },
                { name: 'AI Certified', icon: '🧠', description: 'Сертифицированные ИИ-решения' },
            ]
        }
    }

    // Статистические данные с переводами
    const getStats = () => {
        if (locale === 'en') {
            return [
                { value: '10+', label: 'Years in market', icon: '⭐' },
                { value: '50+', label: 'Major clients', icon: '🏢' },
                { value: '99.9%', label: 'System reliability', icon: '🛡️' },
                { value: '24/7', label: 'Technical support', icon: '📞' },
            ]
        } else if (locale === 'ky') {
            return [
                { value: '10+', label: 'Базардагы жылдар', icon: '⭐' },
                { value: '50+', label: 'Ири кардарлар', icon: '🏢' },
                { value: '99.9%', label: 'Системанын ишенимдүүлүгү', icon: '🛡️' },
                { value: '24/7', label: 'Техникалык колдоо', icon: '📞' },
            ]
        } else {
            return [
                { value: '10+', label: 'Лет на рынке', icon: '⭐' },
                { value: '50+', label: 'Крупных клиентов', icon: '🏢' },
                { value: '99.9%', label: 'Надежность систем', icon: '🛡️' },
                { value: '24/7', label: 'Техподдержка', icon: '📞' },
            ]
        }
    }

    // Данные клиентов с переводами
    const getClients = () => {
        if (locale === 'en') {
            return [
                { icon: '🏦', name: 'Largest Bank of KR', color: 'from-blue-500 to-blue-600' },
                { icon: '🏭', name: 'OilProm KR', color: 'from-orange-500 to-orange-600' },
                { icon: '🏛️', name: 'Ministry of Digital Development', color: 'from-purple-500 to-purple-600' },
                { icon: '🏢', name: 'Development Corporation KR', color: 'from-green-500 to-green-600' },
            ]
        } else if (locale === 'ky') {
            return [
                { icon: '🏦', name: 'КРнын эң ири банкы', color: 'from-blue-500 to-blue-600' },
                { icon: '🏭', name: 'МунайПром КР', color: 'from-orange-500 to-orange-600' },
                { icon: '🏛️', name: 'Санариптик өнүктүрүү министрлиги', color: 'from-purple-500 to-purple-600' },
                { icon: '🏢', name: 'Өнүктүрүү корпорациясы КР', color: 'from-green-500 to-green-600' },
            ]
        } else {
            return [
                { icon: '🏦', name: 'Крупнейший банк КР', color: 'from-blue-500 to-blue-600' },
                { icon: '🏭', name: 'НефтеПром КР', color: 'from-orange-500 to-orange-600' },
                { icon: '🏛️', name: 'Министерство цифрового развития', color: 'from-purple-500 to-purple-600' },
                { icon: '🏢', name: 'Корпорация развития КР', color: 'from-green-500 to-green-600' },
            ]
        }
    }

    const translations = getTranslations()
    const certifications = getCertifications()
    const stats = getStats()
    const clients = getClients()

    return (
        <section id="trust" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        {locale === 'en' ? 'Trust & Reliability' : locale === 'ky' ? 'Ишеним жана Ишенимдүүлүк' : 'Доверие и Надежность'}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Client logos */}
                <div className="mb-16">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <p className="text-center text-sm text-white/60 mb-8 uppercase tracking-wider">
                            {translations.keyClients}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                                >
                                    <div className={`mb-4 w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                                        <span className="text-2xl">{client.icon}</span>
                                    </div>
                                    <span className="text-sm text-white/80 text-center leading-tight">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 group"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 mb-16">
                    <h3 className="text-2xl font-bold text-center text-white mb-8">
                        {translations.certificationsTitle}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
                            >
                                <div className="bg-white/20 rounded-full p-3 text-2xl group-hover:scale-110 transition-transform duration-200">
                                    {cert.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-white text-lg mb-1">{cert.name}</div>
                                    <div className="text-sm text-white/70">{cert.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust message - Temporarily hidden */}
                {/* <div className="text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto hover:bg-white/10 transition-all duration-200">
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-blue-400/40 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                <path d="M13.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                            </svg>
                        </div>
                        <p className="text-lg text-white/90 italic mb-4 leading-relaxed">
                            {translations.trustQuote}
                        </p>
                        <p className="text-sm text-white/60">
                            {translations.trustSource}
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default TrustSignals