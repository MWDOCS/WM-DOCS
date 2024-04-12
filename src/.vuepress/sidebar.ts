import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
	  text: "关于游戏",
      link: "/",
    },
	{
				text: '游戏交流',
				collapsible: true,
				children: [
					'/collection/group-qq.md',
				],
			},
	{
				text: '游戏下载',
				collapsible: true,
				children: [
					'/collection/download.md',
				],
			},
    {text:'关于本站',link: '/about-site.md',},
]);
