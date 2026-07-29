import type { CMSProject } from './cms'

export type PortfolioProject = CMSProject & {
  orientation?: 'landscape' | 'portrait'
}

export const portfolioProjects: PortfolioProject[] = [
  {
    image: '/images/portfolio/doi-luang.webp',
    meta: 'HERBAL PRODUCTS · BRAND IDENTITY & PACKAGING',
    slug: 'doi-luang',
    summary: 'การออกแบบโลโก้และภาพลักษณ์สำหรับผลิตภัณฑ์สมุนไพรจากดอยหลวง ถ่ายทอดความเป็นธรรมชาติ ความเรียบง่าย และความน่าเชื่อถือผ่านระบบบรรจุภัณฑ์ที่ใช้งานร่วมกันได้ทั้งชุด',
    title: 'DOILUANG — ดอยหลวง',
  },
  {
    image: '/images/portfolio/dman-work.webp',
    meta: 'PROFESSIONAL SERVICES · CORPORATE IDENTITY',
    slug: 'dman-work',
    summary: 'ระบบอัตลักษณ์องค์กรโทนเข้มที่วางน้ำหนักความแข็งแรงและความเป็นมืออาชีพ ตั้งแต่ตราสัญลักษณ์ไปจนถึงชุดเอกสารและอุปกรณ์สำนักงาน',
    title: 'D-MAN WORK',
  },
  {
    image: '/images/portfolio/hula-hoop-khonkaen.webp',
    meta: 'FITNESS · BRAND IDENTITY SYSTEM',
    slug: 'hula-hoop-khonkaen',
    summary: 'อัตลักษณ์สำหรับคอมมูนิตี้ออกกำลังกายที่ใช้เส้นวงแหวนและสีพลังงานสูง สร้างภาพจำที่สนุก คล่องตัว และนำไปใช้กับอุปกรณ์กีฬาได้อย่างชัดเจน',
    title: 'HULA HOOP KHONKAEN',
  },
  {
    image: '/images/portfolio/mkd-shop.webp',
    meta: 'RETAIL · LOGO & E-COMMERCE IDENTITY',
    slug: 'mkd-shop',
    summary: 'ภาพลักษณ์ร้านค้าออนไลน์ที่เรียบง่ายและจดจำง่าย ออกแบบให้รองรับตั้งแต่บรรจุภัณฑ์ ถุงสินค้า นามบัตร ไปจนถึงหน้าร้านบนโทรศัพท์มือถือ',
    title: 'MKD SHOP',
  },
  {
    image: '/images/portfolio/mmb-bakery.webp',
    meta: 'BAKERY · LOGO & PACKAGING',
    orientation: 'landscape',
    slug: 'mmb-bakery',
    summary: 'โลโก้และระบบบรรจุภัณฑ์สำหรับเบเกอรีที่สื่อถึงความอบอุ่น สดใหม่ และเป็นกันเอง ด้วยสัญลักษณ์รูปเตาอบและตัวอักษรที่ใช้งานได้ในหลายขนาด',
    title: 'MMB BAKERY',
  },
  {
    image: '/images/portfolio/mori-tea-house.webp',
    meta: 'TEA HOUSE · BRAND IDENTITY & PACKAGING',
    slug: 'mori-tea-house',
    summary: 'อัตลักษณ์ร้านชาที่เชื่อมความสงบแบบญี่ปุ่นเข้ากับวัตถุดิบธรรมชาติ ผ่านลายพู่กัน โทนสีเขียว และระบบแพ็กเกจจิ้งที่ดูร่วมสมัย',
    title: 'MORI TEA HOUSE',
  },
  {
    image: '/images/portfolio/ochong-patisserie.webp',
    meta: 'PÂTISSERIE · BRAND IDENTITY & PACKAGING',
    slug: 'ochong-patisserie',
    summary: 'ภาพลักษณ์ร้านขนมอบที่ใช้รูปทรงครัวซองต์เป็นสัญลักษณ์หลัก ผสานบรรยากาศงานฝีมือแบบฝรั่งเศสเข้ากับความอบอุ่นที่เข้าถึงง่าย',
    title: 'O’CHÖNG PÂTISSERIE',
  },
  {
    image: '/images/portfolio/tsi-trading.webp',
    meta: 'TRADING · CORPORATE IDENTITY',
    slug: 'tsi-trading',
    summary: 'ระบบอัตลักษณ์องค์กรสำหรับธุรกิจเทรดดิ้งที่ให้ความสำคัญกับความเป็นระบบ ความน่าเชื่อถือ และการนำตราสัญลักษณ์ไปใช้บนเอกสารธุรกิจอย่างสม่ำเสมอ',
    title: 'TSI TRADING',
  },
]

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug) || null
}
