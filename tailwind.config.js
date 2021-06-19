const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { // once the colors are customized, you cannot access any of the other default colors
      blue: {
        dark: '#00101B',
        DEFAULT: '#001C30',
        light: '#0069B4',
      },
      white: colors.white,
    },
    extend: {
      backgroundImage: theme => ({
        'movies': "url('public/movies-bg.jpg')",
      })
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

