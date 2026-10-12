import { content } from '../content'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Magnet from './Magnet'

const PORTRAIT =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

export default function HeroSection() {
  const { nav, hero } = content
  return (
    <section id="top" className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav aria-label="Sections" className="flex w-full items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[12.8vw] font-black uppercase leading-none tracking-tight sm:mt-4 md:-mt-5">
            {hero.heading}
          </h1>
        </div>
      </FadeIn>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.caption}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#order">{hero.button}</ContactButton>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            magnetStrength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            wrapperClassName="w-full"
          >
            <img src={PORTRAIT} alt="A 3D character portrait" className="block h-auto w-full" />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
