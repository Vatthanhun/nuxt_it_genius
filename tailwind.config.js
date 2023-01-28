/** @type {import('tailwindcss').Config} */
const { def } = require('@vue/shared')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Sriracha', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
