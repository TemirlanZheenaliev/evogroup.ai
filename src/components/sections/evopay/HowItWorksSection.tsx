'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
    {
        number: 1,
        icon: '📱',
        title: 'Сканирует',
        description: 'Гость сканирует QR-код на столе с помощью камеры телефона'
    },
    {
        number: 2,
        icon: '🍽️',
        title: 'Выбирает',
        description: 'Открывается цифровое меню с фото, описанием и ценами. Добавляет блюда в корзину'
    },
    {
        number: 3,
        icon: '🍜',
        title: 'Получает',
        description: 'Заказ автоматически уходит на кухню. Гость наслаждается едой'
    },
    {
        number: 4,
        icon: '💳',
        title: 'Оплачивает',
        description: 'Оплата картой, Apple Pay, Google Pay. Мгновенно и безопасно'
    }
]

const HowItWorksSection: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-6"
                    >
                        Как это работает
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        4 простых шага
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        От сканирования до оплаты — меньше минуты
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-30 hidden lg:block" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center relative"
                            >
                                {/* Step Number */}
                                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-[#1a1a24] border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                    <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="text-4xl mb-4">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
