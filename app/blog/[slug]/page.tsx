import { getPost, getPosts } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import HoverLink from '@/components/HoverLink'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — FluxFabric`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const processed = await remark().use(html).process(post.content)
  const contentHtml = processed.toString()

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 1.25rem 80px', position: 'relative', zIndex: 1 }}>

      {/* Back link */}
      <HoverLink href="/blog" style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
        color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.07em',
        textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center',
        gap: '0.4rem', marginBottom: '2.5rem', transition: 'color 0.2s',
      }}
        hoverStyle={{ color: 'var(--accent)' }}
        baseStyle={{ color: 'var(--text3)' }}
      >
        ← All Posts
      </HoverLink>

      {/* Post header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
          fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--accent2)', marginBottom: '0.75rem',
        }}>
          {post.tag}
        </div>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          color: 'var(--text)', marginBottom: '1rem',
        }}>
          {post.title}
        </h1>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--text3)',
        }}>
          <span>Mario Geovanny Campos</span>
          <span style={{ color: 'var(--border2)' }}>·</span>
          <span>{post.date}</span>
          <span style={{ color: 'var(--border2)' }}>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', marginBottom: '2.5rem' }} />

      {/* Post content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Footer */}
      <div style={{ height: 1, background: 'var(--border)', margin: '3rem 0 2rem' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <HoverLink href="/blog" style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
          color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.07em', textTransform: 'uppercase',
        }}
          hoverStyle={{ color: 'var(--accent)' }}
          baseStyle={{ color: 'var(--text3)' }}
        >
          ← All Posts
        </HoverLink>
        <Link href="https://linkedin.com/in/mariogeocampos" target="_blank" className="btn-p" style={{ fontSize: '0.68rem', padding: '0.6rem 1.1rem' }}>
          Follow on LinkedIn ↗
        </Link>
      </div>
    </div>
  )
}
