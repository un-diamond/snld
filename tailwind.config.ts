import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        panel: "#111111",
        diamond: "#F5F5F3",
        muted: "#A8A29E",
        rose: "#C4A484"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;