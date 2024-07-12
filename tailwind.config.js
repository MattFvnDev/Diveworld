/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveCarouselIconLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        pulse: {
          "50%": {
            opacity: ".3",
          },
        },
      },
      animation: {
        moveCarouselIconLeft: "moveCarouselIconLeft 60s linear infinite",
        pulse: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },

      colors: {
        background: "#010318",
        active: "#82c9ff",
        default: "#FFFFFF",
        mobilebackground: "#4d117a",
        accent: "#ff6726",
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
    },
  },
  plugins: [],
}