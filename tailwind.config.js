/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,mjs,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#279a45",
        secondary: "#ff991f",
        darkgreen: "#055424",
        darkyellow: "#c56600",
      },
      fontFamily: {
        myriad: ["Myriad Pro", "serif"],
      },
    },
  },
  plugins: [],
};
