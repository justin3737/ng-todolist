const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': {'max':'640px'}
    },
    extend: {
    },
  },
  plugins: [],
}
