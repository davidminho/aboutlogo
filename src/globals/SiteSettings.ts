import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'ติดต่อ',
          fields: [
            { name: 'lineURL', type: 'text', defaultValue: 'https://line.me/R/ti/p/@aboutlogo' },
            { name: 'lineHandle', type: 'text', defaultValue: '@aboutlogo' },
            { name: 'email', type: 'email', defaultValue: 'hello@aboutlogo.com' },
            { name: 'socialURL', type: 'text', defaultValue: 'https://facebook.com/aboutlogo' },
            { name: 'businessHours', type: 'text', defaultValue: 'จันทร์ - ศุกร์ (09:00 น. - 18:00 น.)' },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'siteTitle', type: 'text', defaultValue: 'aboutlogo.com — Logo & Brand Identity' },
            {
              name: 'siteDescription',
              type: 'textarea',
              defaultValue: 'ออกแบบโลโก้และระบบอัตลักษณ์แบรนด์สำหรับธุรกิจไทยที่พร้อมเติบโต',
            },
          ],
        },
      ],
    },
  ],
}
