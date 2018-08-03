const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  isDev,
  showLogs: process.env.LOGGER_ENABLED || isDev,
  logLevel: process.env.LOGGER_LEVEL || 'info',
}
