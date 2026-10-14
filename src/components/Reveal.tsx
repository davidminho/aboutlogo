'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

const targets = [
  '.section-head', '.bento > li', '.work-grid > a', '.steps > li', '.terms > div', '.quotes > li',
  '.split-text', '.split-figure', '.reasons > li', '.faq-list', '.final-cta-grid > *', '.plain-list',
  '.prose', '.contact-list', '.chapter-head', '.chapter-body', '.chapter-note', '.pull-quote', '.story-figure', '.story-teaser > *', '.case-text', '.case > .figure-frame', '.case-gallery > div', '.legal > *',
].join(',')

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export function Reveal() {
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets))
    const edge = () => window.innerHeight * 0.92
    elements.forEach((element) => {
      const index = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0
      element.style.setProperty('--i', String(Math.min(index, 5)))
      if (element.getBoundingClientRect().top >= edge()) element.dataset.reveal = 'wait'
    })
    root.classList.add('reveal-ready')

    // touch screens have no hover, so work images take their colour while they pass the middle of the screen
    const toned = window.matchMedia('(hover: none)').matches
      ? Array.from(document.querySelectorAll<HTMLElement>('.project-card, .split-figure, .story-figure'))
      : []
    const tone = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle('is-color', entry.isIntersecting)),
      { rootMargin: '-30% 0px -30% 0px' },
    )
    toned.forEach((element) => tone.observe(element))

    // anything at or above the reveal line is shown, so jumps and anchor links never leave content hidden
    let frame = 0
    const sweep = () => {
      frame = 0
      const line = edge()
      elements.forEach((element) => {
        if (element.dataset.reveal !== 'wait' || element.getBoundingClientRect().top >= line) return
        element.dataset.reveal = 'in'
        // hand hover transitions back once the entrance has finished
        window.setTimeout(() => delete element.dataset.reveal, 1300)
      })
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(sweep)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      tone.disconnect()
      toned.forEach((element) => element.classList.remove('is-color'))
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      elements.forEach((element) => delete element.dataset.reveal)
    }
  }, [pathname])

  return null
}
