const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
module.exports = next({
  dir: './client',
  dev
})
