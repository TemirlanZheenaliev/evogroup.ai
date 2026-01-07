'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@nextui-org/react'

interface PricingPlan {
    name: string
    price: string
    period: string
    description: string
    features: { name: string; included: boolean }[]
    recommended?: boolean
    cta: string
}

const PricingSection: React.FC = () => {
    const { locale } = useTranslation()
    const [isYearly, setIsYearly] = useState(false)

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Pricing',
                title: 'Choose your plan',
                subtitle: '30 days free trial. No card required.',
                monthly: 'Monthly',
                yearly: 'Yearly',
                yearlySave: 'Save 20%',
                perMonth: '/month',
                perYear: '/year',
                users: 'users',
                messages: 'messages/month',
                channels: 'WhatsApp channels',
                history: 'history',
                templates: 'templates',
                autoReply: 'Auto-reply',
                keywordBot: 'Keyword bot',
                aiBot: 'AI bot (Claude)',
                analytics: 'Analytics',
                support: 'Support',
                startTrial: 'Start free trial',
                contactSales: 'Contact sales',
                popular: 'Popular',
                plans: [
                    {
                        name: 'Starter',
                        price: '9,000',
                        description: 'For small businesses',
                        features: [
                            { name: '2 users', included: true },
                            { name: '1,000 messages/mo', included: true },
                            { name: '1 WhatsApp channel', included: true },
                            { name: '3 months history', included: true },
                            { name: '10 templates', included: true },
                            { name: 'Auto-reply', included: true },
                            { name: 'Keyword bot', included: false },
                            { name: 'AI bot (Claude)', included: false },
                            { name: 'Basic analytics', included: true },
                            { name: 'Email support', included: true },
                        ]
                    },
                    {
                        name: 'Business',
                        price: '15,000',
                        description: 'For growing teams',
                        recommended: true,
                        features: [
                            { name: '5 users', included: true },
                            { name: '5,000 messages/mo', included: true },
                            { name: '1 WhatsApp channel', included: true },
                            { name: '12 months history', included: true },
                            { name: '50 templates', included: true },
                            { name: 'Auto-reply', included: true },
                            { name: 'Keyword bot', included: true },
                            { name: 'AI bot (Claude)', included: false },
                            { name: 'Advanced analytics', included: true },
                            { name: 'Email + Chat support', included: true },
                        ]
                    },
                    {
                        name: 'Professional',
                        price: '25,000',
                        description: 'For high-volume teams',
                        features: [
                            { name: '15 users', included: true },
                            { name: '20,000 messages/mo', included: true },
                            { name: '3 WhatsApp channels', included: true },
                            { name: '24 months history', included: true },
                            { name: 'Unlimited templates', included: true },
                            { name: 'Auto-reply', included: true },
                            { name: 'Keyword bot', included: true },
                            { name: 'AI bot (Claude)', included: true },
                            { name: 'Full analytics + API', included: true },
                            { name: 'Priority support', included: true },
                        ]
                    },
                    {
                        name: 'Enterprise',
                        price: 'Custom',
                        description: 'For large organizations',
                        features: [
                            { name: 'Unlimited users', included: true },
                            { name: 'Unlimited messages', included: true },
                            { name: 'Unlimited channels', included: true },
                            { name: 'Unlimited history', included: true },
                            { name: 'Unlimited templates', included: true },
                            { name: 'Auto-reply', included: true },
                            { name: 'Keyword bot', included: true },
                            { name: 'AI bot (Claude)', included: true },
                            { name: 'Full analytics + API', included: true },
                            { name: 'Dedicated manager', included: true },
                        ]
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Тарифтер',
                title: 'Тарифиңизди тандаңыз',
                subtitle: '30 күн акысыз сыноо. Карта талап кылынбайт.',
                monthly: 'Ай сайын',
                yearly: 'Жыл сайын',
                yearlySave: '20% үнөмдөө',
                perMonth: '/ай',
                perYear: '/жыл',
                users: 'колдонуучулар',
                messages: 'билдирүү/ай',
                channels: 'WhatsApp каналдары',
                history: 'тарых',
                templates: 'шаблондор',
                autoReply: 'Авто-жооп',
                keywordBot: 'Ачкыч сөз боту',
                aiBot: 'AI бот (Claude)',
                analytics: 'Аналитика',
                support: 'Колдоо',
                startTrial: 'Акысыз сынап көрүү',
                contactSales: 'Сатуу менен байланышуу',
                popular: 'Популярдуу',
                plans: [
                    {
                        name: 'Старт',
                        price: '9,000',
                        description: 'Чакан бизнес үчүн',
                        features: [
                            { name: '2 колдонуучу', included: true },
                            { name: '1,000 билдирүү/ай', included: true },
                            { name: '1 WhatsApp канал', included: true },
                            { name: '3 ай тарых', included: true },
                            { name: '10 шаблон', included: true },
                            { name: 'Авто-жооп', included: true },
                            { name: 'Ачкыч сөз боту', included: false },
                            { name: 'AI бот (Claude)', included: false },
                            { name: 'Негизги аналитика', included: true },
                            { name: 'Email колдоо', included: true },
                        ]
                    },
                    {
                        name: 'Бизнес',
                        price: '15,000',
                        description: 'Өсүп жаткан командалар үчүн',
                        recommended: true,
                        features: [
                            { name: '5 колдонуучу', included: true },
                            { name: '5,000 билдирүү/ай', included: true },
                            { name: '1 WhatsApp канал', included: true },
                            { name: '12 ай тарых', included: true },
                            { name: '50 шаблон', included: true },
                            { name: 'Авто-жооп', included: true },
                            { name: 'Ачкыч сөз боту', included: true },
                            { name: 'AI бот (Claude)', included: false },
                            { name: 'Кеңейтилген аналитика', included: true },
                            { name: 'Email + Чат колдоо', included: true },
                        ]
                    },
                    {
                        name: 'Профессионал',
                        price: '25,000',
                        description: 'Чоң командалар үчүн',
                        features: [
                            { name: '15 колдонуучу', included: true },
                            { name: '20,000 билдирүү/ай', included: true },
                            { name: '3 WhatsApp канал', included: true },
                            { name: '24 ай тарых', included: true },
                            { name: 'Чексиз шаблондор', included: true },
                            { name: 'Авто-жооп', included: true },
                            { name: 'Ачкыч сөз боту', included: true },
                            { name: 'AI бот (Claude)', included: true },
                            { name: 'Толук аналитика + API', included: true },
                            { name: 'Приоритеттүү колдоо', included: true },
                        ]
                    },
                    {
                        name: 'Корпоративдик',
                        price: 'Суроо боюнча',
                        description: 'Чоң уюмдар үчүн',
                        features: [
                            { name: 'Чексиз колдонуучулар', included: true },
                            { name: 'Чексиз билдирүүлөр', included: true },
                            { name: 'Чексиз каналдар', included: true },
                            { name: 'Чексиз тарых', included: true },
                            { name: 'Чексиз шаблондор', included: true },
                            { name: 'Авто-жооп', included: true },
                            { name: 'Ачкыч сөз боту', included: true },
                            { name: 'AI бот (Claude)', included: true },
                            { name: 'Толук аналитика + API', included: true },
                            { name: 'Жеке менеджер', included: true },
                        ]
                    }
                ]
            }
        } else {
            return {
                badge: 'Тарифы',
                title: 'Выберите свой тариф',
                subtitle: '30 дней бесплатно. Карта не требуется.',
                monthly: 'Ежемесячно',
                yearly: 'Ежегодно',
                yearlySave: 'Экономия 20%',
                perMonth: '/месяц',
                perYear: '/год',
                users: 'пользователей',
                messages: 'сообщений/мес',
                channels: 'каналов WhatsApp',
                history: 'история',
                templates: 'шаблонов',
                autoReply: 'Автоответчик',
                keywordBot: 'Бот на ключевые слова',
                aiBot: 'AI-бот (Claude)',
                analytics: 'Аналитика',
                support: 'Поддержка',
                startTrial: 'Начать бесплатно',
                contactSales: 'Связаться с нами',
                popular: 'Популярный',
                plans: [
                    {
                        name: 'Старт',
                        price: '9,000',
                        description: 'Для малого бизнеса',
                        features: [
                            { name: '2 пользователя', included: true },
                            { name: '1,000 сообщений/мес', included: true },
                            { name: '1 канал WhatsApp', included: true },
                            { name: '3 месяца история', included: true },
                            { name: '10 шаблонов', included: true },
                            { name: 'Автоответчик', included: true },
                            { name: 'Бот на ключевые слова', included: false },
                            { name: 'AI-бот (Claude)', included: false },
                            { name: 'Базовая аналитика', included: true },
                            { name: 'Email поддержка', included: true },
                        ]
                    },
                    {
                        name: 'Бизнес',
                        price: '15,000',
                        description: 'Для растущих команд',
                        recommended: true,
                        features: [
                            { name: '5 пользователей', included: true },
                            { name: '5,000 сообщений/мес', included: true },
                            { name: '1 канал WhatsApp', included: true },
                            { name: '12 месяцев история', included: true },
                            { name: '50 шаблонов', included: true },
                            { name: 'Автоответчик', included: true },
                            { name: 'Бот на ключевые слова', included: true },
                            { name: 'AI-бот (Claude)', included: false },
                            { name: 'Расширенная аналитика', included: true },
                            { name: 'Email + Чат поддержка', included: true },
                        ]
                    },
                    {
                        name: 'Профессионал',
                        price: '25,000',
                        description: 'Для больших команд',
                        features: [
                            { name: '15 пользователей', included: true },
                            { name: '20,000 сообщений/мес', included: true },
                            { name: '3 канала WhatsApp', included: true },
                            { name: '24 месяца история', included: true },
                            { name: 'Безлимит шаблонов', included: true },
                            { name: 'Автоответчик', included: true },
                            { name: 'Бот на ключевые слова', included: true },
                            { name: 'AI-бот (Claude)', included: true },
                            { name: 'Полная аналитика + API', included: true },
                            { name: 'Приоритетная поддержка', included: true },
                        ]
                    },
                    {
                        name: 'Корпоративный',
                        price: 'По запросу',
                        description: 'Для крупных компаний',
                        features: [
                            { name: 'Безлимит пользователей', included: true },
                            { name: 'Безлимит сообщений', included: true },
                            { name: 'Безлимит каналов', included: true },
                            { name: 'Безлимит истории', included: true },
                            { name: 'Безлимит шаблонов', included: true },
                            { name: 'Автоответчик', included: true },
                            { name: 'Бот на ключевые слова', included: true },
                            { name: 'AI-бот (Claude)', included: true },
                            { name: 'Полная аналитика + API', included: true },
                            { name: 'Выделенный менеджер', included: true },
                        ]
                    }
                ]
            }
        }
    }

    const translations = getTranslations()

    const scrollToContact = () => {
        const element = document.getElementById('whatsapp-contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="pricing" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-400 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>

                    {/* Billing toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm ${!isYearly ? 'text-white' : 'text-white/50'}`}>
                            {translations.monthly}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-green-600' : 'bg-white/20'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isYearly ? 'left-8' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm ${isYearly ? 'text-white' : 'text-white/50'}`}>
                            {translations.yearly}
                        </span>
                        {isYearly && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                {translations.yearlySave}
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {translations.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                                plan.recommended
                                    ? 'bg-gradient-to-b from-green-500/20 to-green-500/5 border-green-500/50'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {translations.popular}
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price === 'По запросу' || plan.price === 'Custom' || plan.price === 'Суроо боюнча'
                                            ? ''
                                            : isYearly
                                                ? Math.round(parseInt(plan.price.replace(',', '')) * 12 * 0.8).toLocaleString()
                                                : plan.price}
                                    </span>
                                    {plan.price !== 'По запросу' && plan.price !== 'Custom' && plan.price !== 'Суроо боюнча' && (
                                        <>
                                            <span className="text-white/60 text-sm">сом</span>
                                            <span className="text-white/60 text-sm">
                                                {isYearly ? translations.perYear : translations.perMonth}
                                            </span>
                                        </>
                                    )}
                                    {(plan.price === 'По запросу' || plan.price === 'Custom' || plan.price === 'Суроо боюнча') && (
                                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-white/80' : 'text-white/40'}`}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${
                                    plan.recommended
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}
                                onPress={scrollToContact}
                            >
                                {plan.price === 'По запросу' || plan.price === 'Custom' || plan.price === 'Суроо боюнча'
                                    ? translations.contactSales
                                    : translations.startTrial}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-12 text-center text-sm text-white/50">
                    <p>
                        {locale === 'en'
                            ? 'Need more users or messages? Contact us for custom options.'
                            : locale === 'ky'
                                ? 'Көбүрөөк колдонуучулар же билдирүүлөр керекпи? Жеке варианттар үчүн биз менен байланышыңыз.'
                                : 'Нужно больше пользователей или сообщений? Свяжитесь с нами для индивидуальных условий.'}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
