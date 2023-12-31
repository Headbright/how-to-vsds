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
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Technical Docs",
        link: "https://informatievlaanderen.github.io/VSDS-Tech-Docs/",
      },
    ],

    sidebar: [
      {
        text: "Publish",
        link: "/get-started",
        items: [
          { text: "Overview", link: "/producer/get-started-producer" },
          { text: "Transforming data", link: "/producer/transforming-data" },
          { text: "Publishing", link: "/producer/publish-ldes-server" },
          { text: "Testing", link: "/producer/testing-compliance" },
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
