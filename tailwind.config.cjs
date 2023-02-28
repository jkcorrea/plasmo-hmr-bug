const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...theme,
      fontFamily: {
        sans: ['Inter', '"PT Sans"', ...theme.fontFamily.sans],
      },
    },
  },
}
