const bodyParser = require('body-parser')
const helmet = require('helmet')

const health = require('./health')
const metrics = require('./metrics')
const validatePost = require('./validatePost')

module.exports = [
  health,
  metrics,
  helmet(),
  validatePost,
  bodyParser.json({ limit: '20mb' }),
  bodyParser.urlencoded({ limit: '20mb', extended: false }),
].filter(middleware => middleware !== false)
