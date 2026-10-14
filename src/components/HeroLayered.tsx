'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Slide = { image: string; slug: string; title: string }

const INTERVAL = 5200
const pad = (value: number) => String(value).padStart(2, '0')

export function HeroLayered({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), INTERVAL)
    return () => window.clearInterval(timer)
  }, [paused, slides.length])

  const inset = (active + 1) % slides.length

  return (
    <div
      className="hero-media"
      onBlur={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-label={`ผลงานออกแบบแบรนด์ ${slides[active].title}`} className="hero-main" role="img">
        {slides.map((slide, index) => (
          <Image
            alt=""
            className={index === active ? 'is-active' : ''}
            fill
            key={slide.slug}
            loading={index === 0 ? 'eager' : 'lazy'}
            preload={index === 0}
            sizes="(max-width: 960px) 100vw, 40vw"
            src={slide.image}
          />
        ))}
      </div>
      <div aria-hidden className="hero-inset">
        {slides.map((slide, index) => (
          <Image
            alt=""
            className={index === inset ? 'is-active' : ''}
            fill
            key={slide.slug}
            loading={index === 1 ? 'eager' : 'lazy'}
            sizes="(max-width: 960px) 40vw, 16vw"
            src={slide.image}
          />
        ))}
      </div>
      <div className="hero-count">
        <span>{pad(active + 1)}</span>
        <i><b style={{ transform: `scaleX(${(active + 1) / slides.length})` }} /></i>
        <span>{pad(slides.length)}</span>
        <button aria-label="ดูผลงานถัดไป" onClick={() => setActive(inset)} type="button">→</button>
      </div>
    </div>
  )
}
