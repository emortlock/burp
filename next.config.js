const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withCSS = require('@zeit/next-css')

const flags = require('./build/webpack/flags')
const polyfills = require('./build/webpack/polyfills')
const loaders = require('./build/webpack/loaders')
const plugins = require('./build/webpack/plugins')

module.exports = withBundleAnalyzer(
  withCSS({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    publicRuntimeConfig: flags,
    webpack: (config, meta) => {
      // Fix to allow winston logging client side
      const node = !meta.isServer
        ? {
            node: { fs: 'empty' },
          }
        : {}

      const resolve = {
        resolve: Object.assign(config.resolve, {
          alias: {
            'tailwind-react': '@eddm/tailwind-react',
          },
        }),
      }

      return Object.assign(
        config,
        polyfills(config, meta),
        plugins(config, meta),
        loaders(config, meta),
        node,
        resolve,
      )
    },
  }),
)
