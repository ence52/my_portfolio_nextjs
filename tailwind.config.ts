import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlack: "#1C1C1C",
        darkPrimaryBlack: "#0d0d0d",
        lightBlack: "#4A4A4A",
        secondBlack: "#222222",
        turqoise: "#00FFA3",
      },
    },
  },
  plugins: [],
} satisfies Config;
