import { content } from './content'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import OrderSection from './components/OrderSection'
import InfoSection from './components/InfoSection'
import FeedbackSection from './components/FeedbackSection'

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <OrderSection />
      <InfoSection />
      <FeedbackSection />
      <footer className="bg-[#0C0C0C] px-5 pb-12 text-center text-sm font-light text-[#D7E2EA]/70 sm:px-8 md:px-10">
        <p>
          <a href={`mailto:${content.footer.email}`} className="underline underline-offset-4 hover:opacity-70">
            {content.footer.email}
          </a>
        </p>
        <p className="mt-2">{content.footer.disclaimer}</p>
      </footer>
    </main>
  )
}
