/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      '280': '280px',
      '380': '380px',
      '500': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max': '1920px',
    },

    extend: {
      fontFamily: {
        satoshi: ['Satoshi-Variable', 'sans-serif'],
        satoshiM: ['Satoshi-Medium', 'sans-serif'],
        satoshiL: ['Satoshi-Light', 'sans-serif'],
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}

