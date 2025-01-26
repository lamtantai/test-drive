/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        headerHeight: "var(--header-height)",
      },

      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        lightBlack: "#393939",
        lightGray: "#9ca3af",
        accent: "#2563eb",
        darkSlate: "#1f2937",
      },

      boxShadow: {
        card: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
      },

      height: {},
    },
  },
  plugins: [],
};
