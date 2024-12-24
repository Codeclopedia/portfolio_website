import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        // levitate: {
        //   '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
        //   '50%': { transform: 'translateY(-10px) rotate(10deg)' },
        // },
        // levitate2: {
        //   '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
        //   '50%': { transform: 'translateY(-40px) rotate(-30deg)' },
        // },
        // levitate3: {
        //   '0%, 100%': { transform: 'translateX(0)translateY(0) rotate(-10deg)' },
        //   '50%': { transform: 'translateX(10px) translateY(-50px) rotate(10deg)' },
        // },
        // levitate4: {
        //   '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
        //   '50%': { transform: 'translateX(-50px) rotate(-20deg)' },
        // },
        // levitate5: {
        //   '0%, 100%': { transform: 'translateY(60) translateX(0px) rotate(0deg)' },
        //   '50%': { transform: 'translateY(-20px) translateX(10px) rotate(-50deg)' },
        // },
        // cloudlevitate: {
        //   '0%': { transform: 'translateX(0) translateY(0)', },
        //   '25%': { transform: 'translateX(10px) translateY(-2px)', },
        //   '50%': { transform: 'translateX(30px) translateY(1px)', },
        //   '75%': { transform: 'translateX(40px) translateY(-3px)', },
        //   '100%': { transform: 'translateX(70px) translateY(0)', },
        // },
        // cloudlevitate2: {
        //   '0%': { transform: 'translateX(0) translateY(0)', },
        //   '25%': { transform: 'translateX(-15px) translateY(3px)', },
        //   '50%': { transform: 'translateX(-30px) translateY(-2px)', },
        //   '75%': { transform: 'translateX(-40px) translateY(2px)', },
        //   '100%': { transform: 'translateX(-60px) translateY(0)', },
        // },
        // cloudlevitate3: {
        //   '0%': { transform: 'translateX(0) translateY(0)' },
        //   '25%': { transform: 'translateX(5px) translateY(2px)' },
        //   '50%': { transform: 'translateX(15px) translateY(-3px)' },
        //   '75%': { transform: 'translateX(20px) translateY(1px)' },
        //   '100%': { transform: 'translateX(50px) translateY(0)' },
        // },
      },
      animation: {
        // levitate: 'levitate 5s ease-in-out infinite',
        // levitate2: 'levitate 10s ease-in-out infinite',
        // levitate3: 'levitate 20s ease-in-out infinite',
        // levitate4: 'levitate 3s ease-in-out infinite',
        // levitate5: 'levitate 8s ease-in-out infinite',
        // cloudlevitate: 'cloudlevitate 25s linear infinite alternate',
        // cloudlevitate2: 'cloudlevitate2 20s linear infinite alternate',
        // cloudlevitate3: 'cloudlevitate3 25s linear infinite alternate',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-yellow': '#FFFACD', // Custom soft yellow
        'dark-blue': '#000033',
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
