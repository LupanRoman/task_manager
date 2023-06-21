/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav-shadow': '0 10px 25px 0px rgba(0, 0, 0, 0.3)',
        'google-btn-shadow': '0 0px 20px 5px rgba(0, 0, 0, 0.2) ',
        'input-shadow': '0 0px 10px 1px rgba(0, 0, 0, 0.2) ',
      },
      colors: {
        'brand-color': '#2196F3',
      },
    },
  },
  plugins: [],
};
