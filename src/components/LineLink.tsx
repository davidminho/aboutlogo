'use client'

import { track } from '@vercel/analytics'

export function LineLink({
  children,
  className,
  href,
  placement,
}: {
  children: React.ReactNode
  className?: string
  href: string
  placement: string
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => track('line_click', { placement })}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
