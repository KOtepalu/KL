/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '0.9375rem',
      base: '1.1rem',
      'nupp': '0.9375rem',
      'xl': '1.4rem',
      '1xl': '1.5rem',
      '5xl': ['4rem', 1.05], /*hero sektsiooni pealkiri, h1, 64px*/
      '4xl': ['3rem', 1.05], /*h2 pealkirjad 48px*/
      '2xl': ['1.5rem', 1.05],
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 80s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        body:['Roboto'],
        title:['Chonburi'],
      }
    },
  },
  plugins: [],
}

