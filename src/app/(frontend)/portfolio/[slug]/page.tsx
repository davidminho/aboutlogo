import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FinalCTA } from '@/components/PageElements'
import { getPublicProjectBySlug } from '@/lib/cms'

export const revalidate = 60

export default async function CMSProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPublicProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <article className="case-study shell cms-case">
        <Link className="back-link" href="/portfolio">← กลับไปหน้าผลงานทั้งหมด</Link>
        <div className="case-title">
          <div>
            <span>{project.meta}</span>
            <h1>{project.title}</h1>
          </div>
        </div>
        <div className="case-image case-hero-image">
          <Image alt={project.title} fill priority sizes="100vw" src={project.image} />
        </div>
        <section className="case-intro">
          <div>
            <h2>เกี่ยวกับโครงการ</h2>
            <p>{project.summary}</p>
          </div>
        </section>
      </article>
      <FinalCTA title="ชอบผลงานออกแบบสไตล์นี้ใช่ไหม?" />
    </>
  )
}
