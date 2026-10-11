import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion.js'

// A drawn croissant whose eyes follow the cursor. Plain SVG, no assets needed.
const EYES = [
  { cx: 176, cy: 142 },
  { cx: 224, cy: 142 },
]
const MAX_PUPIL_TRAVEL = 6

export default function Mascot() {
  const svgRef = useRef(null)
  const frame = useRef(0)
  const [look, setLook] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    function onMove(e) {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const box = svgRef.current?.getBoundingClientRect()
        if (!box) return
        // Face center in screen pixels (SVG viewBox is 400 x 300).
        const cx = box.left + box.width * 0.5
        const cy = box.top + box.height * 0.47
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy) || 1
        const strength = Math.min(1, dist / 220)
        setLook({
          x: (dx / dist) * MAX_PUPIL_TRAVEL * strength,
          y: (dy / dist) * MAX_PUPIL_TRAVEL * strength,
        })
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame.current)
    }
  }, [reduced])

  return (
    <svg
      ref={svgRef}
      className="mascot"
      viewBox="0 0 400 300"
      role="img"
      aria-label="A friendly drawn croissant whose eyes follow your cursor"
    >
      <g className="mascot-body" stroke="var(--espresso)" strokeWidth="5" strokeLinejoin="round" fill="var(--oat)">
        <ellipse cx="82" cy="205" rx="38" ry="52" transform="rotate(-52 82 205)" />
        <ellipse cx="318" cy="205" rx="38" ry="52" transform="rotate(52 318 205)" />
        <ellipse cx="132" cy="168" rx="50" ry="70" transform="rotate(-26 132 168)" />
        <ellipse cx="268" cy="168" rx="50" ry="70" transform="rotate(26 268 168)" />
        <ellipse cx="200" cy="150" rx="72" ry="88" />
      </g>
      <g fill="none" stroke="var(--espresso)" strokeWidth="4" strokeLinecap="round" opacity="0.55">
        <path d="M150 90 Q160 125 150 165" />
        <path d="M250 90 Q240 125 250 165" />
      </g>
      {EYES.map((eye) => (
        <g key={eye.cx}>
          <circle cx={eye.cx} cy={eye.cy} r="17" fill="#fff" stroke="var(--espresso)" strokeWidth="4" />
          <circle cx={eye.cx + look.x} cy={eye.cy + look.y} r="7.5" fill="var(--espresso)" />
        </g>
      ))}
      <path d="M180 184 Q200 204 220 184" fill="none" stroke="var(--espresso)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="152" cy="178" r="9" fill="var(--blue)" opacity="0.85" />
      <circle cx="248" cy="178" r="9" fill="var(--blue)" opacity="0.85" />
    </svg>
  )
}
