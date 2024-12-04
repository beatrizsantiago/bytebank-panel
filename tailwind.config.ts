import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          main: '#004D61',
          light: '#DEE9EA',
          transparent: 'rgba(0, 77, 97, 0.1)',
          hover: 'rgba(0, 77, 97, 0.7)',
        },
        secondary: {
          main: '#47A138',
          light: '#E4EDE3',
          transparent: 'rgba(71, 161, 56, 0.1)',
          hover: 'rgba(71, 161, 56, 0.7)',
        },
        gray: {
          main: '#8B8B8B',
          light: '#CCCCCC',
          medium: '#CBCBCB',
          dark: '#444444',
          '100': '#F8F8F8',
          '600': '#767676',
        },
      },
      fontSize: {
        sm: '0.812rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.568rem',
      },
    },
  },
  plugins: [],
};
export default config;
