'use client'

import React from 'react'
import { motion } from 'framer-motion'

const problems = [
    {
        icon: '⏳',
        title: 'Долгое ожидание официанта',
        description: 'Гости ждут по 10-15 минут, чтобы сделать заказ или получить счёт. Раздражение растёт — чаевые падают.'
    },
    {
        icon: '📉',
        title: 'Низкий средний чек',
        description: 'Официант не всегда предлагает дополнительные позиции. Гости не видят весь ассортимент и заказывают меньше.'
    },
    {
        icon: '😤',
        title: 'Ошибки в заказах',
        description: 'Официант неправильно услышал, забыл передать на кухню, перепутал столики. Конфликты и возвраты.'
    },
    {
        icon: '💸',
        title: 'Высокие расходы на персонал',
        description: 'Нужно больше официантов в час-пик, обучение новичков, текучка кадров — всё это съедает прибыль.'
    }
]

const ProblemSection: React.FC = () => {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-red-500/10 rounded-full text-xs font-bold text-red-400 uppercase tracking-wider mb-6"
                    >
                        Проблема
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        Знакомые ситуации?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        Каждый день рестораны теряют деньги и клиентов из-за устаревших процессов
                    </motion.p>
                </div>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:border-red-500/30 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-red-500/15 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemSection
