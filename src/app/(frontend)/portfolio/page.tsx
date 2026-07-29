import type { Metadata } from 'next'
import { Eyebrow, FinalCTA, ProjectCard } from '@/components/PageElements'
import { getPublicProjects } from '@/lib/cms'
import { portfolioProjects } from '@/lib/portfolio'

export const metadata: Metadata = { title: 'ผลงาน' }
export const revalidate = 60

export default async function PortfolioPage() {
  const cmsProjects = await getPublicProjects()
  const projects = [
    ...portfolioProjects,
    ...cmsProjects.filter((project) => !portfolioProjects.some(({ slug }) => slug === project.slug)),
  ]

  return (
    <>
      <section className="page-hero shell">
        <Eyebrow number="PORTFOLIO">คลังผลงานออกแบบ</Eyebrow>
        <h1>ผลงานที่ผ่านมาของเรา</h1>
        <p>ส่วนหนึ่งของความสำเร็จจากแบรนด์ที่ให้เราช่วยวางโครงสร้างระบบอัตลักษณ์ ค้นหาตัวตน และเปลี่ยนสัญญะทางธุรกิจให้เป็นเครื่องมือที่จับต้องได้จริง</p>
      </section>
      <section className="portfolio-grid shell" data-reveal>
        {projects.map((project, index) => (
          <ProjectCard
            className={'orientation' in project && project.orientation === 'landscape' ? 'portfolio-full portfolio-landscape' : ''}
            href={`/portfolio/${project.slug}`}
            image={project.image}
            key={project.slug}
            meta={project.meta}
            priority={index === 0}
            title={project.title}
          />
        ))}
      </section>
      <FinalCTA title="พร้อมสร้างแบรนด์ที่ทำงานแทนคุณแล้วหรือยัง?" body="ให้โลโก้และระบบแบรนด์ของคุณบอกเล่าความน่าเชื่อถือ มาร่วมสร้างภาพลักษณ์ระดับสากลไปด้วยกัน" />
    </>
  )
}
