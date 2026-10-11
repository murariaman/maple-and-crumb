# CLAUDE.md - Landing page starter

Claude Code reads this file at the start of every session. It is the project's memory.

## What this project is
A one-page website for a small business (default: the fictional "Maple & Crumb Bakery").
React + Vite. One offer, one call to action, five FAQs, and a feedback form.
It deploys to GitHub Pages every time `main` is pushed.

## Rules (always follow)
- Keep it one page with ONE call to action. Do not add pages, a router, or a backend.
- Business facts live in `src/config.js`. Brand colors and fonts live in `:root` at the top of `src/styles.css`. Change those first.
- Never invent facts about the business (hours, prices, awards, reviews). If a fact is missing, leave a clear placeholder and tell me.
- Never put passwords, API keys, or real customer data in any file.
- Do not edit `.github/workflows/deploy.yml` unless I ask.
- Keep it accessible: real headings, alt text, visible focus, 4.5:1 text contrast, works at 375px wide, respects reduced motion.
- After changes run `npm run build` and fix any errors before telling me it is done.
- Commit with a short message when I say "save" or "ship it".

## Brand (edit me for your own business)
- Mood: warm, friendly, hand-made
- Colors: cream #fff6e9, ink #3b2314, terracotta #c2531f, butter #f4c95d
- Fonts: Fraunces (headings), DM Sans (body)
- Voice: plain, kind, short sentences

## The five stages (use these prompts, then adapt)

**1. Pick** - find inspiration, then describe it.
> I want my landing page to feel like [paste a link or describe a screenshot]. List what makes it work (layout, spacing, type, color) in 5 bullets. Do not change any code yet.

**2. Brand** - make it yours.
> Read CLAUDE.md. My business is [name], we sell [what], our customers are [who]. Update the brand section here, then update `src/config.js` and the `:root` tokens in `src/styles.css` to match. Keep one offer and one call to action.

(If you have the UI/UX Pro Max skill installed, add: "Use the ui-ux-pro-max skill to propose a palette and font pairing first.")

**3. Animate** - add one tasteful motion.
> Add one animated section to the page using [a component from React Bits / your own idea], for example [a text reveal on the headline]. Keep it under 60 lines, make it respect prefers-reduced-motion, and do not slow the page down.

**4. Feedback** - connect the form.
> My Formspree form ID is [ID]. Put it in `FORM_ID` in `src/config.js`. Then run the site and show me how to test the form.

**5. Publish** - go live.
> Run `npm run build`. If it passes, commit everything with the message "Update site" and push to main. Then tell me where to find the published URL (GitHub repo > Actions, then Settings > Pages).

## Troubleshooting
- Page is blank after publishing: confirm Settings > Pages > Source is "GitHub Actions", then re-run the workflow.
- Form says "not connected": `FORM_ID` in `src/config.js` is still `YOUR_FORM_ID`.
- Form works locally but not live: confirm the Formspree email address (check your inbox for a confirmation message).
- Anything else: paste the exact error into Claude Code and ask "what does this mean and how do I fix it?"
