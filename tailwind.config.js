/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ADD8E6",
        anotherBlue: "#00BFFF",
        secondBlue: "#add8e6",
      },
    },
  },
  plugins: [],
};
