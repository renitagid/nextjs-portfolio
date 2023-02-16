/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretty': ['Clicker Script', 'cursive'],
        'jost' : ['Jost', 'sans-serif'],
        'header' :['Calistoga', 'serif']
      },
      colors: {
        primary: '#152238',
        secondary: '#008080',
        white: '#FFFFFF',
        black: '#000000'
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      }
      
    }
  },
  plugins: [
  ]
}