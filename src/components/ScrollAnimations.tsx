'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const heroMedia = document.querySelector<HTMLElement>('.hero-media')

    if (reducedMotion.matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))

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
  }, [])

  return null
}
