import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import TrustSignals from '@/components/sections/TrustSignals'
import Solutions from '@/components/sections/Solutions'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
import SuccessStories from '@/components/sections/SuccessStories'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <ModernHeader />
      <main>
        <ModernHero />
        <TrustSignals />
        <Solutions />
        <TechnologyShowcase />
        <SuccessStories />
        <CompetitiveAdvantages />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}