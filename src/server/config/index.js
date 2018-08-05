const joi = require('joi')

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(['development', 'production'])
      .default('production'),
    PORT: joi.number(),
    LOGGER_ENABLED: joi.boolean().default(true),
    LOGGER_LEVEL: joi
      .string()
      .allow(['trace', 'debug', 'info', 'warn', 'crit', 'fatal'])
      .default('info'),
  })
  .unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const isDev = envVars.NODE_ENV === 'development'

const config = {
  env: envVars.NODE_ENV,
  isDev,
  logger: {
    enabled: envVars.LOGGER_ENABLED,
    level: envVars.LOGGER_LEVEL,
  },
  server: {
    port: envVars.PORT || (isDev ? 3000 : 8080),
  },
}

module.exports = config
