# Claude Code Landing Page Starter

A free starter for building and publishing a one-page website with Claude Code.
The example business, "Maple & Crumb Bakery", is **fictional**. Swap in your own.

You will end up with a live web address and a feedback form that emails you.

## Before the workshop (about 30 minutes)

Do these at home, not at the library. Tick each box.

- [ ] **1. Claude Code works.** You need a paid Claude plan. Install Claude Code from the official instructions at https://docs.claude.com/en/docs/claude-code and check it runs: `claude --version`
- [ ] **2. Node.js installed.** Download the "LTS" version from https://nodejs.org. Check: `node -v`
- [ ] **3. Git installed.** Download from https://git-scm.com. Check: `git --version`
- [ ] **4. GitHub account** (free): https://github.com
- [ ] **5. Make your own copy.** On this repo's GitHub page click **Use this template > Create a new repository**. Make it **Public**. Name it anything.
- [ ] **6. Turn on publishing.** In your new repo: **Settings > Pages > Source: GitHub Actions**.
- [ ] **7. Formspree form** (free): sign up at https://formspree.io, click **New form**, and copy the form ID (the short code at the end of the form URL). Check your inbox and confirm your email.
- [ ] **8. Download your copy.** In a terminal, run (use your own address):
  ```
  git clone https://github.com/YOUR-NAME/YOUR-REPO.git
  cd YOUR-REPO
  npm install
  claude
  ```
- [ ] **9. Ready check:** run `npm run dev`, open the address it prints, and see the bakery page.

Send "ready" to the organizers once boxes 1 to 9 are ticked.

Mac and Windows both work. If a step fails, copy the exact error into Claude Code and ask what it means.

## During the workshop

Follow the five stages in `CLAUDE.md`: Pick, Brand, Animate, Feedback, Publish. Each has a copy-and-paste prompt.

## Good to know

- **Costs:** Claude Code needs a paid Claude plan. GitHub, GitHub Pages and the Formspree free tier cost nothing. Free tiers have limits and change, so check them.
- **Privacy:** use fictional or permission-cleared business details. Never put passwords, keys or real customer data in the repo. Your repo and published site are public.
- **Accuracy:** AI can invent facts. Read every word before you publish, and never claim awards, prices or hours that are not real.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Preview the site on your computer |
| `npm run build` | Make the publishable version (in `dist/`) |
| `git push` | Publish (GitHub rebuilds the site in about a minute) |
