/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'false',
	theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem"
      }
    },
		extend: {
      colors: {
        'lightning-yellow': {
          DEFAULT: '#FFC11C',
          50: '#FFF3D4',
          100: '#FFEEBF',
          200: '#FFE296',
          300: '#FFD76E',
          400: '#FFCC45',
          500: '#FFC11C',
          600: '#E3A500',
          700: '#AB7C00',
          800: '#735300',
          900: '#3B2B00',
          950: '#1F1600'
        },
      }
    },
	},
	plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffffff",
          secondary: "#b4b4b4",
          accent: "#a9ef53",
          neutral: "#1f192e",
          "base-100": "#141414",
          info: "#3265d2",
          success: "#1f9e86",
          warning: "#a25e0b",
          error: "#eb282c",
          "--rounded-btn": "0rem"
        }
      }
    ]
  }
}
