import Image from 'next/image'
import Link from 'next/link'

const nav = [
  { href: '/portfolio', label: 'ผลงาน' },
  { href: '/#package', label: 'แพ็กเกจ' },
  { href: '/#process', label: 'กระบวนการ' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/contact', label: 'ติดต่อ' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="aboutlogo.com หน้าแรก">
        <Image
          alt=""
          className="brand-logo"
          height={144}
          priority
          src="/images/aboutlogo-horizontal.png"
          width={611}
        />
      </Link>
      <nav aria-label="เมนูหลัก">
        {nav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="button button-dark header-cta" href="/contact">
        ปรึกษาทันที
      </Link>
      <details className="mobile-menu">
        <summary aria-label="เปิดเมนู">เมนู</summary>
        <div>
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </header>
  )
}
