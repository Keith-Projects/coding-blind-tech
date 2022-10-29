/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
