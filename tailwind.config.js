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
          dark: '#707070',
          darker: '#454545',
        },
        blue: {
          DEFAULT: '#195190FF',
          dark: '#133D6CFF',
          darker: '#10335AFF',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
