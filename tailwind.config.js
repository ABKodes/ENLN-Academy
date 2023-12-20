/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#025464",
          secondary: "#b3cbd0",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui", "prettier-plugin-tailwindcss")],
};