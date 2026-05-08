'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('ff-theme') || 'dark'
    setTheme(saved)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('ff-theme', next)
  }

  function closeMenu() { setMenuOpen(false) }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.25rem', height: '60px',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem',
          letterSpacing: '-0.02em', color: 'var(--text)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <div style={{
            width: 7, height: 7, background: 'var(--accent)',
            borderRadius: '50%', flexShrink: 0,
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Flux<span style={{ color: 'var(--accent)' }}>Fabric</span>
        </Link>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

          {/* Desktop links */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: '1.5rem',
            listStyle: 'none',
          }} className="hide-mobile">
            {[
              { label: 'About', href: '/#about' },
              { label: 'Writing', href: '/blog' },
              { label: 'Topics', href: '/#topics' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/mariogeocampos', external: true },
            ].map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem',
                    color: 'var(--text2)', textDecoration: 'none',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    transition: 'color 0.2s', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <div
            onClick={toggleTheme}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
            role="button"
            aria-label="Toggle theme"
          >
            <span style={{ fontSize: '0.85rem', userSelect: 'none' }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
            <div style={{
              width: 38, height: 20,
              background: 'var(--toggle-track)',
              borderRadius: 10, border: '1px solid var(--border2)',
              position: 'relative', transition: 'background 0.3s', flexShrink: 0,
            }}>
              <div style={{
                position: 'absolute', top: 2, left: 2,
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--accent)',
                transition: 'transform 0.3s',
                transform: theme === 'light' ? 'translateX(18px)' : 'none',
              }} />
            </div>
          </div>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              display: 'none', flexDirection: 'column', gap: 4,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text2)', borderRadius: 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text2)', borderRadius: 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--text2)', borderRadius: 1 }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'var(--nav-bg)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column',
        }}>
          {[
            { label: 'About', href: '/#about' },
            { label: 'Writing', href: '/blog' },
            { label: 'Topics', href: '/#topics' },
            { label: 'Connect', href: '/#connect' },
            { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/mariogeocampos', external: true },
          ].map((link, i, arr) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              onClick={closeMenu}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem',
                color: 'var(--text2)', textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '1rem 1.25rem',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
