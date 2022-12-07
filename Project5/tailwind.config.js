/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['dist/*.html', 'dist/*.js'],
  theme: {
    extend: {
      colors: {
        btnbgcolor: {
          DEFAULT: '#cccccc',
          dark: '#666666',
        },
      },
    },
  },
  plugins: [],
};
