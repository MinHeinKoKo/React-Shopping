/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : 'Montserrat',
      },
      colors : {
        "primary" : "#fffffe",
        "secondary" : "#d1d1e9",
        "danger" : "#e45858",
        "header" : "#2b2c34",
        "info" : "#6246ea"
      }
    },
  },
  plugins: [],
}
