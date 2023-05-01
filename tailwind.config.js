module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: "class", // Enables dark mode
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        rose: {
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#881337",
          900: "#881337",
        },
        emerald: {
          100: "#d1fae5",
          700: "#047857",
        },
        amber: {
          100: "#fef3c7",
          700: "#b45309",
        },
        primaryColor: "#ffffff",
        secondaryColor: "#1e1e1e",

        primaryHeader: "#fafafa",
        secondaryHeader: "#181818",

        primaryText: "#000000",
        secondaryText: "#fafafa",

        primaryBtn: "#000000",
        primaryBtnHover: "#2B2B2B",
        primaryBtnText: "#f1f1f1",
        primaryBtn2: "#e7e7e7",

        secondaryBtn: "#d9d9d9",
        secondaryBtnHover: "#f1f1f1",
        secondaryBtnText: "#000000",
        secondaryBtn2: "#212121",
      },
      screens: {
        ipad: { min: "768px", max: "1024px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
