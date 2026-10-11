# BRIEF - Maple & Crumb Bakery (fictional)

Written from the `/brief` interview. Status: **draft, awaiting owner approval**.

## Business
Maple & Crumb Bakery, a small-batch neighborhood bakery. Fictional, created for a workshop demo. No real names, photos or addresses.

## Audience
Weekend neighborhood regulars who come in on Saturday mornings for coffee and something fresh.

## Offer and single call to action
- Offer: **Free croissant with any Saturday coffee.**
- One call to action: **Order ahead** (the order form). The feedback form is secondary and lives lower on the page.

## Voice
Warm, witty, local. Short sentences, a little humor, never salesy. Example register: "Flour on the counter, croissants by 7." (placeholder tone only, not a factual claim.)

## Look and feel
- Mood: **Sunday-morning cozy.** Soft, slow, friendly, big comfortable type.
- Palette: **cream, espresso and one blue pop** (hex values below, contrast to be verified in the build).
- Type: **chunky soft serif headlines + clean sans.** Avoid the most common AI pairing; choose a distinctive serif.
- Imagery: **none yet.** Use type, color and simple drawn SVG shapes. Leave clearly marked slots for real photos later.
- References (traits only, nothing copied): MotionSites free items **"3D Portfolio"** and **"Orbis NFT"** for the hero, and React Bits for animation. See "Reference traits" below.

### Reference traits (what we borrow, and what we do NOT)
Borrow:
- **Oversized headline as the hero object**, with a central character that overlaps or sits against it (3D Portfolio).
- **A character that reacts to the cursor** (3D Portfolio's face appears to follow the pointer). We build our own: a drawn SVG croissant mascot whose eyes follow the cursor.
- **One italic or script accent word inside a bold headline** (Orbis NFT), for the "witty" voice.
- **Tiny, quiet caption text against huge type** for scale contrast.
- **Sparse navigation spread across the top**, with a single pill call to action.

Do NOT borrow:
- Their dark, space or chrome color schemes, their 3D-rendered characters or planets, or any NFT subject matter.
- Gradient buttons or gradient headline fills (we avoid gradients).
- Any of their prompt text, images, video or code. Their prompts may be used by the person who copied them, but never shared or shown.

### Palette
| Token | Hex | Use |
|---|---|---|
| cream | `#FBF3E4` | page background |
| oat | `#EAD9BD` | cards, dividers |
| espresso | `#2B1A12` | text, headlines |
| coffee-muted | `#6B5545` | secondary text |
| blue pop | `#2A55D6` | the one accent: buttons, links, focus, a single highlight |

### Type (confirm availability before building)
- Headlines: **Young Serif** (chunky, soft).
- Body: **Instrument Sans**.

## Features (priority order)
1. **Order form** (no payments; emails the shop).
2. **Menu: six items** that are also the orderable items.
3. **Hero** with an animated headline.
4. **FAQ**: keep the current five.
5. **Opening hours and address**: fictional and clearly labeled.
6. **Feedback form.**
7. **Email-us link** (plain mailto). No newsletter signup.

## Menu (six items, short fictional descriptions, no invented claims)
1. Butter croissant
2. Cinnamon morning bun
3. Country sourdough
4. Almond cake (gluten-free recipe, same kitchen as wheat; keep the cross-contact note)
5. Rosemary focaccia
6. Coffee

Prices: **not shown (TBD).** The page states that no payment is taken.

## Orders
- Customer picks a **quantity per item** (0-6). That is the only option.
- "Place order" posts the order summary, plus the customer's name and an optional email, to the form service.
- Orders go to a **shared bakery mailbox** created for the demo. The address is set inside the form service, never written into the repo.
- No payment, no customer confirmation email.
- Page copy must say plainly: "This is a demo. No payment is taken."

## Motion plan (hierarchy matters; all four were requested)
1. **Star:** one animated headline (word-by-word reveal) in the hero.
2. **Quiet support:** a subtle animated background behind the hero, tuned to cream and blue.
3. **Scroll motion:** sections settle into place as you scroll.
4. **Small touch:** a hover effect on menu cards, not a page-wide cursor effect.
Everything respects reduced-motion settings and must not slow the page.

## What will make this NOT look generic
1. **Hero is not a centered block of text.** An oversized headline interacts with a drawn croissant mascot whose eyes follow the cursor, with one italic accent word in the headline.
2. **One blue accent on a warm base.** No terracotta, no butter-yellow, no gradient blobs.
3. **A distinctive serif**, not the common default, with large scale contrast between headline and body.
4. **A menu that is not three identical rounded cards.** Use a ruled, menu-board style list with the quantity stepper in each row.
5. **Copy in a real voice** (warm, witty, local), with no emoji used as icons.

## Avoid
- Gradient blobs
- Emoji as icons
- Centered hero plus three equal cards
- Awards, reviews or "best in town" claims
- Real names, photos or addresses
- Invented prices, hours or health claims

## FAQs (current five, placeholders marked "needs owner approval")
1. When are you open? Tuesday to Sunday, 7 a.m. to 3 p.m. Closed Mondays.
2. Do you have gluten-free options? An almond cake, with a cross-contact note.
3. Can I pre-order for an event? Yes, via the order form; a person replies within two days.
4. Do you deliver? Not yet. Pick-up only.
5. How do I give feedback? Use the form at the bottom of the page.

## Open questions
- Hero references chosen: MotionSites "3D Portfolio" and "Orbis NFT" (both marked with the copy icon, which appears to mean free; crown icon appears to mean premium). Traits only. We write our own prompts.
- Participants who want a MotionSites prompt must copy it themselves from the site. We never put their prompt text in the starter repo or on slides.
- Confirm the contact choice: email-us link only, no newsletter (the "1,2" answer was ambiguous).
- Confirm font availability (Young Serif, Instrument Sans) at build time.
- Create the shared bakery mailbox and the Formspree forms; paste the form IDs into `src/config.js`.
