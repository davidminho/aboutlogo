'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { portfolioProjects } from '@/lib/portfolio'

const SLIDE_INTERVAL = 4800

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(motionPreference.matches)

    updatePreference()
    motionPreference.addEventListener('change', updatePreference)
    return () => motionPreference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (isPaused || reducedMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioProjects.length)
    }, SLIDE_INTERVAL)

    return () => window.clearInterval(timer)
  }, [isPaused, reducedMotion])

  const activeProject = portfolioProjects[activeIndex]
  const slideNumber = String(activeIndex + 1).padStart(2, '0')
  const slideTotal = String(portfolioProjects.length).padStart(2, '0')

  return (
    <>
      <div
        aria-label={`ตัวอย่างผลงานออกแบบ ${activeProject.title}`}
        aria-live="off"
        className="hero-slides"
        role="img"
      >
        {portfolioProjects.map((project, index) => (
          <div
            aria-hidden={index !== activeIndex}
            className={`hero-slide ${index === activeIndex ? 'is-active' : ''}`}
            key={project.slug}
          >
            <Image
              alt=""
              fill
              priority={index === 0}
              sizes="(max-width: 980px) 100vw, 54vw"
              src={project.image}
            />
          </div>
        ))}
      </div>
      <div className="hero-slide-meta">
        <span>{activeProject.title}</span>
        <div>
          <small>{slideNumber} / {slideTotal}</small>
          <button
            aria-label={isPaused ? 'เล่นสไลด์ผลงานต่อ' : 'หยุดสไลด์ผลงานชั่วคราว'}
            disabled={reducedMotion}
            onClick={() => setIsPaused((paused) => !paused)}
            type="button"
          >
            {isPaused || reducedMotion ? '▶' : 'Ⅱ'}
          </button>
        </div>
      </div>
    </>
  )
}
