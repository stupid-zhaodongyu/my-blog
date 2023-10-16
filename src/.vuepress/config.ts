import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchProPlugin } from "vuepress-plugin-search-pro"
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe"
export default defineUserConfig({
  base: "/",
  plugins: [],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  lang: "en-US",
  title: "dongyu's blog",
  description: "?",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
