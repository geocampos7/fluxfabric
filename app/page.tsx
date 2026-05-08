import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import HoverLink from '@/components/HoverLink'

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      {/* ORBS */}
      <div style={{
        position: 'fixed', width: 340, height: 340, borderRadius: '50%',
        background: 'var(--orb1, rgba(77,159,255,0.06))', filter: 'blur(90px)',
        pointerEvents: 'none', zIndex: 0, top: -80, right: -80,
      }} />
      <div style={{
        position: 'fixed', width: 240, height: 240, borderRadius: '50%',
        background: 'var(--orb2, rgba(45,125,210,0.04))', filter: 'blur(90px)',
        pointerEvents: 'none', zIndex: 0, bottom: '25%', left: -60,
      }} />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', zIndex: 1,
        minHeight: '100svh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '80px 1.25rem 60px',
        maxWidth: 860, margin: '0 auto',
      }}>
        <div className="fi fi-1">
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
            color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '1.25rem', display: 'flex', alignItems: 'center',
            gap: '0.6rem', flexWrap: 'wrap',
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)', flexShrink: 0 }} />
            AI Infrastructure · Network Architecture · DC Fabric Design
          </div>
        </div>

        <h1 className="fi fi-2" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          lineHeight: 0.95, letterSpacing: '-0.04em',
          color: 'var(--text)', marginBottom: '1.25rem',
        }}>
          <span style={{ color: 'var(--text)' }}>Where AI meets</span><br />
          <span style={{ color: 'var(--hero-fabric)' }}>the fabric.</span><br />
          <span style={{ color: 'var(--text3)' }}>No fluff.</span>
        </h1>

        <p className="fi fi-3" style={{
          fontSize: '0.93rem', color: 'var(--text2)',
          maxWidth: 480, lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 300,
        }}>
          A practitioner&apos;s perspective on AI infrastructure networking — DC fabric design,
          RoCE/RDMA, GPU clusters, and the technologies reshaping how data centers are built.
        </p>

        <div className="fi fi-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {['CCIE EI #67478', 'CCDE Candidate'].map(c => <span key={c} className="badge-hi">{c}</span>)}
          {['AWS SAA', 'JNCIP-SP', 'DevNet Associate', 'JNCIA-Mist AI'].map(c => <span key={c} className="badge-lo">{c}</span>)}
        </div>

        <div className="fi fi-5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Link href="/blog" className="btn-p">Read the blog →</Link>
          <Link href="#about" className="btn-s">About me</Link>
        </div>

        {/* Terminal */}
        <div className="fi fi-6" style={{
          background: 'var(--bg2)', border: '1px solid var(--border2)',
          borderRadius: 4, padding: '1rem 1.2rem',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
          lineHeight: 1.9, overflowX: 'auto',
        }}>
          {[
            { p: '$', c: 'whoami', o: 'Mario Geovanny Campos — Network Architect, CCIE EI #67478', type: 'out' },
            { p: '$', c: 'focus --current', o: 'AI Infrastructure · DC Fabric · CCDE AI Elective', type: 'out' },
            { p: '$', c: 'cat mission.txt', o: '# Documenting AI infrastructure from someone who actually builds it.', type: 'cmt' },
          ].map((line, i) => (
            <div key={i}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{line.p}</span>
                <span style={{ color: 'var(--text2)' }}>{line.c}</span>
              </div>
              <div style={{ color: line.type === 'out' ? 'var(--green)' : 'var(--text3)', wordBreak: 'break-word' }}>
                {line.o}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="section-label">About</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem', alignItems: 'start',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                letterSpacing: '-0.03em', lineHeight: 1.2,
                marginBottom: '1.1rem', color: 'var(--text)',
              }}>
                Building the networks that run AI.
              </h2>
              {[
                <>I&apos;m <strong>Mario Geovanny Campos</strong>, a Senior Network Engineer and <strong>CCIE Enterprise Infrastructure #67478</strong> with deep experience designing and operating complex network infrastructures across enterprise, service provider, and data center environments.</>,
                <>My background includes white-box DC networking with VXLAN overlay fabrics on disaggregated hardware, enterprise campus design with Cisco SDA, and service provider routing. That foundation is now pointed squarely at <strong>AI infrastructure</strong>.</>,
                <>I&apos;m currently pursuing the <strong>CCDE with the AI Infrastructure elective</strong> — one of the most demanding design certifications in networking — while building hands-on lab experience across Cisco, Arista, Juniper, and SONiC.</>,
                <>FluxFabric is where I document the design decisions, the tradeoffs, and the deep dives. Written for engineers, by an engineer.</>,
              ].map((p, i) => (
                <p key={i} style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '0.85rem', fontWeight: 300 }}>{p}</p>
              ))}
            </div>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: 1,
              background: 'var(--border)', border: '1px solid var(--border)',
              borderRadius: 4, overflow: 'hidden',
            }}>
              {[
                { l: 'Certification', v: 'CCIE EI #67478', c: 'accent' },
                { l: 'In Progress', v: 'CCDE AI Infra', c: 'accent' },
                { l: 'Also Holds', v: 'AWS SAA · JNCIP-SP', c: 'dim' },
                { l: 'Background', v: 'White-box DC · SDA · SP', c: 'dim' },
                { l: 'Lab Stack', v: 'Cisco · Arista · Juniper · SONiC', c: 'dim' },
                { l: 'Focus', v: 'AI Fabric Design', c: 'green' },
                { l: 'Cadence', v: 'Every 2 weeks', c: 'dim' },
              ].map(row => (
                <div key={row.l} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '0.75rem', padding: '0.8rem 1rem', background: 'var(--surface)',
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{row.l}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', fontWeight: 500, textAlign: 'right',
                    color: row.c === 'accent' ? 'var(--accent)' : row.c === 'green' ? 'var(--green)' : 'var(--text2)',
                  }}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="section-label">Writing</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', letterSpacing: '-0.03em' }}>Latest Posts</h2>
            <Link href="/blog" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.66rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.07em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>View all →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
            {posts.length > 0 ? posts.slice(0, 4).map(post => (
              <HoverLink key={post.slug} href={`/blog/${post.slug}`} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem',
                alignItems: 'center', padding: '1.2rem 1.1rem',
                background: 'var(--surface)', textDecoration: 'none', transition: 'background 0.2s',
              }}
                hoverStyle={{ background: 'var(--bg3)' }}
                baseStyle={{ background: 'var(--surface)' }}
              >
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.56rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.28rem' }}>{post.tag}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.35, marginBottom: '0.28rem' }}>{post.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text3)' }}>{post.date} · {post.readTime}</div>
                </div>
                <span style={{ fontSize: '0.95rem', color: 'var(--text3)', flexShrink: 0 }}>→</span>
              </HoverLink>
            )) : (
              // Placeholder posts when no markdown files exist yet
              [
                { tag: 'DC Fabric Design', title: 'Why AI Training Clusters Need Lossless Ethernet — And What That Means for Your Fabric', meta: 'May 2026 · 8 min read', live: true },
                { tag: 'Protocol Deep Dive', title: 'RoCEv2 vs InfiniBand: How I Think About the Choice for a 512-GPU Cluster', meta: 'Coming soon', live: false },
                { tag: 'Open Networking', title: 'SONiC Is the Most Important NOS Nobody in Enterprise Is Talking About', meta: 'Coming soon', live: false },
                { tag: 'CCDE Journey', title: 'What the CCDE AI Infrastructure Elective Actually Covers', meta: 'Coming soon', live: false },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem',
                  alignItems: 'center', padding: '1.2rem 1.1rem',
                  background: 'var(--surface)', opacity: p.live ? 1 : 0.42,
                }}>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.56rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '0.28rem' }}>{p.tag}</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.35, marginBottom: '0.28rem' }}>{p.title}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text3)' }}>{p.meta}</div>
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text3)', flexShrink: 0 }}>→</span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="section-label">Topics</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 1, background: 'var(--border)',
            border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden',
          }}>
            {[
              { icon: '⚡', name: 'Lossless Fabrics', desc: 'PFC, ECN, DCQCN — the foundation every AI network is built on.' },
              { icon: '🔗', name: 'RoCE / RDMA', desc: 'The protocol powering GPU-to-GPU communication at scale.' },
              { icon: '🏗️', name: 'DC Fabric Design', desc: 'CLOS topology, VXLAN/EVPN overlays, multivendor decisions.' },
              { icon: '🧠', name: 'GPU Cluster Networking', desc: 'Rail-optimized topologies and what hyperscalers actually deploy.' },
              { icon: '📦', name: 'Open Networking', desc: 'SONiC, disaggregated hardware, and the white-box model for AI DCs.' },
              { icon: '🎯', name: 'Design Tradeoffs', desc: 'CCDE-level thinking applied to real infrastructure decisions.' },
            ].map(t => (
              <div key={t.name} style={{ background: 'var(--surface)', padding: '1.3rem 1.1rem' }}>
                <span style={{ fontSize: '1.15rem', marginBottom: '0.65rem', display: 'block' }}>{t.icon}</span>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.35rem', lineHeight: 1.3 }}>{t.name}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section id="connect" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.25rem' }}>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: 4, padding: '2.5rem 1.5rem', textAlign: 'center',
          }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Let&apos;s connect on LinkedIn
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text2)', marginBottom: '1.5rem', maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
              I post about AI infrastructure, DC fabric design, and my CCDE journey every two weeks. Follow along.
            </p>
            <Link href="https://linkedin.com/in/mariogeocampos" target="_blank" className="btn-p">
              Follow on LinkedIn ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>
            Flux<span style={{ color: 'var(--accent)' }}>Fabric</span>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/mariogeocampos', ext: true },
              { label: 'About', href: '/#about' },
              { label: 'Writing', href: '/blog' },
              { label: 'Topics', href: '/#topics' },
            ].map(l => (
              <HoverLink key={l.label} href={l.href} target={l.ext ? '_blank' : undefined}
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                hoverStyle={{ color: 'var(--accent)' }}
                baseStyle={{ color: 'var(--text3)' }}
              >{l.label}</HoverLink>
            ))}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text3)' }}>
            © 2026 Mario Geovanny Campos
          </div>
        </div>
      </footer>
    </>
  )
}
