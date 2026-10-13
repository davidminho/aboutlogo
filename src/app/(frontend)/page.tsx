import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FinalCTA, PackageTerms, ProcessSteps, ProjectCard, SpecSheet, Testimonials } from '@/components/PageElements'
import { LineButton } from '@/components/SiteFooter'
import { portfolioProjects } from '@/lib/portfolio'
import { service, servicePath } from '@/lib/service'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const reasons = [
  ['เข้าใจธุรกิจก่อนเริ่มออกแบบ', 'เราวิเคราะห์ธุรกิจ การตลาด กลุ่มเป้าหมาย และคู่แข่ง ก่อนสกัดเป็นลายเส้น สี และรูปร่างที่ถูกต้องตามกลยุทธ์'],
  ['ส่งมอบระบบที่ใช้ได้จริง ไม่ใช่แค่ไฟล์ภาพ', 'คู่มือสี ฟอนต์ และองค์ประกอบช่วยให้คุณต่อยอดไปยังเพจ เว็บไซต์ สไลด์ และบรรจุภัณฑ์ได้อย่างเป็นระบบ'],
  ['ราคาชัดเจนตั้งแต่ต้น', `แพ็กเกจ ${service.priceLabel} ระบุขอบเขตในใบเสนอราคา เจ้าของธุรกิจจึงวางแผนงบประมาณได้อย่างสบายใจ`],
]

export default function HomePage() {
  const reasonProof = portfolioProjects[5]

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <h1><span>โลโก้พร้อมชุด CI</span> <span>ครบในแพ็กเกจเดียว</span></h1>
          <div className="hero-offer">
            <span className="hero-label">แพ็กเกจโลโก้ + ชุด CI</span>
            <strong className="hero-price">{service.priceLabel}</strong>
            <p>
              ออกแบบโลโก้ Corporate Identity และ Branding สำหรับธุรกิจที่พร้อมเติบโต
              ในราคาที่เจ้าของแบรนด์เข้าถึงได้
            </p>
            <div className="button-row">
              <LineButton placement="hero" />
              <Link className="text-link" href={servicePath}>ดูรายละเอียดแพ็กเกจ →</Link>
            </div>
          </div>
        </div>
        <ul className="hero-strip">
          {portfolioProjects.slice(0, 5).map((project, index) => (
            <li key={project.slug}>
              <Link href={`/portfolio/${project.slug}`}>
                <Image alt={`ผลงานออกแบบแบรนด์ ${project.title}`} fill priority={index < 3} sizes="(max-width: 640px) 60vw, 20vw" src={project.image} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section shell package" id="package">
        <div className="section-head">
          <h2>{service.priceLabel} ได้อะไรบ้าง</h2>
          <p>{service.summary}</p>
        </div>
        <SpecSheet />
        <PackageTerms />
        <Link className="text-link" href={servicePath}>สิ่งที่ไม่รวม และสิ่งที่ต้องเตรียม →</Link>
      </section>

      <section className="band-dark">
        <div className="shell">
          <div className="section-head">
            <h2>ผลงานที่ผ่านมา</h2>
            <Link className="text-link" href="/portfolio">ชมผลงานทั้งหมด →</Link>
          </div>
          <div className="work-grid">
            {portfolioProjects.slice(0, 4).map((project) => (
              <ProjectCard
                href={`/portfolio/${project.slug}`}
                image={project.image}
                key={project.slug}
                meta={project.meta}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section shell" id="process">
        <div className="section-head">
          <h2>ขั้นตอนการทำงาน</h2>
        </div>
        <ProcessSteps />
      </section>

      <section className="band">
        <div className="shell split split-flip">
          <div className="split-text">
            <h2>แบรนด์ที่ดีไม่ได้เริ่มจากโลโก้สวย แต่เริ่มจากการเข้าใจธุรกิจ</h2>
            <p>SME จำนวนมากเริ่มจากภาพโลโก้เพียงชิ้นเดียว แล้วพบว่าสี ฟอนต์ นามบัตร และโซเชียลมีเดียไปคนละทิศทาง เราจึงออกแบบทั้งระบบให้ทำงานร่วมกันตั้งแต่วันแรก</p>
            <ul className="reasons">
              {reasons.map(([title, copy]) => (
                <li key={title}><h3>{title}</h3><p>{copy}</p></li>
              ))}
            </ul>
          </div>
          <figure className="split-figure">
            <div className="figure-frame portrait">
              <Image alt={`ผลงานออกแบบแบรนด์ ${reasonProof.title}`} fill sizes="(max-width: 960px) 100vw, 40vw" src={reasonProof.image} />
            </div>
            <figcaption>
              ผลงาน <Link href={`/portfolio/${reasonProof.slug}`}>{reasonProof.title}</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell split split-even faq-section">
        <h2>คำถามที่พบบ่อย</h2>
        <FAQ />
      </section>

      <FinalCTA />
    </>
  )
}
