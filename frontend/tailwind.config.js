/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit','sans-serif'],
      },
      screens: {
        '1xl': '1326px',
        'xs': '480px',
        'xxs': '360px',
      }
    },
  },
  plugins: [],
}