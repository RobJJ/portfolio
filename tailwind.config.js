/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logoFont: ["Josefin Sans", "sans-serif"],
      alertFont: ["Acme", "sans-serif"],
      infoFont: ["Mukta", "sans-serif"],
      infoText: ["Heebo", "sans-serif"],
    },
  },
  plugins: [],
};
