import type { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/portfolio'
import { servicePath } from '@/lib/service'
import { storyPath } from '@/lib/story'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = portfolioProjects.map(({ slug }) => `/portfolio/${slug}`)
  return ['', servicePath, storyPath, '/portfolio', '/about', '/contact', ...projectPaths].map((path) => ({
    url: `https://aboutlogo.com${path}`,
    lastModified: new Date(),
  }))
}
