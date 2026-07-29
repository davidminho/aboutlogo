import type { Metadata } from 'next'
import { Eyebrow } from '@/components/PageElements'
import { getPublicSiteSettings } from '@/lib/cms'

export const metadata: Metadata = { title: 'ติดต่อเรา' }
export const revalidate = 60

const prep = [
  ['ชื่อธุรกิจและประเภทอุตสาหกรรม', 'เพื่อประเมินคู่แข่งและสไตล์งานที่เหมาะสมกับสินค้าคุณ'],
  ['กลุ่มเป้าหมายหรือลูกค้าหลัก', 'ช่วยออกแบบโครงสร้างสี ฟอนต์ และลายเส้นให้ตรงกับคนที่จะเข้ามาซื้อจริง'],
  ['ตัวอย่างแบรนด์หรือสไตล์ที่ชอบ', 'หากมีภาพหรือชื่อแบรนด์ในใจ สามารถส่งเป็นแนวทางทิศทางศิลปะได้'],
  ['งบประมาณและกรอบเวลาส่งมอบ', 'เพื่อวางลำดับกระบวนการให้ทันการเปิดตัวอย่างสมบูรณ์แบบ'],
]

export default async function ContactPage() {
  const settings = await getPublicSiteSettings()
  return (
    <section className="contact-page shell">
      <Eyebrow number="01">START YOUR JOURNEY</Eyebrow>
      <h1>ติดต่อเรา</h1>
      <div className="contact-grid">
        <div>
          <h2>พร้อมเริ่มสร้างแบรนด์ที่แท้จริงของคุณแล้วหรือยัง?</h2>
          <p>เล่าเกี่ยวกับธุรกิจหรือไอเดียแบรนด์ของคุณให้เราฟังแบบย่อๆ หรือแจ้งโจทย์ที่ต้องการปรึกษา ทีมออกแบบของเรายินดีให้คำแนะนำเบื้องต้นโดยไม่มีค่าใช้จ่ายแอบแฝง</p>
          <dl className="contact-list">
            <div><dt>LINE OFFICIAL ACCOUNT</dt><dd><a href={settings.lineURL}>{settings.lineHandle}</a><a className="button button-line" href={settings.lineURL}>แอดไลน์ปรึกษาทันที</a></dd></div>
            <div><dt>EMAIL INQUIRIES</dt><dd><a href={`mailto:${settings.email}`}>{settings.email}</a></dd></div>
            <div><dt>BUSINESS HOURS</dt><dd>{settings.businessHours}</dd></div>
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
