/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008D66",
        success: "#4CAF4F",
        secondary: "#3f3f3f",
        textMuted: "#333",
        secondtextMuted: "#333",
        backgroundGray: "#F5F7FA",
      },
    },
  },
  plugins: [require("daisyui")],
};
