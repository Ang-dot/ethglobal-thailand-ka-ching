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
        londrina: ['var(--font-londrina)'],
        "londrina-light": ['var(--font-nunito)', 'sans-serif'],
        "press-start2p": ['var(--font-press-start-2p)', 'monospace'],
        nountown: ['Nountown', 'sans-serif']
      }
    },
  },
  plugins: [],
}

