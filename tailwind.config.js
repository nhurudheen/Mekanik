/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      inkNut : ['Inknut Antiqua', 'serif'],
      baskerVille : ['Libre Baskerville', 'serif'],
      montserrat : ['Montserrat', 'sans-serif']
    },
    extend: {
      colors : {
        mainOrange : '#E3541C',
        offWhite :'#C4C4C4',
      },
      backgroundImage :{
        'sparePart': "url('/src/images/sparepart.png')",
        'workshop' : "url('/src/images/workshop.png')"
      }
    },
  },
  plugins: [],
}

