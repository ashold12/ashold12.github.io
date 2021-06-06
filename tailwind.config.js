const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          DEFAULT: '#F1F4FFFF',
        },
        gray: {
          DEFAULT: '#A2A2A1FF',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
