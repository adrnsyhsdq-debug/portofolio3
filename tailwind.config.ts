import type { Config } from 'tailwindcss'

// Design system: a print-production "proof sheet" aesthetic — grounded in the
// subject (brand identity, packaging, print) rather than a generic dark+gold
// luxury template. Palette is literal CMYK process colors; type pairs a
// characterful print-style serif (Fraunces) with an engineering-heritage
// sans/mono (IBM Plex), matching "Design Engineer".
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#EDEAE2',
        ink: '#1B1B18',
        cyan: '#00AEEF',
        magenta: '#EC008C',
        'proof-yellow': '#FFE800',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
