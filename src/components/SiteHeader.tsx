import Image from 'next/image'
import Link from 'next/link'
import { getPublicSiteSettings } from '@/lib/cms'
import { servicePath } from '@/lib/service'
import { LineLink } from './LineLink'
import { MobileMenu } from './MobileMenu'

const nav = [
  { href: servicePath, label: 'บริการ' },
  { href: '/portfolio', label: 'ผลงาน' },
  { href: '/#process', label: 'ขั้นตอน' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/contact', label: 'ติดต่อ' },
]

export async function SiteHeader() {
  const settings = await getPublicSiteSettings()
  return (
    <header className="masthead">
      <div className="masthead-main">
        <Link aria-label="aboutlogo.com หน้าแรก" className="masthead-logo" href="/">
          <Image alt="" height={144} priority src="/images/aboutlogo-horizontal.png" width={611} />
        </Link>
        <nav aria-label="เมนูหลัก" className="masthead-nav">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <LineLink className="masthead-line-link" href={settings.lineURL} placement="header">
          LINE {settings.lineHandle}
        </LineLink>
        <MobileMenu items={nav} />
      </div>
    </header>
  )
}
