'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollAnimations() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const heroMedia = document.querySelector<HTMLElement>('.hero-media')
    const root = document.documentElement

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      root.classList.remove('reveal-ready')
      return
    }

    const preloadBoundary = window.innerHeight + 160
    revealElements.forEach((element) => {
      const bounds = element.getBoundingClientRect()
      if (bounds.top <= preloadBoundary && bounds.bottom >= -160) {
        element.classList.add('is-visible')
      }
    })
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '160px 0px 160px 0px', threshold: 0.01 },
    )

    revealElements.forEach((element) => {
      if (!element.classList.contains('is-visible')) observer.observe(element)
    })

    let frame = 0
    const updateHero = () => {
      frame = 0
      if (!heroMedia) return
      const heroHeight = heroMedia.parentElement?.offsetHeight || 0
      const shift = Math.min(window.scrollY, heroHeight) * 0.09
      heroMedia.style.setProperty('--hero-shift', `${shift}px`)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHero)
    }

    updateHero()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  return null
}
