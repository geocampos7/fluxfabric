import { getPosts } from '@/lib/posts'
import HoverLink from '@/components/HoverLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — FluxFabric',
  description: 'AI infrastructure and network fabric design. Posts by Mario Geovanny Campos.',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '100px 1.25rem 80px', position: 'relative', zIndex: 1 }}>
      <div className="section-label">Writing</div>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '0.75rem' }}>
        All Posts
      </h1>
      <p style={{ fontSize: '0.9rem', color: 'var(--text2)', marginBottom: '3rem', fontWeight: 300 }}>
        AI infrastructure, DC fabric design, and the CCDE journey. Published every two weeks.
      </p>

      {posts.length === 0 ? (
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 4, padding: '3rem', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text3)', marginBottom: '0.75rem' }}>
            // first post coming soon
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text2)' }}>
            Posts will appear here once published. Check back soon.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
          {posts.map(post => (
            <HoverLink key={post.slug} href={`/blog/${post.slug}`} style={{
              display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem',
              alignItems: 'center', padding: '1.4rem 1.25rem',
              background: 'var(--surface)', textDecoration: 'none', transition: 'background 0.2s',
            }}
              hoverStyle={{ background: 'var(--bg3)' }}
              baseStyle={{ background: 'var(--surface)' }}
            >
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.56rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.3rem' }}>{post.tag}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', lineHeight: 1.3, marginBottom: '0.3rem' }}>{post.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.6, marginBottom: '0.4rem' }}>{post.excerpt}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text3)' }}>{post.date} · {post.readTime}</div>
              </div>
              <span style={{ fontSize: '0.95rem', color: 'var(--text3)', flexShrink: 0 }}>→</span>
            </HoverLink>
          ))}
        </div>
      )}
    </div>
  )
}
