/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ls': '428px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'poster-mobile': "0px 0px 7px 1px rgba(0, 0, 0, 0.5)",
        'thumbnail-large': "1px 0px 22px rgba(0, 0, 0, 0.55)",
        'collections': '0px 0px 6px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'main-bg': "linear-gradient(63.18deg, #931D1D 0%, #DF2144 100%)",
        'collections': "linear-gradient(90.21deg, #C71F34 2.23%, #B02334 98.28%)",
        'black-gradient-overlay-1': "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 50%)",
        
      }
    },
  },
  
}