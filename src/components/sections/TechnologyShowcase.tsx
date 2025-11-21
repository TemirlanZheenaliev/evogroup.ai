'use client'

import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { useTranslation } from '@/components/providers/I18nProvider'

const TechnologyShowcase: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                preTitle: 'Technology',
                title: 'Cutting-edge AI stack',
                subtitle: 'We use the most advanced technologies to create reliable and scalable solutions',
                ai: 'Artificial Intelligence',
                cloud: 'Cloud Infrastructure',
                security: 'Enterprise Security'
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Технология',
                title: 'Алдыңкы ИИ стек',
                subtitle: 'Ишенимдүү жана масштабдалуучу чечимдерди түзүү үчүн эң өнүккөн технологияларды колдонобуз',
                ai: 'Жасалма интеллект',
                cloud: 'Булут инфраструктурасы',
                security: 'Корпоративдүү коопсуздук'
            }
        } else {
            return {
                preTitle: 'Технологии',
                title: 'Передовой AI стек',
                subtitle: 'Используем самые современные технологии для создания надежных и масштабируемых решений',
                ai: 'Искусственный интеллект',
                cloud: 'Облачная инфраструктура',
                security: 'Корпоративная безопасность'
            }
        }
    }

    const translations = getTranslations()

    const techStack = [
        { name: 'TensorFlow', category: 'ai', color: 'bg-orange-500/20' },
        { name: 'PyTorch', category: 'ai', color: 'bg-red-500/20' },
        { name: 'Kubernetes', category: 'cloud', color: 'bg-blue-500/20' },
        { name: 'AWS', category: 'cloud', color: 'bg-yellow-500/20' },
        { name: 'Docker', category: 'cloud', color: 'bg-cyan-500/20' },
        { name: 'PostgreSQL', category: 'cloud', color: 'bg-indigo-500/20' },
        { name: 'ISO 27001', category: 'security', color: 'bg-green-500/20' },
        { name: 'GDPR', category: 'security', color: 'bg-purple-500/20' },
    ]

    return (
        <section id="technology" className="relative py-32 overflow-hidden">
            {/* Section header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90">
                    {translations.preTitle}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {translations.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                    {translations.subtitle}
                </p>
            </div>

            {/* Tech categories */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/8 transition-all duration-300">
                        <CardBody className="p-8 text-center">
                            <div className="text-4xl mb-4">🧠</div>
                            <h3 className="text-xl font-bold text-white mb-2">{translations.ai}</h3>
                            <p className="text-white/60 text-sm">Machine Learning, Deep Learning, NLP</p>
                        </CardBody>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/8 transition-all duration-300">
                        <CardBody className="p-8 text-center">
                            <div className="text-4xl mb-4">☁️</div>
                            <h3 className="text-xl font-bold text-white mb-2">{translations.cloud}</h3>
                            <p className="text-white/60 text-sm">Scalable, Reliable, High-Performance</p>
                        </CardBody>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/8 transition-all duration-300">
                        <CardBody className="p-8 text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-white mb-2">{translations.security}</h3>
                            <p className="text-white/60 text-sm">Certified, Compliant, Protected</p>
                        </CardBody>
                    </Card>
                </div>

                {/* Tech stack chips */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                    <CardBody className="p-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {techStack.map((tech) => (
                                <Chip
                                    key={tech.name}
                                    variant="flat"
                                    className={`${tech.color} text-white font-medium px-4 py-6 text-base hover:scale-105 transition-transform cursor-pointer`}
                                >
                                    {tech.name}
                                </Chip>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    )
}

export default TechnologyShowcase
