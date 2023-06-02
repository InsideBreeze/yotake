/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
			colors: {
				'link_light': '#00441a',
				'link_dark': '#b1c5c8',
				'link_light_hover': '',
				'link_dark_hover': ''
			}
		},
  },
  plugins: [require("@tailwindcss/typography")],
}
