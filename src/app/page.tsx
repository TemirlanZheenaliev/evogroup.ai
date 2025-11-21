'use client'

import { NextUIProvider } from '@/components/providers/NextUIProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import Solutions from '@/components/sections/Solutions'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
// import TestimonialsSection from '@/components/sections/TestimonialsSection'
// import AICalculatorSection from '@/components/sections/AICalculatorSection'
// import PortfolioGallery from '@/components/sections/PortfolioGallery'
import AIChatbotSection from '@/components/sections/AIChatbotSection'
// import SuccessStories from '@/components/sections/SuccessStories'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'
import TrustSignals from '@/components/sections/TrustSignals'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'

export default function Home() {
    return (
        <NextUIProvider>
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
                    <Solutions />
                    <CompetitiveAdvantages />
                    <TechnologyShowcase />
                    {/* <AICalculatorSection /> */}
                    <AIChatbotSection />
                    {/* <SuccessStories /> */}
                    {/* <TestimonialsSection /> */}
                    <Team />
                    <TrustSignals />
                    <ContactForm />
                    {/* <PortfolioGallery /> */}
                    <Footer />
                </div>
            </I18nProvider>
        </NextUIProvider>
    )
}