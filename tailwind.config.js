/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        small:{max: "320px"},
        meduim:{max: "768px"}
      }
    },
  },
  plugins: [],
}

