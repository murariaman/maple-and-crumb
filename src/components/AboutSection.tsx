import { content } from '../content'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/'

export default function AboutSection() {
  const { about, hero } = content
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <img src={`${BASE}moon_icon.11395d36.png`} alt="" loading="lazy" className="h-auto w-full" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <img src={`${BASE}p59_1.4659672e.png`} alt="" loading="lazy" className="h-auto w-full" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <img src={`${BASE}lego_icon-1.703bb594.png`} alt="" loading="lazy" className="h-auto w-full" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]">
        <img src={`${BASE}Group_134-1.2e04f3ce.png`} alt="" loading="lazy" className="h-auto w-full" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 text-center sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              {about.heading}
            </h2>
          </FadeIn>
          <AnimatedText
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>
        <ContactButton href="#order">{hero.button}</ContactButton>
      </div>
    </section>
  )
}
