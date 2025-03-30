/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adam-black-50': '#191919',
        'adam-white-50': '#D9D9D9',
        'adam-red-50': '#FF000026',
        'adam-red-100': '#FF0000',
        'adam-green-50':'#00A51E26',
        'adam-green-100':'#00A51E',
        'adam-yellow-50': '#FFD90026',
        'adam-yellow-100': '#FFD900',
        'adam-blue-100': '#0900FF',
        'adam-purple-100':'#800080',
      },
      fontFamily: {
        'display': ['Mansfield', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 