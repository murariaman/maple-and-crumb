import type { FormEvent } from 'react'
import { content, FEEDBACK_FORM_ID } from '../content'
import { useFormspree } from '../lib/useFormspree'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import { fieldClass, labelClass, sectionHeadingStyle } from './formStyles'

export default function FeedbackSection() {
  const { feedback } = content
  const { status, notConnected, submit } = useFormspree(FEEDBACK_FORM_ID)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const ok = await submit(form, { _subject: 'New feedback - Maple & Crumb demo' })
    if (ok) form.reset()
  }

  return (
    <section id="feedback" className="bg-[#0C0C0C] px-5 pb-24 sm:px-8 md:px-10 md:pb-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-4 font-black uppercase leading-none tracking-tight" style={sectionHeadingStyle}>
            {feedback.heading}
          </h2>
          <p className="mb-10 font-light text-[#D7E2EA]/80">{feedback.intro}</p>
        </FadeIn>

        {status === 'sent' ? (
          <p role="status" className="font-light text-[#D7E2EA]">
            {feedback.sent}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <label className={labelClass}>
              {feedback.nameLabel}
              <input name="name" type="text" autoComplete="name" className={fieldClass} />
            </label>
            <label className={labelClass}>
              {feedback.ratingLabel}
              <select name="rating" defaultValue="5" className={`${fieldClass} bg-[#0C0C0C]`}>
                {feedback.ratings.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              {feedback.messageLabel}
              <textarea name="message" rows={4} required className={fieldClass} />
            </label>
            <label className={labelClass}>
              {feedback.emailLabel}
              <input name="email" type="email" autoComplete="email" className={fieldClass} />
            </label>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" />
            <p className="text-sm font-light text-[#D7E2EA]/70">{feedback.note}</p>
            <div>
              <ContactButton type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? feedback.sending : feedback.submit}
              </ContactButton>
            </div>
            {notConnected && (
              <p role="status" className="rounded-2xl border border-[#D7E2EA]/40 p-3 text-sm font-light text-[#D7E2EA]">
                {feedback.notConnected}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="rounded-2xl border border-[#BE4C00] p-3 text-sm font-light text-[#D7E2EA]">
                {feedback.error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
