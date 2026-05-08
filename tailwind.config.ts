import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#00d4ff',
        'accent-dim': '#0090b8',
        'bg-dark': '#080c10',
        'surface-dark': '#141c26',
        'border-dark': '#1e2d3d',
      },
    },
  },
  plugins: [],
}

export default config
