/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope:["Manrope"]
      },
      screens: {
        '3xl': {'min':'1441px','max': '1685px'},
        // => @media (max-width: 1685px) { ... }
  
        '2xl': {'min':'768px', 'max': '1440px'},
        // => @media (max-width: 1540px) { ... }

        'xl': {'max': '1380px'},
        // => @media (max-width: 1380px) { ... }
        
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min':'0px', 'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
