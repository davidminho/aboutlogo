import type { Metadata } from 'next'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aboutlogo.com'),
  title: {
    default: 'aboutlogo.com — Logo & Brand Identity',
    template: '%s — aboutlogo.com',
  },
  description: 'ออกแบบโลโก้ Corporate Identity และ Branding สำหรับธุรกิจไทยที่พร้อมเติบโต',
  openGraph: {
    title: 'aboutlogo.com — Logo & Brand Identity',
    description: 'โลโก้และระบบแบรนด์ที่ทำงานให้ธุรกิจของคุณ',
    images: ['/images/home-hero.png'],
    locale: 'th_TH',
    type: 'website',
  },
}

export const revalidate = 60

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="th">
      <head>
        <link crossOrigin="anonymous" href="https://use.typekit.net" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://p.typekit.net" rel="preconnect" />
        <link href="https://use.typekit.net/hvh3vlm.css" rel="stylesheet" />
      </head>
      <body>
        <ScrollAnimations />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
