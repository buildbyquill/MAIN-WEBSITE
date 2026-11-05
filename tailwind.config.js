/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: '#080808',
        chrome: '#CDCBCA',
        'laser-crimson': '#D41514',
        'pure-white': '#F3F0F3',
        graphite: '#171516',
        gunmetal: '#352E30',
        'deep-crimson': '#810E11',
        'muted-grey': '#8A7A7A',
        night: {
          DEFAULT: '#080808',
          card: '#171516',
          elevated: '#352E30',
          border: 'rgba(205, 203, 202, 0.16)',
          faint: 'rgba(205, 203, 202, 0.06)',
          muted: '#8A7A7A',
        },
        paper: {
          DEFAULT: '#080808',
          alt: '#171516',
          dark: '#352E30',
        },
        ink: {
          DEFAULT: '#F3F0F3',
          soft: '#CDCBCA',
          muted: '#8A7A7A',
        },
        brand: {
          DEFAULT: '#D41514',
          hover: '#810E11',
          press: '#810E11',
          soft: '#171516',
          tint: '#171516',
          300: '#D41514',
          400: '#D41514',
          glow: 'rgba(212, 21, 20, 0.18)',
        },
        scarlet: {
          DEFAULT: '#D41514',
          deep: '#810E11',
        },
        mint: {
          DEFAULT: '#CDCBCA',
          deep: '#CDCBCA',
          soft: '#171516',
        },
        yellow: {
          DEFAULT: '#CDCBCA',
          soft: '#171516',
        },
        coral: {
          DEFAULT: '#CDCBCA',
          soft: '#171516',
        },
        orange: {
          DEFAULT: '#CDCBCA',
        },
        gold: {
          DEFAULT: '#CDCBCA',
          hover: '#352E30',
          soft: '#171516',
        },
        lavender: '#CDCBCA',
      },
      boxShadow: {
        'brutal-sm': '0 4px 14px rgba(0, 0, 0, 0.28)',
        brutal: '0 8px 24px rgba(0, 0, 0, 0.32)',
        'brutal-lg': '0 16px 40px rgba(0, 0, 0, 0.4)',
        'brutal-blue': '0 8px 24px rgba(212, 21, 20, 0.14)',
        'brutal-yellow': '0 8px 24px rgba(212, 21, 20, 0.14)',
        'pill-glow': '0 12px 32px rgba(0, 0, 0, 0.38)',
        'card-glow': '0 8px 30px rgba(212, 21, 20, 0.12)',
      },
    },
  },
  plugins: [],
};
