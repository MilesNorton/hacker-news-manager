import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@kuttle/hacker-news-search",
  app: () => System.import("@kuttle/hacker-news-search"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
