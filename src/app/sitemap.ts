import type { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/portfolio'
import { servicePath } from '@/lib/service'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = portfolioProjects.map(({ slug }) => `/portfolio/${slug}`)
  return ['', servicePath, '/portfolio', '/about', '/contact', ...projectPaths].map((path) => ({
    url: `https://aboutlogo.com${path}`,
    lastModified: new Date(),
  }))
}
