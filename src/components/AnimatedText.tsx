import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface CharProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

// Invisible placeholder keeps the layout; the animated copy sits on top of it.
function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  )
}

// Each character goes from opacity 0.2 to 1 as you scroll through the paragraph.
export default function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  const words = text.split(' ')
  const total = text.length
  let index = 0

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => {
        const chars = (w < words.length - 1 ? `${word} ` : word).split('')
        return (
          <span key={w} className="inline-block" aria-hidden="true">
            {chars.map((char) => {
              const i = index++
              return <Char key={i} char={char === ' ' ? ' ' : char} progress={scrollYProgress} range={[i / total, (i + 1) / total]} />
            })}
          </span>
        )
      })}
    </p>
  )
}
