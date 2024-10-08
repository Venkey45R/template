/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        belle: ['"La Belle Aurore"', 'cursive'],
        publicsans: ['Public Sans', 'sans-serif'],
      },
      colors: {
        customPink: '#D96599',
        namePink: '#DA2E78',
        button: '#4D7E72',
        background: '#C8E6B5',
        background2: '#933E63',
        bride: '#C75184',
        round: '#F7FABD',
        round2: '#D9D9D9',
        text: '#F9ECE6',
        married: '#C8E6B5',
        para: '#F799C2',
        para2: '#C37D9B',
        overall: '#AD4F78',
        your: '#FED2E2',
        gallery: '#F5F5F5',
      },
      rotate: {
        '-173.9': '-173.9deg',
        '-16.14': '-16.14deg',
        '24': '13deg',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(261.75deg, #CECECE -0.46%, #FFFFFF 120.33%, #BABABA 120.33%)',
        'gallerygradient': 'linear-gradient(104.08deg, #FFA8CE -4.31%, #FFD7E8 56.37%, #D66998 98.7%, #FFB8D7 136.79%)',
      },
    },
  },
  plugins: [],
}
