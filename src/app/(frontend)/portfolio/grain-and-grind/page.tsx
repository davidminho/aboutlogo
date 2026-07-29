import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FinalCTA } from '@/components/PageElements'

export const metadata: Metadata = {
  title: 'GRAIN & GRIND — Brand Case Study',
  description: 'กรณีศึกษาการออกแบบอัตลักษณ์แบรนด์สำหรับคาเฟ่และโรงคั่วกาแฟ GRAIN & GRIND',
}

export default function CaseStudyPage() {
  return (
    <>
      <article className="case-study shell">
        <Link className="back-link" href="/portfolio">← กลับไปหน้าผลงานทั้งหมด</Link>
        <div className="case-title">
          <div>
            <span>PROJECT CASE STUDY — พรีเมียมคาเฟ่และโรงคั่วกาแฟ</span>
            <h1>GRAIN &amp; GRIND</h1>
          </div>
          <dl>
            <div><dt>INDUSTRY</dt><dd>Food &amp; Beverage</dd></div>
            <div><dt>YEAR</dt><dd>2024</dd></div>
            <div><dt>SERVICES</dt><dd>Brand Identity, Packaging, Guidelines</dd></div>
          </dl>
        </div>
        <div className="case-image case-hero-image">
          <Image alt="เคาน์เตอร์คาเฟ่ GRAIN & GRIND" fill priority sizes="100vw" src="/images/case-hero.png" />
        </div>

        <section className="case-intro">
          <div>
            <h2>เกี่ยวกับโครงการ</h2>
            <p>ทีมงาน aboutlogo.com ได้รีเซ็ตอัตลักษณ์ใหม่ทั้งหมด โดยพัฒนาโลโก้เรียบหรูและระบบชุดสีที่สะท้อนเนื้อดินธรรมชาติร่วมกับสีทองแดง เพื่อสื่อสารความเชี่ยวชาญ ความประณีต และกลิ่นอายคราฟต์ระดับพรีเมียม</p>
          </div>
          <aside>
            <h3>ข้อมูลโครงการ</h3>
            <p><strong>ลูกค้า</strong> GRAIN &amp; GRIND</p>
            <p><strong>สิ่งที่ส่งมอบ</strong> Logo, Brand Identity, Packaging, Guidelines</p>
            <p><strong>ระยะเวลาทำงาน</strong> 4 สัปดาห์รวมปรับแก้ไข</p>
          </aside>
        </section>

        <section className="case-gallery">
          <header><span>ระบบการออกแบบอัตลักษณ์แบรนด์</span><h2>การทำงานร่วมกันอย่างเป็นระบบระหว่างสัญญะหลัก สี และองค์ประกอบสิ่งพิมพ์</h2></header>
          <div className="case-image wide"><Image alt="ระบบอัตลักษณ์ GRAIN & GRIND" fill sizes="100vw" src="/images/case-system.png" /></div>
          <div className="case-image"><Image alt="บรรจุภัณฑ์กาแฟ" fill sizes="50vw" src="/images/case-packaging.png" /></div>
          <div className="case-image"><Image alt="นามบัตร GRAIN & GRIND" fill sizes="50vw" src="/images/case-cards.png" /></div>
          <div className="case-image wide"><Image alt="คู่มือแบรนด์ GRAIN & GRIND" fill sizes="100vw" src="/images/case-guidelines.png" /></div>
        </section>

        <section className="case-concept">
          <h2>แนวคิดเบื้องหลังการออกแบบ</h2>
          <div>
            <article><h3>ความเที่ยงตรงและความสัมพันธ์ทางเรขาคณิต</h3><p>โลโก้ถูกสร้างขึ้นบนตารางพิกัดแบบสมมาตร เส้นสายใช้ความหนาคงที่เพื่อให้แสดงผลคมชัดทั้งบนตราปั๊ม ถ้วยกาแฟ และหน้าจอสมาร์ทโฟนขนาดเล็ก</p></article>
            <article><h3>ชุดสีกรวดธรรมชาติและแร่ทองแดง</h3><p>เราจับคู่สีน้ำตาลแกลบอันอบอุ่น สีถ่านเข้ม และทองแดงเงา เพื่อสร้างความรู้สึกของคาเฟ่ลอฟท์พรีเมียมที่ยังเล่าถึงธรรมชาติและแร่ธาตุในดินเพาะปลูก</p></article>
          </div>
        </section>
        <div className="next-project"><span>ต้องการชมเคสอื่นเพิ่มเติม?</span><Link href="/portfolio">NEXTPACE — ขนส่งด่วนอัจฉริยะ →</Link></div>
      </article>
      <FinalCTA title="ชอบผลงานออกแบบสไตล์นี้ใช่ไหม?" body="มาร่วมสร้างระบบอัตลักษณ์แบรนด์ที่โดดเด่นและสร้างคุณค่าให้ธุรกิจของคุณ ปรึกษากับเราวันนี้ผ่านไลน์ด่วน" />
    </>
  )
}
