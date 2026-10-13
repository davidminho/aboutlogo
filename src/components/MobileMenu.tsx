'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    ref.current?.removeAttribute('open')
  }, [pathname])

  return (
    <details className="masthead-menu" ref={ref}>
      <summary>เมนู</summary>
      <div>
        {items.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => ref.current?.removeAttribute('open')}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
