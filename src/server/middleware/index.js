const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')

const config = require('../config')

const redirectURL = require('./redirectURL')
const validatePost = require('./validatePost')

module.exports = [
  helmet(),
  redirectURL(),
  !config.isDev && compression(),
  validatePost,
  bodyParser.json({ limit: '20mb' }),
  bodyParser.urlencoded({ limit: '20mb', extended: false }),
].filter(middleware => middleware !== false)
