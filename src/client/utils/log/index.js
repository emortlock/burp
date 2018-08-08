import getConfig from 'next/config'
import { createLogger } from 'winston'

import BrowserConsole from './transport'

const { publicRuntimeConfig } = getConfig()

const level = publicRuntimeConfig.logLevel

const log = createLogger({
  level,
})

log.add(
  new BrowserConsole({
    level,
  }),
)

export default log
