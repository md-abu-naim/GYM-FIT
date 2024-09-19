/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
};
