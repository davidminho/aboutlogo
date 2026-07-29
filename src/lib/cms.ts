import config from '@payload-config'
import { cache } from 'react'
import { getPayload } from 'payload'

export type CMSProject = {
  image: string
  meta: string
  slug: string
  summary: string
  title: string
}

export type PublicSiteSettings = {
  businessHours: string
  email: string
  lineHandle: string
  lineURL: string
  socialURL: string
}

const fallbackSettings: PublicSiteSettings = {
  businessHours: 'จันทร์ - ศุกร์ (09:00 น. - 18:00 น.)',
  email: 'hello@aboutlogo.com',
  lineHandle: '@aboutlogo',
  lineURL: 'https://line.me/R/ti/p/@aboutlogo',
  socialURL: 'https://facebook.com/aboutlogo',
}

export const getPublicSiteSettings = cache(async (): Promise<PublicSiteSettings> => {
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return {
      businessHours: settings.businessHours || fallbackSettings.businessHours,
      email: settings.email || fallbackSettings.email,
      lineHandle: settings.lineHandle || fallbackSettings.lineHandle,
      lineURL: settings.lineURL || fallbackSettings.lineURL,
      socialURL: settings.socialURL || fallbackSettings.socialURL,
    }
  } catch {
    return fallbackSettings
  }
})

export const getPublicProjects = cache(async (): Promise<CMSProject[]> => {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit: 20,
      sort: 'sortOrder',
    })

    return result.docs.flatMap((project) => {
      const cover = typeof project.cover === 'object' && project.cover ? project.cover.url : null
      if (!cover) return []
      return [{
        image: cover,
        meta: `${project.industry} · ${project.services} · ${project.year}`,
        slug: project.slug,
        summary: project.summary,
        title: project.title,
      }]
    })
  } catch {
    return []
  }
})

export const getPublicProjectBySlug = cache(async (slug: string): Promise<CMSProject | null> => {
  const projects = await getPublicProjects()
  return projects.find((project) => project.slug === slug) || null
})
