/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        tablet:'1300px',
        mobile:'350px',
        'big-desktop':'1630px',
        'min-desktop':'1100px'

      }
    },
  },
  plugins: [],
}