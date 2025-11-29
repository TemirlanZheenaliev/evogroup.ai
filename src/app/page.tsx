'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import TrustSignals from '@/components/sections/TrustSignals'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'
import { Card, CardBody, Button } from '@nextui-org/react'

export default function Home() {
    return (
        <I18nProvider initialLocale="ru">
                <div className="relative min-h-screen bg-black">
                    {/* Apple-style gradient background */}
                    <div className="fixed inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-float" />
                        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-indigo-500/15 rounded-full blur-[110px] animate-float" style={{animationDelay: '4s'}} />
                    </div>

                    <ModernHeader />
                    <ModernHero />

                    {/* Quick Links Section */}
                    <section className="relative py-24">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                                Узнайте больше
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <Link href="/solutions">
                                    <Card isPressable className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full">
                                        <CardBody className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Решения</h3>
                                            <p className="text-white/60">AI-системы для разных отраслей</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                                <Link href="/cases">
                                    <Card isPressable className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full">
                                        <CardBody className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Кейсы</h3>
                                            <p className="text-white/60">Наши проекты и результаты</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                                <Link href="/technology">
                                    <Card isPressable className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full">
                                        <CardBody className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Технологии</h3>
                                            <p className="text-white/60">Современный AI стек</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                                <Link href="/team">
                                    <Card isPressable className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full">
                                        <CardBody className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Команда</h3>
                                            <p className="text-white/60">Познакомьтесь с экспертами</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <TrustSignals />

                    {/* CTA Section */}
                    <section className="relative py-24">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Готовы начать проект?
                            </h2>
                            <p className="text-xl text-white/70 mb-8">
                                Свяжитесь с нами и мы обсудим, как AI может улучшить ваш бизнес
                            </p>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg"
                                >
                                    Связаться с нами
                                </Button>
                            </Link>
                        </div>
                    </section>

                    <Footer />
                </div>
        </I18nProvider>
    )
}