/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'orange': '#F9AC52',
        'light-orange': '#FFDC87',
        'gray': '#23272A',
        'neutral-gray': '#474E54',
        'light-gray': '#ABA7A7',
        'light': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

