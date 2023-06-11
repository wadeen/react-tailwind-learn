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
    /**
     * 設定を「追加」する場合はextend
     * 設定を「上書き」する場合はtheme
     */
    extend: {
      fontSize: {
        // 1 ~ 100px
        // usage: text-1, text-2, text-3, ...
        ...Object.fromEntries(
          [...Array(100)].map((_, i) => i + 1).map((num) => [num, `${num}px`]),
        ),
        // Text sizes:
        // memo: font-body/none などでline-heightの上書きは可能
        body: ['16px', '200%'],
        bodySmall: ['10px', '170%'],
        caption: ['12px', '130%'],
        captionSmall: ['10px', '130%'],
        link: ['16px', '170%'],
      },
      container: {
        screens: {
          '2xl': '1100px', // 最大1100px "2xl"は関係ない
        },
      },

      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },

    // theme（上書き）
    colors: {
      primary: '#222222',
      secondary: '#525252',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#F2F2F2',
      'gray-thin': '#CECECE',
      'gray-dark': '#F0F0F0',
      'text-main': '#333333',
      'border-main': '#DDDDDD',
      tomato: 'tomato',
    },
    fontFamily: {
      monster: ['Montserrat', 'sans-serif'],
      gothic: ['游ゴシック体', 'Yu Gothic', 'YuGothic', 'sans-serif'],
    },
    // Break points
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
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

// default
// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// }
