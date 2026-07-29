import Image from 'next/image'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { Eyebrow, FinalCTA, ProjectCard } from '@/components/PageElements'
import { LineButton } from '@/components/SiteFooter'
import { portfolioProjects } from '@/lib/portfolio'

const process = [
  ['01', 'ปรึกษาเบื้องต้น', 'วิเคราะห์ความต้องการ โครงสร้างงาน และทำความเข้าใจแกนธุรกิจหลัก'],
  ['02', 'รับบรีฟเชิงลึก', 'รับข้อมูลจากแบบฟอร์มสัมภาษณ์เพื่อตีความโจทย์เฉพาะตัว'],
  ['03', 'วางทิศทางการออกแบบ', 'นำเสนอ Moodboard กำหนดโทน อารมณ์ และทิศทางศิลปะ'],
  ['04', 'ออกแบบและพัฒนา', 'ร่างแนวคิดและพัฒนาแบบที่ตอบโจทย์เชิงกลยุทธ์'],
  ['05', 'ปรับแก้และส่งมอบ', 'เก็บรายละเอียดและส่งมอบไฟล์พร้อมใช้งานจริง'],
  ['06', 'ดูแลหลังส่งงาน', 'ให้คำปรึกษาการนำฟอนต์ สี และองค์ประกอบไปใช้อย่างต่อเนื่อง'],
]

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-media">
          <Image alt="ตัวอย่างงานออกแบบแบรนด์ About Logo" fill priority sizes="100vw" src="/images/home-hero.png" />
        </div>
        <div className="hero-copy">
          <h1>โลโก้และระบบแบรนด์<br />ที่ทำงานให้ธุรกิจของคุณ</h1>
          <p>
            ออกแบบโลโก้ Corporate Identity และ Branding สำหรับธุรกิจที่พร้อมเติบโตและยกระดับสู่สากล
            ในราคาสมเหตุสมผลที่เจ้าของแบรนด์เข้าถึงได้ง่าย
          </p>
        </div>
        <div className="hero-offer">
          <div><span>เริ่มต้นเพียง</span><strong>฿9,900</strong><span>/ แพ็กเกจแบบรอบเดียวจบ</span></div>
          <div className="button-row">
            <LineButton />
            <Link className="button button-outline" href="/portfolio">ชมผลงานที่ผ่านมา</Link>
          </div>
        </div>
      </section>

      <section className="section shell" data-reveal>
        <Eyebrow number="01">ผลงานบางส่วนที่เราภาคภูมิใจ</Eyebrow>
        <h2>Selected Works.</h2>
        <div className="home-gallery">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              href={`/portfolio/${project.slug}`}
              image={project.image}
              key={project.slug}
              meta={project.meta}
              priority={index === 0}
              title={project.title}
            />
          ))}
        </div>
        <Link className="text-link" href="/portfolio">ชมผลงานทั้งหมด →</Link>
      </section>

      <section className="problem-section">
        <div className="shell split" data-reveal>
          <div>
            <Eyebrow number="02">ปัญหาที่เจ้าของแบรนด์มักเจอ</Eyebrow>
            <h2>แบรนด์ที่ดีไม่ได้เริ่มจากโลโก้สวย<br />แต่เริ่มจากการเข้าใจเนื้อแท้ของธุรกิจ</h2>
          </div>
          <div className="body-copy">
            <p>SME จำนวนมากเริ่มจากภาพโลโก้เพียงชิ้นเดียว แล้วพบว่าสี ฟอนต์ นามบัตร และโซเชียลมีเดียไปคนละทิศทาง โลโก้จึงไม่สามารถถ่ายทอดตัวตนหรือคุณค่าที่แท้จริงของแบรนด์ได้</p>
            <p>ที่ aboutlogo.com เราออกแบบระบบอัตลักษณ์ที่ผ่านการคิดวิเคราะห์ เพื่อให้ทุกองค์ประกอบทำงานร่วมกันและช่วยสร้างมูลค่าให้ธุรกิจตั้งแต่วันแรก</p>
          </div>
        </div>
      </section>

      <section className="section shell package" data-reveal id="package">
        <Eyebrow number="03">แพ็กเกจแบบเบ็ดเสร็จ</Eyebrow>
        <div className="package-heading"><h2>The Single Package</h2><strong>฿9,900</strong></div>
        <p>ราคาแบบโปร่งใส ไม่มีค่าใช้จ่ายบานปลาย</p>
        <div className="package-grid">
          <div><h3>สิ่งที่รวมในแพ็กเกจ</h3><ul><li>ออกแบบโลโก้หลัก Logo Mark + Wordmark</li><li>ชุดสีและระบบฟอนต์ประจำแบรนด์</li><li>นามบัตรและเทมเพลตโซเชียลมาตรฐาน</li><li>Brand Guidelines PDF</li><li>ไฟล์ต้นฉบับ .AI, .SVG และ .PNG</li></ul></div>
          <div><h3>สิ่งที่ไม่รวมในราคาพื้นฐาน</h3><ul><li>การจดทะเบียนเครื่องหมายการค้า</li><li>งาน Brand Copywriting</li><li>แพ็กเกจจิ้งเชิงลึกและเว็บไซต์</li><li>ค่าลิขสิทธิ์ฟอนต์พิเศษ</li></ul></div>
          <div><h3>สิ่งที่ลูกค้าต้องเตรียม</h3><ul><li>ชื่อแบรนด์และข้อมูลธุรกิจ</li><li>กลุ่มเป้าหมายและคู่แข่ง</li><li>ฟีดแบ็กที่กระชับภายใน 3–5 วัน</li></ul></div>
        </div>
        <LineButton>ปรึกษาและจองสิทธิ์ผ่าน LINE</LineButton>
      </section>

      <section className="section shell" data-reveal id="process">
        <Eyebrow number="04">กระบวนการทำงาน</Eyebrow>
        <h2>The Studio Process</h2>
        <div className="process-grid">
          {process.map(([number, title, copy]) => <div key={number}><em>{number}</em><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="why-section">
        <div className="shell" data-reveal>
          <Eyebrow number="05">ทำไมต้อง aboutlogo.com</Eyebrow>
          <div className="why-list">
            <article><h3>เข้าใจธุรกิจอย่างถ่องแท้ก่อนเริ่มจรดพู่กัน</h3><p>เราวิเคราะห์ธุรกิจ การตลาด กลุ่มเป้าหมาย และคู่แข่ง ก่อนสกัดเป็นลายเส้น สี และรูปร่างที่ถูกต้องตามกลยุทธ์</p></article>
            <article><h3>ส่งมอบระบบที่ใช้ได้จริง ไม่ใช่แค่ไฟล์ภาพ</h3><p>คู่มือสี ฟอนต์ และองค์ประกอบช่วยให้คุณต่อยอดไปยังเพจ เว็บไซต์ สไลด์ และบรรจุภัณฑ์ได้อย่างเป็นระบบ</p></article>
            <article><h3>ราคาเดียวแบบโปร่งใส</h3><p>ราคาเริ่มต้น ฿9,900 ระบุชัดเจนในใบเสนอราคา เจ้าของธุรกิจจึงวางแผนงบประมาณได้อย่างสบายใจ</p></article>
          </div>
          <div className="testimonial-placeholder"><span>STATUS: PENDING REAL DATA</span><p>รอข้อมูลรีวิวจริงจากลูกค้า — ไม่ใช้ข้อมูลจำลอง</p></div>
        </div>
      </section>

      <section className="section shell faq-section" data-reveal>
        <div><Eyebrow number="06">คำถามที่พบบ่อย</Eyebrow><h2>Questions &<br />Answers</h2></div>
        <FAQ />
      </section>
      <FinalCTA />
    </>
  )
}
