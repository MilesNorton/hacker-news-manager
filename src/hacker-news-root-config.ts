import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/welcome"],
});

registerApplication({
  name: "@hacker-news/search-result-component",
  app: () =>
    System.import("https://nifty-lalande-12f84c.netlify.app/search-client.js"),
  activeWhen: ["/hacker-news"],
});

start({
  urlRerouteOnly: true,
});
