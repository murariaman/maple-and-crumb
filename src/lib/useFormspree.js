import { useState } from 'react'

// Posts a form to Formspree, which emails each submission to the form owner.
// A static site (like GitHub Pages) cannot receive form data itself.
export function useFormspree(formId) {
  const notConnected = !formId || formId.startsWith('YOUR_')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function submit(form, extra = {}) {
    if (notConnected) return false
    setStatus('sending')
    try {
      const data = new FormData(form)
      Object.entries(extra).forEach(([key, value]) => data.set(key, value))
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      setStatus(res.ok ? 'sent' : 'error')
      return res.ok
    } catch {
      setStatus('error')
      return false
    }
  }

  return { status, setStatus, notConnected, submit }
}
