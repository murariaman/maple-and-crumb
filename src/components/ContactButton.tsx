import type { ReactNode } from 'react'

interface ContactButtonProps {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

// Rounded gradient pill. Renders a link when given an href, otherwise a button.
export default function ContactButton({ children, href, type = 'button', disabled, onClick }: ContactButtonProps) {
  const className =
    'inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base disabled:cursor-not-allowed disabled:opacity-50'
  const style = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid white',
    outlineOffset: '-3px',
  }

  if (href) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  )
}
