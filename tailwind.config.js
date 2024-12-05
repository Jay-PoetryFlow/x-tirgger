import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};

export default config;