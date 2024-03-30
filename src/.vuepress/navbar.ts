import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "联系我们",
    icon: "blog",
    children: [
      {
        text: "联系/讨论/合作",
        children: [
          { text: "Bilibili", icon: "at", link: "https://space.bilibili.com/1093209533" },
          { text: "QQ 群组", icon: "light", link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=uIMLmOa_i6PpoUgoh2XRAsv9ZNDnYIVM&authKey=zJ568Ag%2BNOm34VKz7UM%2Fa7uc%2BnKqvbSHoxByN3uW7wNv3TM%2FTWQeabTs0R5n1T6V&noverify=0&group_code=418614169" },
        ],
      },
      {
        text: "网站支持",
        children: [
          { text: "网站反馈", icon: "debug", link: "https://docs.qq.com/form/page/DUFBXekFaUFZFSWJQ" },
          { text: "赞助网站", icon: "mark", link: "https://afdian.net/a/mwdocs" },
        ],
      },
    ],
  },
]);
