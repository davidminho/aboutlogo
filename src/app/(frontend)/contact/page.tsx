import type { Metadata } from 'next'
import { Eyebrow } from '@/components/PageElements'

export const metadata: Metadata = { title: 'ติดต่อเรา' }

const prep = [
  ['ชื่อธุรกิจและประเภทอุตสาหกรรม', 'เพื่อประเมินคู่แข่งและสไตล์งานที่เหมาะสมกับสินค้าคุณ'],
  ['กลุ่มเป้าหมายหรือลูกค้าหลัก', 'ช่วยออกแบบโครงสร้างสี ฟอนต์ และลายเส้นให้ตรงกับคนที่จะเข้ามาซื้อจริง'],
  ['ตัวอย่างแบรนด์หรือสไตล์ที่ชอบ', 'หากมีภาพหรือชื่อแบรนด์ในใจ สามารถส่งเป็นแนวทางทิศทางศิลปะได้'],
  ['งบประมาณและกรอบเวลาส่งมอบ', 'เพื่อวางลำดับกระบวนการให้ทันการเปิดตัวอย่างสมบูรณ์แบบ'],
]

export default function ContactPage() {
  return (
    <section className="contact-page shell">
      <Eyebrow number="01">START YOUR JOURNEY</Eyebrow>
      <h1>ติดต่อเรา</h1>
      <div className="contact-grid">
        <div>
          <h2>พร้อมเริ่มสร้างแบรนด์ที่แท้จริงของคุณแล้วหรือยัง?</h2>
          <p>เล่าเกี่ยวกับธุรกิจหรือไอเดียแบรนด์ของคุณให้เราฟังแบบย่อๆ หรือแจ้งโจทย์ที่ต้องการปรึกษา ทีมออกแบบของเรายินดีให้คำแนะนำเบื้องต้นโดยไม่มีค่าใช้จ่ายแอบแฝง</p>
          <dl className="contact-list">
            <div><dt>LINE OFFICIAL ACCOUNT</dt><dd><a href="https://line.me/R/ti/p/@aboutlogo">@aboutlogo</a><a className="button button-line" href="https://line.me/R/ti/p/@aboutlogo">แอดไลน์ปรึกษาทันที</a></dd></div>
            <div><dt>EMAIL INQUIRIES</dt><dd><a href="mailto:hello@aboutlogo.com">hello@aboutlogo.com</a></dd></div>
            <div><dt>BUSINESS HOURS</dt><dd>จันทร์ - ศุกร์ (09:00 น. - 18:00 น.) *รอยืนยันเวลาทำการ</dd></div>
          </dl>
        </div>
        <aside className="contact-prep">
          <h2>สิ่งที่คุณอาจเตรียมไว้เบื้องต้น</h2>
          <p>ไม่ต้องกังวลหากยังไม่มีครบทุกข้อ ทีมงานของเรายินดีช่วยสกัดโครงสร้างทั้งหมดร่วมกับคุณตั้งแต่วันแรก</p>
          <ul>{prep.map(([title, copy]) => <li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ul>
        </aside>
      </div>
    </section>
  )
}
