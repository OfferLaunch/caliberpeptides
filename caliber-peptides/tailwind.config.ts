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
        // Tenor Sans — primary logo & display (headings, hero, section titles)
        display: ['var(--font-tenor-sans)', 'sans-serif'],
        // IBM Plex Mono — batch numbers, USP-grade callouts, technical specs
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        // Inter / Plus Jakarta Sans — body (running text, UI labels, supporting copy)
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
