import { useState } from 'react'
import { site, ORDER_FORM_ID } from '../config.js'
import { useFormspree } from '../lib/useFormspree.js'
import Reveal from './Reveal.jsx'

export default function OrderSection() {
  const [qty, setQty] = useState({})
  const { status, setStatus, notConnected, submit } = useFormspree(ORDER_FORM_ID)

  const lines = site.menu.filter((item) => qty[item.id] > 0)
  const total = lines.reduce((sum, item) => sum + qty[item.id], 0)

  function change(id, delta) {
    setQty((q) => {
      const next = Math.min(site.maxPerItem, Math.max(0, (q[id] || 0) + delta))
      return { ...q, [id]: next }
    })
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (total === 0) return
    const summary = lines.map((item) => `${qty[item.id]} x ${item.name}`).join('\n')
    const ok = await submit(e.target, {
      order: summary,
      total_items: String(total),
      _subject: 'New order - Maple & Crumb demo',
    })
    if (ok) {
      setQty({})
      e.target.reset()
    }
  }

  return (
    <section className="section" id="order">
      <div className="order-grid">
        <div>
          <Reveal>
            <p className="label">The morning board</p>
            <h2>Pick what you want. We will have it warm.</h2>
          </Reveal>

          <ol className="board">
            {site.menu.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <li className="board-row">
                  <span className="board-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div className="board-text">
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                  </div>
                  <div className="stepper" role="group" aria-label={`Quantity of ${item.name}`}>
                    <button type="button" onClick={() => change(item.id, -1)} disabled={!qty[item.id]} aria-label={`Remove one ${item.name}`}>&minus;</button>
                    <output aria-live="polite">{qty[item.id] || 0}</output>
                    <button type="button" onClick={() => change(item.id, 1)} disabled={(qty[item.id] || 0) >= site.maxPerItem} aria-label={`Add one ${item.name}`}>+</button>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <aside className="ticket">
          <h3>Your order</h3>
          {status === 'sent' ? (
            <p className="notice ok" role="status">
              Order sent to the bakery. This is a demo, so nothing is charged and nothing is baked. Thank you!
            </p>
          ) : (
            <form onSubmit={onSubmit}>
              {total === 0 ? (
                <p className="muted">Nothing yet. Add something from the board.</p>
              ) : (
                <ul className="ticket-lines">
                  {lines.map((item) => (
                    <li key={item.id}><span>{qty[item.id]} &times;</span> {item.name}</li>
                  ))}
                </ul>
              )}

              <label>
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Email <span className="muted">(optional, so the bakery can reach you)</span></span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" />

              <p className="muted small">Demo only: no payment is taken. Please do not include passwords or payment details.</p>

              <button className="pill solid" type="submit" disabled={total === 0 || status === 'sending'}>
                {status === 'sending' ? 'Sending...' : `Place order (${total})`}
              </button>

              {notConnected && (
                <p className="notice" role="status">
                  Orders are not connected yet. Add your Formspree ID to <code>src/config.js</code>.
                </p>
              )}
              {status === 'error' && (
                <p className="notice bad" role="alert">Something went wrong. Please try again in a moment.</p>
              )}
            </form>
          )}
        </aside>
      </div>
    </section>
  )
}
