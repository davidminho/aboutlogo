import type { Metadata } from 'next'
import { LineButton } from '@/components/SiteFooter'
import { getPublicSiteSettings } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'ติดต่อเรา',
  description: 'ปรึกษางานออกแบบโลโก้และชุด CI กับ aboutlogo.com ผ่าน LINE หรืออีเมล ปรึกษาเบื้องต้นไม่มีค่าใช้จ่าย',
  alternates: { canonical: '/contact' },
}
export const revalidate = 60

const prep = [
  ['ชื่อธุรกิจและประเภทอุตสาหกรรม', 'เพื่อประเมินคู่แข่งและสไตล์งานที่เหมาะสมกับสินค้าคุณ'],
  ['กลุ่มเป้าหมายหรือลูกค้าหลัก', 'ช่วยออกแบบสี ฟอนต์ และลายเส้นให้ตรงกับคนที่จะเข้ามาซื้อจริง'],
  ['ตัวอย่างแบรนด์หรือสไตล์ที่ชอบ', 'หากมีภาพหรือชื่อแบรนด์ในใจ ส่งเป็นแนวทางได้'],
  ['งบประมาณและกรอบเวลาส่งมอบ', 'เพื่อวางลำดับงานให้ทันการเปิดตัว'],
]

export default async function ContactPage() {
  const settings = await getPublicSiteSettings()
  return (
    <>
      <section className="page-head shell">
        <h1>ติดต่อเรา</h1>
        <p className="lede">เล่าเกี่ยวกับธุรกิจหรือไอเดียแบรนด์ของคุณให้เราฟังแบบย่อๆ ทีมออกแบบยินดีให้คำแนะนำเบื้องต้นโดยไม่มีค่าใช้จ่าย</p>
      </section>
      <section className="shell split split-even contact-body">
        <dl className="contact-list">
          <div>
            <dt>LINE Official Account</dt>
            <dd>
              <a href={settings.lineURL}>{settings.lineHandle}</a>
              <LineButton placement="contact">แอดไลน์ปรึกษา</LineButton>
            </dd>
          </div>
          <div><dt>อีเมล</dt><dd><a href={`mailto:${settings.email}`}>{settings.email}</a></dd></div>
          <div><dt>เวลาทำการ</dt><dd>{settings.businessHours}</dd></div>
        </dl>
        <div>
          <h2>สิ่งที่อาจเตรียมไว้เบื้องต้น</h2>
          <p>ไม่ต้องกังวลหากยังไม่มีครบทุกข้อ เราช่วยเรียบเรียงร่วมกับคุณได้ตั้งแต่วันแรก</p>
          <ol className="steps">
            {prep.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>
    </>
  )
}
