import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Publishing LDES",
  description: "A quick start guide for LDES data producers and consumers",
  base: "/how-to-vsds",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Publish",
        items: [
          { text: "Overview", link: "/producer/get-started-producer" },
          { text: "Transforming data", link: "/producer/transforming-data" },
          { text: "FAQ", link: "/faq" },
        ],
      },
      {
        text: "Consume",
        items: [{ text: "The LDES Client", link: "/consumer/get-started" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Headbright/how-to-vsds" },
    ],
  },
});
