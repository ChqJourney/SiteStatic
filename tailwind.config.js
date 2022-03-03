module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        moveout:'moveout 0.5s ease-in-out'
      },
      keyframes:{
        moveout:{
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
        }
      }
    },
  },
  plugins: [],
}
