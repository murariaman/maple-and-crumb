import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { content } from '../content'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

// Honest placeholder until real photos exist.
function PhotoSlot({ label, height }: { label: string; height: string }) {
  return (
    <div
      className={`flex w-full items-end justify-start border border-[#D7E2EA]/20 bg-[#161616] p-6 ${RADIUS}`}
      style={{ height }}
    >
      <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60">{label}</span>
    </div>
  )
}

interface CardProps {
  index: number
  total: number
  progress: MotionValue<number>
  number: string
  category: string
  name: string
}

function Card({ index, total, progress, number, category, name }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])
  const { bakes } = content

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 md:pb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {number}
            </span>
            <div className="flex flex-col text-[#D7E2EA]">
              <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{category}</span>
              <span className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {name}
              </span>
            </div>
          </div>
          <LiveProjectButton>{bakes.button}</LiveProjectButton>
        </div>

        <div className="flex gap-3 sm:gap-4 md:gap-6">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4 md:gap-6">
            <PhotoSlot label={bakes.photoSlot} height="clamp(130px, 16vw, 230px)" />
            <PhotoSlot label={bakes.photoSlot} height="clamp(160px, 22vw, 340px)" />
          </div>
          <div className="w-[60%]">
            <PhotoSlot label={bakes.photoSlot} height="100%" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const { bakes } = content
  const list = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start start', 'end end'] })

  return (
    <section
      id="bakes"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {bakes.heading}
        </h2>
      </FadeIn>

      <div ref={list}>
        {bakes.cards.map((card, i) => (
          <Card key={card.number} index={i} total={bakes.cards.length} progress={scrollYProgress} {...card} />
        ))}
      </div>
    </section>
  )
}
