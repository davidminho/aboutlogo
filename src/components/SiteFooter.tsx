import Image from 'next/image'
import Link from 'next/link'
import { getPublicSiteSettings } from '@/lib/cms'

export async function LineButton({ children = 'ปรึกษาทันทีผ่าน LINE' }: { children?: React.ReactNode }) {
  const settings = await getPublicSiteSettings()
  return (
    <a
      className="button button-line"
      href={settings.lineURL}
      rel="noreferrer"
      target="_blank"
    >
      <Image alt="" height={16} src="/images/message-circle.svg" width={16} />
      {children}
      <Image alt="" height={14} src="/images/arrow-right.svg" width={14} />
    </a>
  )
}

export async function SiteFooter() {
  const settings = await getPublicSiteSettings()
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Link className="wordmark wordmark-light" href="/">
            aboutlogo<span>.com</span>
          </Link>
          <p>
            ระบบอัตลักษณ์ตราสินค้าและการออกแบบเชิงกลยุทธ์เพื่อ SME ไทย
            ยกระดับความน่าเชื่อถือ มุ่งหน้าสู่การขยายตัวอย่างไร้ขอบเขต
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>เมนูหลัก</strong>
            <Link href="/portfolio">ชมผลงาน</Link>
            <Link href="/#package">แพ็กเกจเดี่ยว</Link>
            <Link href="/#process">ขั้นตอนทำงาน</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
          </div>
          <div>
            <strong>การติดต่อสื่อสาร</strong>
            <a href={settings.lineURL}>LINE: {settings.lineHandle}</a>
            <a href={`mailto:${settings.email}`}>Email: {settings.email}</a>
            <a href={settings.socialURL}>Socials: {settings.socialURL.replace(/^https?:\/\//, '')}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} aboutlogo.com. All rights reserved.</span>
        <span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  )
}
