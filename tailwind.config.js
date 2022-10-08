/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: { max: "420px" },
    },
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
