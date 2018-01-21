const health = require('../modules/health').api

const initRoutes = (app) => {
  app.use(health)
}

module.exports = initRoutes
