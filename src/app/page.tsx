'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import Solutions from '@/components/sections/Solutions'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
// import TestimonialsSection from '@/components/sections/TestimonialsSection'
// import AICalculatorSection from '@/components/sections/AICalculatorSection'
// import PortfolioGallery from '@/components/sections/PortfolioGallery'
import AIChatbotSection from '@/components/sections/AIChatbotSection'
import SuccessStories from '@/components/sections/SuccessStories'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'
import TrustSignals from '@/components/sections/TrustSignals'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'

export default function Home() {
    return (
        <I18nProvider initialLocale="ru">
            <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <ModernHeader />
                <ModernHero />
                <Solutions />
                <CompetitiveAdvantages />
                <TechnologyShowcase />
                {/* <AICalculatorSection /> */}
                <AIChatbotSection />
                <SuccessStories />
                {/* <TestimonialsSection /> */}
                <Team />
                <TrustSignals />
                <ContactForm />
                {/* <PortfolioGallery /> */}
                <Footer />
            </div>
        </I18nProvider>
    )
}