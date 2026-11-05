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
        black: '#08090B',
        white: '#F5F3EF',
        obsidian: '#08090B',
        'pure-white': '#F5F3EF',
        graphite: '#111317',
        gunmetal: '#292B30',
        'muted-grey': '#A5A5A5',
        night: {
          DEFAULT: '#08090B',
          card: '#111317',
          elevated: '#292B30',
          border: 'rgba(41, 43, 48, 0.92)',
          faint: 'rgba(245, 243, 239, 0.06)',
          muted: '#A5A5A5',
        },
        paper: {
          DEFAULT: '#08090B',
          alt: '#111317',
          dark: '#292B30',
        },
        ink: {
          DEFAULT: '#F5F3EF',
          soft: '#A5A5A5',
          muted: '#A5A5A5',
        },
        brand: {
          DEFAULT: '#FFC900',
          hover: '#FFC900',
          press: '#FFC900',
          soft: '#111317',
          tint: '#111317',
          300: '#FFC900',
          400: '#FFC900',
          glow: 'rgba(255, 201, 0, 0.12)',
        },
        mint: {
          DEFAULT: '#A5A5A5',
          deep: '#A5A5A5',
          soft: '#111317',
        },
        yellow: {
          DEFAULT: '#FFC900',
          soft: '#111317',
        },
        coral: {
          DEFAULT: '#A5A5A5',
          soft: '#111317',
        },
        orange: {
          DEFAULT: '#A5A5A5',
        },
        gold: {
          DEFAULT: '#FFC900',
          hover: '#FFC900',
          soft: '#111317',
        },
        lavender: '#A5A5A5',
      },
      boxShadow: {
        'brutal-sm': '0 4px 14px rgba(0, 0, 0, 0.28)',
        brutal: '0 8px 24px rgba(0, 0, 0, 0.32)',
        'brutal-lg': '0 16px 40px rgba(0, 0, 0, 0.4)',
        'brutal-blue': '0 8px 24px rgba(255, 201, 0, 0.12)',
        'brutal-yellow': '0 8px 24px rgba(255, 201, 0, 0.12)',
        'pill-glow': '0 12px 32px rgba(0, 0, 0, 0.38)',
        'card-glow': '0 8px 30px rgba(255, 201, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
