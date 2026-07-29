import type { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = portfolioProjects.map(({ slug }) => `/portfolio/${slug}`)
  return ['', '/portfolio', '/about', '/contact', ...projectPaths].map((path) => ({
    url: `https://aboutlogo.com${path}`,
    lastModified: new Date(),
  }))
}
