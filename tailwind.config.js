/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "24px",
      },

      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        lightGray: "#9ca3af",
        accent: "#2563eb",
        darkSlate: "#1f2937",
      },
    },
  },
  plugins: [],
};
