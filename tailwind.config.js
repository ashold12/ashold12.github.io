const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': {'min': '508px', 'max': '1023px'},
        'sm':	'640px',
        'md':	'768px',
        'lg':	'1024px',
        'xl':	'1420px',
        '2xl':	'1536px'
      },
      borderWidth: {
        6: '6px'
      },
      width: {
        200: '200px',
        134: '134px',
        40: '40px',
      },
      height: {
        40: '40px',
      },
      minWidth: {
        134: '134px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
          DEFAULT: '#f0db4f'
        },
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
          light: '#d3e4f7FF',
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
