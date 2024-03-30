import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Warships Mobile 2 文档",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans+SC:wght@500&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
