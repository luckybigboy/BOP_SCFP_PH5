import { defineConfig, transformerDirectives  } from 'unocss'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: "#C57B0D",
      black: "#394253",
    },
  },
  shortcuts: {
    "card-box": "bg-white rounded-8px p12px",
    btn: "h-30px px-24px rounded-full flex items-center justify-center text-12px",
    "float-bottom":
      "fixed bottom-0 left-0 right-0 px-12px py-8px bg-white  shadow-[0px_0px_15px_0px_rgba(0,0,0,0.06)]",
    "bg-linear-gradient": "bg-[linear-gradient(170deg,#fff2de_0%,#ffffff_20%)]",
    "btn-submit": "w-full h-full bg-primary text-16px color-#FFFFFF p-12px text-center rounded-6px",
  },
})