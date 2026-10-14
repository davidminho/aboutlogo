import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FinalCTA } from '@/components/PageElements'
import { getPublicProjectBySlug } from '@/lib/cms'
import { getPortfolioProject, portfolioProjects } from '@/lib/portfolio'
import { service, servicePath } from '@/lib/service'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

async function findProject(slug: string) {
  return getPortfolioProject(slug) || await getPublicProjectBySlug(slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await findProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ผลงานออกแบบแบรนด์`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: { images: [project.image] },
  }
}

export default async function CMSProjectPage({ params }: Props) {
  const { slug } = await params
  const portfolioProject = getPortfolioProject(slug)
  const project = portfolioProject || await getPublicProjectBySlug(slug)
  if (!project) notFound()

  const landscape = portfolioProject?.orientation === 'landscape'
  const index = portfolioProjects.findIndex((item) => item.slug === slug)
  const next = index >= 0 ? portfolioProjects[(index + 1) % portfolioProjects.length] : null

  return (
    <>
      <article className={`case shell ${landscape ? 'case-landscape' : ''}`}>
        <div className={`figure-frame ${landscape ? 'landscape' : 'portrait'}`}>
          <Image alt={`ผลงานออกแบบแบรนด์ ${project.title}`} fill loading="eager" preload sizes="(max-width: 960px) 100vw, 55vw" src={project.image} />
        </div>
        <div className="case-text">
          <Link className="back-link" href="/portfolio">← ผลงานทั้งหมด</Link>
          <h1>{project.title}</h1>
          <span className="case-meta">{project.meta}</span>
          <p>{project.summary}</p>
          <Link className="text-link" href={servicePath}>ดูแพ็กเกจโลโก้ + ชุด CI {service.priceLabel} →</Link>
          {next && (
            <p className="case-next">
              ผลงานถัดไป <Link href={`/portfolio/${next.slug}`}>{next.title} →</Link>
            </p>
          )}
        </div>
      </article>
      {portfolioProject?.gallery?.length ? (
        <section className="shell case-gallery">
          {portfolioProject.gallery.map((src) => (
            <div className="figure-frame landscape" key={src}>
              <Image alt={`ผลงานออกแบบแบรนด์ ${project.title}`} fill sizes="(max-width: 640px) 100vw, 50vw" src={src} />
            </div>
          ))}
        </section>
      ) : null}
      <FinalCTA title="ชอบผลงานสไตล์นี้ใช่ไหม?" />
    </>
  )
}
