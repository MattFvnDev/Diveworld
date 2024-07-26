/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"
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
        indicatorPulse: {
          "0%": {
            opacity: "0.2",
          },
          "20%": {
            opacity: "1",
          },
          "40%": {
            opacity: "0.2",
          },
        },
      },
      animation: {
        moveCarouselIconLeft: "moveCarouselIconLeft 60s linear infinite",
        pulse: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        indicatorPulse: "indicatorPulse 2.5s ease 1s infinite",
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
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "animate-delay": (value) => ({
          animationDelay: value,
        }),
      })
    }),
  ],
}
