/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1b4d3e",
          focus: "#1b4d3e",
        },
        secondary: {
          DEFAULT: "#c1a35a",
        },
        background: {
          DEFAULT: "#faf9f6",
        },
      },
      fontFamily: {
        main: ["Lato", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
