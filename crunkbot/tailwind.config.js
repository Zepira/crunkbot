import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#182023", // or DEFAULT
            foreground: "#bf7f36", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#ebb45a",
              darkBlue: "#192025",
              eerieBrown: "#211e14",
              bistre: "#322518",
              bronze: "#bf7f36",
              eerieBlack: "#182023",
              champagne: "#f5e3c7",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
