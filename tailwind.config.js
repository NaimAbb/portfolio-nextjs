/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-custom)"],
        oleoScript: ["var(--oleo-script-font)"],
      },
      animation: {
        slider: "slider 0.7s infinite",
      },
      keyframes: {
        slider: {
          from: {
            transform: "translateX(-5px)",
          },
          to: {
            transform: "translateX(5px)",
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
