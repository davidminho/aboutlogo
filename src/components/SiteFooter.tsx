import Image from 'next/image'
import Link from 'next/link'
import { getPublicSiteSettings } from '@/lib/cms'
import { service, servicePath } from '@/lib/service'
import { storyPath } from '@/lib/story'
import { LineLink } from './LineLink'

export async function LineButton({
  children = 'ปรึกษาผ่าน LINE',
  placement = 'content',
}: {
  children?: React.ReactNode
  placement?: string
}) {
  const settings = await getPublicSiteSettings()
  return (
    <LineLink className="button button-line" href={settings.lineURL} placement={placement}>
      <Image alt="" height={16} src="/images/message-circle.svg" width={16} />
      {children}
    </LineLink>
  )
}

export async function StickyLine() {
  const settings = await getPublicSiteSettings()
  return (
    <aside aria-label="ติดต่อผ่าน LINE" className="sticky-line">
      <span>โลโก้ + ชุด CI <strong>{service.priceLabel}</strong></span>
      <LineLink className="button button-line" href={settings.lineURL} placement="sticky-bar">คุยทาง LINE</LineLink>
    </aside>
  )
}

export async function SiteFooter() {
  const settings = await getPublicSiteSettings()
  return (
    <footer className="site-footer">
      <div className="footer-mast">
        <Link aria-label="aboutlogo.com หน้าแรก" className="footer-logo" href="/">
          <Image alt="" height={144} src="/images/aboutlogo-horizontal.png" width={611} />
        </Link>
        <p>ออกแบบโลโก้และระบบอัตลักษณ์แบรนด์สำหรับ SME ไทย</p>
      </div>
      <div className="footer-rows">
        <nav aria-label="เมนูส่วนท้าย">
          <Link href={servicePath}>บริการ</Link>
          <Link href="/portfolio">ผลงาน</Link>
          <Link href={storyPath}>เรื่องเล่า</Link>
          <Link href="/about">เกี่ยวกับเรา</Link>
          <Link href="/contact">ติดต่อ</Link>
        </nav>
        <div>
          <LineLink href={settings.lineURL} placement="footer">LINE {settings.lineHandle}</LineLink>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
          <a href={settings.socialURL}>{settings.socialURL.replace(/^https?:\/\//, '')}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} aboutlogo.com</span>
        <span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  )
}
