/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'orange': '#F9AC52',
        'light-orange': '#FFDC87'
      }
    },
  },
  plugins: [],
}

