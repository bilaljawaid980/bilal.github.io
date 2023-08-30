const rgbToAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: rgbToAlpha("--text"),
        background: rgbToAlpha("--background"),
        primary: rgbToAlpha("--primary"),
        secondary: rgbToAlpha("--secondary"),
        accent: rgbToAlpha("--accent"),
      },
    },
  },
  plugins: [],
};
