import { useState } from 'react'
import { FORM_ID } from '../config.js'

// Posts to Formspree, which emails each submission to the form owner.
// A static site (like GitHub Pages) cannot receive form data itself.
const notConnected = FORM_ID === 'YOUR_FORM_ID'

export default function FeedbackForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    if (notConnected) return
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="notice ok" role="status">
        Thank you! Your note was sent. A real person will read it.
      </p>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        <span>Your name <span className="muted">(optional)</span></span>
        <input name="name" type="text" autoComplete="name" />
      </label>

      <label>
        How was your visit?
        <select name="rating" defaultValue="5">
          <option value="5">5 - Loved it</option>
          <option value="4">4 - Really good</option>
          <option value="3">3 - It was fine</option>
          <option value="2">2 - Could be better</option>
          <option value="1">1 - Not great</option>
        </select>
      </label>

      <label>
        Your message
        <textarea name="message" rows="4" required />
      </label>

      <label>
        <span>Email <span className="muted">(only if you want a reply)</span></span>
        <input name="email" type="email" autoComplete="email" />
      </label>

      {/* Spam trap: real people never see or fill this. */}
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" />

      <p className="muted small">Please don't include passwords or payment details.</p>

      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send feedback'}
      </button>

      {notConnected && (
        <p className="notice" role="status">
          The form is not connected yet. Add your Formspree ID to <code>src/config.js</code>.
        </p>
      )}
      {status === 'error' && (
        <p className="notice bad" role="alert">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  )
}
