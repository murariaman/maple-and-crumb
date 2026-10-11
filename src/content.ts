// All the words on the page live here. Change text here, not in the components.
// Every fact below is fictional placeholder copy (see BRIEF.md). No prices, awards or reviews.

export const content = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bakes', href: '#bakes' },
    { label: 'Order', href: '#order' },
  ],

  hero: {
    // The heading fills the full width in one line, so keep it to about 12 characters.
    heading: 'Hi, neighbor',
    caption: 'maple & crumb, a neighborhood bakery driven by small batches and slow saturdays',
    button: 'Order ahead',
  },

  about: {
    heading: 'About us',
    text: 'We bake in small batches for neighbors who like their Saturdays slow. Flaky croissants, sticky buns and slow-risen sourdough, made fresh and ready when you are. Order ahead and we’ll have it warm!',
  },

  menu: {
    heading: 'Menu',
    // Five highlights, as in the original layout. The full six-item order list is below.
    items: [
      { number: '01', name: 'Butter croissant', description: 'Flaky outside, soft inside. The reason you are here.' },
      { number: '02', name: 'Cinnamon morning bun', description: 'Sticky fingers, guaranteed.' },
      { number: '03', name: 'Country sourdough', description: 'Slow-risen, with a crackly crust.' },
      { number: '04', name: 'Almond cake', description: 'Made gluten-free, in a kitchen that also handles wheat.' },
      { number: '05', name: 'Rosemary focaccia', description: 'Olive oil, sea salt, no apologies.' },
    ],
  },

  bakes: {
    heading: 'Bakes',
    button: 'Order this',
    cards: [
      { number: '01', category: 'Pastry', name: 'Butter croissant' },
      { number: '02', category: 'Bread', name: 'Country sourdough' },
      { number: '03', category: 'Sweet', name: 'Cinnamon morning bun' },
    ],
    photoSlot: 'Photo slot',
  },

  order: {
    heading: 'Order ahead',
    intro: 'Pick what you want. We will have it warm.',
    ticketTitle: 'Your order',
    empty: 'Nothing yet. Add something from the list.',
    nameLabel: 'Your name',
    emailLabel: 'Email (optional, so the bakery can reach you)',
    demoNote: 'Demo only: no payment is taken. Please do not include passwords or payment details.',
    submit: 'Place order',
    sending: 'Sending...',
    sent: 'Order sent to the bakery. This is a demo, so nothing is charged and nothing is baked. Thank you!',
    notConnected: 'Orders are not connected yet. Add your Formspree ID to src/content.ts.',
    error: 'Something went wrong. Please try again in a moment.',
    maxPerItem: 6,
    items: [
      { id: 'croissant', name: 'Butter croissant' },
      { id: 'bun', name: 'Cinnamon morning bun' },
      { id: 'sourdough', name: 'Country sourdough' },
      { id: 'almond', name: 'Almond cake' },
      { id: 'focaccia', name: 'Rosemary focaccia' },
      { id: 'coffee', name: 'Coffee' },
    ],
  },

  info: {
    hoursHeading: 'Come by',
    hours: 'Tue to Sun, 7 a.m. to 3 p.m. Closed Mondays.',
    address: '123 Example Street, Dallas, TX (fictional)',
    faqHeading: 'Good to know',
    faqs: [
      { q: 'When are you open?', a: 'Tuesday to Sunday, 7 a.m. to 3 p.m. Closed Mondays.' },
      { q: 'Do you have gluten-free options?', a: 'We bake a gluten-free almond cake, but our kitchen handles wheat, so we cannot guarantee zero cross-contact.' },
      { q: 'Can I pre-order for an event?', a: 'Yes. Use the order list above or ask at the counter, and a person will reply within two days.' },
      { q: 'Do you deliver?', a: 'Not yet. Everything is pick-up at the counter.' },
      { q: 'How do I give feedback?', a: 'Use the form near the bottom of this page. A real person reads every message.' },
    ],
  },

  feedback: {
    heading: 'How did we do?',
    intro: 'Your note goes straight to the shop’s inbox.',
    nameLabel: 'Your name (optional)',
    ratingLabel: 'How was your visit?',
    ratings: [
      { value: '5', label: '5 - Loved it' },
      { value: '4', label: '4 - Really good' },
      { value: '3', label: '3 - It was fine' },
      { value: '2', label: '2 - Could be better' },
      { value: '1', label: '1 - Not great' },
    ],
    messageLabel: 'Your message',
    emailLabel: 'Email (only if you want a reply)',
    note: 'Please do not include passwords or payment details.',
    submit: 'Send feedback',
    sending: 'Sending...',
    sent: 'Thank you! Your note was sent. A real person will read it.',
    notConnected: 'The form is not connected yet. Add your Formspree ID to src/content.ts.',
    error: 'Something went wrong. Please try again in a moment.',
  },

  footer: {
    // ".example" is a reserved fake domain, so this address cannot reach a real person.
    email: 'hello@mapleandcrumb.example',
    disclaimer: 'Fictional business created for a workshop demo. This is a demo: no payment is taken.',
  },
}

// Paste your Formspree form IDs here (the short code at the end of the form URL).
// Get them free at https://formspree.io  >  New form. Make one for orders, one for feedback.
// Until set, each form shows a friendly "not connected yet" message.
export const ORDER_FORM_ID = 'YOUR_ORDER_FORM_ID'
export const FEEDBACK_FORM_ID = 'YOUR_FEEDBACK_FORM_ID'
