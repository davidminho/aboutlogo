import type { Metadata } from 'next'
import { FinalCTA, ProjectCard } from '@/components/PageElements'
import { getPublicProjects } from '@/lib/cms'
import { portfolioProjects } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'ผลงานออกแบบโลโก้และ CI',
  description: 'ผลงานออกแบบโลโก้ Corporate Identity และบรรจุภัณฑ์ของ aboutlogo.com สำหรับธุรกิจหลากหลายประเภท',
  alternates: { canonical: '/portfolio' },
}
export const revalidate = 60

export default async function PortfolioPage() {
  const cmsProjects = await getPublicProjects()
  const projects = [
    ...portfolioProjects,
    ...cmsProjects.filter((project) => !portfolioProjects.some(({ slug }) => slug === project.slug)),
  ]

  return (
    <>
      <section className="page-head shell">
        <h1>ผลงานที่ผ่านมา</h1>
        <p className="lede">แบรนด์ที่ให้เราช่วยวางระบบอัตลักษณ์ ตั้งแต่โลโก้ไปจนถึงสื่อที่ใช้งานจริง</p>
      </section>
      <section className="shell work-grid work-grid-all">
        {projects.map((project, index) => (
          <ProjectCard
            className={'orientation' in project && project.orientation === 'landscape' ? 'is-landscape' : ''}
            href={`/portfolio/${project.slug}`}
            image={project.image}
            key={project.slug}
            meta={project.meta}
            priority={index < 2}
            title={project.title}
          />
        ))}
      </section>
      <FinalCTA title="อยากได้งานแบบนี้ให้แบรนด์ของคุณ?" body="เล่าธุรกิจของคุณให้เราฟังทาง LINE แล้วเราจะแนะนำแนวทางที่เหมาะสม" />
    </>
  )
}
