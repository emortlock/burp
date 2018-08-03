import Transport from 'winston-transport'

class BrowserConsole extends Transport {
  constructor(opts) {
    super(opts)

    this.name = 'BrowserConsole'
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 4,
    }

    this.methods = {
      error: 'error',
      warn: 'warn',
      info: 'info',
      debug: 'log',
    }

    this.level =
      opts.level &&
      Object.prototype.hasOwnProperty.call(this.levels, opts.level)
        ? opts.level
        : 'info'
  }

  log({ level, message }, method) {
    setImmediate(() => {
      this.emit('logged', method)
    })

    const val = this.levels[level]
    const mappedMethod = this.methods[level]

    if (val <= this.levels[this.level]) {
      // eslint-disable-next-line
      console[mappedMethod](message)
    }
  }
}

export default BrowserConsole
