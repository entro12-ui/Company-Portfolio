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
        nativeblack: "#010808",
        lightGreen: "#8abfc0",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        ubuntu: ["var(--font-ubuntu)"],
        hanken: ["var(--font-hanken-grotesk)"],
      },
    },
  },
  plugins: [],
};

export default config;
