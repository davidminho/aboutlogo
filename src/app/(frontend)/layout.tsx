import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { SiteFooter, StickyLine } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aboutlogo.com'),
  title: {
    default: 'aboutlogo.com — ออกแบบโลโก้และ Corporate Identity สำหรับธุรกิจไทย',
    template: '%s — aboutlogo.com',
  },
  description: 'ออกแบบโลโก้ Corporate Identity และ Branding สำหรับธุรกิจไทย แพ็กเกจโลโก้พร้อมชุด CI ราคา 9,900 บาท',
  openGraph: {
    title: 'aboutlogo.com — ออกแบบโลโก้และ Corporate Identity สำหรับธุรกิจไทย',
    description: 'โลโก้ ชุดสี ฟอนต์ นามบัตร เทมเพลตโซเชียล และ Brand Guidelines ในแพ็กเกจเดียว',
    images: ['/images/portfolio/doi-luang.webp'],
    siteName: 'aboutlogo.com',
    locale: 'th_TH',
    type: 'website',
  },
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'aboutlogo.com',
  url: 'https://aboutlogo.com',
  logo: 'https://aboutlogo.com/images/aboutlogo-horizontal.png',
}

export const revalidate = 60

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="th">
      <head>
        <link crossOrigin="anonymous" href="https://use.typekit.net" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://p.typekit.net" rel="preconnect" />
        <link href="https://use.typekit.net/hvh3vlm.css?v=20260729-091545" rel="stylesheet" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} type="application/ld+json" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyLine />
        <Analytics />
      </body>
    </html>
  )
}
