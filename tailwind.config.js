/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:{
        "600": "#FF4444"
      },
      secondary:{
        "600": "#AFB5C01A"
      },
      black: {
        "600": "#0B132A"
      },
      white: {
        "white": "#FFFFFF"
      },
      gray: {
        "600": "#4F5665"
      }
    }, 
    extend: {},
  },
  plugins: [],
}