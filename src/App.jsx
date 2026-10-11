import { site } from './config.js'
import Reveal from './components/Reveal.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'

export default function App() {
  return (
    <>
      <header className="nav">
        <span className="brand">{site.name}</span>
        <a className="nav-link" href="#feedback">Feedback</a>
      </header>

      <main>
        <section className="hero">
          <Reveal>
            <p className="eyebrow">{site.tagline}</p>
            <h1>{site.offer.headline}</h1>
            <p className="lead">{site.offer.details}</p>
            <a className="btn" href="#feedback">{site.offer.cta}</a>
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <h2>Baker's favorites</h2>
          </Reveal>
          <div className="grid">
            {site.favorites.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <article className="card">
                  <span className="emoji" aria-hidden="true">{item.emoji}</span>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section narrow" id="faq">
          <Reveal>
            <h2>Good to know</h2>
          </Reveal>
          {site.faqs.map((f) => (
            <Reveal key={f.q}>
              <details className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </section>

        <section className="section narrow" id="feedback">
          <Reveal>
            <h2>Tell us what you think</h2>
            <p className="lead small">Your note goes straight to the owner's inbox.</p>
            <FeedbackForm />
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p>{site.contact.address}</p>
        <p className="muted">{site.contact.note}</p>
      </footer>
    </>
  )
}
