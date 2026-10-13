import Image from 'next/image'
import Link from 'next/link'
import { deliverableGroups, packageTerms, processSteps, testimonials } from '@/lib/service'
import { LineButton } from './SiteFooter'

export function FinalCTA({
  title = 'พร้อมเริ่มสร้างแบรนด์ของคุณหรือยัง?',
  body = 'เล่ารายละเอียดธุรกิจหรือไอเดียแบรนด์ให้เราฟัง ปรึกษาเบื้องต้นเพื่อประเมินความพร้อมไม่มีค่าใช้จ่าย',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-grid">
        <h2>{title}</h2>
        <div>
          <p>{body}</p>
          <LineButton placement="final-cta" />
          <small>ปรึกษาครั้งแรกไม่มีค่าใช้จ่าย · ทีมงานตอบกลับภายใน 24 ชั่วโมง</small>
        </div>
      </div>
    </section>
  )
}

type ProjectCardProps = {
  href: string
  image: string
  meta: string
  title: string
  className?: string
  priority?: boolean
}

export function ProjectCard({ href, image, meta, title, className = '', priority = false }: ProjectCardProps) {
  return (
    <Link className={`project-card ${className}`} href={href}>
      <div className="project-image">
        <Image alt={`ผลงานออกแบบแบรนด์ ${title}`} fill priority={priority} sizes="(max-width: 640px) 100vw, 50vw" src={image} />
      </div>
      <h3>{title}</h3>
      <span>{meta}</span>
    </Link>
  )
}

const tileArt = ['logo', 'files', 'colors', 'fonts', 'card', 'social', 'guide']

function TileArt({ kind }: { kind: string }) {
  if (kind === 'logo') return <div aria-hidden className="art art-logo"><i /><b>ชื่อแบรนด์</b></div>
  if (kind === 'files') return <div aria-hidden className="art art-files"><i>.AI</i><i>.SVG</i><i>.PNG</i></div>
  if (kind === 'colors') return <div aria-hidden className="art art-colors"><i /><i /><i /><i /><i /></div>
  if (kind === 'fonts') return <div aria-hidden className="art art-fonts"><b>Aa</b><b>กข</b></div>
  if (kind === 'card') return <div aria-hidden className="art art-card"><i /><i /></div>
  if (kind === 'social') return <div aria-hidden className="art art-social"><i /><i /><i /></div>
  return <div aria-hidden className="art art-guide"><i /><i /><i /></div>
}

export function SpecSheet() {
  const items = deliverableGroups.flatMap((group) => group.items.map((item) => ({ group: group.title, item })))
  return (
    <ul className="bento">
      {items.map(({ group, item: [name, detail] }, index) => (
        <li className={`tile tile-${tileArt[index]}`} key={name}>
          <TileArt kind={tileArt[index]} />
          <div className="tile-text">
            <span>{group}</span>
            <h3>{name}</h3>
            <p>{detail}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ProcessSteps() {
  return (
    <ol className="steps steps-grid">
      {processSteps.map(([title, copy]) => (
        <li key={title}>
          <h3>{title}</h3>
          <p>{copy}</p>
        </li>
      ))}
    </ol>
  )
}

export function PackageTerms() {
  const terms = packageTerms.filter((term) => term.value)
  if (!terms.length) return null
  return (
    <dl className="terms">
      {terms.map((term) => (
        <div key={term.label}>
          <dt>{term.label}</dt>
          <dd>{term.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section className="section shell">
      <div className="section-head">
        <h2>เสียงจากลูกค้า</h2>
      </div>
      <ul className="quotes">
        {testimonials.map((item) => (
          <li key={item.name + item.brand}>
            <blockquote>{item.quote}</blockquote>
            <cite>{item.name} · {item.brand}</cite>
          </li>
        ))}
      </ul>
    </section>
  )
}
