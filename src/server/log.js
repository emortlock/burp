const winston = require('winston')
const config = require('./config')

const transports = []

if (config.logger.enabled) {
  transports.push(
    new winston.transports.Console({
      colorize: config.isDev,
      timestamp: true,
      formatter(options) {
        const message = JSON.stringify({
          '@timestamp': new Date().toISOString(),
          '@version': config.buildVersion,
          env: config.env,
          message: options.message,
          severity: options.level,
        })

        return options.colorize
          ? winston.config.colorize(options.level, message)
          : message
      },
      json: false,
    }),
  )
}

const colors = {
  trace: 'white',
  debug: 'green',
  info: 'blue',
  warn: 'yellow',
  crit: 'red',
  fatal: 'red',
}

const logger = new winston.Logger({
  colors,
  level: config.logger.level,
  levels: {
    fatal: 0,
    crit: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
  transports,
})

winston.addColors(colors)

module.exports = logger
