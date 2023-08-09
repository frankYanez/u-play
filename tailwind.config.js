/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        "u-button": {
          backgroundColor: 'black',
        }
      },
      backgroundImage: {
        'bg-mockup': "url('/images/mockup-home.png')"
      }
    },
    plugins: [],
  }

}