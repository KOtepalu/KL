/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '0.9375rem',
      base: '1.1rem',
      '5xl': ['4rem', 1.05],
      '2xl': ['1.5rem', 1.05],
    },
    extend: {
      fontFamily: {
        body:['Roboto'],
        title:['Chonburi'],
      }
    },
  },
  plugins: [],
}

