/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#252B42',
        'orangeMain': '#FF7B47',
        'greenMain': '#0D5C63'
      },
      screens: {
        'sm': '365px',
        'md': '768px',
        'xl': '1024px',
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}