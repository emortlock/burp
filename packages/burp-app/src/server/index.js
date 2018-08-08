const express = require('express')
const next = require('next')

const config = require('./config')
const log = require('./log')

const middleware = require('./middleware')
const rootFiles = require('./utils/rootFiles')

const app = next({ dev: config.isDev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.enable('trust proxy')

  middleware.forEach(mw => {
    server.use(mw)
  })

  rootFiles.forEach(({ file, options }) => {
    server.get(`/${file}`, (req, res) => res.sendFile(file, options))
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(config.server.port, err => {
    if (err) throw err
    log.info(`> Ready on http://localhost:${config.server.port}`)
  })
})
