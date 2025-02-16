import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-700": "#133676",
        "ligh-blue-200": "#158eff",
        "light-yellow-100": "#ffcc5e",
        "light-green-100": "#05cd99",
      },
    },
  },
  plugins: [],
} satisfies Config;
