import type { Metadata } from 'next'
import { Eyebrow, FinalCTA, ProjectCard } from '@/components/PageElements'
import { getPublicProjects } from '@/lib/cms'

export const metadata: Metadata = { title: 'ผลงาน' }
export const revalidate = 60

export default async function PortfolioPage() {
  const cmsProjects = await getPublicProjects()
  return (
    <>
      <section className="page-hero shell">
        <Eyebrow number="PORTFOLIO">คลังผลงานออกแบบ</Eyebrow>
        <h1>ผลงานที่ผ่านมาของเรา</h1>
        <p>ส่วนหนึ่งของความสำเร็จจากแบรนด์ที่ให้เราช่วยวางโครงสร้างระบบอัตลักษณ์ ค้นหาตัวตน และเปลี่ยนสัญญะทางธุรกิจให้เป็นเครื่องมือที่จับต้องได้จริง</p>
      </section>
      <section className="portfolio-grid shell">
        {cmsProjects.length > 0 ? cmsProjects.map((project, index) => (
          <ProjectCard
            className={index % 3 === 0 ? 'portfolio-full' : index % 3 === 1 ? 'portfolio-large' : ''}
            href={`/portfolio/${project.slug}`}
            image={project.image}
            key={project.slug}
            meta={project.meta}
            priority={index === 0}
            title={project.title}
          />
        )) : <>
          <ProjectCard priority className="portfolio-full" image="/images/portfolio-klaer.png" meta="SKINCARE · BRAND IDENTITY SYSTEM · 2024" title="KLAER - เวชสำอางค์สกัดจากธรรมชาติเพื่อผิวแพ้ง่าย" />
          <ProjectCard className="portfolio-large" image="/images/portfolio-grain.png" meta="F&B · PACKAGING & REBRANDING · 2024" title="GRAIN & GRIND - โรงคั่วกาแฟ คาเฟ่พรีเมียม และผลิตภัณฑ์ส่งออก" />
          <ProjectCard image="/images/portfolio-villa.png" meta="CREATIVE STUDIO · LOGO DESIGN · 2023" title="VILLA ATELIER - สถาปนิกและกลุ่มนักออกแบบภายในเชิงวิเคราะห์" />
          <ProjectCard className="portfolio-full" image="/images/portfolio-nextpace.png" meta="TECH & LOGISTICS · BRAND GUIDELINES · 2024" title="NEXTPACE - ขนส่งด่วนอัจฉริยะสำหรับชีวิตเมืองยุคใหม่" />
          <ProjectCard image="/images/portfolio-sens.png" meta="HOMEWARE · BRAND IDENTITY · 2024" title="SENS CERAMICS - เครื่องปั้นดินเผาทำมือสำหรับมื้ออาหารชั้นสูง" />
          <ProjectCard className="portfolio-large" image="/images/portfolio-oasis.png" meta="WELLNESS · TOTAL IDENTITY SYSTEM · 2023" title="OASIS RETREAT - สปาและคลินิกศาสตร์บำบัดแบบองค์รวม" />
        </>}
      </section>
      <FinalCTA title="พร้อมสร้างแบรนด์ที่ทำงานแทนคุณแล้วหรือยัง?" body="ให้โลโก้และระบบแบรนด์ของคุณบอกเล่าความน่าเชื่อถือ มาร่วมสร้างภาพลักษณ์ระดับสากลไปด้วยกัน" />
    </>
  )
}
