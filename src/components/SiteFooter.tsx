import Image from 'next/image'
import Link from 'next/link'

export function LineButton({ children = 'ปรึกษาทันทีผ่าน LINE' }: { children?: React.ReactNode }) {
  return (
    <a
      className="button button-line"
      href="https://line.me/R/ti/p/@aboutlogo"
      rel="noreferrer"
      target="_blank"
    >
      <Image alt="" height={16} src="/images/message-circle.svg" width={16} />
      {children}
      <Image alt="" height={14} src="/images/arrow-right.svg" width={14} />
    </a>
  )
}

export function SiteFooter() {
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
            <a href="https://line.me/R/ti/p/@aboutlogo">LINE: @aboutlogo</a>
            <a href="mailto:hello@aboutlogo.com">Email: hello@aboutlogo.com</a>
            <a href="https://facebook.com/aboutlogo">Socials: fb.com/aboutlogo</a>
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
