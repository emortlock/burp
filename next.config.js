const withCSS = require('@zeit/next-css')

const flags = require('./build/webpack/flags')
const addPolyfills = require('./build/webpack/addPolyfills')
const plugins = require('./build/webpack/plugins')

module.exports = withCSS({
  publicRuntimeConfig: flags,
  webpack: (config, meta) => {
    const newConfig = Object.assign({}, config)

    newConfig.entry = addPolyfills(config)

    return Object.assign(
      {},
      config,
      addPolyfills(config, meta),
      plugins(config, meta),
    )
  },
})
