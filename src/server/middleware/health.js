const HEALTH_URL = '/api/health'

module.exports = (req, res, next) => {
  if (req.path === HEALTH_URL) {
    res.sendStatus(200)
  } else {
    next()
  }
}
