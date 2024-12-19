import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(10deg)' },
        },
        levitate2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-40px) rotate(-30deg)' },
        },
        levitate3: {
          '0%, 100%': { transform: 'translateX(0)translateY(0) rotate(-10deg)' },
          '50%': { transform: 'translateX(10px) translateY(-50px) rotate(10deg)' },
        },
        levitate4: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(-50px) rotate(-20deg)' },
        },
        levitate5: {
          '0%, 100%': { transform: 'translateY(60) translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) translateX(10px) rotate(-50deg)' },
        },
      },
      animation: {
        levitate: 'levitate 5s ease-in-out infinite',
        levitate2: 'levitate2 3s ease-in-out infinite',
        levitate3: 'levitate3 3s ease-in-out infinite',
        levitate4: 'levitate4 3s ease-in-out infinite',
        levitate5: 'levitate5 3s ease-in-out infinite'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
