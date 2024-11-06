import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lighBlue: '#C2D1FF',
        bytewiseBlue: '#0033CC',
        lightGreen: '#F5FFFC',
        bytewiseGreen: '#71D971',
        darkGrey: '#252526',
        grey: '#EEF0F6',
        beginner: '#3F6C51',
        intermediate: '#CC7A00',
        advanced: '#C50D07',
      },
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)'],
        'dm-mono': ['var(--font-dm-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
