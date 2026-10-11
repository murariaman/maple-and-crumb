import { site } from './config.js'
import Reveal from './components/Reveal.jsx'
import Hero from './components/Hero.jsx'
import OrderSection from './components/OrderSection.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">{site.name}</a>
        <nav aria-label="Sections">
          <a href="#order">Menu</a>
          <a href="#hours">Hours</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="pill small-pill" href="#order">Order ahead</a>
      </header>

      <main id="top">
        <Hero />

        <div className="offer-band">
          <p>{site.offer}</p>
        </div>

        <OrderSection />

        <section className="section narrow" id="hours">
          <Reveal>
            <p className="label">Come by</p>
            <p className="hours-line">
              {site.hours.days}, {site.hours.time}{' '}
              <em>{site.hours.closed}.</em>
            </p>
            <p className="muted">{site.hours.address} (fictional)</p>
          </Reveal>
        </section>

        <section className="section narrow" id="faq">
          <Reveal>
            <p className="label">Good to know</p>
            <h2>Five quick answers.</h2>
          </Reveal>
          {site.faqs.map((f, i) => (
            <Reveal key={f.q}>
              <details className="faq">
                <summary>
                  <span className="faq-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {f.q}
                </summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </section>

        <section className="section narrow" id="feedback">
          <Reveal>
            <p className="label">Tell us</p>
            <h2>How did we do?</h2>
            <p className="muted lead-small">Your note goes straight to the shop's inbox.</p>
            <FeedbackForm />
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p className="wordmark" aria-hidden="true">{site.name}</p>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="muted">{site.disclaimer}</p>
      </footer>
    </>
  )
}
