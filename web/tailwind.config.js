/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: "#1a202c",
      secondaryColor: "#2d3748",
      accentColor: "#4a5568",
      textColor: "#e2e8f0",
      textColorSecondary: "#a0aec0",
      backgroundColor: "#1a202c",
      backgroundColorSecondary: "#2d3748"
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}
