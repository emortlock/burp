module.exports = (req, res, next) => {
  const contentType = req.get('Content-Type')

  if (req.method === 'POST' && contentType !== 'application/json') {
    return res.status(400).json({
      error: `Content type '${contentType}' is not supported, 'application/json' required`,
    })
  }

  return next()
}
