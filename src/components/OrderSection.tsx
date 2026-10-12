import { useState } from 'react'
import type { FormEvent } from 'react'
import { Minus, Plus } from 'lucide-react'
import { content, ORDER_FORM_ID } from '../content'
import { useFormspree } from '../lib/useFormspree'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Astro from './Astro'
import { fieldClass, labelClass, sectionHeadingStyle } from './formStyles'

export default function OrderSection() {
  const { order } = content
  const [qty, setQty] = useState<Record<string, number>>({})
  const { status, setStatus, notConnected, submit } = useFormspree(ORDER_FORM_ID)

  const lines = order.items.filter((item) => (qty[item.id] ?? 0) > 0)
  const total = lines.reduce((sum, item) => sum + (qty[item.id] ?? 0), 0)

  // Crumb reacts to what is in the cart.
  const { mascot } = content
  const mascotLine =
    status === 'sent' ? mascot.orderSent : total === 0 ? mascot.orderEmpty : total < 4 ? mascot.orderSome : mascot.orderLots

  function change(id: string, delta: number) {
    setQty((q) => ({ ...q, [id]: Math.min(order.maxPerItem, Math.max(0, (q[id] ?? 0) + delta)) }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (total === 0) return
    const form = e.currentTarget
    const summary = lines.map((item) => `${qty[item.id]} x ${item.name}`).join('\n')
    const ok = await submit(form, {
      order: summary,
      total_items: String(total),
      _subject: 'New order - Maple & Crumb demo',
    })
    if (ok) {
      setQty({})
      form.reset()
    }
  }

  return (
    <section id="order" className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-6 font-black uppercase leading-none tracking-tight" style={sectionHeadingStyle}>
            {order.heading}
          </h2>
          <div className="mb-12 flex items-end justify-between gap-4">
            <p className="max-w-xl font-light text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
              {order.intro}
            </p>
            <Astro say={mascotLine} flip delay={1.2} className="-mb-4 shrink-0" />
          </div>
        </FadeIn>

        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ol className="border-t border-[#D7E2EA]/30">
            {order.items.map((item, i) => (
              <FadeIn
                as="li"
                key={item.id}
                delay={i * 0.05}
                className="flex items-center justify-between gap-4 border-b border-[#D7E2EA]/30 py-5"
              >
                <span className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}>
                  {item.name}
                </span>
                <div className="flex items-center gap-3" role="group" aria-label={`Quantity of ${item.name}`}>
                  <button
                    type="button"
                    onClick={() => change(item.id, -1)}
                    disabled={!qty[item.id]}
                    aria-label={`Remove one ${item.name}`}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus size={18} />
                  </button>
                  <output aria-live="polite" className="w-6 text-center font-medium text-[#D7E2EA]">
                    {qty[item.id] ?? 0}
                  </output>
                  <button
                    type="button"
                    onClick={() => change(item.id, 1)}
                    disabled={(qty[item.id] ?? 0) >= order.maxPerItem}
                    aria-label={`Add one ${item.name}`}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </ol>

          <aside className="rounded-[40px] border-2 border-[#D7E2EA] p-6 sm:p-8 lg:sticky lg:top-8">
            <h3 className="mb-6 font-black uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              {order.ticketTitle}
            </h3>
            {status === 'sent' ? (
              <p role="status" className="font-light text-[#D7E2EA]">
                {order.sent}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                {total === 0 ? (
                  <p className="font-light text-[#D7E2EA]/70">{order.empty}</p>
                ) : (
                  <ul className="flex flex-col gap-1 font-light text-[#D7E2EA]">
                    {lines.map((item) => (
                      <li key={item.id}>
                        <span className="font-medium">{qty[item.id]} ×</span> {item.name}
                      </li>
                    ))}
                  </ul>
                )}
                <label className={labelClass}>
                  {order.nameLabel}
                  <input name="name" type="text" autoComplete="name" required className={fieldClass} />
                </label>
                <label className={labelClass}>
                  {order.emailLabel}
                  <input name="email" type="email" autoComplete="email" className={fieldClass} />
                </label>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" />
                <p className="text-sm font-light text-[#D7E2EA]/70">{order.demoNote}</p>
                <div>
                  <ContactButton type="submit" disabled={total === 0 || status === 'sending'}>
                    {status === 'sending' ? order.sending : `${order.submit} (${total})`}
                  </ContactButton>
                </div>
                {notConnected && (
                  <p role="status" className="rounded-2xl border border-[#D7E2EA]/40 p-3 text-sm font-light text-[#D7E2EA]">
                    {order.notConnected}
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="rounded-2xl border border-[#BE4C00] p-3 text-sm font-light text-[#D7E2EA]">
                    {order.error}
                  </p>
                )}
              </form>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
