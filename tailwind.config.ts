import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9a44c',
        ink: '#0a0a0a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
