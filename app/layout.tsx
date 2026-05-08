import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeScript from '@/components/ThemeScript'

export const metadata: Metadata = {
  title: 'FluxFabric — Mario Geovanny Campos',
  description: 'AI infrastructure and network fabric design. A practitioner\'s perspective from a CCIE engineer building toward CCDE AI Infrastructure.',
  metadataBase: new URL('https://fluxfabric.net'),
  openGraph: {
    title: 'FluxFabric',
    description: 'AI infrastructure and network fabric design. Written for engineers, by an engineer.',
    url: 'https://fluxfabric.net',
    siteName: 'FluxFabric',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FluxFabric',
    description: 'AI infrastructure and network fabric design.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
