'use client'

import React from 'react'
import { motion } from 'framer-motion'

const features = [
    {
        icon: '📋',
        title: 'Цифровое меню',
        description: 'Красивый каталог с фото, описанием, модификаторами. Легко обновлять цены и позиции.'
    },
    {
        icon: '💳',
        title: 'Онлайн-оплата',
        description: 'Visa, Mastercard, Apple Pay, Google Pay, Элкарт. Деньги сразу на ваш счёт.'
    },
    {
        icon: '🖨️',
        title: 'Печать на кухню',
        description: 'Заказ автоматически печатается на кухне и в баре. Интеграция с вашим принтером.'
    },
    {
        icon: '📱',
        title: 'QR-коды для столов',
        description: 'Стильные стикеры с QR-кодами для каждого столика. Мгновенное открытие меню.'
    },
    {
        icon: '🔔',
        title: 'Push-уведомления',
        description: 'Уведомляйте гостей о готовности заказа, акциях и специальных предложениях.'
    },
    {
        icon: '📊',
        title: 'Панель аналитики',
        description: 'Выручка, популярные блюда, часы пик, средний чек — вся статистика в реальном времени.'
    },
    {
        icon: '🔗',
        title: 'Интеграции',
        description: 'Подключение к вашей POS-системе, 1С, R-Keeper и другим решениям.'
    }
]

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider mb-6"
                    >
                        Возможности
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        Всё что нужно для ресторана
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        Полноценная система управления заказами и оплатой
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex gap-5 p-6 bg-[#1a1a24] border border-white/5 rounded-2xl transition-all hover:border-cyan-500/30 hover:translate-x-1 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 min-w-[48px] bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
