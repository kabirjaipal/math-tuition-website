import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#4abff0",
        lightmist: "#e7ebf2",
        oceanblue: "#0a77c9",
        limegreen: "#a2df33",
      },
    },
  },
  plugins: [],
};
export default config;
