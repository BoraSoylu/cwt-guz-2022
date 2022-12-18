/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    'dist/*.html',
    'dist/*.js',
    'src/**/*.js',
    'src/*.js',
    'dist/index.html',
    'src/index.html',
    'dist/*',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '1px',
      md: '768px',
      lg: '992px',
    },
  },
  plugins: [],
};
