/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangered: "#FF6363",
      },
      fontFamily: {
        sharetech: ["Share Tech Mono"],
      },
    },
  },
  plugins: [],
};
