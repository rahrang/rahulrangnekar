/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-foreground": "var(--primary-foreground)",
        "secondary-foreground": "var(--secondary-foreground)",
        "muted-foreground": "var(--muted-foreground)",
        "accent-foreground": "var(--accent-foreground)",
        "accent-background": "var(--accent-background)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
