import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FinalCTA } from '@/components/PageElements'
import { getPortfolioProject } from '@/lib/portfolio'
import { service, servicePath } from '@/lib/service'
import { chapters, story, storyPath } from '@/lib/story'

export const metadata: Metadata = {
  title: `${story.title} — เรื่องเล่าการสร้างแบรนด์`,
  description: story.deck,
  alternates: { canonical: storyPath },
}

const number = (index: number) => String(index + 1).padStart(2, '0')

function StoryFigure({ slug, wide = false }: { slug: string; wide?: boolean }) {
  const project = getPortfolioProject(slug)
  if (!project) return null
  return (
    <figure className="story-figure">
      <div className={`figure-frame ${wide ? 'landscape' : 'portrait'}`}>
        <Image alt={`ผลงานออกแบบแบรนด์ ${project.title}`} fill loading={wide ? 'eager' : 'lazy'} preload={wide} sizes={wide ? '100vw' : '(max-width: 960px) 100vw, 34vw'} src={project.image} />
      </div>
      <figcaption>
        ผลงาน <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
      </figcaption>
    </figure>
  )
}

export default function StoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.deck,
    author: { '@type': 'Organization', name: 'aboutlogo.com' },
    publisher: { '@type': 'Organization', name: 'aboutlogo.com' },
    mainEntityOfPage: `https://aboutlogo.com${storyPath}`,
  }

  return (
    <article className="story">
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />

      <header className="shell story-cover">
        <p className="story-issue">{story.issue}</p>
        <h1>{story.title}</h1>
        <p className="story-deck">{story.deck}</p>
        <ol className="story-contents">
          {chapters.map((chapter, index) => (
            <li key={chapter.title}>
              <a href={`#chapter-${index + 1}`}><span>{number(index)}</span>{chapter.title}</a>
            </li>
          ))}
        </ol>
      </header>

      <div className="shell story-cover-image">
        <StoryFigure slug={story.cover} wide />
      </div>

      {chapters.map((chapter, index) => (
        <section className={`shell chapter chapter-${chapter.layout}`} id={`chapter-${index + 1}`} key={chapter.title}>
          <header className="chapter-head">
            <span className="chapter-no">{number(index)}</span>
            <h2>{chapter.title}</h2>
          </header>
          <div className="chapter-body">
            {chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {chapter.image && <StoryFigure slug={chapter.image} />}
          {chapter.note && (
            <aside className="chapter-note">
              <h3>{chapter.note.title}</h3>
              <ul>{chapter.note.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          )}
          {chapter.quote && <blockquote className="pull-quote">{chapter.quote}</blockquote>}
        </section>
      ))}

      <footer className="shell story-end">
        <p>ทั้งหกบทนี้คือสิ่งที่เราทำในแพ็กเกจโลโก้พร้อมชุด CI {service.priceLabel}</p>
        <Link className="text-link" href={servicePath}>ดูรายละเอียดแพ็กเกจ →</Link>
      </footer>

      <FinalCTA title="อยากเริ่มเขียนเรื่องของแบรนด์คุณ?" />
    </article>
  )
}
