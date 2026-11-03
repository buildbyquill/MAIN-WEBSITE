/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        night: {
          DEFAULT: '#252321',
          card: '#302D29',
          elevated: '#3A3632',
          border: 'rgba(242, 235, 221, 0.12)',
          faint: 'rgba(242, 235, 221, 0.06)',
          muted: '#85817B',
        },
        paper: {
          DEFAULT: '#F2EBDD',
          alt: '#D8C9AE',
          dark: '#D8C9AE',
        },
        ink: {
          DEFAULT: '#252321',
          soft: '#5B5860',
          muted: '#85817B',
        },
        brand: {
          DEFAULT: '#722F37',
          hover: '#5A252C',
          press: '#5A252C',
          soft: '#D8C9AE',
          tint: '#D8C9AE',
          300: '#722F37',
          400: '#722F37',
          glow: 'rgba(114, 47, 55, 0.18)',
        },
        scarlet: {
          DEFAULT: '#E9241A',
          deep: '#BE1E17',
        },
        mint: {
          DEFAULT: '#722F37',
          deep: '#722F37',
          soft: '#D8C9AE',
        },
        yellow: {
          DEFAULT: '#722F37',
          soft: '#D8C9AE',
        },
        coral: {
          DEFAULT: '#722F37',
          soft: '#D8C9AE',
        },
        orange: {
          DEFAULT: '#722F37',
        },
        gold: {
          DEFAULT: '#722F37',
          hover: '#5A252C',
          soft: '#D8C9AE',
        },
        lavender: '#722F37',
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px #252321',
        brutal: '5px 5px 0px 0px #252321',
        'brutal-lg': '8px 8px 0px 0px #252321',
        'brutal-blue': '5px 5px 0px 0px #722F37',
        'brutal-yellow': '5px 5px 0px 0px #722F37',
        'pill-glow': '0 12px 32px rgba(114, 47, 55, 0.2)',
        'card-glow': '0 8px 30px rgba(114, 47, 55, 0.12)',
      },
    },
  },
  plugins: [],
};
