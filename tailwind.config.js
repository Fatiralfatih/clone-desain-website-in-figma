/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1460px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
      },
      colors: {
        'hijau': '#09B451',
        'blue-mentah': '#E4FFFF',
      },
    },
  },
  plugins: [],
  
}