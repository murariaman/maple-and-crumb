import { useEffect, useRef } from 'react'

// Image filenames for the two scrolling rows (served from https://motionsites.ai/assets/).
// Left empty for now: the list from the original layout is waiting on the owner's go-ahead.
// Row 1 uses the first 11 files, row 2 uses the rest.
const BASE = 'https://motionsites.ai/assets/'
const FILES: string[] = []
const ROW_1 = FILES.slice(0, 11)
const ROW_2 = FILES.slice(11)

function Row({ files, rowRef }: { files: string[]; rowRef: React.RefObject<HTMLDivElement> }) {
  // Tripled so the row never runs out of tiles while it slides.
  const tiles = [...files, ...files, ...files]
  return (
    <div ref={rowRef} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
      {tiles.map((file, i) => (
        <img
          key={`${file}-${i}`}
          src={`${BASE}${file}`}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1 = useRef<HTMLDivElement>(null)
  const row2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      // Row 1 moves right, row 2 moves left. -33.333% starts each row on its middle copy.
      if (row1.current) row1.current.style.transform = `translateX(calc(-33.333% + ${offset - 200}px))`
      if (row2.current) row2.current.style.transform = `translateX(calc(-33.333% - ${offset - 200}px))`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <Row files={ROW_1} rowRef={row1} />
      <Row files={ROW_2} rowRef={row2} />
    </section>
  )
}
