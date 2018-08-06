const Prometheus = require('prom-client')

const metricsInterval = Prometheus.collectDefaultMetrics()

module.exports = {
  instance: Prometheus,
  metricsInterval,
}
