# Hacker News Manager

[![Netlify Status](https://api.netlify.com/api/v1/badges/963e995a-0bc4-4e01-b61b-58edd1b46bc9/deploy-status)](https://app.netlify.com/sites/cocky-ride-310246/deploys)

## Description

The idea for this repository is to create working micro-frontend manager. This micro-frontend manager is currently set up to import an external module, see: [https://github.com/MilesNorton/hacker-news-search-component](https://github.com/MilesNorton/hacker-news-search-component).

https://single-spa.js.org/ was used as the micro-frontend framework. This projects represents the single-spa root config.

## See the Demo

https://cocky-ride-310246.netlify.app/

## Try It

1.  `npm install`
2.  `npm start`
3.  It will now be running on port 9000.
4.  Run the following locally as well: [https://github.com/MilesNorton/hacker-news-search-component](https://github.com/MilesNorton/hacker-news-search-component)
5.  When you navigate to localhost:9000 you should now see the component

### Troubleshoot

- The page is empty with no component. The component we are mounting has https setup locally and can sometimes cause an issue on your browser. If you access the console logs of the web browser it will tell you that there is an invalid certificate for the module. If you click the link to the js module file in the browser, the browser will ask to trust this source which you will need to do. Once you do that you can refresh localhost:9000
- For any other issues I recommend looking at this youtube playlist: https://www.youtube.com/playlist?list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU
