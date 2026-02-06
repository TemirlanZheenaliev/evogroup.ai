'use client'

import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
    {
        icon: '📈',
        title: 'Рост среднего чека',
        description: 'Красивые фото блюд, рекомендации и апсейлы увеличивают заказ. Гость видит весь ассортимент.',
        statValue: '+30%',
        statLabel: 'к среднему чеку'
    },
    {
        icon: '⚡',
        title: 'Быстрое обслуживание',
        description: 'Заказ сразу на кухне. Нет очередей, нет ожидания. Оборачиваемость столов растёт.',
        statValue: '2x',
        statLabel: 'быстрее обслуживание'
    },
    {
        icon: '💰',
        title: 'Экономия на персонале',
        description: 'Меньше официантов в зале. Они фокусируются на сервисе, а не на приёме заказов.',
        statValue: '-40%',
        statLabel: 'расходы на персонал'
    },
    {
        icon: '✅',
        title: 'Ноль ошибок',
        description: 'Гость сам вводит заказ — нет искажений. Меньше конфликтов и возвратов.',
        statValue: '0',
        statLabel: 'ошибок в заказах'
    },
    {
        icon: '📊',
        title: 'Аналитика и данные',
        description: 'Понимайте, что заказывают, в какое время, какие блюда популярны. Принимайте решения на данных.',
        statValue: '24/7',
        statLabel: 'статистика онлайн'
    }
]

const BenefitsSection: React.FC = () => {
    return (
        <section id="benefits" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-6"
                    >
                        Преимущества
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        Почему рестораны выбирают EvoPay
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        Реальные результаты, которые влияют на прибыль
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/30 group overflow-hidden"
                        >
                            {/* Top Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Icon */}
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed mb-6">
                                {benefit.description}
                            </p>

                            {/* Stat */}
                            <div className="pt-5 border-t border-white/10 flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold text-emerald-400">
                                    {benefit.statValue}
                                </span>
                                <span className="text-sm text-white/50">
                                    {benefit.statLabel}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection
