<h1 align="center">
  BURP<br />
  (Boilerplate Universal React PWA)
</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/emortlock/nextjs-boilerplate.svg)](https://greenkeeper.io/)

Opinionated starter kit for building a React PWA that can be run on a Node server using [Express](https://github.com/expressjs/express) and [Next.js](https://github.com/zeit/next.js/) or as a static site by making use of Next.js [export function](https://github.com/zeit/next.js/#static-html-export).

Aims to align as closely as possible to the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) recommendations.

## Featured tools

| Tool                                                       | Description                                                                                                                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Next.js](https://github.com/zeit/next.js/)                | Framework for creating static and server‑rendered applications                                                                                               |
| [Express](https://github.com/expressjs/express)            | Popular framework for creating HTTP servers                                                                                                                  |
| [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) | An atomic CSS utility framework with additional functions & directives made available to hook into a JS config file when composing your own classes.         |
| [Recompose](https://github.com/acdlite/recompose)          | Provides numerous higher order components to augment stateless components within the app without any heavy lifting.                                          |
| [Prettier](https://github.com/prettier/prettier)           | A code formatter that provides a consistent style across the app. This tool parses written code and re-prints it following the configuration rules provided. |

## TODO

### Tailwind

#### PurgeCSS

### Service Worker Precache

### Recompose

### Prettier

The starter kit comes with the [Prettier](https://github.com/prettier/prettier) code formatter to provide a consistent style across the app. This tool parses written code and re-prints it following the configuration rules provided.

In order to get the best experience of Prettier it's highly recommended that you make use of an editor plugin to apply the formatting automatically (e.g. [Prettier - Code formatter](https://github.com/prettier/prettier-vscode) for VS Code). Alternatively you can make use of `lint:fix` npm script to target all files.

## TODO

- manifest & app icons
- https://github.com/zeit/next.js/tree/canary/examples/ssr-caching
- https://github.com/zeit/next.js/blob/canary/examples/with-sitemap-and-robots-express-server/server/sitemapAndRobots.js
- https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-analyzer
- https://github.com/zeit/next.js/tree/canary/examples/with-redux
