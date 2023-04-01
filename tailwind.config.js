/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        heartBeat: {
          //  bounce 4 times
          "0% ": { transform: "scale(1)" },
          "12%": { transform: "scale(1.1)" },
          "25%": { transform: "scale(1)" },
          "37%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "62%": { transform: "scale(1.1)" },
          "75%": { transform: "scale(1)" },
          "87%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },

      },
      animation: {
        wiggle: "wiggle .2s ease-in-out infinite",
        heartBeat: "heartBeat .8s ease-in-out",
      },
    },
  },
  plugins: [],
}
