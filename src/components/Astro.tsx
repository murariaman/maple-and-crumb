import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'
import Magnet from './Magnet'

interface AstroProps {
  className?: string
  // Optional speech bubble text, shown beside the mascot.
  say?: string
  // Mirror the mascot horizontally.
  flip?: boolean
  // Seconds into the float loop, so several mascots never move in sync.
  delay?: number
  // "dark" suits the dark sections; "light" adds a dark outline so Crumb shows on white.
  tone?: 'dark' | 'light'
}

const MAX_PUPIL_TRAVEL = 3

// "Crumb": the shop's mascot. A small white astronaut with a chef's hat.
// Original artwork drawn as SVG, so it needs no image files.
// Behavior: leans toward the cursor (React Bits Magnet), eyes follow the pointer,
// waves a few times when he scrolls into view, and again on hover.
export default function Astro({ className = '', say, flip = false, delay = 0, tone = 'dark' }: AstroProps) {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [look, setLook] = useState({ x: 0, y: 0 })
  const [seen, setSeen] = useState(false)

  const outline = tone === 'light' ? '#0C0C0C' : '#C9D2DA'
  const bubble =
    tone === 'light'
      ? 'border-[#0C0C0C] bg-white text-[#0C0C0C]'
      : 'border-[#D7E2EA] bg-[#0C0C0C]/80 text-[#D7E2EA]'

  // Wave when first seen.
  useEffect(() => {
    const el = rootRef.current
    if (!el || reduced) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  // Eyes follow the pointer.
  useEffect(() => {
    if (reduced) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const box = svgRef.current?.getBoundingClientRect()
        if (!box) return
        const dx = e.clientX - (box.left + box.width / 2)
        const dy = e.clientY - (box.top + box.height * 0.35)
        const dist = Math.hypot(dx, dy) || 1
        const strength = Math.min(1, dist / 240)
        setLook({ x: (dx / dist) * MAX_PUPIL_TRAVEL * strength, y: (dy / dist) * MAX_PUPIL_TRAVEL * strength })
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [reduced])

  const sign = flip ? -1 : 1

  return (
    <div
      ref={rootRef}
      className={`astro-float group inline-flex items-end gap-2 ${seen ? 'astro-seen' : ''} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {say && (
        <p
          className={`mb-16 max-w-[120px] rounded-2xl border-2 px-3 py-2 text-xs font-medium uppercase tracking-wider sm:max-w-[160px] sm:text-sm ${bubble} ${flip ? 'order-2' : ''}`}
          aria-live="polite"
        >
          {say}
        </p>
      )}
      <Magnet padding={120} magnetStrength={4} disabled={reduced} wrapperClassName="shrink-0">
        <svg
          ref={svgRef}
          viewBox="0 0 200 270"
          role="img"
          aria-label="Crumb, the shop mascot: a small white astronaut wearing a chef's hat"
          className="h-auto w-[90px] cursor-pointer sm:w-[120px] md:w-[150px]"
          style={{ transform: flip ? 'scaleX(-1)' : undefined }}
        >
          <defs>
            <linearGradient id={`astro-visor-${tone}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#18011F" />
              <stop offset="55%" stopColor="#7621B0" />
              <stop offset="100%" stopColor="#B600A8" />
            </linearGradient>
          </defs>

          <rect x="46" y="136" width="108" height="86" rx="26" fill="#C9D2DA" stroke={tone === 'light' ? outline : 'none'} strokeWidth="4" />
          <rect x="70" y="212" width="26" height="46" rx="13" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <rect x="104" y="212" width="26" height="46" rx="13" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <rect x="58" y="132" width="84" height="92" rx="40" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <rect x="84" y="158" width="32" height="22" rx="6" fill="#E4EAEF" />
          <circle cx="92" cy="169" r="4" fill="#B600A8" />
          <circle cx="106" cy="169" r="4" fill="#BE4C00" />
          <g className="astro-wave" style={{ transformOrigin: '56px 150px' }}>
            <rect x="14" y="96" width="26" height="66" rx="13" transform="rotate(-24 27 129)" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          </g>
          <rect x="160" y="146" width="26" height="62" rx="13" transform="rotate(14 173 177)" fill="#FFFFFF" stroke={outline} strokeWidth="4" />

          <circle cx="100" cy="92" r="60" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <ellipse cx="100" cy="96" rx="44" ry="37" fill={`url(#astro-visor-${tone})`} />
          <path d="M70 80 Q82 66 100 66" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

          {/* eyes: pupils follow the pointer (mirrored when the mascot is flipped) */}
          <ellipse cx="86" cy="96" rx="8" ry="10" fill="#FFE9CC" />
          <ellipse cx="114" cy="96" rx="8" ry="10" fill="#FFE9CC" />
          <circle cx={86 + look.x * sign} cy={96 + look.y} r="4" fill="#18011F" />
          <circle cx={114 + look.x * sign} cy={96 + look.y} r="4" fill="#18011F" />
          <path d="M90 114 Q100 124 110 114" fill="none" stroke="#FFE9CC" strokeWidth="4" strokeLinecap="round" />

          <rect x="70" y="30" width="60" height="16" rx="5" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <circle cx="78" cy="24" r="15" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <circle cx="100" cy="15" r="17" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <circle cx="122" cy="24" r="15" fill="#FFFFFF" stroke={outline} strokeWidth="4" />
          <rect x="72" y="30" width="56" height="12" rx="4" fill="#FFFFFF" />
        </svg>
      </Magnet>
    </div>
  )
}
