import type { Metadata } from 'next'
import { FinalCTA } from '@/components/PageElements'
import { service } from '@/lib/service'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'aboutlogo.com ออกแบบโลโก้และระบบอัตลักษณ์แบรนด์โดยเริ่มจากการเข้าใจธุรกิจ ในราคาที่โปร่งใส',
  alternates: { canonical: '/about' },
}

const approach = [
  ['เข้าใจก่อนออกแบบ', 'ใช้แบบสอบถามเชิงลึกและ Brand Positioning เพื่อเข้าใจวิสัยทัศน์ แผนธุรกิจ และคู่แข่งก่อนลงมือร่างแบบ'],
  ['ส่งมอบระบบ ไม่ใช่แค่ไฟล์', 'ส่งมอบ Brand Guidelines เพื่อให้ทุกสื่อของแบรนด์เป็นระบบและเป็นเอกภาพ'],
  ['ราคาตรงไปตรงมา', `แพ็กเกจ ${service.priceLabel} ระบุขอบเขตชัดเจน เพื่อให้ SME บริหารงบประมาณได้อย่างสบายใจ`],
]

export default function AboutPage() {
  return (
    <>
      <section className="page-head shell">
        <h1>โลโก้ที่ดีเริ่มจากการเข้าใจธุรกิจ</h1>
      </section>
      <section className="shell split split-even about-body">
        <div className="prose">
          <p>เราใช้กลยุทธ์ทางธุรกิจและการวิเคราะห์การตลาดเป็นจุดตั้งต้น เพื่อสกัดตัวตนที่แท้จริงของแบรนด์ออกมาเป็นงานออกแบบที่สร้างมูลค่าเพิ่มได้ ไม่ใช่ภาพกราฟิกที่ไร้เรื่องราว</p>
          <p>ไม่ว่าธุรกิจจะเพิ่งเริ่มต้นหรือพร้อมก้าวสู่ตลาดสากล ระบบอัตลักษณ์ที่เราส่งมอบจะช่วยสร้างความเชื่อมั่น ในราคาโปร่งใสและควบคุมงบประมาณได้</p>
        </div>
        <ol className="steps">
          {approach.map(([title, copy]) => (
            <li key={title}><h3>{title}</h3><p>{copy}</p></li>
          ))}
        </ol>
      </section>
      <FinalCTA title="อยากรู้จักเราเพิ่มเติม?" body="คุยกับดีไซเนอร์โดยตรงทาง LINE ได้โดยไม่มีค่าใช้จ่าย" />
    </>
  )
}
