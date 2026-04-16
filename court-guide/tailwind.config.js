// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Optional: extend with your brand blue if needed
      // colors: {
      //   brand: { DEFAULT: '#1d4ed8', light: '#eff6ff' },
      // },
    },
  },
  plugins: [],
};