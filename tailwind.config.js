/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2400px",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
