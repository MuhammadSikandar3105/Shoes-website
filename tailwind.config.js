/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'], // Override the default sans font
      },
      screens: {
        'lg': '992px'
      },
      backgroundImage: {
        'testimonial': "url('public/miguel-a-amutio-QDv-uBc-poY-unsplash 1.png')",
      }
    },
  },
  plugins: [],
}

