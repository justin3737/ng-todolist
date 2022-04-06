const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screen: {
      'xs': {'max':'480px'}
    },
    extend: {
    },
  },
  plugins: [],
}
