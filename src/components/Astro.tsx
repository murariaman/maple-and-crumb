interface AstroProps {
  className?: string
  // Optional speech bubble text, shown beside the mascot.
  say?: string
  // Mirror the mascot horizontally.
  flip?: boolean
  // Seconds into the float loop, so several mascots never move in sync.
  delay?: number
}

// "Crumb": the shop's mascot. A small white astronaut with a chef's hat.
// Original artwork drawn as SVG, so it needs no image files.
export default function Astro({ className = '', say, flip = false, delay = 0 }: AstroProps) {
  return (
    <div className={`astro-float inline-flex items-end gap-2 ${className}`} style={{ animationDelay: `${delay}s` }}>
      {say && (
        <p
          className={`mb-16 max-w-[120px] rounded-2xl border-2 border-[#D7E2EA] bg-[#0C0C0C]/80 px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:max-w-[160px] sm:text-sm ${flip ? 'order-2' : ''}`}
        >
          {say}
        </p>
      )}
      <svg
        viewBox="0 0 200 270"
        role="img"
        aria-label="Crumb, the shop mascot: a small white astronaut wearing a chef's hat"
        className="h-auto w-[90px] shrink-0 sm:w-[120px] md:w-[150px]"
        style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      >
        <defs>
          <linearGradient id="astro-visor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18011F" />
            <stop offset="55%" stopColor="#7621B0" />
            <stop offset="100%" stopColor="#B600A8" />
          </linearGradient>
        </defs>

        {/* backpack */}
        <rect x="46" y="136" width="108" height="86" rx="26" fill="#C9D2DA" />
        {/* legs */}
        <rect x="70" y="212" width="26" height="46" rx="13" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <rect x="104" y="212" width="26" height="46" rx="13" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        {/* body */}
        <rect x="58" y="132" width="84" height="92" rx="40" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <rect x="84" y="158" width="32" height="22" rx="6" fill="#E4EAEF" />
        <circle cx="92" cy="169" r="4" fill="#B600A8" />
        <circle cx="106" cy="169" r="4" fill="#BE4C00" />
        {/* arms: one waving, one resting */}
        <g className="astro-wave" style={{ transformOrigin: '56px 150px' }}>
          <rect x="14" y="96" width="26" height="66" rx="13" transform="rotate(-24 27 129)" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        </g>
        <rect x="160" y="146" width="26" height="62" rx="13" transform="rotate(14 173 177)" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />

        {/* helmet */}
        <circle cx="100" cy="92" r="60" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        {/* visor */}
        <ellipse cx="100" cy="96" rx="44" ry="37" fill="url(#astro-visor)" />
        <path d="M70 80 Q82 66 100 66" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        {/* face */}
        <ellipse cx="86" cy="96" rx="5" ry="7" fill="#FFE9CC" />
        <ellipse cx="114" cy="96" rx="5" ry="7" fill="#FFE9CC" />
        <path d="M90 112 Q100 122 110 112" fill="none" stroke="#FFE9CC" strokeWidth="4" strokeLinecap="round" />

        {/* chef's hat */}
        <rect x="70" y="30" width="60" height="16" rx="5" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <circle cx="78" cy="24" r="15" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <circle cx="100" cy="15" r="17" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <circle cx="122" cy="24" r="15" fill="#FFFFFF" stroke="#C9D2DA" strokeWidth="4" />
        <rect x="72" y="30" width="56" height="12" rx="4" fill="#FFFFFF" />
      </svg>
    </div>
  )
}
