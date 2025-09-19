/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        "gradient-blob": {
          "0%, 100%": {
            transform: "translate(-50%, 0) rotate(30deg) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -20px) rotate(40deg) scale(1.05)",
          },
        },
      },
      animation: {
        "gradient-blob": "gradient-blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
