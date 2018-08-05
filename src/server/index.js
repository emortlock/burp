const path = require('path')
const express = require('express')
const next = require('next')
const mime = require('mime-types')

const config = require('./config')
const log = require('./log')

const redirectURLMiddleware = require('./middleware/redirectURL')

const app = next({ dev: config.isDev })
const handle = app.getRequestHandler()

const rootFiles = [
  { dir: 'static', fileName: 'robots.txt' },
  { dir: '.next', fileName: 'service-worker.js' },
]

app.prepare().then(() => {
  const server = express()

  server.use(redirectURLMiddleware())

  rootFiles.forEach(({ fileName, dir }) => {
    server.get(`/${fileName}`, (req, res) =>
      res.sendFile(fileName, {
        root: path.resolve(__dirname, '../../', dir),
        headers: {
          'Content-Type': `${mime.lookup(fileName)}`,
        },
      }),
    )
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(config.server.port, err => {
    if (err) throw err
    log.info(`> Ready on http://localhost:${config.server.port}`)
  })
})
