/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ka-ching-white": '#FDF8FF',
      },
      fontFamily: {
        londrina: ['LondrinaSolid', 'sans-serif'],
        nountown: ['Nountown', 'sans-serif'],
        "londrina-light": ['LondrinaLight', 'sans-serif'],
        "press-start2p": ['PressStart2P', 'monospace']
      }
    },
  },
  plugins: [],
}

