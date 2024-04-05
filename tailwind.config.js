/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008D66',
        success: '#4CAF4F',
        secondary: '#4D4D4D',
        textMuted: '#717171',
        backgroundGray: '#F5F7FA'
      },
    },
  },
  plugins: [require("daisyui")],
}

