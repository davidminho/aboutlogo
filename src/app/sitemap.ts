import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/portfolio', '/portfolio/grain-and-grind', '/about', '/contact'].map((path) => ({
    url: `https://aboutlogo.com${path}`,
    lastModified: new Date(),
  }))
}
