module.exports = {
  webpack: (config) => {
    const newConfig = Object.assign({}, config)

    return newConfig
  },
  webpackDevMiddleware: config => config,
}
