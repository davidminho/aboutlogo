import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FAQ } from '@/components/FAQ'
import { FinalCTA, PackageTerms, ProcessSteps, SpecSheet } from '@/components/PageElements'
import { LineButton } from '@/components/SiteFooter'
import { portfolioProjects } from '@/lib/portfolio'
import { faqItems, notIncluded, service, servicePath, toPrepare } from '@/lib/service'

const description = 'แพ็กเกจออกแบบโลโก้พร้อมชุด CI ราคา 9,900 บาท ได้โลโก้ ชุดสี ระบบฟอนต์ นามบัตร เทมเพลตโซเชียล และ Brand Guidelines'

export const metadata: Metadata = {
  title: 'ออกแบบโลโก้พร้อมชุด CI ราคา 9,900 บาท',
  description,
  alternates: { canonical: servicePath },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description,
    provider: { '@type': 'Organization', name: 'aboutlogo.com', url: 'https://aboutlogo.com' },
    areaServed: 'TH',
    offers: { '@type': 'Offer', price: service.price, priceCurrency: 'THB', url: `https://aboutlogo.com${servicePath}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
]

export default function ServicePage() {
  const examples = [portfolioProjects[7], portfolioProjects[0]]

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />

      <section className="page-head shell page-head-offer">
        <h1>{service.name}</h1>
        <div className="hero-offer">
          <strong className="hero-price">{service.priceLabel}</strong>
          <p>{service.summary} ขอบเขตงานระบุในใบเสนอราคาก่อนเริ่มงาน</p>
          <LineButton placement="service-head">เริ่มงานผ่าน LINE</LineButton>
        </div>
      </section>

      <section className="section shell package">
        <div className="section-head">
          <h2>สิ่งที่ได้รับ</h2>
        </div>
        <SpecSheet />
        <PackageTerms />
      </section>

      <section className="band">
        <div className="shell split split-even">
          <div>
            <h2>สิ่งที่ไม่รวมในแพ็กเกจ</h2>
            <ul className="plain-list">
              {notIncluded.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2>สิ่งที่ลูกค้าต้องเตรียม</h2>
            <ul className="plain-list">
              {toPrepare.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>ขั้นตอนการทำงาน</h2>
        </div>
        <ProcessSteps />
      </section>

      <section className="shell example-row">
        {examples.map((project) => (
          <figure className="split-figure" key={project.slug}>
            <div className="figure-frame portrait">
              <Image alt={`ผลงานออกแบบแบรนด์ ${project.title}`} fill sizes="(max-width: 640px) 100vw, 50vw" src={project.image} />
            </div>
            <figcaption>
              ผลงาน <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="section shell split split-even faq-section">
        <h2>คำถามเกี่ยวกับแพ็กเกจ</h2>
        <FAQ />
      </section>

      <FinalCTA title="เริ่มจากคุยกันก่อน ยังไม่ต้องตัดสินใจ" />
    </>
  )
}
