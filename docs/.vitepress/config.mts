import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Publishing LDES",
  description: "A quick start guide for LDES data producers and consumers",
  base: "/how-to-vsds",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Guides",
        items: [
          { text: "Publish data as LDES", link: "/get-started-producer" },
          { text: "Consume LDES", link: "/get-started-consumer" },
          { text: "FAQ", link: "/faq" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Headbright/how-to-vsds" },
    ],
  },
});
