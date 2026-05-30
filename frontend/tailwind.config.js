/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#d4af37',
          DEFAULT: '#c5a059',
          dark: '#a3844a',
        },
        luxury: {
          cream: '#f8f9fa',
          white: '#ffffff',
          black: '#1a1a1a',
        },
        pastel: {
          blue: '#eef2ff',
          pink: '#fdf2f8',
          yellow: '#fefce8',
          accent: '#c5a059',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
