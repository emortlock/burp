module.exports = async config => {
  const entries = await config.entry()

  if (entries['main.js'] && !entries['main.js'].includes('babel-polyfill')) {
    entries['main.js'].unshift('babel-polyfill')
  }

  return { entries }
}
