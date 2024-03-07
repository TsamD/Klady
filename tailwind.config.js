/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brightColor: "#BA55D3",
        backgroundColor: "#F0F0F6",
        killsColor:"#F0F0F0 ",
        boutonBase:"#4B0082",
        hoverNav:"#fff50f5",
        experience:"#E8E0E8 ",
        nuanceBlack:"#999999",
        nuanceViolet:"#4B0082",
        
      },
    },
    plugins: [],
  }

}