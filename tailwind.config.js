/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    // Break points
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      primary: '#222222',
      secondary: '#525252',
      white: '#FFFFFF',
      'bg-primary': '#F2F2F2',
      'bg-secondary': '#F0F0F0',
      'text-main': '#333333',
      'border-main': '#DDDDDD',
      tomato: 'tomato',
    },
    fontFamily: {
      monster: ['Montserrat', 'sans-serif'],
      gothic: ['游ゴシック体', 'Yu Gothic', 'YuGothic', 'sans-serif'],
    },
    fontSize: {
      // 1 ~ 100px
      // usage: text-1, text-2, text-3, ...
      ...Object.fromEntries(
        [...Array(100)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
      ),
      // Text sizes:
      body: ['16px', '170%'],
      bodySmall: ['10px', '170%'],
      caption: ['12px', '130%'],
      captionSmall: ['10px', '130%'],
      link: ['16px', '170%'],
    },
    container: {
      screens: {
        // 1100pxまでしか広がらないように
        '2xl': '1100px',
      },
    },

    height: {
      screen: ['100vh', '100dvh'],
      auto: 'auto',
      full: '100%',
    },
    minHeight: {
      screen: ['100vh', '100dvh'],
      auto: 'auto',
      full: '100%',
    },
    maxHeight: {
      screen: ['100vh', '100dvh'],
      auto: 'auto',
      full: '100%',
    },
  },
  plugins: [],
};

// colors: {
//   // primary: "var(--color-primary)",
//   primary: "tomato",
//   secondary: "var(--color-secondary)",
//   white: "var(--color-white)",
//   "bg-primary": "var(--color-bg-primary)",
//   "bg-secondary": "var(--color-bg-secondary)",
//   "text-main": "var(--color-text-main)",
//   "border-main": "var(--color-border-main)",
// },
