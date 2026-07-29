import type { Metadata } from 'next'
import { Eyebrow, FinalCTA } from '@/components/PageElements'

export const metadata: Metadata = { title: 'เกี่ยวกับเรา' }

export default function AboutPage() {
  return (
    <>
      <section className="about-page shell">
        <Eyebrow number="01">STUDIO PHILOSOPHY</Eyebrow>
        <h1>เกี่ยวกับ aboutlogo.com</h1>
        <div className="about-lead">
          <h2>เราเชื่อว่าโลโก้ที่ดีเริ่มจากการเข้าใจธุรกิจ<br />ไม่ใช่แค่ทำให้สวยงามไปวันๆ</h2>
          <div><p>เราตั้งใจสลัดภาพจำของกระบวนการออกแบบโลโก้แบบเดิมๆ ที่มักจบลงที่ภาพกราฟิกธรรมดาที่ไร้เรื่องราว เราใช้กลยุทธ์ทางธุรกิจและการวิเคราะห์การตลาดมาเป็นจุดตั้งต้น เพื่อสกัดตัวตนที่แท้จริงของแบรนด์ออกมาเป็นทัศนศิลป์ที่สร้างมูลค่าเพิ่มได้อย่างมั่นคง</p><p>ไม่ว่าธุรกิจจะเพิ่งเริ่มต้นหรือพร้อมก้าวสู่ตลาดสากล ระบบอัตลักษณ์ที่เราส่งมอบจะช่วยเป็นสื่อกลางสร้างความเชื่อมั่น ในราคาโปร่งใสและควบคุมงบประมาณได้</p></div>
        </div>
        <section className="approach">
          <Eyebrow number="02">แนวทางการทำงานของเรา</Eyebrow>
          <h2>Core Approach</h2>
          <div>
            <article><h3>01 / เข้าใจก่อนออกแบบ</h3><p>ใช้แบบสอบถามเชิงลึกและ Brand Positioning เพื่อเข้าใจวิสัยทัศน์ แผนธุรกิจ และคู่แข่งก่อนลงมือร่างแบบ</p></article>
            <article><h3>02 / ส่งมอบระบบ ไม่ใช่แค่ไฟล์</h3><p>ส่งมอบ Brand Guidelines ครบชุด เพื่อให้ทุกสื่อของแบรนด์เป็นระบบและเป็นเอกภาพ</p></article>
            <article><h3>03 / ราคาตรงไปตรงมา</h3><p>ราคาเริ่มต้น ฿9,900 ระบุชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง เพื่อให้ SME บริหารงบประมาณได้อย่างสบายใจ</p></article>
          </div>
        </section>
        <section className="team">
          <Eyebrow number="03">สมาชิกในสตูดิโอ</Eyebrow>
          <h2>Our Creative Team</h2>
          <div className="testimonial-placeholder"><span>STATUS: PENDING REAL DATA</span><p>รอข้อมูลทีมงานจริงก่อนเผยแพร่ — ไม่ใช้ข้อมูลจำลอง</p></div>
        </section>
      </section>
      <FinalCTA title="อยากรู้จักเราเพิ่มเติม? ปรึกษากันทันทีผ่าน LINE" body="พร้อมยกระดับภาพลักษณ์แบรนด์ให้มีมาตรฐานสากลไปกับเราหรือยัง? คุยกับดีไซเนอร์โดยตรงได้โดยไม่มีค่าใช้จ่าย" />
    </>
  )
}
