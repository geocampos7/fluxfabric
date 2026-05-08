'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

type HoverProps = Record<string, string>

export default function HoverLink({
  href,
  style,
  hoverStyle,
  baseStyle,
  children,
  target,
}: {
  href: string
  style?: CSSProperties
  hoverStyle: HoverProps
  baseStyle: HoverProps
  children: ReactNode
  target?: string
}) {
  return (
    <Link
      href={href}
      target={target}
      style={style}
      onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, baseStyle)}
    >
      {children}
    </Link>
  )
}
