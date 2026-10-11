// Everything a business owner changes lives here. Keep it plain text.
// (Do NOT put passwords, API keys or real customer data in this repo.)

export const site = {
  name: 'Maple & Crumb Bakery',
  tagline: 'Small-batch bakes, warm every morning.',
  // One offer, one call to action: this is the whole point of the page.
  offer: {
    headline: 'Free croissant with any Saturday coffee',
    details: 'Show this page at the counter this Saturday. One per customer, while they last.',
    cta: 'Tell us what you think',
  },
  favorites: [
    { name: 'Butter croissant', note: 'Laminated by hand, baked at 6 a.m.', emoji: '🥐' },
    { name: 'Cinnamon morning bun', note: 'Sticky, spiced and shared quickly.', emoji: '🥮' },
    { name: 'Country sourdough', note: 'Slow-fermented for 36 hours.', emoji: '🍞' },
  ],
  // The approved FAQs. Keep answers short and factual, never invent claims.
  faqs: [
    { q: 'When are you open?', a: 'Tuesday to Sunday, 7 a.m. to 3 p.m. Closed Mondays.' },
    { q: 'Do you have gluten-free options?', a: 'We bake a gluten-free almond cake daily, but our kitchen handles wheat, so we cannot guarantee zero cross-contact.' },
    { q: 'Can I pre-order for an event?', a: 'Yes. Ask in the feedback form below or at the counter, and a person will reply within two days.' },
    { q: 'Do you deliver?', a: 'Not yet. Everything is pick-up at the counter.' },
    { q: 'How do I give feedback?', a: 'Use the form at the bottom of this page. A real person reads every message.' },
  ],
  contact: {
    address: '123 Example Street, Dallas, TX (fictional)',
    note: 'Fictional business created for a workshop demo.',
  },
}

// Paste your Formspree form ID here (looks like "xyzabcde").
// Get one free at https://formspree.io  >  New form.
// Until this is set, the form shows a friendly "not connected yet" message.
export const FORM_ID = 'YOUR_FORM_ID'
