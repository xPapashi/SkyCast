/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['roboto']
    },
    extend: {
      backgroundImage: {
        'sky': "url('./assets/sky.webp')",
      },
    },
  },
  plugins: [],
}