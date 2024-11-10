import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // topbar
      spacing: {
        '58': '58px',
        '-152': '-152px',
      },
    },
  },
  plugins: [daisyui],
};
