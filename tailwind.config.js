/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          400: '#2C2C2C',
          500: '#141414'
        },
        light: {
          100: '#FFFFFF',
          200: '#F4F5F6',
          500: '#B1B8C1',
          400: '#D4D8DD'
        },
        plate: {
          400: '#1F263E'
        },
        primary: {
          300: '#763383'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
