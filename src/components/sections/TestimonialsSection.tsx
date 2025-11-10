'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

interface Testimonial {
    id: number
    name: string
    position: string
    company: string
    content: string
    avatar: string
    rating: number
    project: string
}

const TestimonialsSection: React.FC = () => {
    const { locale } = useTranslation()
    const [currentSlide, setCurrentSlide] = useState(0)

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Results Speak for Themselves',
                subtitle: 'Over 50 successful projects for leading companies and organizations in Kyrgyzstan',
                badge: 'Our Client Reviews',
                navigation: {
                    prev: 'Previous',
                    next: 'Next'
                },
                stats: [
                    { value: '50+', label: 'Satisfied Clients' },
                    { value: '95%', label: 'Satisfaction' },
                    { value: '24/7', label: 'Support' },
                    { value: '15+', label: 'Years Experience' }
                ]
            }
        } else if (locale === 'ky') {
            return {
                title: 'Натыйжалар өзү үчүн сүйлөйт',
                subtitle: 'Кыргызстандын алдыңкы компаниялары жана уюмдары үчүн 50дөн ашык ийгиликтүү долбоор',
                badge: 'Кардарлардын пикирлери',
                navigation: {
                    prev: 'Мурунку',
                    next: 'Кийинки'
                },
                stats: [
                    { value: '50+', label: 'Канааттанган кардар' },
                    { value: '95%', label: 'Канааттануу' },
                    { value: '24/7', label: 'Колдоо' },
                    { value: '15+', label: 'Жыл тажрыйба' }
                ]
            }
        } else {
            return {
                title: 'Результаты говорят за нас',
                subtitle: 'Более 50 успешных проектов для ведущих компаний и организаций Кыргызстана',
                badge: 'Отзывы наших клиентов',
                navigation: {
                    prev: 'Предыдущий',
                    next: 'Следующий'
                },
                stats: [
                    { value: '50+', label: 'Довольных клиентов' },
                    { value: '95%', label: 'Удовлетворенность' },
                    { value: '24/7', label: 'Поддержка' },
                    { value: '15+', label: 'Лет опыта' }
                ]
            }
        }
    }

    // Данные отзывов с переводами
    const getTestimonials = (): Testimonial[] => {
        if (locale === 'en') {
            return [
                {
                    id: 1,
                    name: "Almaz Sydykov",
                    position: "IT Director",
                    company: "Demir Bank",
                    content: "FiscalePro completely transformed our credit scoring processes. Risk assessment accuracy increased by 35%, and application processing time decreased by 3x. Incredible results in such a short implementation period.",
                    avatar: "AS",
                    rating: 5,
                    project: "Credit Scoring System"
                },
                {
                    id: 2,
                    name: "Gulnara Toktosunova",
                    position: "Deputy Chairperson",
                    company: "Ministry of Digital Development KR",
                    content: "Automating citizen request processing with AI increased review speed by 60%. The quality and transparency of government services have reached a new level.",
                    avatar: "GT",
                    rating: 5,
                    project: "Digital Government Services"
                },
                {
                    id: 3,
                    name: "Mirlan Zhaparov",
                    position: "General Director",
                    company: "KyrgyzGas",
                    content: "Predictive analytics for gas pipeline maintenance reduced emergency situations by 45% and saved us over $2M per year. The FiscalePro team are true professionals.",
                    avatar: "MZ",
                    rating: 5,
                    project: "Predictive Maintenance"
                },
                {
                    id: 4,
                    name: "Aigul Omurzakova",
                    position: "Financial Director",
                    company: "KICB",
                    content: "The AI system for detecting fraudulent operations works around the clock and blocks 98% of suspicious transactions. Fraud losses decreased 8-fold.",
                    avatar: "AO",
                    rating: 5,
                    project: "Anti-fraud System"
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    id: 1,
                    name: "Алмаз Сыдыков",
                    position: "IT директору",
                    company: "Демир Банк",
                    content: "ФискалеПро биздин кредиттик скоринг процесстерин толугу менен өзгөрттү. Тобокелдикти баалоонун тактыгы 35%га өстү, ал эми өтүнүчтөрдү иштетүү убактысы 3 эсе кыскарды. Мындай кыска орнотуу мезгилинде укмуштуудай натыйжалар.",
                    avatar: "АС",
                    rating: 5,
                    project: "Кредиттик скоринг системасы"
                },
                {
                    id: 2,
                    name: "Гүлнара Токтосунова",
                    position: "Төрага орун басары",
                    company: "КРнын Санариптик өнүктүрүү министрлиги",
                    content: "ИИ жардамы менен жарандардын кайрылууларын иштетүүнү автоматташтыруу карооонун ылдамдыгын 60%га жогорулатты. Мамлекеттик кызматтардын сапаты жана ачыктыгы жаңы деңгээлге чыкты.",
                    avatar: "ГТ",
                    rating: 5,
                    project: "Санариптик мамкызматтар"
                },
                {
                    id: 3,
                    name: "Мирлан Жапаров",
                    position: "Башкы директор",
                    company: "КыргызГаз",
                    content: "Газ түтүктөрүн тейлөө үчүн алдын ала аналитика авариялык кырдаалдарды 45%га азайтты жана бизге жылына $2Мдан ашык үнөмдөдү. ФискалеПро командасы - чыныгы кесипкөйлөр.",
                    avatar: "МЖ",
                    rating: 5,
                    project: "Алдын ала тейлөө"
                },
                {
                    id: 4,
                    name: "Айгүл Омурзакова",
                    position: "Каржы директору",
                    company: "KICB",
                    content: "Алдамчылык операцияларын аныктоо үчүн ИИ система түнү күндүз иштейт жана шектүү транзакциялардын 98%ын бөгөт коёт. Алдамчылыктан улам болгон чыгашалар 8 эсе азайды.",
                    avatar: "АО",
                    rating: 5,
                    project: "Алдамчылыкка каршы система"
                }
            ]
        } else {
            return [
                {
                    id: 1,
                    name: "Алмаз Сыдыков",
                    position: "Директор по IT",
                    company: "Демир Банк",
                    content: "ФискалеПро полностью трансформировала наши процессы кредитного скоринга. Точность оценки рисков выросла на 35%, а время обработки заявок сократилось в 3 раза. Невероятные результаты за такой короткий срок внедрения.",
                    avatar: "АС",
                    rating: 5,
                    project: "Система кредитного скоринга"
                },
                {
                    id: 2,
                    name: "Гульнара Токтосунова",
                    position: "Заместитель председателя",
                    company: "Министерство цифрового развития КР",
                    content: "Автоматизация обработки обращений граждан с помощью ИИ позволила увеличить скорость рассмотрения на 60%. Качество и прозрачность государственных услуг вышли на новый уровень.",
                    avatar: "ГТ",
                    rating: 5,
                    project: "Цифровые госуслуги"
                },
                {
                    id: 3,
                    name: "Мирлан Жапаров",
                    position: "Генеральный директор",
                    company: "КыргызГаз",
                    content: "Предиктивная аналитика для обслуживания газопроводов снизила аварийные ситуации на 45% и сэкономила нам более $2М в год. Команда ФискалеПро - настоящие профессионалы своего дела.",
                    avatar: "МЖ",
                    rating: 5,
                    project: "Предиктивное обслуживание"
                },
                {
                    id: 4,
                    name: "Айгуль Омурзакова",
                    position: "Финансовый директор",
                    company: "KICB",
                    content: "ИИ-система для определения мошеннических операций работает круглосуточно и блокирует 98% подозрительных транзакций. Потери от мошенничества снизились в 8 раз.",
                    avatar: "АО",
                    rating: 5,
                    project: "Антифрод система"
                }
            ]
        }
    }

    const translations = getTranslations()
    const testimonials = getTestimonials()

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000)
        return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testimonials.length])

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <section id="testimonials" className="py-24 bg-slate-800/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
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

                {/* Testimonial Slider */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Avatar and Company Info */}
                            <div className="flex-shrink-0 text-center md:text-left">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto md:mx-0 hover:scale-110 transition-transform duration-200">
                                    {testimonials[currentSlide].avatar}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {testimonials[currentSlide].name}
                                </h3>
                                <p className="text-white/70 text-sm mb-1">
                                    {testimonials[currentSlide].position}
                                </p>
                                <p className="text-white/60 text-sm mb-3">
                                    {testimonials[currentSlide].company}
                                </p>
                                <div className="flex justify-center md:justify-start mb-3">
                                    {renderStars(testimonials[currentSlide].rating)}
                                </div>
                                <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">
                                    {testimonials[currentSlide].project}
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className="flex-1">
                                <svg className="w-8 h-8 text-blue-400/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                    <path d="M13.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                </svg>
                                <p className="text-white/90 text-lg leading-relaxed mb-6">
                                    {testimonials[currentSlide].content}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentSlide
                                        ? 'bg-blue-500 scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`${locale === 'en' ? 'Go to slide' : locale === 'ky' ? 'Слайдка өтүү' : 'Перейти к слайду'} ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    {translations.stats.map((stat, index) => (
                        <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200 hover:scale-105">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {locale === 'en'
                            ? "Ready to become our next success story?"
                            : locale === 'ky'
                                ? "Кийинки ийгиликтүү мисалыбыз болууга дайынсызбы?"
                                : "Готовы стать следующим успешным кейсом?"
                        }
                    </h3>
                    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                        {locale === 'en'
                            ? "Tell us about your challenges, and we'll show how AI can help your business"
                            : locale === 'ky'
                                ? "Тапшырмаларыңыз жөнүндө айтыңыз, ИИ сиздин бизнесиңизге кантип жардам бере тургандыгын көрсөтөбүз"
                                : "Расскажите о своих задачах, и мы покажем, как ИИ поможет вашему бизнесу"
                        }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                            {locale === 'en' ? 'Discuss Project' : locale === 'ky' ? 'Долбоорду талкуулоо' : 'Обсудить проект'}
                        </button>
                        <button className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                            {locale === 'en' ? 'View All Cases' : locale === 'ky' ? 'Бардык мисалдарды көрүү' : 'Посмотреть все кейсы'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection