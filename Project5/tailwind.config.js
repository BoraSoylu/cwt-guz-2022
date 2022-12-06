/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['dist/*.html', 'dist/*.js'],
  theme: {
    extend: {
      colors:{
        'btnbgcolor': {
          DEFAULT: '#cccccc',
          dark: '#666666',
        },
      }
    },
  },
  plugins: [],
};
