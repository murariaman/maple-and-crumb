import { content } from './content'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import OrderSection from './components/OrderSection'
import InfoSection from './components/InfoSection'
import FeedbackSection from './components/FeedbackSection'
import Galaxy from './components/Galaxy'
import ClickSpark from './components/ClickSpark'
import Astro from './components/Astro'

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      {/* Dark ending: a slow React Bits Galaxy starfield behind the order, info and feedback
          sections, with a spark on every click (React Bits ClickSpark). */}
      <div className="relative">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Galaxy
            backgroundColor="#0C0C0C"
            starColors={['#FFFFFF', '#D7E2EA', '#B600A8', '#7621B0']}
            density={0.7}
            speed={0.6}
            glowIntensity={0.2}
            twinkleIntensity={0.35}
            saturation={0.5}
            dpr={1}
          />
        </div>
        <div className="relative z-10">
          <ClickSpark sparkColor="#D7E2EA" sparkSize={12} sparkRadius={22} sparkCount={10}>
            <OrderSection />
            <InfoSection />
            <FeedbackSection />
            <footer className="px-5 pb-12 text-center text-sm font-light text-[#D7E2EA]/70 sm:px-8 md:px-10">
              <Astro say={content.mascot.footer} delay={0.6} className="mb-6" />
              <p>
                <a href={`mailto:${content.footer.email}`} className="underline underline-offset-4 hover:opacity-70">
                  {content.footer.email}
                </a>
              </p>
              <p className="mt-2">{content.footer.disclaimer}</p>
            </footer>
          </ClickSpark>
        </div>
      </div>
    </main>
  )
}
