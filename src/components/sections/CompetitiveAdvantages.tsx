'use client'

import React from 'react'
import { useTranslation, Locale } from '@/components/providers/I18nProvider'

const CompetitiveAdvantages: React.FC = () => {
    const { locale } = useTranslation()

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Why Choose Us',
                subtitle: 'We don\'t just develop software — we create intelligent ecosystems',
                badge: 'Competitive Advantages',
                ctaTitle: 'Ready to see our advantages in action?',
                ctaDescription: 'Get free audit of your processes and optimization suggestions',
                ctaPrimary: 'Get Audit',
                ctaSecondary: 'Compare with Competitors'
            }
        } else if (locale === 'ky') {
            return {
                title: 'Эмне үчүн бизди тандайт',
                subtitle: 'Биз жөн гана программалык камсыздоону иштеп чыкпайбыз — акылдуу экосистемалар түзөбүз',
                badge: 'Атаандаштык артыкчылыктар',
                ctaTitle: 'Биздин артыкчылыктарыбызды көрүүгө дайынсызбы?',
                ctaDescription: 'Процесстериңиздин бекер аудитин жана оптималдаштыруу боюнча сунуштамалар алыңыз',
                ctaPrimary: 'Аудит алуу',
                ctaSecondary: 'Атаандаштар менен салыштыруу'
            }
        } else {
            return {
                title: 'Почему выбирают нас',
                subtitle: 'Мы не просто разрабатываем ПО — мы создаем интеллектуальные экосистемы',
                badge: 'Конкурентные преимущества',
                ctaTitle: 'Готовы убедиться в наших преимуществах?',
                ctaDescription: 'Получите бесплатный аудит ваших процессов и предложения по оптимизации',
                ctaPrimary: 'Получить аудит',
                ctaSecondary: 'Сравнить с конкурентами'
            }
        }
    }

    // Данные преимуществ с переводами
    const getAdvantages = () => {
        if (locale === 'en') {
            return [
                {
                    title: "AI Expertise",
                    description: "15+ years of experience in artificial intelligence solutions development",
                    icon: "🧠",
                    details: "Deep understanding of ML/DL algorithms and enterprise implementations"
                },
                {
                    title: "Rapid Deployment",
                    description: "Ready-made solutions and APIs for integration in days",
                    icon: "⚡",
                    details: "Library of pre-built components and automated deployment processes"
                },
                {
                    title: "24/7 Support",
                    description: "Round-the-clock technical support and system monitoring",
                    icon: "🛡️",
                    details: "Proactive monitoring with dedicated engineering team on standby"
                },
                {
                    title: "Solution Flexibility",
                    description: "We adapt technologies to your business specifics",
                    icon: "🔧",
                    details: "100% customization with multiple integration and scaling options"
                },
                {
                    title: "Enterprise Security",
                    description: "Compliance with international data protection standards",
                    icon: "🔒",
                    details: "256-bit encryption, ISO 27001, GDPR compliance and regular audits"
                },
                {
                    title: "Cost Effectiveness",
                    description: "Transparent pricing and guaranteed return on investment",
                    icon: "💰",
                    details: "Average 250% ROI with 6-18 months payback period guaranteed"
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    title: "ИИ тармагындагы экспертиза",
                    description: "Жасалма интеллект чечимдерин иштеп чыгуу тармагында 15+ жыл тажрыйба",
                    icon: "🧠",
                    details: "ML/DL алгоритмдерин терең түшүнүү жана корпоративдик орнотуу"
                },
                {
                    title: "Тез орнотуу",
                    description: "Бир нече күндө интеграция үчүн даяр чечимдер жана API",
                    icon: "⚡",
                    details: "Алдын ала куралган компоненттер жана автоматташтырылган орнотуу"
                },
                {
                    title: "24/7 колдоо",
                    description: "Түнү күндүз техникалык колдоо жана системалардын мониторинги",
                    icon: "🛡️",
                    details: "Кезектеги инженердик команда менен проактивдүү мониторинг"
                },
                {
                    title: "Чечимдердин ийкемдүүлүгү",
                    description: "Технологияларды сиздин бизнесиңиздин өзгөчөлүктөрүнө ылайыкташтырабыз",
                    icon: "🔧",
                    details: "Көп интеграция жана масштабдоо опциялары менен 100% ылайыкташтыруу"
                },
                {
                    title: "Корпоративдүү коопсуздук",
                    description: "Маалыматтарды коргоонун эл аралык стандарттарына ылайык келүү",
                    icon: "🔒",
                    details: "256-бит шифрлөө, ISO 27001, GDPR ылайыктыгы жана үзгүлтүксүз аудит"
                },
                {
                    title: "Экономикалык натыйжалуулук",
                    description: "Ачыктуу баа түзүү жана кайтарымдуулуктун кепилдиги",
                    icon: "💰",
                    details: "Кепилденген 6-18 ай кайтарым мезгили менен орточо 250% ROI"
                }
            ]
        } else {
            return [
                {
                    title: "Экспертиза в ИИ",
                    description: "15+ лет опыта в разработке решений искусственного интеллекта",
                    icon: "🧠",
                    details: "Глубокое понимание ML/DL алгоритмов и enterprise внедрений"
                },
                {
                    title: "Быстрое внедрение",
                    description: "Готовые решения и API для интеграции за считанные дни",
                    icon: "⚡",
                    details: "Библиотека готовых компонентов и автоматизированное развертывание"
                },
                {
                    title: "24/7 Поддержка",
                    description: "Круглосуточная техническая поддержка и мониторинг систем",
                    icon: "🛡️",
                    details: "Проактивный мониторинг с дежурной командой инженеров"
                },
                {
                    title: "Гибкость решений",
                    description: "Адаптируем технологии под специфику вашего бизнеса",
                    icon: "🔧",
                    details: "100% кастомизация с множеством опций интеграции и масштабирования"
                },
                {
                    title: "Корпоративная безопасность",
                    description: "Соответствие международным стандартам защиты данных",
                    icon: "🔒",
                    details: "256-bit шифрование, соответствие ISO 27001, GDPR и регулярные аудиты"
                },
                {
                    title: "Экономическая эффективность",
                    description: "Прозрачное ценообразование и гарантированная окупаемость",
                    icon: "💰",
                    details: "Средний ROI 250% с гарантированным периодом окупаемости 6-18 месяцев"
                }
            ]
        }
    }

    // Данные сравнения с конкурентами
    const getComparison = () => {
        if (locale === 'en') {
            return {
                title: 'Comparison with Competitors',
                subtitle: 'Why clients choose us',
                criteria: [
                    { parameter: 'Implementation Speed', us: '1-30 days', competitors: '3-6 months', advantage: '6x faster' },
                    { parameter: 'Development Cost', us: 'From $50K', competitors: 'From $150K+', advantage: '60% cheaper' },
                    { parameter: 'Support Hours', us: '24/7', competitors: 'Business hours', advantage: 'Round-the-clock' },
                    { parameter: 'Localization', us: 'Kyrgyzstan + CIS', competitors: 'Foreign only', advantage: 'Local expertise' }
                ]
            }
        } else if (locale === 'ky') {
            return {
                title: 'Атаандаштар менен салыштыруу',
                subtitle: 'Кардарлар эмне үчүн бизди тандайт',
                criteria: [
                    { parameter: 'Орнотуу ылдамдыгы', us: '1-30 күн', competitors: '3-6 ай', advantage: '6 эсе тезирээк' },
                    { parameter: 'Иштеп чыгуунун наркы', us: '$50Kдан', competitors: '$150K+дан', advantage: '60% арзанырак' },
                    { parameter: 'Колдоо убактысы', us: '24/7', competitors: 'Жумуш убактысы', advantage: 'Түнү күндүз' },
                    { parameter: 'Локализация', us: 'Кыргызстан + МДК', competitors: 'Чет элдик гана', advantage: 'Жергиликтүү экспертиза' }
                ]
            }
        } else {
            return {
                title: 'Сравнение с конкурентами',
                subtitle: 'Почему клиенты выбирают именно нас',
                criteria: [
                    { parameter: 'Скорость внедрения', us: '1-30 дней', competitors: '3-6 месяцев', advantage: 'В 6 раз быстрее' },
                    { parameter: 'Стоимость разработки', us: 'От $50K', competitors: 'От $150K+', advantage: 'На 60% дешевле' },
                    { parameter: 'Время поддержки', us: '24/7', competitors: 'Рабочие часы', advantage: 'Круглосуточно' },
                    { parameter: 'Локализация', us: 'Кыргызстан + СНГ', competitors: 'Только зарубежные', advantage: 'Местная экспертиза' }
                ]
            }
        }
    }

    const translations = getTranslations()
    const advantages = getAdvantages()
    const comparison = getComparison()

    return (
        <section className="py-24 bg-slate-800/30 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {translations.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {advantages.map((advantage, index) => (
                        <div
                            key={advantage.title}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                                <span className="text-3xl">{advantage.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {advantage.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                {advantage.description}
                            </p>
                            <p className="text-white/50 text-xs leading-relaxed">
                                {advantage.details}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {comparison.title}
                        </h3>
                        <p className="text-white/60">
                            {comparison.subtitle}
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-white/20">
                                <th className="text-left text-white/80 py-4 px-4">
                                    {locale === 'en' ? 'Parameter' : locale === 'ky' ? 'Параметр' : 'Параметр'}
                                </th>
                                <th className="text-center text-blue-400 py-4 px-4">
                                    {locale === 'en' ? 'Evolution Group' : 'Evolution Group'}
                                </th>
                                <th className="text-center text-white/60 py-4 px-4">
                                    {locale === 'en' ? 'Competitors' : locale === 'ky' ? 'Атаандаштар' : 'Конкуренты'}
                                </th>
                                <th className="text-center text-green-400 py-4 px-4">
                                    {locale === 'en' ? 'Advantage' : locale === 'ky' ? 'Артыкчылык' : 'Преимущество'}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {comparison.criteria.map((item, index) => (
                                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="text-white/80 py-4 px-4">{item.parameter}</td>
                                    <td className="text-center text-blue-400 font-semibold py-4 px-4">{item.us}</td>
                                    <td className="text-center text-white/60 py-4 px-4">{item.competitors}</td>
                                    <td className="text-center text-green-400 font-semibold py-4 px-4">{item.advantage}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {translations.ctaTitle}
                    </h3>
                    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                        {translations.ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                            {translations.ctaPrimary}
                        </button>
                        <button className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                            {translations.ctaSecondary}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompetitiveAdvantages