/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatSlow2: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(15px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },

      animation: {
        floatSlow: "floatSlow 8s ease-in-out infinite",
        floatSlow2: "floatSlow2 10s ease-in-out infinite",
        fadeUp: "fadeUp 1s ease forwards",
      },
    },
  },
  plugins: [],
}