/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "info-bg": "url('/info_bg.png')",
      },
      maxHeight: {
        calc: "calc(100svh - 32.1rem)",
        calcResultPage: "calc(100svh - 8rem)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.7 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeInOut: {
          "0%": { opacity: 0 },
          "33%": { opacity: 0.7 },
          "66%": { opacity: 0.7 },
          "100%": { opacity: 0 },
        },
        moveTop: {
          "0%": {
            opacity: 0.5,
            bottom: "-10rem",
          },
          "100%": {
            opacity: 1,
            bottom: 0,
          },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(50px)" },
          "50%": { transform: "translateX(100px)" },
        },
        logo1: {
          "0%": { transform: "translateX(-50%)" },
          "10%": { tansform: "translateX(-50%)" },
          "25%": { transform: "translateX(-220%)" },
          "50%, 100%": { transform: "translateX(-220%)" },
        },
        logo2: {
          "0%": { transform: "translateX(-50%)" },
          "10%": { tansform: "translateX(-50%)" },
          "25%": { transform: "translateX(-110%)" },
          "50%, 100%": { transform: "translateX(-110%)" },
        },
        logo3: {
          "0%": { transform: "translateX(-50%)" },
          "10%": { tansform: "translateX(-50%)" },
          "25%": { transform: "translateX(0%)" },
          "50%, 100%": { transform: "translateX(0%)" },
        },
        logo4: {
          "0%": { transform: "translateX(-50%)" },
          "10%": { tansform: "translateX(-50%)" },
          "25%": { transform: "translateX(110%)" },
          "50%, 100%": { transform: "translateX(110%)" },
        },
        logo5: {
          "0%": {
            opacity: 0,
            transform: "translate(-10%, -100%);",
          },
          "30%": {
            opacity: 0,
            transform: "scale(1) translate(-10%, -100%);",
          },
          "32%": {
            opacity: 1,
            transform: "scale(1.2) translate(-10%, -100%);",
          },
          "36%, 100%": {
            opacity: 1,
            transform: "scale(1) translate(-10%, -100%);",
          },
        },
        pledge1: {
          "0%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "25%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "50%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "75%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
        },
        pledge2: {
          "0%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "25%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "50%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "75%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
        },
        pledge3: {
          "0%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "25%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "50%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "75%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
        },
        pledge4: {
          "0%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "25%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "50%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "75%": {
            opacity: 0,
            transform: "translate(0%, 10%);",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
        },
        moveTopDown: {
          "0%": {
            transform: "translate(0, 0);",
          },
          "25%": {
            transform: "translate(0, 4%);",
          },
          "50%": {
            transform: "translate(0, 0);",
          },
          "75%": {
            transform: "translate(0, -4%);",
          },
          "100%": {
            transform: "translate(0, 0);",
          },
        },
        paperText: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 2rem);",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0);",
          },
        },
        click: {
          "0%": {
            opacity: 0,
          },
          "25%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
};
