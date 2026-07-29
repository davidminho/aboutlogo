import Image from 'next/image'
import Link from 'next/link'
import { LineButton } from './SiteFooter'

export function Eyebrow({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <em>{number}</em>
      <span>— {children}</span>
    </div>
  )
}

export function FinalCTA({
  title = 'พร้อมเริ่มสร้างแบรนด์ของคุณหรือยัง?',
  body = 'เล่ารายละเอียดธุรกิจหรือไอเดียแบรนด์ให้เราฟัง — ปรึกษาเบื้องต้นเพื่อประเมินความพร้อมไม่มีค่าใช้จ่ายใดๆ',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="final-cta" data-reveal>
      <h2>{title}</h2>
      <p>{body}</p>
      <LineButton />
      <small>* ไม่มีค่าใช้จ่ายในการประเมินและปรึกษาครั้งแรก · ทีมงานตอบกลับภายใน 24 ชั่วโมง</small>
    </section>
  )
}

type ProjectCardProps = {
  href?: string
  image: string
  meta: string
  title: string
  className?: string
  priority?: boolean
}

export function ProjectCard({
  href = '/portfolio/grain-and-grind',
  image,
  meta,
  title,
  className = '',
  priority = false,
}: ProjectCardProps) {
  return (
    <Link className={`project-card ${className}`} href={href}>
      <div className="project-image">
        <Image alt={`ผลงานออกแบบแบรนด์ ${title}`} fill priority={priority} sizes="(max-width: 760px) 100vw, 50vw" src={image} />
      </div>
      <span>{meta}</span>
      <h3>{title}</h3>
    </Link>
  )
}
