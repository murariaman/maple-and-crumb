# Make it real: get the emails and put the site online

Two jobs, about 20 minutes in total. Do them in this order.

## Part A. Get the emails (Formspree, free)

A website hosted on GitHub cannot receive form data by itself. A small free service called Formspree catches each submission and emails it to you.

1. Go to https://formspree.io and sign up (free). Confirm your email address when they ask.
2. Click **New form**. Name it **Orders**. Set the email address that should receive orders (for the demo, a shared bakery mailbox). Copy the **form ID**: the short code at the end of the form's address, like `xyzabcde`.
3. Click **New form** again. Name it **Feedback** and copy its form ID.
4. Open `src/content.ts` and paste the two IDs at the bottom:
   ```ts
   export const ORDER_FORM_ID = 'your-orders-id'
   export const FEEDBACK_FORM_ID = 'your-feedback-id'
   ```
   (These IDs are meant to be public. Never paste a Formspree password or API key anywhere.)
5. Test it on your computer: run `npm run dev`, open the address it prints, place a test order and send test feedback. Check the inbox. The first time, Formspree may email you a confirmation link to click.

What the free plan includes (checked on formspree.io/plans; limits change, so check again): 50 submissions a month, unlimited forms, basic spam filtering, one notification address per form.

## Part B. Put it online (GitHub Pages, free)

1. Create a free account at https://github.com.
2. Click **New repository**. Name it (for example `maple-and-crumb`), choose **Public**, and do not tick "Add a README". Create it.
3. In a terminal, inside the project folder, run these three lines (use your own username and repository name):
   ```bash
   git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```
   A browser window may ask you to sign in to GitHub the first time.
4. On GitHub open **Settings > Pages**. Under **Source** choose **GitHub Actions**.
5. Open the **Actions** tab. Wait for "Deploy to GitHub Pages" to show a green tick (1 to 2 minutes). Your site is now at:
   `https://YOUR-NAME.github.io/YOUR-REPO/`
6. Back in Formspree, open each form's **Settings** and restrict it to your site's domain `YOUR-NAME.github.io`, so nobody else can use your form.
7. Open your live site on your phone, place an order, and check the inbox.

To update the site later: change the text in `src/content.ts`, then run `git add -A`, `git commit -m "Update"`, `git push`. The site refreshes in about a minute.

## Before you publish: a privacy check

- Your repository and site are public. Use fictional or permission-cleared business details only.
- Git stamps every commit with an email address. To keep your own address private, use GitHub's no-reply address (GitHub > Settings > Emails > "Keep my email addresses private") and run:
  ```bash
  git config user.email "ID+YOUR-NAME@users.noreply.github.com"
  ```
  This only affects new commits. If you already committed with another address, ask Claude Code to help you rewrite the author before the first push.
- Never put passwords, API keys or real customer details in any file.

## If something goes wrong

| What you see | What to do |
|---|---|
| Blank page on the live site | Settings > Pages > Source must be "GitHub Actions". Re-run the workflow from the Actions tab. |
| Red cross in Actions | Open the failed step and paste the error into Claude Code: "what does this mean and how do I fix it?" |
| Form says "not connected yet" | `ORDER_FORM_ID` or `FEEDBACK_FORM_ID` in `src/content.ts` is still the `YOUR_...` placeholder. |
| Form worked locally but not live | Check the domain restriction in Formspree. It must match `YOUR-NAME.github.io` exactly. |
| No email arrives | Click the confirmation link Formspree sent you, then check spam. |
| 50 submissions used up | Free plan limit. Wait for next month or upgrade. |
