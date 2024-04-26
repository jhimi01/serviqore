/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#333333",
        primary: "#008D66",
        success: "#4CAF4F",
        secondary: "#333333",
        textMuted: "#333333",
        secondtextMuted: "#333333",
        backgroundGray: "#F5F7FA",
      },
    },
  },
  plugins: [require("daisyui")],
};
