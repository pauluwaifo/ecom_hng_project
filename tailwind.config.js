/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}