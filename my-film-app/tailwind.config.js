/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)"],
      },
      backgroundImage: {
        'golden-gradient': 'linear-gradient(90deg, #FFD700, #FFB700, #FF9B00)',
        'silver-gradient': 'linear-gradient(90deg, #C0C0C0, #D3D3D3, #E5E4E2)',

      },
      colors:{
        primary:'#b91c1c'
      }
     
    },
  },
  plugins: [],
};
