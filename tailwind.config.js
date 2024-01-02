 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#025464",
          secondary: "#b3cbd0",
          accent: "#001014",
        },
      },
      "light",
    ],
  },
  plugins: [
    require("daisyui", "prettier-plugin-tailwindcss", "flowbite/plugin"),
  ],
};