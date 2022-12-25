/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '1px',
      md: '768px',
      lg: '992px',
    },
  },
  plugins: [],
  prefix: 't-',
};
