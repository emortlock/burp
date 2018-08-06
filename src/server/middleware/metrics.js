const metrics = require('../metrics')

const METRICS_URL = '/api/monitor'

module.exports = (req, res, next) => {
  if (req.path === METRICS_URL) {
    res.set('Content-Type', metrics.instance.register.contentType)
    res.end(metrics.instance.register.metrics())
  } else {
    next()
  }
}
