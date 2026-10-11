// Everything a business owner changes lives here. Keep it plain text.
// (Do NOT put passwords, API keys or real customer data in this repo.)
// Written from BRIEF.md. Every fact below is fictional placeholder copy.

export const site = {
  name: 'Maple & Crumb',
  hero: {
    // Two lines. The last word of the second line is the italic accent.
    line1: 'Up before',
    line2: 'the',
    accent: 'sun.',
    caption: 'Small-batch bakes for neighbors who like their Saturdays slow. A fictional bakery, with a very real appetite.',
    cta: 'Order ahead',
  },
  offer: 'Saturday only: a free croissant with any coffee. Show this page at the counter.',
  // Six items. They are also the orderable items. No prices are shown (none are invented).
  menu: [
    { id: 'croissant', name: 'Butter croissant', note: 'Flaky outside, soft inside. The reason you are here.' },
    { id: 'bun', name: 'Cinnamon morning bun', note: 'Sticky fingers, guaranteed.' },
    { id: 'sourdough', name: 'Country sourdough', note: 'Slow-risen, with a crackly crust.' },
    { id: 'almond', name: 'Almond cake', note: 'Made gluten-free, in a kitchen that also handles wheat.' },
    { id: 'focaccia', name: 'Rosemary focaccia', note: 'Olive oil, sea salt, no apologies.' },
    { id: 'coffee', name: 'Coffee', note: 'Hot and simple. Pairs with everything above.' },
  ],
  maxPerItem: 6,
  // The approved FAQs. Marked "needs owner approval" in BRIEF.md.
  faqs: [
    { q: 'When are you open?', a: 'Tuesday to Sunday, 7 a.m. to 3 p.m. Closed Mondays.' },
    { q: 'Do you have gluten-free options?', a: 'We bake a gluten-free almond cake, but our kitchen handles wheat, so we cannot guarantee zero cross-contact.' },
    { q: 'Can I pre-order for an event?', a: 'Yes. Use the order board above or ask at the counter, and a person will reply within two days.' },
    { q: 'Do you deliver?', a: 'Not yet. Everything is pick-up at the counter.' },
    { q: 'How do I give feedback?', a: 'Use the form near the bottom of this page. A real person reads every message.' },
  ],
  hours: {
    days: 'Tue to Sun',
    time: '7 a.m. to 3 p.m.',
    closed: 'Closed Mondays',
    address: '123 Example Street, Dallas, TX',
  },
  // ".example" is a reserved fake domain, so this address cannot reach a real person.
  email: 'hello@mapleandcrumb.example',
  disclaimer: 'Fictional business created for a workshop demo. This is a demo: no payment is taken.',
}

// Paste your Formspree form IDs here (the short code at the end of the form URL).
// Get them free at https://formspree.io  >  New form. Make one for orders, one for feedback.
// Until set, each form shows a friendly "not connected yet" message.
export const ORDER_FORM_ID = 'YOUR_ORDER_FORM_ID'
export const FEEDBACK_FORM_ID = 'YOUR_FEEDBACK_FORM_ID'
