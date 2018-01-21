const logger = require('../logger')

const request = (req, res, next) => {
  logger.info(`Received: ${req.method} ${req.originalUrl}`)
  logger.trace(req.headers)
  next()
}

const body = (req, res, next) => {
  logger.trace({
    body: req.body,
    params: req.params,
    query: req.query,
  })
  next()
}

const response = (req, res, next) => {
  logger.trace(`Hit Route: ${req.route}`)
  logger.info(`Responded: ${res.statusCode}`)
  next()
}

module.exports = {
  request,
  body,
  response
}
