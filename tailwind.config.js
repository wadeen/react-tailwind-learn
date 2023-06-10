/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#222222",
      secondary: "#525252",
      white: "#FFFFFF",
      "bg-primary": "#F2F2F2",
      "bg-secondary": "#F0F0F0",
      "text-main": "#333333",
      "border-main": "#DDDDDD",
    },
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      inter: ["'Inter'", "sans-serif"],
    },
    // fontSize: {
    //   // 1 ~ 100px
    //   // usage: text-1, text-2, text-3, ...
    //   ...Object.fromEntries([...Array(100)].map((_, i) => i + 1).map((num) => [num, `${num}px`])),
    //   // Text sizes:
    //   body: ["16px", "170%"],
    //   bodySmall: ["14px", "170%"],
    //   caption: ["12px", "130%"],
    //   captionSmall: ["10px", "130%"],
    //   link: ["16px", "170%"],

    //   // Heading sizes:
    //   "heading-1": ["49px", "150%"],
    //   "heading-2": ["40px", "150%"],
    //   "heading-3": ["32px", "150%"],
    //   "heading-4": ["24px", "150%"],
    // },
  },
  plugins: [],
};
