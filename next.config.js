const withCSS = require('@zeit/next-css')

const flags = require('./build/webpack/flags')
const polyfills = require('./build/webpack/polyfills')
const loaders = require('./build/webpack/loaders')
const plugins = require('./build/webpack/plugins')

module.exports = withCSS({
  publicRuntimeConfig: flags,
  webpack: (config, meta) => {
    // Fix to allow winston logging client side
    const node = !meta.isServer
      ? {
          node: { fs: 'empty' },
        }
      : {}

    return Object.assign(
      {},
      config,
      polyfills(config, meta),
      plugins(config, meta),
      loaders(config, meta),
      node,
    )
  },
})
