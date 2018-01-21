const express = require('express')
const bodyParser = require('body-parser')

const validationMiddleware = require('./middleware/validation')
const loggerMiddleware = require('./middleware/logger')

const initRoutes = require('./init/initRoutes')

const app = require('./init/initApp')
const handle = app.getRequestHandler()

module.exports = app.prepare()
  .then(() => {
    const server = express()

    server.use(loggerMiddleware.request)
    server.use(validationMiddleware)
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(loggerMiddleware.body)

    initRoutes(server)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use(loggerMiddleware.response)

    return server
  })
