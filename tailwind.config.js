/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mi-color-menta': '#c5e4e7',
        'gris': '#3f6365',
        'gris-claro': '#a0b8b8',
        'otro-gris': '#728383',
        'custom-menta-oscuro': 'rgb(0, 71, 75)',
        'custom-celeste-claro': 'rgb(159, 232, 223)',
        'custom-menta-oscuro2': '#02373a',
        'menta-claro': '#8fe0d5',
        'color-label': '#728383',
        'color-label-Error': '#d77058',
        'color-reset': 'rgb(13, 104, 109)',
        'color-reset2': 'rgb(6, 93, 100)',
        'color-valor-fijo': 'rgb(120, 170, 172)',
        'color-Monto' : '#2bbfad',
        'gris-fondo-input' : '#f3f8fb',

      },
      spacing: {
        '100': '100px',
        'custom-90': '90px',
        'custom-110': '110px',
        '10': '10px',
        '760': '760px',
        '360': '360px',
        '27': '27px',
        'custom-5': '5px',
        'custom-15': '15px',
        'custom-30': '30px',
        'custom-35': '35px',
        'custom-120': '120px',
        'custom-40': '40px',
        'custom-102': '102px',
        'custom-73%': '73%',
      },
      boxShadow: {
        'custom': '0px 0px 12px 12px rgba(14, 14, 10, 0.15)',
      }
    },
  },
  plugins: [],
}

