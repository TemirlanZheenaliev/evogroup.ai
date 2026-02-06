'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingPlan {
    name: string
    price: string
    yearlyPrice?: string
    description: string
    features: { name: string; included: boolean }[]
    recommended?: boolean
}

const plans: PricingPlan[] = [
    {
        name: 'Старт',
        price: '5,000',
        yearlyPrice: '48,000',
        description: 'Для небольших кафе',
        features: [
            { name: 'До 10 столов', included: true },
            { name: 'Цифровое меню', included: true },
            { name: 'QR-коды', included: true },
            { name: 'Онлайн-оплата', included: true },
            { name: 'Базовая аналитика', included: true },
            { name: 'Email поддержка', included: true },
            { name: 'Печать на кухню', included: false },
            { name: 'Push-уведомления', included: false },
            { name: 'Интеграция с POS', included: false },
            { name: 'Выделенный менеджер', included: false },
        ]
    },
    {
        name: 'Бизнес',
        price: '12,000',
        yearlyPrice: '115,200',
        description: 'Для ресторанов',
        recommended: true,
        features: [
            { name: 'До 30 столов', included: true },
            { name: 'Цифровое меню', included: true },
            { name: 'QR-коды', included: true },
            { name: 'Онлайн-оплата', included: true },
            { name: 'Расширенная аналитика', included: true },
            { name: 'Чат + Email поддержка', included: true },
            { name: 'Печать на кухню', included: true },
            { name: 'Push-уведомления', included: true },
            { name: 'Интеграция с POS', included: false },
            { name: 'Выделенный менеджер', included: false },
        ]
    },
    {
        name: 'Профессионал',
        price: '25,000',
        yearlyPrice: '240,000',
        description: 'Для сетей ресторанов',
        features: [
            { name: 'До 100 столов', included: true },
            { name: 'Цифровое меню', included: true },
            { name: 'QR-коды', included: true },
            { name: 'Онлайн-оплата', included: true },
            { name: 'Полная аналитика + API', included: true },
            { name: 'Приоритетная поддержка', included: true },
            { name: 'Печать на кухню', included: true },
            { name: 'Push-уведомления', included: true },
            { name: 'Интеграция с POS', included: true },
            { name: 'Выделенный менеджер', included: false },
        ]
    },
    {
        name: 'Корпоративный',
        price: 'По запросу',
        description: 'Для крупных сетей',
        features: [
            { name: 'Неограниченно столов', included: true },
            { name: 'Цифровое меню', included: true },
            { name: 'QR-коды', included: true },
            { name: 'Онлайн-оплата', included: true },
            { name: 'Полная аналитика + API', included: true },
            { name: 'Приоритетная поддержка 24/7', included: true },
            { name: 'Печать на кухню', included: true },
            { name: 'Push-уведомления', included: true },
            { name: 'Интеграция с POS', included: true },
            { name: 'Выделенный менеджер', included: true },
        ]
    }
]

const EvoPayPricingSection: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false)

    const scrollToDemo = () => {
        const element = document.getElementById('evopay-demo')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const formatPrice = (plan: PricingPlan) => {
        if (plan.price === 'По запросу') {
            return plan.price
        }
        if (isYearly && plan.yearlyPrice) {
            return plan.yearlyPrice
        }
        return plan.price
    }

    return (
        <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-6"
                    >
                        Тарифы
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        Стоимость программы
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        Первый месяц — бесплатно. Выберите тариф под ваш бизнес.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mt-8"
                    >
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-white/50'}`}>
                            Ежемесячно
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-cyan-600' : 'bg-white/20'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${isYearly ? 'left-8' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-white/50'}`}>
                            Ежегодно
                        </span>
                        {isYearly && (
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                                Экономия 20%
                            </span>
                        )}
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                                plan.recommended
                                    ? 'bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 border-cyan-500/50'
                                    : 'bg-[#1a1a24] border-white/10 hover:border-white/20'
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                                        Популярный
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    {plan.price !== 'По запросу' ? (
                                        <>
                                            <span className="text-4xl font-bold text-white">
                                                {formatPrice(plan)}
                                            </span>
                                            <span className="text-white/60 text-sm">сом</span>
                                            <span className="text-white/60 text-sm">
                                                {isYearly ? '/год' : '/месяц'}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                            <button
                                onClick={scrollToDemo}
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                                    plan.recommended
                                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:shadow-lg hover:shadow-cyan-500/30'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}
                            >
                                {plan.price === 'По запросу' ? 'Связаться с нами' : 'Попробовать бесплатно'}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center text-sm text-white/50"
                >
                    <p>
                        Нужно больше столов или особые условия? Оставьте заявку — подберём индивидуальное решение.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default EvoPayPricingSection
