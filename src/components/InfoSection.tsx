import { content } from '../content'
import FadeIn from './FadeIn'
import { sectionHeadingStyle } from './formStyles'

export default function InfoSection() {
  const { info } = content
  return (
    <section id="hours" className="bg-[#0C0C0C] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-6 font-black uppercase leading-none tracking-tight" style={sectionHeadingStyle}>
            {info.hoursHeading}
          </h2>
          <p className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)' }}>
            {info.hours}
          </p>
          <p className="mt-3 font-light text-[#D7E2EA]/70">{info.address}</p>
        </FadeIn>

        <div id="faq">
          <FadeIn y={40}>
            <h2 className="hero-heading mb-6 font-black uppercase leading-none tracking-tight" style={sectionHeadingStyle}>
              {info.faqHeading}
            </h2>
          </FadeIn>
          <div className="border-t border-[#D7E2EA]/30">
            {info.faqs.map((faq) => (
              <FadeIn key={faq.q}>
                <details className="group border-b border-[#D7E2EA]/30 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium uppercase text-[#D7E2EA] [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span aria-hidden="true" className="text-2xl group-open:hidden">+</span>
                    <span aria-hidden="true" className="hidden text-2xl group-open:inline">−</span>
                  </summary>
                  <p className="mt-3 max-w-xl font-light leading-relaxed text-[#D7E2EA]/70">{faq.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
