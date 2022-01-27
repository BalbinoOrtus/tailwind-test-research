const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
