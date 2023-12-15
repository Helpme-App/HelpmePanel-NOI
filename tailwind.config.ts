import type { Config } from "tailwindcss";
import { Roboto } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayblue: {
          900: "#1D293F",
          700: "#1E2F4D",
          400: "#50596B",
          300: "#99A1AD",
          200: "#CCCCCC",
          100: "#F4F5F5",
        },
        pink: {
          700: "#612B52",
          400: "#FF2F7D",
          200: "#F7BAD1",
        },
        error: {
          400: "#CE001A",
          200: "#FFCBD2",
        },
        warning: {
          400: "#FFB016",
          200: "#FFEDCA",
        },
        info: {
          400: "#3E74FF",
          200: "#BCCFFF",
        },
        success: {
          400: "#00C814",
          200: "#A5FDAE",
        },
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif']
      },
      screens: { 
        'lg': '1024px',  
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
