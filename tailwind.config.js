const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors
    },
  },
  variants: {
    extend: {
      boxShadow: ["active"],
      translate: ["active"]
    },
  },
  plugins: [],
}
