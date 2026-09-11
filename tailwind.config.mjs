/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        feuerrot: {
          DEFAULT: '#D32F2F',
          dark: '#B02525',
          light: '#E57373',
        },
        graphit: {
          DEFAULT: '#212121',
          light: '#3A3A3A',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
