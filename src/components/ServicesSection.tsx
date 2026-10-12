import { content } from '../content'
import FadeIn from './FadeIn'
import GlareHover from './GlareHover'
import ShinyText from './ShinyText'

export default function ServicesSection() {
  const { heading, items } = content.menu
  return (
    <section
      id="menu"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {items.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            {/* React Bits GlareHover: a soft light sweeps across the row on hover. */}
            <GlareHover
              width="100%"
              borderRadius="0px"
              glareColor="#B600A8"
              glareOpacity={0.22}
              className="flex items-start gap-6 border-b py-8 sm:gap-10 sm:py-10 md:gap-16 md:py-12"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', minWidth: '1.65em' }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-2 text-[#0C0C0C]">
                <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {/* React Bits ShinyText: a purple sheen passes over the name. */}
                  <ShinyText text={item.name} color="#0C0C0C" shineColor="#B600A8" speed={3.2} delay={1.2 + i * 0.3} />
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </GlareHover>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
