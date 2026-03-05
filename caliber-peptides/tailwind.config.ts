import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2D241E',
        sage: '#7D8F78',
        parchment: '#F5F2ED',
        glass: '#D1DBCB',
      },
      fontFamily: {
        display: ['var(--font-tenor-sans)', 'serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        body: ['var(--font-plus-jakarta-sans)', 'var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
