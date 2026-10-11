import { site } from '../config.js'
import BlurText from './BlurText.jsx'
import DotGrid from './DotGrid.jsx'
import Mascot from './Mascot.jsx'
import { useReducedMotion } from '../lib/useReducedMotion.js'

export default function Hero() {
  const reduced = useReducedMotion()
  const { hero } = site

  return (
    <section className="hero">
      {/* Quiet background: a springy dot grid that reacts to the cursor (React Bits). */}
      <div className="hero-bg" aria-hidden="true">
        <DotGrid
          dotSize={4}
          gap={22}
          baseColor="#DCC8A4"
          activeColor="#2A55D6"
          proximity={150}
          opacity={0.9}
          intro={!reduced}
          mouseInteraction={!reduced}
          clickShock={!reduced}
          paused={reduced}
        />
      </div>

      <div className="hero-inner">
        <h1 className="hero-title" aria-label={`${hero.line1} ${hero.line2} ${hero.accent}`}>
          {reduced ? (
            <>
              <span className="hero-line">{hero.line1}</span>
              <span className="hero-line">
                {hero.line2} <em className="accent">{hero.accent}</em>
              </span>
            </>
          ) : (
            <>
              <span className="hero-line" aria-hidden="true">
                <BlurText text={hero.line1} delay={140} />
              </span>
              <span className="hero-line" aria-hidden="true">
                <BlurText text={hero.line2} delay={140} />
                <BlurText text={hero.accent} delay={140} className="accent" />
              </span>
            </>
          )}
        </h1>

        <Mascot />

        <p className="hero-caption">{hero.caption}</p>
        <a className="pill" href="#order">
          {hero.cta} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}
