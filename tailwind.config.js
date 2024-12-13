/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C2E51",
        secondary: "#3A3C6B",
        "primary-text": "#444C78",
        "secondary-text": "#464D72",
        "tertiary-text": "#727898",
      },
    },
  },
  plugins: [],
};
