/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : (_)=>({
        'custom-background' : "url('./src/assets/pexels-ninvalll-6571739.jpg')"
      })
    },
  },
  plugins: [],
}

