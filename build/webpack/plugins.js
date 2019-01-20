const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const path = require('path')
const glob = require('glob-all')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = (config, { dev, isServer }) => {
  const plugins = [...config.plugins]

  if (!dev && !isServer) {
    plugins.push(
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, '../../', '/src/client/**/*.js'),
          path.join(__dirname, '../../', '/src/client/**/*.jsx'),
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['js', 'jsx'],
          },
        ],
      }),
      new WorkboxWebpackPlugin({
        clientsClaim: true,
        skipWaiting: true,
        exclude: [/\.map$/, /\.pdf$/, /\.zip$/],
        importWorkboxFrom: 'cdn',
        navigateFallback: '/index.html',
        navigateFallbackBlacklist: [
          new RegExp('^/_'), // Exclude URLs starting with /_
          new RegExp('^/api'), // Exclude URLs starting with /api
          new RegExp('/[^/]+\\.[^/]+$'), // Exclude URLs containing a dot
        ],
        runtimeCaching: [
          {
            urlPattern: /\.html$/,
            handler: 'networkFirst',
          },
        ],
      }),
    )
  }

  return { plugins }
}
