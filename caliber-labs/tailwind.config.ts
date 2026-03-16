import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1b263b',
        navy: '#1e3a5f',
        sage: '#7D8F78',
        parchment: '#F5F2ED',
        glass: '#D1DBCB',
      },
      fontFamily: {
        // DM Serif Display — primary logo & display (headings, hero, section titles)
        display: ['var(--font-display)', 'serif'],
        // IBM Plex Mono — batch numbers, USP-grade callouts, technical specs
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        // Plus Jakarta Sans — body (running text, UI labels, supporting copy)
        body: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
