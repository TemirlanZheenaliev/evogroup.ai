'use client'

import { useTranslation } from '@/components/providers/I18nProvider'

export default function Team() {
    const { locale } = useTranslation()

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Our Team',
                subtitle: 'Experienced specialists in artificial intelligence',
                description: 'Team of experts with deep knowledge in AI, machine learning and enterprise development',
                experience: 'years',
                joinTeam: 'Join Our Team',
                openPositions: 'Open Positions',
                ourCulture: 'Our Culture',
                stats: {
                    totalMembers: 'Team Members',
                    avgExperience: 'Avg Experience',
                    seniorLevel: 'Senior Level',
                    certifications: 'Certifications'
                }
            }
        } else if (locale === 'ky') {
            return {
                title: 'Биздин команда',
                subtitle: 'Жасалма интеллект тармагындагы тажрыйбалуу адистер',
                description: 'ИИ, машина үйрөнүү жана корпоративдүү иштеп чыгуу тармагында терең билимге ээ адистердин командасы',
                experience: 'жыл',
                joinTeam: 'Командага кошулуңуз',
                openPositions: 'Ачык вакансиялар',
                ourCulture: 'Биздин маданият',
                stats: {
                    totalMembers: 'Команда мүчөлөрү',
                    avgExperience: 'Орточо тажрыйба',
                    seniorLevel: 'Жогорку деңгээл',
                    certifications: 'Сертификаттар'
                }
            }
        } else {
            return {
                title: 'Наша команда',
                subtitle: 'Опытные специалисты в области искусственного интеллекта',
                description: 'Команда экспертов с глубокими знаниями в области ИИ, машинного обучения и enterprise-разработки',
                experience: 'лет',
                joinTeam: 'Присоединяйтесь к команде',
                openPositions: 'Открытые вакансии',
                ourCulture: 'Наша культура',
                stats: {
                    totalMembers: 'Участников команды',
                    avgExperience: 'Средний опыт',
                    seniorLevel: 'Уровень Senior',
                    certifications: 'Сертификации'
                }
            }
        }
    }

    // Данные команды с переводами
    const getTeamMembers = () => {
        if (locale === 'en') {
            return [
                {
                    id: 'ceo',
                    name: 'Vadim Berkovich',
                    position: 'CTO & AI Architect',
                    experience: '15+ years in DevTech',
                    initials: 'VB',
                    gradient: 'from-blue-400 to-purple-600',
                    hoverColor: 'blue-400'
                },
                {
                    id: 'cto',
                    name: 'Alibek Omorov',
                    position: 'CEO & Oil-Gas Dept Lead',
                    experience: '10+ years in IT Tech',
                    initials: 'AO',
                    gradient: 'from-purple-400 to-pink-600',
                    hoverColor: 'purple-400'
                },
                {
                    id: 'lead_dev',
                    name: 'Bekzat Omuraliev',
                    position: 'Lead Developer',
                    experience: '10+ years in development',
                    initials: 'BO',
                    gradient: 'from-green-400 to-blue-600',
                    hoverColor: 'green-400'
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    id: 'ceo',
                    name: 'Вадим Беркович',
                    position: 'Техникалык директор жана ИИ архитектору',
                    experience: 'DevTech тармагында 15+ жыл',
                    initials: 'ВБ',
                    gradient: 'from-blue-400 to-purple-600',
                    hoverColor: 'blue-400'
                },
                {
                    id: 'cto',
                    name: 'Алибек Оморов',
                    position: 'Башкы директор жана мунай-газ бөлүмүнүн жетекчиси',
                    experience: 'IT Tech тармагында 10+ жыл',
                    initials: 'АО',
                    gradient: 'from-purple-400 to-pink-600',
                    hoverColor: 'purple-400'
                },
                {
                    id: 'lead_dev',
                    name: 'Бекзат Омуралиев',
                    position: 'Жетекчи иштеп чыгуучу',
                    experience: 'Иштеп чыгуу тармагында 10+ жыл',
                    initials: 'БО',
                    gradient: 'from-green-400 to-blue-600',
                    hoverColor: 'green-400'
                }
            ]
        } else {
            return [
                {
                    id: 'ceo',
                    name: 'Вадим Беркович',
                    position: 'CTO & AI Architect',
                    experience: '15+ лет в DevTech',
                    initials: 'ВБ',
                    gradient: 'from-blue-400 to-purple-600',
                    hoverColor: 'blue-400'
                },
                {
                    id: 'cto',
                    name: 'Алибек Оморов',
                    position: 'CEO & Oil-Gas Dept Lead',
                    experience: '10+ лет в IT Tech',
                    initials: 'АО',
                    gradient: 'from-purple-400 to-pink-600',
                    hoverColor: 'purple-400'
                },
                {
                    id: 'lead_dev',
                    name: 'Бекзат Омуралиев',
                    position: 'Lead Developer',
                    experience: '10+ лет в разработке',
                    initials: 'БО',
                    gradient: 'from-green-400 to-blue-600',
                    hoverColor: 'green-400'
                }
            ]
        }
    }

    // Статистика команды
    const getTeamStats = () => {
        if (locale === 'en') {
            return [
                { value: '25+', label: 'Team Members' },
                { value: '8', label: 'Avg Experience' },
                { value: '85%', label: 'Senior Level' },
                { value: '50+', label: 'Certifications' }
            ]
        } else if (locale === 'ky') {
            return [
                { value: '25+', label: 'Команда мүчөсү' },
                { value: '8', label: 'Орточо тажрыйба' },
                { value: '85%', label: 'Жогорку деңгээл' },
                { value: '50+', label: 'Сертификат' }
            ]
        } else {
            return [
                { value: '25+', label: 'Участников' },
                { value: '8', label: 'Средний опыт' },
                { value: '85%', label: 'Уровень Senior' },
                { value: '50+', label: 'Сертификации' }
            ]
        }
    }

    const translations = getTranslations()
    const teamMembers = getTeamMembers()
    const teamStats = getTeamStats()

    return (
        <section id="team" className="px-6 py-24 bg-slate-800/30 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        {translations.title}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="text-center group">
                            <div className="relative mb-6">
                                <div className={`w-40 h-40 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                                        {member.initials}
                                    </div>
                                </div>
                                <div className={`absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br ${member.gradient.replace('400', '400/30').replace('600', '600/30')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                            </div>
                            <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-${member.hoverColor} transition-colors`}>
                                {member.name}
                            </h3>
                            <p className={`text-${member.hoverColor} font-semibold mb-2`}>
                                {member.position}
                            </p>
                            <p className="text-white/60 text-sm">
                                {member.experience}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Team Statistics */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {teamStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Culture Values */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        {translations.ourCulture}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: locale === 'en' ? 'Innovation' : locale === 'ky' ? 'Инновация' : 'Инновации',
                                description: locale === 'en' ? 'Continuously learning new technologies' : locale === 'ky' ? 'Жаңы технологияларды үзгүлтүксүз үйрөнүү' : 'Постоянно изучаем новые технологии',
                                icon: '💡'
                            },
                            {
                                title: locale === 'en' ? 'Quality' : locale === 'ky' ? 'Сапат' : 'Качество',
                                description: locale === 'en' ? 'High standards for code and architecture' : locale === 'ky' ? 'Код жана архитектура үчүн жогорку стандарттар' : 'Высокие стандарты кода и архитектуры',
                                icon: '⚡'
                            },
                            {
                                title: locale === 'en' ? 'Collaboration' : locale === 'ky' ? 'Кызматташуу' : 'Сотрудничество',
                                description: locale === 'en' ? 'Open communication and mutual support' : locale === 'ky' ? 'Ачык баарлашуу жана өз ара жардам' : 'Открытое общение и взаимопомощь',
                                icon: '🤝'
                            },
                            {
                                title: locale === 'en' ? 'Growth' : locale === 'ky' ? 'Өсүү' : 'Рост',
                                description: locale === 'en' ? 'Investing in every employee\'s development' : locale === 'ky' ? 'Ар бир кызматкердин өнүгүүсү' : 'Инвестируем в развитие каждого',
                                icon: '📈'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200">
                                <div className="text-3xl mb-3">{value.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                                <p className="text-white/60 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join Team CTA */}
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {translations.joinTeam}
                    </h3>
                    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                        {locale === 'en'
                            ? "We're always looking for talented specialists to work on interesting projects"
                            : locale === 'ky'
                                ? "Биз кызыктуу долбоорлор боюнча иштөө үчүн талантуу адистерди дайыма издейбиз"
                                : "Мы всегда ищем талантливых специалистов для работы над интересными проектами"
                        }
                    </p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                        {translations.openPositions}
                    </button>
                </div>
            </div>
        </section>
    )
}